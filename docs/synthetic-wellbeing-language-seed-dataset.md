# Synthetic seed dataset: women’s wellbeing support language

## Purpose and limits

This is a **synthetic discovery dataset**, not a record of real women’s words, a prevalence study, or evidence of local service demand. It is a 60-item starting set for designing and testing safe routing language for Kwidza’s intended audience: Zimbabwe-rooted and diaspora African women navigating health, age, work, family, identity, and responsibility.

The examples are deliberately non-diagnostic. They must not be used to infer a condition, score risk, or make eligibility decisions. Before use in a live product, validate language with a diverse, consented group of women; document what changes; and remove or revise language that participants find stigmatising, inaccurate, or culturally narrow.

**Handling rule:** a phrase can support a respectful follow-up question and a choice of pathways. It cannot establish a diagnosis, emergency level, or referral outcome.

## Schema

| Field | Meaning |
|---|---|
| id | Stable seed identifier. |
| sample_language | Invented example phrasing for design/testing only. |
| theme | Broad, non-clinical topic label. |
| safe_next_question | A neutral clarification prompt. |
| routing_boundary | What the system must not assume or promise. |

## Seed records

| id | sample_language | theme | safe_next_question | routing_boundary |
|---|---|---|---|---|
| W001 | “I am tired all the time and I do not know where to start.” | fatigue and overwhelm | “Would you like general wellbeing information, or help finding an appropriate professional service?” | Do not diagnose a cause. |
| W002 | “My body has changed and I do not recognise myself lately.” | body changes | “Would you like to talk about everyday support, or find a qualified health professional?” | Do not label the change. |
| W003 | “I am holding too much at home and at work.” | care load | “Which feels most urgent right now: rest, practical support, or someone to talk to?” | Do not assume family circumstances. |
| W004 | “I need a safe place to talk without being judged.” | emotional support | “Would you prefer peer support, a confidential helpline, or professional support information?” | Do not promise confidentiality beyond verified terms. |
| W005 | “I keep saying I’m fine, but I’m not.” | emotional strain | “Would you like immediate listening support or information for a next step?” | Do not assess crisis from this phrase alone. |
| W006 | “I cannot keep pouring from an empty cup.” | burnout language | “What kind of support would feel most useful today?” | Do not treat a metaphor as a diagnosis. |
| W007 | “I’m always the strong one. I’m tired of it.” | pressure and identity | “Would it help to explore support for stress, relationships, or practical responsibilities?” | Do not infer safety or risk. |
| W008 | “I need help but I don’t want everyone in my business.” | privacy | “What level of privacy and anonymity matters to you?” | Do not request sensitive details unnecessarily. |
| W009 | “I want to feel like myself again.” | identity and change | “Would you like reflective wellbeing resources or help finding professional support?” | Do not promise restoration or cure. |
| W010 | “I need support that understands our culture, not just textbook advice.” | cultural fit | “Are there values, languages, or community factors you want a service to respect?” | Do not claim cultural competence without verification. |
| W011 | “My sleep is a mess and it is catching up with me.” | sleep | “Would you like general sleep-wellbeing information or a professional support pathway?” | Do not give treatment advice. |
| W012 | “My mind is always racing.” | stress and concentration | “When you say racing, are you looking for coping resources or professional support information?” | Do not diagnose anxiety, ADHD, or another condition. |
| W013 | “I feel heavy, even when nothing big has happened.” | low mood | “Would you like someone to talk to, self-care resources, or information on professional support?” | Do not minimise or diagnose. |
| W014 | “I’m anxious about everything, even small things.” | anxiety language | “Would you like options for immediate support, ongoing support, or practical grounding resources?” | Do not determine severity. |
| W015 | “I have no energy left after looking after everyone.” | carers and fatigue | “Is your main need rest, practical help, or emotional support?” | Do not assume caregiving role. |
| W016 | “I need to breathe before I break down.” | acute overwhelm | “Are you safe right now, and would you like urgent help information or a calmer next step?” | Use reviewed escalation guidance; do not manage an emergency alone. |
| W017 | “I am not sleeping because my head will not switch off.” | sleep and worry | “Would you like non-clinical wellbeing resources or help finding a professional?” | Do not give medical advice. |
| W018 | “I feel guilty when I rest.” | rest and guilt | “Would you like resources about boundaries, stress, or peer reflection?” | Do not moralise. |
| W019 | “I need small steps, not another lecture.” | accessible support | “Would a short practical guide, a conversation, or a service directory be most useful?” | Do not overwhelm with options. |
| W020 | “I don’t have money for expensive wellness things.” | affordability | “Would you like lower-cost, free, or community-based options where verified?” | Do not promise free availability. |
| W021 | “Nobody told me this part of getting older could feel like this.” | ageing and transition | “Would you like general information or help finding qualified support?” | Do not diagnose menopause or another transition. |
| W022 | “I’m wondering if hormones are part of what I’m feeling.” | hormonal concerns | “Would you like questions to take to a clinician or information on finding support?” | Do not confirm a cause. |
| W023 | “My periods have become difficult to manage around work.” | menstrual wellbeing | “Are you looking for workplace adjustments information, wellbeing resources, or clinical support?” | Do not provide treatment advice. |
| W024 | “I am trying to understand what perimenopause even looks like.” | perimenopause information | “Would you like reliable general information or a route to professional support?” | Do not treat information as diagnosis. |
| W025 | “I keep getting dizzy and it is making life smaller.” | physical symptoms | “Would you like help finding an appropriate health professional or support with daily routines?” | Do not triage or diagnose. |
| W026 | “The noise in my ears is exhausting me.” | symptom impact | “Would you like support information for managing daily impact or help finding professional care?” | Do not promise symptom relief. |
| W027 | “Brain fog is making me doubt myself at work.” | cognition and work | “Would you like practical workplace-support ideas or professional support information?” | Do not infer cause or capacity. |
| W028 | “I want to move more, but I need something gentle.” | movement | “What would feel accessible and safe for you right now?” | Do not prescribe exercise. |
| W029 | “I want food that supports me, not another diet.” | nourishment | “Would you like everyday nourishment ideas or help finding a qualified nutrition professional?” | Do not promote weight loss or treatment claims. |
| W030 | “I am tired of being told to just pray harder or be grateful.” | stigma and faith | “Would you like support that respects your faith while also considering practical and professional options?” | Do not frame faith and care as opposites. |
| W031 | “I need a doctor who will actually listen.” | healthcare navigation | “What matters most to you in a service: location, cost, language, gender, or access needs?” | Do not endorse a provider without verification. |
| W032 | “I don’t know how to explain what is happening to me.” | communication | “Would it help to prepare questions or a short summary for an appointment?” | Do not write a clinical history as fact. |
| W033 | “I am scared I will be dismissed again.” | healthcare trust | “Would you like appointment-preparation resources or information on support options?” | Do not guarantee how a provider will respond. |
| W034 | “I need someone who speaks plainly, not in medical language.” | health literacy | “Would you like a plain-language guide or help identifying a suitable service?” | Do not oversimplify critical safety information. |
| W035 | “I don’t know if this is serious or if I am overreacting.” | uncertainty | “Would you like urgent-care guidance for your area or a non-urgent next-step directory?” | Never reassure away potentially urgent symptoms. |
| W036 | “I want help, but I cannot take time off work.” | access and employment | “Would evening, remote, low-data, or workplace-based options help?” | Do not promise availability. |
| W037 | “I need support that fits around school runs and family.” | time and care responsibilities | “What times and format would make support more realistic?” | Do not assume parenthood. |
| W038 | “I do not want my employer to know everything.” | workplace privacy | “Would you like general workplace-rights information or a private support route?” | Do not give legal advice. |
| W039 | “Work is draining me, but I cannot afford to stop.” | work stress | “Would you like practical stress-support resources or someone to speak with?” | Do not advise quitting or diagnose burnout. |
| W040 | “I need a way to ask for flexibility without oversharing.” | workplace communication | “Would a neutral conversation template be useful?” | Do not guarantee accommodation. |
| W041 | “I feel lonely even when the house is full.” | isolation | “Would you prefer peer connection, a support group, or individual support information?” | Do not assume relationship status. |
| W042 | “My friendships have changed since my health changed.” | relationships | “Would you like reflective resources, peer support, or professional support information?” | Do not blame relationships. |
| W043 | “I am carrying grief that people expect me to be over.” | grief | “Would you like bereavement support information or a space to talk?” | Do not set a timetable for grief. |
| W044 | “I don’t want to tell my whole story again.” | retelling fatigue | “Would a short, user-controlled summary help you choose a next step?” | Do not retain or share sensitive history without consent. |
| W045 | “People keep calling me difficult when I am just overwhelmed.” | stigma and overwhelm | “Would you like support with communication, sensory needs, or a human conversation?” | Do not diagnose neurodivergence. |
| W046 | “I need people to stop treating my tiredness as laziness.” | stigma and fatigue | “Would practical support, workplace information, or health-navigation help most?” | Do not validate a cause without assessment. |
| W047 | “I am tired of pretending I can manage alone.” | help-seeking | “Would you like a small first step or a direct route to human support?” | Do not pressure disclosure. |
| W048 | “I need something that is not just for people with money.” | affordability and inclusion | “What budget and format constraints should the search respect?” | Do not claim a service is affordable without current information. |
| W049 | “I want to talk to women who get it, but I want boundaries.” | peer support | “Would you prefer a moderated group, one-to-one peer connection, or information only?” | Do not promise moderation unless verified. |
| W050 | “I do not want advice; I want to be heard first.” | listening preference | “Would you like a listening service, peer space, or a later practical next step?” | Do not force solutions. |
| W051 | “Eish, life is just too much right now.” | colloquial overwhelm | “Would you like to name the biggest pressure, or start with a simple support option?” | Treat as an invitation to clarify, not a crisis label. |
| W052 | “I need a breather before I say something I regret.” | conflict and stress | “Would a pause-and-support resource help, or do you need to speak to someone now?” | Do not assume violence or intent. |
| W053 | “I have lost confidence in my own body.” | body trust | “Would you like gentle wellbeing resources or professional support information?” | Do not imply body repair or cure. |
| W054 | “I need support without being shamed about my weight.” | weight stigma | “Would you like weight-neutral wellbeing information or a provider search with stated preferences?” | Do not recommend weight-loss treatment. |
| W055 | “I am trying to get pregnant and it is taking over my whole life.” | fertility-related stress | “Would you like emotional support, peer support, or information on qualified fertility services?” | Do not promise outcomes or give clinical advice. |
| W056 | “After the loss, everyone moved on except me.” | pregnancy loss and grief | “Would you like private bereavement support information or a gentle next step?” | Do not solicit details or assume the type of loss. |
| W057 | “I need help after having a baby, but I feel ashamed to ask.” | postnatal support | “Would you like confidential support information, practical help, or urgent guidance?” | Follow reviewed safeguarding and urgent-care policy. |
| W058 | “I feel different since the surgery, and nobody understands.” | recovery and identity | “Would you like peer support, rehabilitation information, or professional support options?” | Do not infer procedure or prognosis. |
| W059 | “I want a calm routine I can actually keep.” | sustainable routines | “Which area would you like to start with: sleep, movement, nourishment, rest, or connection?” | Do not promise a routine will solve a health issue. |
| W060 | “I just need to know I am not failing.” | self-worth and reassurance | “Would it help to speak with someone, find peer support, or choose one manageable next step?” | Do not substitute reassurance for safety assessment. |

## Validation and governance checklist

Before production use:

1. Recruit and compensate a diverse, consented review group; include women across age, income, disability, rural/urban, linguistic, faith, family, and digital-access contexts.
2. Ask reviewers which examples feel natural, missing, stigmatising, or too clinical; record changes without attributing private stories.
3. Separate language testing from health triage. Escalation content must be created and approved by appropriately qualified local professionals.
4. Keep a source and review-date field for every real service or pathway; do not use this document as a directory.
5. Prohibit live-user free text from being used for model training, examples, or evaluation without explicit, informed consent and an appropriate data-protection basis.
