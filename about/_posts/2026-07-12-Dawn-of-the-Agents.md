---
title: Dawn of the Agents
short:
  - dota
tags:
  - thing
  - professional
  - agentic
  - ai
  - personal
header:
  teaser: /about/images/thumb/dawn-of-the-agents.png
  image: /about/images/header/dawn-of-the-agents.png
prompt: |
  Look back upon the past 4 months and give a narrative overview of how we have evolved from single prompts to a complete agentic workflow using a self-improving collection of skills and agents, even including our own Python-first agent harness, Yoker and the reusable personal assistant agent. Sketch a timeline of the work we've done on several projects, the evolution we've gone through and how they all fit together. Use the documentation, git history, GitHub issues and PRs, and any other information to reconstruct this timeline.
---

TODO: Write an introduction that bridges from Part 2 ("We are Agent"). In Part 1, I shared the personal shift — from excitement to practice, the website awakening, the emotional core. In Part 2, we went deep into the mechanics — the LLM primer, the workflow properties and components, the security agent story, the TOCTOU catch, the Clevis lesson, the Pokemon evolution from novice to specialized. Now in Part 3, I step back from the technology and the method and consider what this all means. What's this new era that is upon us? What will change? For the better and for the worse? This is the implications article — provocative but responsible, raising questions, not claiming all answers.

## Christophe's Agentic Law #3: Agents aren't Bad, M'kay

{% include thumbs show="agents-are-bad-mkay" %}

Yes, I've also read the objections to agentic workflows and AI in general: on one side these objections focus on the quality, stating it are merely probabilistic models, that only, at best, produce what you train them with, and often even ahllucinate. On top of that, training them now already with their own output will create a degenerative downward spiral of slot,...

Other objections focus on security: giving agents access to tools and data opens doors to vulnerabilities. Malicious actors can use "prompt injection" to trick agents into taking unintended actions, accessing restricted files or leaking private information.

High costs and abuse of resources is another class of objections: multi-step reasoning and tool-call loops consume significant computing power and time. Making thousands of API calls for a simple task can incur wasteful costs. As a consequence these objections also point to the environmental impact of all these huge datacenters that are consume a lot of (natural) resources.

It might seem old fashioned, but there is surely truth in the objection due to cognitive deskilling: relying on agents to do the thinking for us, can cause loss of our own problem-solving skills and memory over time. It has been said about calculators, computers, online search, and now surely applies to agents.

All these objections are valid. I subscribe to each and every one of them. Still, just like with the demise of the calculator, the rise of the machines and the internet, agents and AI in general are here to stay, so we will have to find a reasonable way to coexist.

I have formulated the following rule with respect to the use of AI: when I apply it, I want to at least learn from it. This can take many shapes: for some time now, I'm a happy camper, enjoying the benefits of having Apple Intelligence rewrite parts of my English texts. I'm not a native English speaker/writer, so the quality of my writing varies. However, I have an urge to write good English, using a good amount of English idioms. When I ask Apple Intelligence to rewrite my texts, I always first copy the result and compare it in detail to my own. Next I evaluate which parts of the rewritten text are apparently better. This still relies on my own perception and gut feeling if something sound more/better English to me. If so, I see this as a way learn, and I incorporate it in my original text.

Every change that has happened to my coding projects, over the past 4 months, has every time been a learning experience. Before an agent could introduce a new technology or code change in general, I asked it to explain it to me. In the end it are _my_ code repositories, and I will always remain (at least) responsible for what I put out there. My agents are in the end mere tools, just like an editor, a spelling checker, an online search engine,...

This rule doesn't answer all objections. I think it answers those that I can control, within my personal reach. Today I can't solve the problem of wasteful abuse of resources, yet, as state above, in the not so distant future, my agentic strategy strives towards on-machine inference, which then at least answers a few more.

## The Business Plan Experiment

This culminated in an experiment to create a team of agents to create a business plan for a business idea I happen to have lying around. The experiment started at a meta-level with instructions for the researcher agent to find information about the skills needed to create and review a business plan. In the next phase, these newly created skills were used to again research and create a business plan for the idea provided to them. The resulting plan was then reviewed by the review skill, to produce a really harsh and incredibly critical review. After about 5 iterations of creating, reviewing, updating and again reviewing, the reviewing team (yes team, because the reviewing was done by several agents by that time, each with their own focus), concluded that the business plan was ready for presenting to investors. Upon reading the report myself, I could only conclude that over the course of my entire professional career, I myself would never have been able to write such a well structured, well founded and realistic prospectus, seeing it contain answers to all the remarks my own documents had received on numerous occasions, and more. The level of competence that was created in a matter of hours, the improvements between each iteration of the document, showing that given good input and enough different agents' (re)views, really proves that even simple statistics result in the right knowledge to be applied to about any case and can produce really high-quality results. The fact that every request to an LLM is bias-free, is handled independently, without memories or recollection of any prior response, outside its context, makes that two independent agents are great opposing parties that really bring out the best in each other.

## The Microsoft Bake-Off

I took this even one step further and had several underlying models perform exactly the same reviews in parallel, each time, adding in a second layer of reviewers that reviewed the reviews and again found both flaws and common ground in the reviews, combining these reviews into über reviews. I remember that I wrote once during this process that the well known principle at Microsoft to create multiple completely independent teams to work on the same project, and then pit them against each other and in the end pick the best one to continue, is _so_ well suited for this agentic workflow. Given the speed at which you can now actually have the exact same problem handled by 3, 5, 10 separate instances of agentic workflow teams is an incredible property of this new way of working. It is literally a prime example of large numbers at work, and it is now more affordable than ever and is in implicit guarding opportunity not to be missed.

TODO: Expand this section. Connect the Microsoft bake-off principle to Law #2 (the binomial distribution / Law of Large Numbers from Part 2). The business plan experiment and the multi-model parallel review together demonstrate: (1) agentic workflows aren't limited to coding — they handle complex non-technical work like business planning; (2) independent, bias-free agents make excellent opposing parties; (3) the cost of running 3, 5, or 10 parallel teams is now affordable ($20-$100/month as described in Part 1); (4) this is a guarding opportunity — multiple independent perspectives catch more issues than any single team could. What does this mean for the future of work? When a single person can command a virtual software factory that delivers in hours, what happens to traditional team structures?

## Software 3D Printing Era

TODO: Write this section based on the email MCP server story and the "software 3D printing" paradigm shift. The story: I needed an MCP server to enable agents to send and receive emails. Rather than searching for existing solutions, I had an agent build one from scratch. With that requirement alone, the agent developed a complete MCP server, which then evolved into a modern Python package project (simple-email-gw). This validates the theory that we've entered a software 3D printing era — generating components on demand is now easier and more affordable than searching for existing implementations. Software itself no longer holds inherent value. The new value chain lies in knowing what components are needed and having agents qualitatively create them. This is precisely what architects bring to the table — architects now have a direct line into a virtual software factory that delivers implementations in hours. The cost of discarding many implementations and selecting the best is virtually zero. See the rationale in the preparation document's "The email MCP server" section and the "Software 3D Printing Era" theme analysis.

## Personal Computing

TODO: Write about how agentic coding puts the "Personal" back in "Personal Computing." Need software? Have it built on-demand AND personalized. No licensing costs. Example: capture interaction between Claude Code and Ollama in a few minutes; build a visualizer in a few more; use it. The 3D printing feeling all over again: want software, just ask for it. Adoption of existing manual projects takes time: getting to know local ways, refactoring, filling gaps (testing, documentation, code quality — every corner you manually cut). But now even projects that were collecting dust are being brought up to modern standards. PyPI-template served me well for years; now just asking the agent is faster and results are better (uv, simplified pyproject setup). Hosted Flasks was replaced by Docker + Nginx learned in minutes. Projects happily abandoned because the agents found better, more standard solutions.

## The Matrix is NOW

TODO: Write the provocative section about the Matrix metaphor. Considering the fact that we, humans, are in a harness, being urged to keep the agents running. We're already in our pods, fueling the agentic evolution. The Matrix is now, already building itself. But unlike the dystopian vision, this is a partnership — we're not batteries, we're architects. The question is: are we aware of our role? Are we steering, or are we being steamed? The balance described in Part 1 (the weekly cadence, the fast/slow rhythm) is the conscious choice to remain in the driver's seat. The danger of becoming the horse in front of the agents' carriage is real — but so is the opportunity of becoming the architect of your own enterprise.

## Pokemon Stage 4: The Master Trainer

TODO: Write the final stage of the Pokemon analogy. I'm now the Elite Four trainer with a full team of specialized agents. I orchestrate specialized agents, deploy the right ones for each task, understand each agent's capabilities, and trust them to execute. Minimal investment needed now — they remember from context, apply patterns autonomously. The investment has paid off. This is where the Pokemon progression culminates: Stage 1 (novice, Part 1) -> Stage 2 (evolving, Part 2) -> Stage 3 (specialized, Part 2) -> Stage 4 (Master Trainer, Part 3). The key difference from human interns reaches its full expression: human interns eventually leave and take knowledge with them. Agents stay, share knowledge across the ENTIRE collective, every lesson learned improves ALL future sessions. Investment compounds, doesn't walk out the door. The capable intern paradox: this is where the Pokemon analogy becomes most real.

## The Cost of NOT Investing

TODO: Write this section about what happens when someone doesn't invest in their agent collective. What does a session look like WITHOUT invested skills? With invested skills: the functional-analyst already knows your project structure, preferences, and standards; it applies patterns from 100+ previous sessions; the developer follows established conventions; the code reviewer knows what you care about; lessons-learned captures everything for next time. Without invested skills: every session starts from zero, every decision requires fresh context, no pattern memory, no preference knowledge, no lesson retention. The difference is compound interest: Session 1 is slower with investment, but Session 100 is exponentially faster. Without investment, Session 100 is the same speed as Session 1 — perpetually slow. Why you can't take others' skills: you don't know who's working for you, their beliefs and boundaries, you haven't built trust through shared experience. Taking someone else's skills is like hiring a team you never interviewed. The accessibility argument cuts both ways: if you don't want to invest, you set yourself up for being the next horror story. And if you don't want to invest, you can always hire someone who has — but that's just outsourcing the investment. See the preparation document's "D. The Cost of NOT Investing" section for detailed raw material.

## Cognitive Deskilling

TODO: Expand on the cognitive deskilling objection mentioned in Law #3. It might seem old fashioned, but there is surely truth in the objection: relying on agents to do the thinking for us can cause loss of our own problem-solving skills and memory over time. It has been said about calculators, computers, online search, and now surely applies to agents. But the "learn from it" rule is a countermeasure: when I apply AI, I want to at least learn from it. Every code change is a learning experience. I ask agents to explain new technologies before allowing them. This rule doesn't answer all objections, but it answers those within my personal control. Explore the tension: agents make us more capable, but do they make us less skilled? The answer depends on whether we actively learn from the collaboration or passively consume it. The architect's role evolves: less execution, more direction — but the direction requires deeper understanding, not less.

## Famous Last Words

TODO: Write the final section — the response to the original prompt, 4 months through the eyes of an agent. This was postponed from Part 1 (marked as "[-] Letting the agent introduce itself: narrative, functionality-focused, benefit-for-me-focused -> postponed to later part, maybe 'final last words' given to the LLM as a wrap up and show case"). This is the moment where the agent gets to speak for itself — a narrative from the agent's perspective, describing what it experienced over the past 4 months, what it learned, how it evolved. This serves as both a showcase of agentic capability and a fitting conclusion to the series. Underlying models expose personality: letting an agent come up with its own name shows it considers. The Eira creation story (from Part 1's emotional core) connects here — personality emerges through interaction, not programming.

## Wrapping Up

TODO: Write the series wrap-up. Three parts: the personal shift (Part 1), the method (Part 2), the implications (Part 3). The thread that runs through all of them: collaboration, working together, working hand in hand, human and agent. We need to work together. We should not see agents as something new, but as the new virtual coworker, the new intern. We shouldn't just fire and neglect them. If we treat them like we (should) do with other humans — tutor them, give them guardrails, set clear boundaries, take personal responsibility to monitor them — we can see them grow and flourish. The future is now. Are you on board?

---

TODO
* Add section headings and sub-headings throughout for readability
* Introduce images/videos, especially for the software 3D printing, Matrix, and Master Trainer sections
* Ensure all new images have webp versions
* Cross-reference with Part 1 and Part 2 for consistency
* The Pokemon analogy should thread through all three parts — verify Stage 1 (Part 1) -> Stage 2-3 (Part 2) -> Stage 4 (Part 3) progression is coherent
* The "learn from it" rule from Law #3 connects to the cognitive deskilling section — ensure the connection is explicit
* The business plan experiment and Microsoft bake-off connect to Law #2 from Part 2 — ensure cross-references are clear
