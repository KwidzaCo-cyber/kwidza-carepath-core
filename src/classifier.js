"use strict";

/**
 * Dependency-free, local TF-IDF/cosine prototype.
 * It makes no network calls, stores no user input, and is not a diagnostic,
 * triage or crisis-detection system.
 */
function normalise(value) {
  return String(value || "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value) {
  return normalise(value).split(" ").filter((token) => token.length > 1);
}

function counts(tokenList) {
  return tokenList.reduce((result, token) => {
    result.set(token, (result.get(token) || 0) + 1);
    return result;
  }, new Map());
}

function dot(left, right) {
  let total = 0;
  for (const [term, value] of left) total += value * (right.get(term) || 0);
  return total;
}

function magnitude(vector) {
  return Math.sqrt(dot(vector, vector));
}

class CarePathRouter {
  constructor(dataset) {
    const records = Array.isArray(dataset) ? dataset : dataset && dataset.records;
    if (!Array.isArray(records) || records.length === 0) {
      throw new Error("CarePathRouter needs a non-empty records array.");
    }

    this.records = records.filter((record) =>
      record && record.colloquial_input && record.category && record.action_path
    );
    this.documentFrequency = new Map();

    for (const record of this.records) {
      for (const term of new Set(tokens(record.colloquial_input))) {
        this.documentFrequency.set(term, (this.documentFrequency.get(term) || 0) + 1);
      }
    }

    this.vectors = this.records.map((record) => ({
      record,
      vector: this.toTfIdf(tokens(record.colloquial_input)),
    }));
  }

  toTfIdf(tokenList) {
    const termCounts = counts(tokenList);
    const totalTerms = tokenList.length || 1;
    const vector = new Map();

    for (const [term, count] of termCounts) {
      const frequency = this.documentFrequency.get(term) || 0;
      const idf = Math.log((this.records.length + 1) / (frequency + 1)) + 1;
      vector.set(term, (count / totalTerms) * idf);
    }
    return vector;
  }

  route(input, options = {}) {
    const inputTokens = tokens(input);
    const language = options.language;

    if (inputTokens.length === 0) {
      return this.needsClarification("Please share a few words about what information or support you are looking for.");
    }

    const inputVector = this.toTfIdf(inputTokens);
    const candidates = this.vectors
      .filter(({ record }) => !language || record.language === language)
      .map(({ record, vector }) => {
        const divisor = magnitude(inputVector) * magnitude(vector);
        const score = divisor === 0 ? 0 : dot(inputVector, vector) / divisor;
        const matchedTerms = [...inputVector.keys()].filter((term) => vector.has(term));
        return { record, score, matchedTerms };
      })
      .sort((a, b) => b.score - a.score);

    const best = candidates[0];
    if (!best || best.score === 0) {
      return this.needsClarification("I could not match that to a seed example. Choose a broad wellbeing topic or use different words.");
    }

    return {
      routing_status: "suggested_not_clinical",
      category: best.record.category,
      action_path: best.record.action_path,
      confidence: "low",
      prototype_score: Number(best.score.toFixed(3)),
      matched_terms: best.matchedTerms,
      note: "This is a local prototype suggestion based on synthetic seed examples. It does not diagnose, assess urgency or replace professional support.",
    };
  }

  needsClarification(message) {
    return {
      routing_status: "needs_clarification",
      confidence: "low",
      message,
      note: "This prototype does not diagnose, assess urgency or replace professional support.",
    };
  }
}

module.exports = { CarePathRouter, normalise, tokens };
