# Kwidza CarePath Core

A proposed, privacy-conscious NLP-assisted routing foundation for helping people describe a non-emergency need in their own words and find the next appropriate support pathway.

> **Status:** early concept and technical foundation. CarePath is not a clinical service, diagnostic tool, crisis service, or substitute for professional judgement.

## The problem

People seeking support often start with an unstructured question: “I need someone to talk to,” “my child is struggling at school,” or “where can I find accessible support?” The path from that question to a useful next step can be fragmented, confusing, and shaped by information gaps, language, cost, location, accessibility, and trust.

A keyword-only directory can miss meaning. A general chatbot can sound confident when it should pause, ask a clarifying question, or hand the decision to a person. CarePath is intended to explore a safer middle ground: structured routing assistance that preserves agency and makes uncertainty visible.

## Proposed solution

CarePath uses natural-language processing to convert a user’s stated need into a small, explainable set of routing options. The system should:

1. accept a plain-language request;
2. identify the request type, stated preferences, access needs, and location only when voluntarily provided;
3. ask a minimal clarifying question when the information is insufficient;
4. match the request against a curated, reviewed pathway catalogue;
5. present options with plain-language reasons and a confidence/uncertainty signal; and
6. route ambiguous, high-risk, or unsupported requests to a human or clearly signpost appropriate urgent help.

## Design principles

- **Human-led:** NLP assists routing; it does not make clinical, legal, safeguarding, eligibility, or diagnostic decisions.
- **Consent and minimisation:** collect only information needed for the immediate routing task. Avoid using sensitive free text for model training without explicit, documented consent.
- **Explainable:** every recommendation should state why it appeared, what information it used, and what it does not know.
- **Accessible by default:** use clear language, low-bandwidth-friendly flows, and formats that can support different communication needs.
- **Locally grounded:** pathway information must be reviewed for the community, service availability, cost, referral requirements, and accessibility it claims to represent.
- **Equitable:** never treat disability, neurodivergence, language, income, gender, location, or digital access as a reason to lower the quality of guidance.

## Core routing flow

```text
User request
  → safety and scope check
  → intent + preference extraction
  → clarify only when necessary
  → curated pathway retrieval and eligibility checks
  → ranked, explainable options
  → user choice, human handoff, or urgent signposting
```

## Safety boundaries

CarePath must not:

- diagnose, triage medical emergencies, or provide treatment advice;
- promise that a service is available, suitable, affordable, or accepting referrals without current verification;
- infer protected characteristics or vulnerability from text when they have not been volunteered;
- make decisions that determine access to care, benefits, education, housing, employment, or safeguarding action;
- replace an emergency response or a qualified professional.

Any deployment should include reviewed escalation rules, human oversight, a mechanism for correcting pathways, audit logs designed with privacy in mind, and routine testing for harmful routing patterns.

## Early technical direction

The core can remain model-agnostic. A first implementation may include:

- a versioned pathway catalogue with provenance and review dates;
- a constrained intent and preference schema;
- retrieval with metadata filters before generative summarisation;
- policy-based safety checks before and after routing;
- explanation records for each suggested pathway; and
- evaluation with consented, de-identified test scenarios plus community review.

## What success would look like

Success is not “more AI.” It is a person leaving with clearer options, a better understanding of the next step, and a reliable way to ask for human help when the system is uncertain.

## Contributing

This repository begins as a concept foundation. Contributions should prioritise safety, accessibility, data protection, lived experience, and evidence that a listed pathway is current and appropriate. No real-user sensitive data should be added to issues, examples, or test fixtures.
