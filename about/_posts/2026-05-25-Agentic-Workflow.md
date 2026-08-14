---
title: "My Agentic Workflow"
tags:
  - thing
  - personal
  - agentic
header:
  image: /about/images/header/coding-agent.png
  teaser: /about/images/thumb/coding-agent.png
---

In early 2026, [I took some time off](Holiday-Mode) to embark on an agentic journey. This journey quickly transformed into a fundamental new way of working: an agentic workflow emerged from early experiments and evolved into a complete virtual team. Given the significant impact this approach has on myself and others who read or interact with my work, I've created this page to provide a concise overview of that workflow. Whenever it's relevant, I'll include a link to this page, which is likely the reason you are reading this right now.

## The Short Version

I employ agents as capable collaborators who execute my ideas more swiftly than I can type them. They possess an extensive knowledge base and can query Google faster than I can. Perhaps most importantly, they never tire. I can continuously request modifications, alternatives and one-off experiments. They keep presenting me with options to choose from.

While I grant them significant autonomy, I've implemented a growing set of guardrails, both technical and in person. I always review the results and, if they differ from my preferred approach, I demand clarifications and engage in discussions until we reach a consensus. The final product still bears my name and reflects my endorsement. This often means I stand corrected and have gained new knowledge. One crucial principle has been the key to this success story: letting go of many of my old, dogmatic beliefs.

## What Makes It an Agentic Workflow

An LLM is a probability generator. The outcome will always be a chance. A well-designed workflow with multiple perspectives, review gates, and governance produces dependable results. The workflow, not the agent, is what makes the difference. The key game-changer that distinguishes an agentic workflow from vibe coding is that the human remains fully in control. There is no "human vs agent", only "human + agent".

My workflow rests on three laws:

1. **Clearly distinguish between structured and unstructured workloads**: Not every task that can be accomplished by an agent should be. Leave the unstructured problems for agents and use structured solutions for everything else.
2. **Given enough agents, agentic workflows become reliable**: Multiple agents reviewing each other's work minimizes the risk of overlooking details and hallucinations. With enough reviewers, all issues are shallow.
3. **Learning must be mutual**: Whenever I use AI, I want to learn from it. Agents amplify your expertise, standards, and processes. Garbage in leads to garbage out.

The workflow itself consists of four components:

- **Research**: Gather fresh information before taking action. Don't rely solely on pre-trained knowledge.
- **Multiple Perspectives**: Before development, multiple agents analyze from different angles (functional, API, security, UX). After development, the same multi-perspective review happens. Issues are raised and resolved without human intervention.
- **Human Gatekeeper**: The human grants final approval before merging. The pull request is the interface. You are the workflow. Don't withdraw from it.
- **Lessons Learned**: Agents review their own performance and propose changes to their definitions. Every mistake becomes codified, every success becomes a pattern. The investment compounds.

{% include image name="agentic-workflow" kind="png" bottom="25px" %}

## Grow Your Own Team

I view agents as very capable interns who, while still learning my preferred behaviors, are eager to contribute. I assume the role of their mentor, assigning tasks, reviewing work, and providing constructive feedback. I then encourage them to apply these lessons learned and refine their agent definitions and skills.

This guarantees that each agent and skill undergoes a genuine organic evolution, mirroring my distinct working style. I don't rely on pre-existing agents or skills from the internet. I cultivate and train my own. You simply can't take someone else's skills and agents and expect the same results. It's like hiring a team you never interviewed. Debugging someone else's code is hard. Try debugging someone else's agents and skills.

## Transparency

Whenever I assign agents to work, I maintain complete transparency. {% include external link="https://github.com/christophevg/c3" title="My agents and their skills" %} are open-source, and every commit on GitHub is clearly attributed. Additionally, I've created a {% include external link="https://github.com/christophevg-agent" title="separate account" %} specifically for the agents to commit and push their work. My agents and I also utilize feature branches and pull requests to enable me to validate their work with a publicly accessible trail.

Another example: On this website, unless explicitly stated, all content is original. When AI assistance is involved, it is clearly indicated, including the "prompt" used to generate it. See the page on [how I use a coding agent and LLM for this site](Coding-Agent) for more details.

## The Full Story

This page captures the essence. The full narrative, from the first argument with an agent over spaces to a self-hosting agent harness running its own collective, is told in three articles:

1. [Hello Agents](Hello-Agents): The initial encounter and impact. The first law.
2. [We are Agent](We-are-Agent): The mechanics: components, governance, and guardrails. The second law.
3. [Dawn of the Agents](Dawn-of-the-Agents): The broader implications for the future of work. The third law.

---

*Have questions about how I work with AI? Feel free to reach out. I'm always happy to discuss the intersection of human creativity and machine assistance.*
