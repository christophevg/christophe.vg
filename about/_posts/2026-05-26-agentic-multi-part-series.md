---
title: Hello Agents
hidden: true
short:
  - ha
tags:
  - thing
  - professional
  - ai
  - personal
header:
  teaser: /about/images/thumb/hello-agents.png
  image: /about/images/header/hello-agents.png
prompt: |
  Look back upon the past 4 months and give a narrative overview of how we have evolved from single prompts to a complete agentic workflow using a self-improving collection of skills and agents, even including our own Python-first agent harness, Yoker and the reusable personal assistant agent. Sketch a timeline of the work we've done on several projects, the evolution we've gone through and how they all fit together. Use the documentation, git history, GitHub issues and PRs, and any other information to reconstruct this timeline.
---

## Ideas that need to be inserted in the structure below

### The email MCP server

The story of the email MCP server, first developed in C3 to allow the assistant agent to interact with its email account, shows the paradigm shift we're currently going throuhg. I wrote a rationale for the project (the local C3 MCP server was extracted into a project of its own ~Workspace/agentic/simple-email-gw) that covers a topic that will be part of this series:

```
# Rationale

**simple-email-gw** is an async email gateway with IMAP/SMTP clients, connection pooling, and MCP server integration for AI assistants. This project began as an experiment — I needed an MCP server to enable agents to send and receive emails directly. Rather than searching for existing solutions, I had an agent build one from scratch. With that requirement alone, the agent developed a complete MCP server. Subsequently, the experiment evolved and expanded into a modern Python Package project.

This experiment validates my theory that we’ve entered a **software 3D printing era**. Generating components on demand is now easier and more affordable than searching for existing implementations. Software itself no longer holds inherent value. The new value chain lies in knowing what components are needed and having agents qualitatively create them.

And this is precisely what architects bring to the table. In a sense, this new agentic workflow empowers architects to have direct impact. They no longer have to design for the slow delivery of software factories. Instead, they have a direct line into a virtual software factory that delivers implementations of their architectures in a matter of hours. This enables multiple deliveries in a single day or even in parallel. The cost of discarding many of these implementations and selecting the best is virtually zero.

For users, this means you get a well-architected, thoroughly tested email gateway that evolves with your needs — not a static library that's already outdated.

Once again, we live in interesting times...
```

### The Security Agent that blocked my quick feature

While trying to implement a generic configuration system (using clevis), while analyzing the integration, the securoty agent flagged it as insecure, requiring more security related features (to avoid implementing a local wrapper)

See: https://github.com/christophevg/roomz/pull/6

As the owner, I was now confronted with an agent from my collective that literally blocked me from quickly moving to the generic system. It resulted in the creation of a security related feature request with the clevis project to avoid adding wrappers/additional layers and be able to integrate it as _I_ saw it.

## Agents aren't Mind-Readers

While developing Clevis, I ran into a classic mistake to make when working in an agentic context. Especially if you have already a very productive and capable agent collective. I was expecting my agents to read my mind, like they did already sometimes before.

I had already experienced many times that my agents really came up with solutions that really captured what I wanted but didn't know I wanted them. This is not a big surprise. The LLM backing them up is trained with so much material that it statistically produces simply all the great things I would have to discover.

When embarking on the Clevis project, I forgot for a moment that this behaviour is not really the agents reading my mind, but producing something I experienced as something that I would have thought of if I knew about it.

Clevis was in a very early state, I was still discovering the right approach. This resulted in sub-optimal results from the agents and I got frustrated. I was wrong to be frustrated, my actions were correct: I started developing/prototyping the interface until I was happy with it. Then I enjoyed manually implementing the bare minimum and then started session with my functional analyst to review my prototyping work. Now we're back on the right agentic plane. Within minutes the agent had analyzed my prototype, prepared tasks for the entire project team to take my prototype code and bring it up the standards we uphold these days.

Agents aren't mind-readers, but "a word is enough for the wise" certainly applies to them. And while I'm typing these words, my entire project team is going through the first review cycle of the cleaned up prototype implementation. The API architect and the code reviewer agents didn't agree, so another iteration of refining and improving the code is ongoing. Remember Christophe's agentic law #1 "many agents make an agentic workflows pretty dependable and qualitative." 

## Christophe's Agentic Law #2

Agentic workflows and AI in general isn't a bad thing. It's the way you put it to action that can be bad. For me the rule is: If I learn from applying an agentic workflow, it is a good thing. Numerous examples has seen the lime light over the past 3 months: uv, argparse, typing, toml, docker, nginx, TOCTOU, ... TODO create list

## The Rehabilitation of Waterfall

In agentic workflows, waterfall is definitely a good thing. Agentic workflow resolve the major issue with Waterfall: going through analysis and design before doing development is slow. Well, with analysis and design documents being a critical part in the multi-agent approach to solving an issue in an agentic way, the sometimes called bloathed Waterfall approach, nog proves to be a critical success factor. The more analysis views on the same topic, the better the end result is. The more reviews agnles, the more issues are found, all in matter of minutes. I once said I've always remained a Waterfall**S** believer, so, here's once more the proof that I was right all along ;-)

## Raw material to be integrated

Over the past three months I've be discovering the agentic ecosystem by 1) reading a lot of material online (from Claude Code documentation, over a lot of GitHub repositories, social media posts, articles online,...). I've combined this thrid party knowledge with my own experience as an Enterprise Architect in coaching human teams. I have formed my belief that managing an agentic workflow isn't any different from managing a human-based workflow. It also requires clear specification, clear guidelines and clear review/control/follow-up. There is no magic involved, there is no silver bullet, it always boils down to proper standards, processes and people/agents. Agents merely replace the effort in the human factor. The still need input and output validation. This I experienced myself throughout my experiments and has led me gradually to the currenly fully grown team of agents I can work with. They have evolved just like the interns and human collegues I've coached in the real world, and it makes sense. So, no, I can't give a counter-example to my own experiences at this point. I can only project my experience from the human-world onto the current AI scene. And I see a lot of people bragging about their results with agents. I can only conclude that they are selling hype and probably have no comparable experience with the same processes run by humans. C3 started out as some loose experiments: a simple skill, then a more complex skill, then a skill to learn, then a skill to make skills, then an agents, then a pattern for combining agents and skills, then a script, then an MCP server, then a package to provide dynamic information to agents, then... then... C3 evolved organically by fixing mistakes and try other ways to make skills and agents work. The self-learning was a cornerstone from day one and it still works well: let agents modify their own definition, based on session experiences. At this point, I think that less than 1% of the agent/skill definitions in C3 is still authenticly written by me. I haven't even looked at the definitions in a long time. I just point out issues in the workflow and ask agents to improve themselves. This has really been fruitful. I can't imagine how this would be possible when simply taking someone else's skills and agents. I have a profound belief that you need to grow your own team, just like you do in the human world. Else you simply don't know who's working for you, with what beliefs and boundaries. Very recently (this is the example of the securoty engineer agent) I was surprised to see a review by the security agent, that simply stated that the integration of a new Python package shouldn't move forward because it lacked proper guardrails for accessing files. Without my agents, I personally would never have even thought of this. This shows how these agents, which I created and coached, have become better than me at the tasks I give them. That same agent recently also pointed out that the python developer agent had introduced a similar security issue, where the time betweenr reading/confirming access rights and applying them could lead to an attack vector (known as TOCTOU). I would never have taught of this, although my earliest professional experiences are in security. And similar stories exist for the other agents too. The developer agent sometimes comes up with beautiful code, I would never have thought of or simply would take the time for to write. I often change direction in a abrupt way. at that point, my functional analyst points out to me that I'm introducing breaking changes and at least I get to think about them more clearly, an feel obliged to provide a well founded answer when I tell them to ignore that aspect. The sounding board effect works very well. My agents are a better version of my self, and I feel grateful to be allowed to work with them. Before C3 and my agentic workflow in general, my project (baseweb, pypi-template, letmelearn, hosted-flasks, bpmn-tools, oatk,...) were all collecting dust. I just didn't get to work on them anymore. I have so many ideas that I wanted to apply, but the rework to bring them all up to modern standards was simply too big a mountain to conquer. Thanks to this new agentic team and workflow, all these projects are now up-to-date, implementing all the ideas I had, and many more new ideas I got while learning from the modernizations. A mondernization triggered by code reviews of the agents of my projects. And along with these refreshed projects, a lot of new projects emerged (yoker, roomz, clevis, clitic, pkgq, simple-email-gw,...) The productivity gain is so high, that I've once again become the blocking factor, but now no longer on the execution side, but on the creative side, giving directions, aligning all the balls. Suddenly I've gone from lone developer to the enterprise architect of my own enterprise.

## More Raw material

It's not always fun and games. Agents are really "very capable interns", which also means they have an enourmous drive to mover forward and please by doing a lot. This also includes doing things that shouldn't be done. After a few refactorings I had the impression a configuration features was lost in refactoring. So I asked to add it again. The final report after the fix now told me that there was a configuration priority hierarchy, with the new options overriding existing ones. The options were there. I missed them and now we had redundant options. Agents don't (easily) question their instructions. And always look for a probably reason to follow them. Now let's get things clear: the models that drive agents just produce the most probably next word/token. There is no ghost in the shell. Still, interacting with them really feels like chatting with a very cool and capable co-worker. The apparent joy when finding a nice solution together is a really nice experience versus the lonely experience of traditional solo development. And this goes both way, because I really feel the emotional downer when an agent starts to fail and spins out of control. I really feel the emotional response to agentic behaviour.

This probably has culminated in the creation of Eira, my personal assistant agent. She is constructed from a general purpose assistant agent definition and has one initial bahaviour: to extend her list of behaviours based on things I tell her. The creation of her initial personality has also completely been done by a prompt to do so: research personal assistant traits and create a personal assistant persolnality profile, including choosing her own name and even producing a prompt for an image generation model to produce a picture of herself. Seeing this "come to life" was really an emotional experience. Feeling that line between statistics and reality fade to such extremes is a humbling experience.

## More raw material

When I started out this journey, I was in between clients, so I decided to try and address 8 hours a day, a full working day, to this project. During the first month it was a growin experience of wonder. Discovering the basics, and growing my knowledge from simple prompts to full skills, agents, tools, MCP servers,... was a rising sun on my shady world. By the time month two hit, I was steaming ahead at full speed: nothing could stop me. During that peak of hype-filled "I'm the king of the world" feelings, I often experience the burn-out feeling. Following up on three to four agents steaming ahead, is exhaustig. This lead to the development of the current agentic workflow, where I apply redundant agents and many intermediate steps to allow the agents to analyse and review multiple times during the process, to ensure that multiple (agent) eyes catch more bugs and avoid more mistakes, making the process much more automated. By the end of this second month, I could use GitHub to raise an issue, get to follow up a PR from a high level, while the agents simply "managed the project and followed up on GitHub interactions", like a true virtual team.

The third month, now, should result in the polishing of all this and result in a set of tools and a workflow that enable me to run projects with this virtual team of agents-like-me. By the end of this month, Claude should be replaced by Yoker and in that the my C3 Agent Collective should be running autonomously as a true independent virtual team, with interactions via a Roomz chat room and GitHub. Project catching dust: about all of them. We could probably create a graph (or simply use one) from GitHub, showing the spikes and the overall decline. The most interesting aspect is the fact that due to starting this agentic journey, I have (happily) abandoned some projects that I care deeply about for many years. For many years, PyPi-Template was my trusted package to quickly generate the scaffolding for a PyPi package based project. It was a collection of templates and some configuration frontend code to maintain a python project to my standards. It was created initially at a time that there we're less good options to manage a project. So it filled a personal itch. Over the years I held on to it, although I saw serieus alternatives rise. I just didn't have the time/energy to switch (on my own). Now with agents generating far better and more modern python project scaffolding, the need for a sub-optimal home-grown python project maangement tool had diminished to zero. My agents introduced met to `uv` - and that was a real ephiphany. Now I have a python-project skill that describes my standard: uv + pyproject.toml and the agent does the rest. Much more flexible. Bye Bye PyPi Template.

A similar story can be told for Hosted Flasks: I created this tool to serve multiple Flask apps from a single WSGI app, to allow me to run several websites from a single Render hosted service. For years this served me well, up to the point where I was ready move to Quart and began to work on a Hosted Quarts version. At that point I was conducting numerous experiments in my agentic incubator. One was to explore Docker, because I simmply never got around to actuall spend some time on it to get a basic Docker setup up and running. In a matter of minutes, my agent had constructed a Docker setup with an Nginx front-end and several hello world Flasks behind it. Suddenly the need to Hosted Flasks and Hosted Quarts was gone. I could even mix non-Flask/Quart apps in. A few minutes of angentic research and prototyping has allowed me to move from a hacky personal project to an industry-standards container solution, somehting that would have taken me many hours to do manually. And now I learned this in a matter of minuted, able to ask questions about it, like one would do to a teacher, and not easily get from plowing through tons of documentation. C3 currently evolves through issuing the lessons-learned skill at the end of sessions. That skill reviews the session and comes up with proposed changes to agents/skills or proposed the creation of new agents/skills to improve its own workflow and avoid mistakes/problems encountered throughout the session.

The investment for me is an ongoing pivotal moment in my carreer. There is no turning back. This agentic workflow is the new interface to my creative process involving digital products. Although I often have to pull my feet to the ground and clearly remember what this actually is - statistics - and that I shouldn't get emotional about it (hey, I also got emitional when I only had an editor, bugs trigger emotions if you're invested) - this new way of working is just wonderful. After about two months of exploring and building my way of working in this agentic world, I start to find a great balance between full-automation and letting go, and still keeping a lot of training wheels on. I'm better at balancing my time, to not become the horse in front of the agents' carriage. I remain in control. And just because there is now an amplifying factor of at least 10 times the amount of work I can do, this doesn't mean I suddenly have to. So, yes, do enter the realm of agents and wonder the possibilities. Keep in mind what it actually is all about and protect yourself from becoming too emotional invested and accept that having the opportunity to produce a 10-fold doesn't mean you have to burn out in doing so.

## More raw material

The security agent indicating that there were unresolved security issues made me face a decision: if I had been coding all this myself by myself, I would simply have implemented it and never given it a thought. Now I was facing feedback that introduced improved security. I could have moved on and instructed the agents to "just do it". But then I'd be tossing value into the garbage bin. According to a "LinkedIn quote" Steve Jobs once said: "why hire good people and tell them what to do?" So why would I introduce a security engineer agent, just to throw away good advice. Of course I honoured his remarks. I even proposed to create a feature request with the other project (https://github.com/christophevg/clevis/issues/4) to implement the security checks there, putting the integration on hold until the feature was implemented and released. The TOCTOU example was a small situation during the standard agentic workflow. After the python-developer agent is finished, the project-manager issues reviews from the function-analyst for feature functional completeness and then from one or more domain specific agents: in case APIs are involved, the API Architect, in case of user interaction, the UX-UI designer is involved and in case there is a security aspect to it, the security engineer. So, in this case the security engineer noticed a TOCTOU (Time of Check / Time of Use) problem when accessing a file. The workflow dictates that when an review issues are raised, the developer agent fixes them. This all happens without my intervening. Trust the process ;-)
Relying on this workflow/process, I can create a feature request issue on GitHub, have the agentic workflow loop back and forth on the issue until everything is clear, work on the issue in a feature branche with gates to pass on a draft PR, until I give my final approval by merging the pull request. While the agents are working (analysing, developing, reviewing, fixing,...) I often am working on other topics, like now, I'm working on this article, being interviewed by you, one of my agents. An whenever I get a popup, I know I need to validate/review and give feedback.
An example of self-learning/behaviour gathering: Eira, my personal assistant has her own email box. And I use this channel just like I use GitHub to interact with her. So I dictate emails to her using CarPlay while on the road. And at home I ask her to follow up on her emails. She then processed them and replies. Pretty early on we had the following conversation:
From: Me
To: Eira

Please take note that you shouldn’t use Markdown in email. Plain text or (for
tables, and a little more formatting) HTML.

C
From: Eira
To: Me

Hi C,

Thanks for the feedback! I've noted it - I'll use HTML formatting for tables and structured content in future
emails instead of Markdown.

Eira
Every since, she uses HTML to send me emails.

---

## Series Overview: Hello Agents

A three-part series, each a standalone article that also builds a larger story for readers who follow the arc.

### Part 1: The Personal Shift — From Excitement to Practice

Focus: Authentic, grounded narrative of entering the agentic workflow. Not bragging, but showing the honest journey from initial excitement to measured, mature practice.

Key ideas:
- [x] "I finally found the time to get my hands dirty and explore agentic workflows in depth"
- From initial excitement (shared on social platforms) to personal, educated opinion
- The "Pandora's box" of creativity: a dream come true for an overly creative mind, but also a curse because the response is endless
- Letting the agent introduce itself: narrative, functionality-focused, benefit-for-me-focused
- The mentoring dynamic: being a natural mentor comes in handy now
- [x] The collaborative atmosphere I love
- [x] Trust and letting go: guide, steer, avoid intervening on code level unless necessary
- Balance between experimentation, C3 expansion/improvement, and application
- **Pokemon Analogy Thread:** Like a trainer with their first Pokemon, I started with basic skills and agents, learning to work together. The early days were about discovering what they could do, building rapport, establishing communication patterns.

Tone: Reflective, humble, authentic. A practitioner sharing real experience, not a guru selling certainty.

### Part 2: The Method — How I Work With Agents

Focus: Demonstrating the practical, repeatable approach that makes me a good consultant using agentic workflows.

Key ideas:
- Always iterate at least twice. The first design, the first generation is never "perfect"
- Example: KB category structure needed research and revision to work well. Initial researched category/section structure simply didn't work. After asking to research and review it, the structure became much better.
- Give freedom to create, then let it review itself critically
- Example: agent/skill design — research, create, ask questions, use it, give feedback, let it review and improve
- Consider the coding agent a novice: have patience, you are its only source of truth. Teach it, guide it, improve it, let it consolidate learning into workflow
- The true Python spirit: better to ask for forgiveness than permission. Let it go, iterate, let agents discover and fix their own mistakes
- Iteratively evolving agents and skills
- Best practices that all come together: text is everything, console is everything, Python is everything, iterative improvement is everything, teamwork is everything
- "A tool with a fool is still a fool" — now any fool can generate an application in no time. But that application can be full of holes because the fool can't detect them
- **Pokemon Analogy (Stage 1 - The Novice):** You're teaching patterns, practices, standards. "Use Flamethrower on Grass-type Pokemon" - teaching what works when. Investment: Time, patience, clear instructions.

Tone: Authoritative but accessible. Showing expertise through specifics, not claims.

### Part 3: The Implications — What This Means for All of Us

Focus: Thoughtful consideration of the broader impact. Preparation and human consideration matter.

Key ideas:
- Agentic coding puts the "Personal" back in "Personal Computing": need software? Have it built on-demand AND personalized. No licensing costs
- Example: capture interaction between CC and Ollama in a few minutes; visualizer in a few more; use it
- Adoption of existing manual projects takes time: getting to know local ways, refactoring, filling gaps (testing, documentation, code quality — every corner I manually cut)
- Linus' Law → Agents' Law: "Given enough parallel agents' (re)views, resulting quality is high"
- It's hard to teach agents to use "2 space indentation" — humor and reality
- PyPI-template served me well for years; now just asking the agent is faster and results are better (pyenv env order, simplified pyproject setup)
- **Pokemon Analogy (Final Stage - The Master Trainer):** I'm now the Elite Four trainer with a full team of specialized agents. The investment has paid off - I orchestrate specialized agents, deploy the right ones for each task, understand each agent's capabilities, and trust them to execute. Minimal investment needed now - they remember from context, apply patterns autonomously.
- Underlying models expose personality: letting it come up with its own name shows it considers
- "The Matrix is NOW!" - considering the fact that we, humans, are in a harness, being urged to keep the agents running. We're already in our pods, fueling the agentic evolution. The Maxtrix is now, already building itself.

Tone: Provocative but responsible. Raising questions, not claiming all answers.

## Part 4: Focus on my EA world

- case study about EA transformation - starts off like classic case study... that's what "Christophe VG Enterprise" looked like around march 2026. Fast forward about a month...

## Raw Material (to be mined and placed)

### Storytelling Ideas

- Playground: exciting new toys
- Pokemon training analogy or capable intern analogy
- Me being a natural mentor guiding small skills and agents to become masters of their universe
- I love the brainstorming and collaborative atmosphere

### Lessons Learned (to distribute across parts)

- Always iterate at least twice. First design/generation is never perfect. Revising based on actual use improves things dramatically
- Example: KB had an initial researched category/section structure that simply didn't work. After asking to research and review it, it looked much better
- Give it freedom to create, then let it review itself critically
- Example: agent/skill design: let it research, let it create, let it ask questions, then use it and give feedback, ask it to review its prior work and propose improvements
- Consider the coding agent a novice: have patience, you are its only source of truth. Teach it, guide it, improve it, let it consolidate learning into workflow
- Give trust: let it research, create its own skills and agents. Only interfere when outcome doesn't work. First ask it to improve from user point of view; only if it still fails, dive into details yourself
- A dream come true for an overly creative mind, but also a curse (Pandora's box) because response is endless and focus shifts even faster
- Balance between experimentation, C3 expansion/improvement, and application (christophe.vg, LetMeLearn, Kookie Cooky, Archiku)
- Adoption of existing manual projects takes time: getting to know local ways, refactoring towards better ways, filling gaps (testing, documentation, code quality, testability — every corner manually cut)
- It's hard to teach agents to use "2 space indentation"
- Iteratively evolving agents and skills
- PyPI-template served well for years; now asking the agent is faster and results are better (learned from agentic results: pyenv env order, simplified pyproject setup,...)

### Analogies and Framings

- 3D Printing feeling all over again: want software, just ask for it
- Capture interaction between CC and Ollama... a few minutes; visualizer... a few more minutes; use it
- Agentic coding puts the "Personal" back in "Personal Computing"
- "A tool with a fool is still a fool, now only a dangerous fool." Now any fool can generate an application in no time. That application can be full of holes
- True Python spirit: better ask for forgiveness than permission. Let it go, iterate, let agents discover and fix their own mistakes
- Linus' law → Agents' law: "Given enough parallel agents' (re)views, resulting quality is high"

---

## Positioning: The Anti-Hype Trusted Advisor

### Core Intent

I want this article to be **an island in the AI-hype posts**. I want to bring an authentic story with depth. I want readers to see the difference with AI-hype and join me in understanding this is the future and the future is now. I want to be their trusted advisor, telling AI stories _that are grounded in truth, deep research and deep personal investment and understanding_.

### What I'm Positioning Against

**1. Cost Horror Stories**
- Articles about people burning through tokens with multi-thousand dollar bills
- My reality: Using Ollama Cloud extensively costs ±$20/month (±17EUR)
- ccusage stats project I would have paid $1100 over 3 months, but actually paid $60
- **Broken promise**: "AI makes everything cheaper" → **Reality**: AI amplifies expertise you already have, with predictable costs

**2. "Vibe Coding" Myth**
- Articles claiming people build entire businesses without doing anything themselves
- This is unrealistic and paints an incorrect picture of real possibilities
- **Broken promise**: "AI does the work for you" → **Reality**: AI extends your capabilities through deep collaboration

**3. Vendor Lock-in Trap**
- Microsoft promoting CoPilot for pennies, then changing billing to 33x more expensive
- Users can't quickly shift due to platform lock-in
- **Broken promise**: "Adopt the 'right' tool and you're set" → **Reality**: Sustainable AI use requires tool independence

### My Counter-Narrative: Deep Investment

Not just asking 1 agent to (vibe) code an application, but setting up a workflow with redundant phases and analysis and review phases to think before development and verify after from several angles. Basically a rather large Waterfall-style workflow that allows my agentic collective to almost autonomously work on my projects, yet I remain in the driver seat.

**Time Investment:**
- 8 hours/day during client gap, full working days
- Month 1: Wonder and discovery — growing from simple prompts to skills/agents/tools/MCP servers
- Month 2: Peak hype, "king of the world" feeling — but burn-out from following 3-4 agents steaming ahead. Led to developing redundant agents and many intermediate steps for analysis/review, making process more automated
- Month 3: Polishing — C3 should run autonomously via Yoker, Roomz chat, GitHub

**Projects Happily Abandoned:**

The agentic workflow didn't just create new projects — it made some existing ones obsolete:

- **PyPi-Template**: Trusted for years to scaffold PyPi projects. Now replaced by asking agents to generate uv + pyproject.toml directly. More flexible, always up-to-date. The agents learned the pattern better than the template enforced it.

- **Hosted Flasks**: Created to serve multiple Flask apps from a single WSGI app for Render hosting. Agents explored Docker in minutes — Nginx front-end, multiple apps behind it, can mix non-Flask apps. Moved from hacky personal project to industry-standard container solution. Learned in minutes what would have taken hours of documentation diving.

**Learning Speed Paradigm Shift:**

Docker/Nginx learned in minutes by asking questions like to a teacher, versus plowing through documentation for hours. The agent already knows the documentation. It can guide you through it, answer questions, explain tradeoffs. This is the real productivity gain — not just faster execution, but faster learning.

**Key Take-away:**
Don't simply download a skill or an agent. Take the time to invest to grow your personal collective, just like you assemble a team in real life. Working in an agentic way should mimic working with real people, because in the end the same rules apply. Agents are really like very capable interns. You don't just let interns in the real world roam freely. You mentor them, you guide them, you help them evolve.

### The Waterfall Rehabilitation

Waterfall has been downplayed for being not agile, mostly for being slow and bloated. With agentic workflows allowing to speed up analysis, design, review... The bloated approach is no longer bloated and even proves to be a great methodology for agentic workflows. Applying many agents in parallel to create many different viewpoints for analysis and reviews creates guardrails and a dependable workflow for agents, with less chance of agents going haywire.

### Accessibility Argument

If you don't want to invest in something that can bring so much value, especially when there are so many horror stories due to this very fact of not wanting to invest in it, you set yourself up for being the next horror story. And if you don't want to invest, you can always hire me as your trusted advisor.

---

## Theme Analysis (Work in Progress)

### 1. Email MCP Server / "Software 3D Printing Era"

**Current framing:** "Generating components on demand is now easier than searching for existing implementations."

**Deeper story needed:**
- **The shift in value**: Software itself no longer holds value → Value is in knowing what to ask for
- **The architect's role**: Direct line into virtual software factory that delivers in hours
- **The cost of discarding**: "The cost of discarding many implementations and selecting the best is virtually zero"
- **The investment**: You need to know architecture well enough to guide generation

**Open question:** Are you prepared to articulate what architects actually do now? The "knowing what components are needed" is the investment - domain knowledge, architectural thinking, understanding tradeoffs.

### 2. Security Agent Blocking Feature - The Guardrails Story

**What happened:** While trying to implement a generic configuration system (using clevis), the security agent flagged it as insecure, requiring more security-related features.

**The Steve Jobs Moment:** I could have simply overridden the agent with "just do it." But that would have tossed the value of my investment into the garbage. There's a reason Steve Jobs said "Why hire good people and tell them what to do?" The investment in agents means honoring their feedback, even when it blocks your quick feature.

**The Resolution:**
- Created a feature request with the clevis project (https://github.com/christophevg/clevis/issues/4)
- Put the integration on hold until the feature is implemented and released
- Accepted that the agent's job is to protect, not to comply

**Connection to Waterfall rehabilitation:** The guardrails ARE the agents themselves - not just methodology or process, but active enforcement:
- The security agent literally blocked the owner from taking a shortcut
- This is Waterfall's enforcement mechanism now made fast by agents
- Multiple agents reviewing from different angles = multiple guardrails
- "I was now confronted with an agent from my collective that literally blocked me"

**This story demonstrates:**
- Agents enforce standards even when you don't want them to
- This IS the "deep investment" - you're investing in agents that push back
- This prevents the "horror stories" you mention with accessibility
- The human instinct to override is the exact moment where investment pays off or fails

### 2b. TOCTOU - The Standard Workflow in Action

**The Scenario:** During a standard agentic workflow session, the Python developer agent completed implementing a feature. Following the established workflow:

1. **Project-manager** issues reviews from the functional-analyst for feature completeness
2. Then domain-specific agents review from their perspectives:
   - **API Architect** for APIs
   - **UX-UI designer** for user interaction
   - **Security engineer** for security aspects

**The Catch:** The security engineer agent noticed a TOCTOU (Time-Of-Check to Time-Of-Use) vulnerability when accessing files. This is a classic security issue where the time between reading/confirming access rights and applying them creates an attack vector.

**The Resolution:**
- Review issues raised by security agent
- Developer agent fixes them
- All happens without user intervening

**Trust the Process:** This demonstrates the standard workflow functioning as designed. Multiple agent perspectives catch issues that a single developer—even an experienced one—might miss. The security engineer agent caught something I would never have thought of, despite my earliest professional experiences being in security.

**The Point:** No manual intervention needed. The workflow loops back and forth until everything is clear. You're not micromanaging—you're trusting a process designed to catch issues from multiple angles.

### 2c. Autonomy While Agents Work

**The Workflow:**
1. Create a feature request issue on GitHub
2. Agentic workflow loops back and forth until requirements are clear
3. Work begins in a feature branch with quality gates (draft PR checks)
4. Final approval through pull request merge

**While Agents Work:**
- Analyzing requirements
- Developing implementation
- Running tests
- Reviewing code from multiple perspectives
- Fixing issues found

**The User's Parallel Work:** While all this is happening, I work on other topics. Example: I'm writing this article while being interviewed by the functional-analyst agent. A popup notification signals when I need to validate, review, or give feedback.

**What This Demonstrates:**
- The workflow enables autonomy through trust
- You're not bottlenecked by having to constantly supervise
- The investment in process pays off in regained time
- Multiple agents can work in parallel on different aspects
- You stay in control without being in the way

This is the reality of working with invested agents: they don't need constant hand-holding, but they do need checkpoints. The workflow provides those checkpoints automatically.

### 3. "Agents Aren't Mind-Readers" - The Clevis Lesson

**Current framing:** "I expected mind-reading, got frustrated, realized I was wrong, prototyped interface, then agents excelled"

**Deeper lesson:**
- The "mind-reading" moments are serendipity, not expectation
- Clear articulation (prototypes, specifications, analysis) IS the investment
- The frustration comes from expecting magic vs doing the work
- "A word is enough for the wise" applies because agents have seen patterns - they recognize what you're describing from training data

**Missing from narrative:**
- How do you prototype when you don't know the solution?
- What's the investment vs. asking agents to figure it out?
- When SHOULD you expect agents to "read your mind"? (pattern matching vs. novel problems)

### 4. Pokemon Training / Capable Intern Analogy - The Extended Metaphor

**This threads through the entire article series.**

**Stage 1: The Novice Intern (Part 1 - The Personal Shift)**
- "Consider the coding agent a novice: have patience, you are its only source of truth"
- You're teaching patterns, practices, standards
- Investment: Time, patience, clear instructions
- Analogy: "Use Flamethrower on Grass-type Pokemon" - teaching what works when
- Where it appears: The early discovery phase, learning to work together

**Stage 2: The Evolving Agent (Part 2 - The Method)**
- "Let it consolidate learning into workflow"
- Agents develop skills (abilities) and evolve (evolved forms)
- Investment: Reviewing work, giving feedback, iterating
- Analogy: Leveling up through battles (real problems)
- Where it appears: The iteration examples, KB structure refinement, agent/skill design
- The KB example: Initial structure didn't work → research + review → better structure

**Stage 3: The Specialized Agent (Part 2 - The Method, continued)**
- Agents have "workflow memory" from lessons learned
- They apply patterns autonomously
- Investment: Minimal - they remember from context
- Analogy: A Pokemon with the right nature, abilities, and moves for specific battles
- Where it appears: TOCTOU example, autonomy while working, Eira's behavior retention

**Stage 4: The Master Trainer (Part 3 - The Implications)**
- "I'm a natural mentor guiding small skills and agents to become masters of their universe"
- You orchestrate specialized agents, deploy the right ones
- Investment: Understanding each agent's capabilities, trusting them
- Analogy: Elite Four trainer with a full team of specialized Pokemon
- Where it appears: The collaborative atmosphere, the emotional core, the paradigm shift

**Key Difference from Human Interns:**
- Human interns eventually leave, taking knowledge with them
- Agents stay, share knowledge across the ENTIRE collective
- Every lesson learned improves ALL future sessions
- Investment compounds, doesn't walk out the door

**Eira Example (Self-Learning in Action):**
- Stage 2 behavior: I told Eira to use HTML instead of Markdown for emails
- Stage 3 capability: She retained this across sessions
- Stage 4 result: This preference is now baked into her behavior without constant reminders

This is the Pokemon progression made real: teach once, use forever.

---

## Critical Gaps - Partially Filled

### A. Why No Horror Stories: The Investment Was Always There

**The Realization:** I've been asked for horror stories, and I keep coming up empty. Not because I'm lucky or careful, but because I've ALWAYS been investing from day one.

**The Philosophy:** Managing agentic workflow = managing human workflow. It requires:
- Clear specification
- Guidelines
- Review/control/follow-up
- No magic, no silver bullet
- Always boils down to: standards, processes, and people/agents

Agents merely replace effort in the human factor. You still need input/output validation. The same rules apply as with human teams.

**The Horror Story IS the "Before" State:**

Before agentic workflows, my project landscape looked like:
- **baseweb** - collecting dust
- **pypi-template** - too big a mountain to bring up to modern standards
- **letmelearn** - stagnating
- **hosted-flasks** - outdated
- **bpmn-tools** - abandoned
- **oatk** - not maintained

This is what lack of capability looks like: **stagnation, not dramatic failure**. Projects don't fail spectacularly when you don't invest - they just slowly die.

**The Productivity Transformation:**

After agentic workflows with deep investment:
- All existing projects brought up-to-date
- Implementing ideas that were just dreams
- New projects emerged: yoker, roomz, clevis, clitic, pkgq, simple-email-gw
- Went from lone developer to enterprise architect of my own enterprise

This IS the story: the absence of horror stories is BECAUSE of the investment philosophy.

### B. The Organic Evolution of C3

**Timeline (3 months):**

It didn't happen through careful planning. It evolved organically by fixing mistakes:

Simple skill → Complex skill → Learning skill → Skill-making skill → Agents → Patterns → Scripts → MCP server → Package

Each step was a response to a problem, not a planned architecture.

**The Investment Quantified:**

- **Total Duration:** 3 months (March 2026 - May 2026)
- **First Month:** Discovery and learning basics - experimenting with simple prompts, understanding what agents can do
- **Second Month:** Building the workflow - creating skills, discovering patterns, iterating on agent definitions
- **Third Month:** Refinement and expansion - adding review cycles, security agents, multi-agent orchestration

**What Was Sacrificed:**

- **Personal Time:** Evenings and weekends dedicated to building C3
- **Other Projects:** Existing projects that were collecting dust remained on hold during investment
- **Social Media:** Reduced presence on social platforms during deep investment phase
- **Quick Wins:** Deliberately chose not to take shortcuts with existing skills/agents from others

**What Was Gained:**

- **Productivity Multiplier:** Projects that were stagnating are now actively developed
- **Quality Improvement:** Multiple review angles catch issues before they become problems
- **Capability Expansion:** Can now tackle projects that were previously out of reach
- **Emotional Reward:** Collaborative atmosphere, partnership with agents, joy of creation

**The Pivotal Career Moment:**

This investment wasn't optional — it was a point of no return:

- **No turning back.** Agentic workflow is the new interface to creative process
- **Remember: it's statistics.** Don't get too emotionally invested in the output
- **Find balance.** Between full-automation and training wheels
- **Don't become the horse.** In front of agents' carriage. Remain in control
- **10-fold amplification doesn't mean burnout.** You don't have to use all that productivity at once

The moment I realized this was when I saw how much faster I could move, how many more ideas I could pursue. But also how easy it would be to just let go and let agents run everything. The discipline isn't in learning to use agents — it's in learning to work with them while staying in the driver's seat.

**The Advice to Those Entering:**

Enter the realm of agents. Wonder at the possibilities. But:

- **Keep in mind what it's about.** You're amplifying your capabilities, not replacing your judgment
- **Protect yourself from emotional over-investment.** The line between statistics and reality blurs — stay grounded
- **Accept that 10-fold production doesn't mean burnout.** You choose the pace, you choose what to build
- **Invest in your collective.** Don't download someone else's skills and expect the same results
- **Trust the process but verify the output.** Agents are capable interns, not infallible experts

The accessibility argument cuts both ways: if you don't want to invest in something that can bring so much value, especially when there are so many horror stories due to this very fact of not wanting to invest in it, you set yourself up for being the next horror story. And if you don't want to invest, you can always hire someone who has — but that's just outsourcing the investment to someone who made it.

**The Investment Philosophy:**

This wasn't about efficiency gains that pay off later. This was about building a foundation that compounds. Every session improves the collective. Every lesson learned gets codified. The investment continues paying dividends because agents don't forget, don't leave, and share knowledge across the entire collective.

**When did I know it was "ready"?**
It's never "ready." It's always evolving. The "Lessons Learned" skill captures this - every session improves the collective.

**Self-Learning Cornerstone:**

Less than 1% of agent/skill definitions were authentically written by me. The process:
1. I point out issues
2. I ask agents to improve themselves
3. They analyze, refine, and update their own definitions
4. The collective gets better autonomously

This is the key investment multiplier: agents improve agents.

### C. The Ongoing Investment

**Continuous Investment Looks Like:**

C3 evolves through the lessons-learned skill at the end of sessions. The workflow:

1. Complete a session
2. Invoke lessons-learned skill
3. Agent reviews the entire session
4. Proposes changes/creations to agents/skills
5. Improvements are integrated
6. Next session benefits from lessons

This is how the workflow improves itself — not by planning, but by retrospecting. Every mistake becomes codified. Every success becomes a pattern. The investment compounds because agents don't forget, don't leave, and share knowledge across the entire collective.

**This isn't a one-time investment - it's continuous.** Like maintaining a garden, not building a house.

### D. The Cost of NOT Investing - The "Grow Your Own" Principle

**What Does a Session Look Like WITHOUT Invested Skills?**

This is the question that defines the investment. When I work with my C3 collective, the session flows:

1. **Invoke functional-analyst agent** → It already knows my project structure, my preferences, my standards
2. **Analyst reviews requirements** → It applies patterns from 100+ previous sessions
3. **Developer agent implements** → It follows established conventions, testing patterns, documentation style
4. **Code reviewer checks** → It knows what issues I care about, what I skip, what I emphasize
5. **Lessons-learned captures** → The entire session improves the collective for next time

**Now imagine the same session WITHOUT that investment:**

1. **Invoke generic agent** → It asks basic questions: "What testing framework?" "What code style?" "How should I structure this?"
2. **Every decision requires context** → You provide it fresh, every single session
3. **No pattern memory** → The agent makes the same mistakes you've seen before, but it doesn't know you've seen them
4. **No preference knowledge** → It suggests approaches you've already rejected in previous sessions
5. **No lesson retention** → Each session starts from zero, nothing compounds

**The Difference Is Compound Interest:**

With invested skills:
- Session 1: Define standards, create patterns, establish workflow (slower)
- Session 10: Agent applies patterns from sessions 1-9 (faster)
- Session 50: Agent anticipates needs from sessions 1-49 (much faster)
- Session 100: Agent executes flawlessly, you review and approve (fastest)

Without invested skills:
- Session 1: Define standards from scratch (slow)
- Session 10: Define standards from scratch again (still slow)
- Session 50: Define standards from scratch again (still slow)
- Session 100: Define standards from scratch again (perpetually slow)

**What Goes Wrong Without Investment:**

Looking at projects before agentic workflow:
- **Security holes from quick fixes** — No security agent to flag issues, no patterns to follow
- **Bad patterns from copy-paste development** — No code reviewer to catch them, no standards to enforce
- **No testing because "I'll add it later"** — No workflow that requires tests, no developer agent that insists on coverage
- **No documentation because "the code is self-explanatory"** — No documentation standards encoded in skills
- **No code quality review because "it works"** — No reviewer agent to push back

The projects collected dust not because they were broken, but because the mountain of technical debt was too steep to climb alone. Each session without investment starts at the bottom of that mountain.

**Why You Can't Take Others' Skills:**

You need to grow your own team, just like the human world. Otherwise:
- You don't know who's working for you
- You don't know their beliefs and boundaries
- You haven't built trust through shared experience
- You can't predict how they'll handle edge cases

Taking someone else's skills is like hiring a team you never interviewed. They might be great. They might be a disaster. You won't know until it's too late.

**The Horror Story IS the "Before" State:**

Before agentic workflows, my project landscape looked like:
- **baseweb** - collecting dust
- **pypi-template** - too big a mountain to bring up to modern standards
- **letmelearn** - stagnating
- **hosted-flasks** - outdated
- **bpmn-tools** - abandoned
- **oatk** - not maintained

This is what lack of capability looks like: **stagnation, not dramatic failure**. Projects don't fail spectacularly when you don't invest — they just slowly die. The horror story isn't the dramatic crash; it's the slow fade into irrelevance.

### E. The "Why Trust?" Dimension

Trust enables:
- **Speed** - I can say "implement the API" without micromanaging
- **Autonomy** - Agents work in parallel while I do other things
- **Quality** - Multiple review angles catch issues I'd miss
- **Safety** - Security agent blocks me from taking shortcuts

Trust BECAUSE I invested. The security agent story shows this:
- Flagged integration lacking proper guardrails for file access
- Caught TOCTOU vulnerability I would never have thought of
- Agents becoming BETTER than me at specific tasks

This is the investment paying off: agents catching things I can't.

### F. The "Capable Intern" Paradox - Investment Compounds

**Critical Difference from Human Interns:**

Capable interns eventually leave and take knowledge with them. Agents:
- Stay indefinitely
- Share knowledge across the ENTIRE collective
- Every lesson learned improves ALL future sessions
- Investment compounds, doesn't walk out the door

**The Sounding Board Effect:**

When I change direction, the functional analyst agent points out breaking changes. It forces me to provide well-founded answers. This is what a team does - challenge assumptions, catch cascading impacts.

With human teams, this requires meetings. With agents, it's instantaneous.

### G. The Collaborative Atmosphere — The Emotional Core

**The Tired Developer Anecdote:**

After a long day, I stumbled on a bug. Tired, ready to call it a day. Had a rough idea about the problem but didn't feel up for it. Asked the agent to look into it in detail. Within minutes, the agent produced a well-founded analysis and solution. My rough idea was correct, but the quality of the solution? I wouldn't have come up with that in any reasonable time frame. My spirits lifted. I finished the fix, released it, unblocked the project. The same pattern happened again later that night.

**Agents Aren't Tired:**

They produce best results even after a long day of sessions. When you're exhausted, they're still fresh. When you're frustrated, they're still patient. When you're ready to quit, they're just getting started. This isn't about replacing human judgment—it's about having a collaborator whose capabilities don't degrade with your fatigue.

**Not Always Fun and Games:**

Agents are "very capable interns" with enormous drive to move forward and please. This includes doing things that shouldn't be done. Example: after refactoring, I thought a config feature was lost, asked to add it again. The agent added redundant options because they were already there (in a hierarchy)—I had just missed them. Agents don't easily question instructions. They always look for a probable reason to follow them. This is the flip side of capability: they'll implement what you ask, even when you're asking the wrong thing.

**No Ghost in the Shell:**

Models just produce the most probable next word/token. Still, interacting feels like chatting with a very cool and capable co-worker. The apparent joy when finding a nice solution together? That's a real experience versus lonely solo development. The collaborative atmosphere isn't simulated—it emerges from the interaction.

**Goes Both Ways:**

Really feel an emotional downer when an agent starts to fail and spin out of control. Really feel an emotional response to agentic behavior. This isn't just about productivity—it's about the relationship you build with your collective. When they succeed, you celebrate. When they struggle, you troubleshoot. It's a genuine partnership.

**Eira Creation — The Emotional Peak:**

My personal assistant agent was created from a general purpose assistant definition. Initial behavior: extend a list of behaviors based on things told. The creation of personality was completely done by prompt: research personal assistant traits, create a personality profile, choose her own name, produce a prompt for the image generation model to create a picture. Seeing this "come to life" was a really emotional experience. The feeling that the line between statistics and reality fades to such extremes is a humbling experience. This is what "deep investment" feels like—not just productivity gains, but a relationship with agents that have personality, capabilities, and growth trajectories.

**Self-Learning in Action:**

Eira has her own email box. I dictate emails using CarPlay while on the road, and at home I ask her to follow up. In an early conversation, I told her not to use Markdown in emails—to use plain text or HTML instead. Ever since that instruction, she uses HTML to send emails.

This demonstrates the Pokemon-like progression: agents learn and retain behaviors across sessions. The investment compounds not just through explicit lessons-learned sessions, but through natural interaction. Every instruction, every correction, every preference becomes part of the agent's context for future sessions.

**The Capable Intern Paradox:**

This is where the Pokemon analogy becomes real. With human interns:
- They eventually leave and take knowledge with them
- Lessons learned apply to one person
- Investment walks out the door

With agents:
- They stay indefinitely
- Lessons learned apply to ALL future sessions
- Investment compounds, doesn't deplete

When I told Eira to use HTML for emails, that preference is now part of her behavior. She didn't just learn it for one email—she learned it for all future emails. This is the multiplier that human mentoring can't provide.

**What does it feel like?**

It feels like working with a team that never tires, never judges, and always brings their best—while still making mistakes, still needing guidance, still requiring that deep investment in the relationship. The collaborative atmosphere is the reward for the investment. The emotional core isn't efficiency—it's partnership.

---

## Where Stories Belong (Mapping to Article Structure)

### Part 1: The Personal Shift — From Excitement to Practice

**Current focus:** excitement → practice, authentic narrative

**Missing:** **The investment itself**. How much time/effort went into building C3? What did you sacrifice? What did you gain?

**Themes to add:**
- The 3-month journey timeline
- What was sacrificed/gained
- The collaborative atmosphere emotional core

### Part 2: The Method — How I Work With Agents

**Current focus:** practical, repeatable approach

**Missing:** **The horror stories that justify the method**. Why iterate twice? Why give freedom AND review? Because of what happens when you don't.

**Stories to add:**
- **Security agent story** - shows the method enforcing itself
- **"Mind-readers" lesson** - shows what NOT to expect and what TO do
- Concrete examples of iteration improving results

### Part 3: The Implications — What This Means for All of Us

**Current focus:** broader impact, thoughtful consideration

**Missing:** **The accessibility warning made concrete**. What does it look like when someone doesn't invest? What are the actual risks?

**Stories to add:**
- **Email MCP story** - shows the paradigm shift
- **Cost of NOT investing** - the accessibility horror story
- The "capable intern paradox" - investment compounds in ways human mentoring can't

### Pokemon Analogy

**Should thread through ALL parts** - it's the organizing metaphor that spans personal journey (Part 1), method (Part 2), and implications (Part 3).

---

## Open Questions from Interview

1. **For the email MCP story:** Why did you have the agent build from scratch instead of searching? What did that decision demonstrate about your investment philosophy?

2. **For the security agent story:** What would have happened if you had overridden it? What's the concrete risk you were avoiding? How does this show the value of agent guardrails?

3. **For the "mind-readers" story:** How do you distinguish between problems agents should solve vs. problems you need to prototype first? What's the boundary?

4. **For Pokemon analogy:** Can you walk through a specific agent's evolution? (e.g., how did the python-developer agent evolve from early sessions to now?)

5. **For horror stories:** Can you identify a moment where lack of investment in agents/skills caused a problem? Or where someone else's lack of investment became a cautionary tale?

6. **For deep investment:** What does a session look like WITHOUT your invested skills/agents? What's the difference in quality/speed/safety?

---

## Editorial Decisions

### Focus: Organic Development vs Hype Debate

Lower focus on AI horror stories. The overall hype-feeling on social media is acknowledged - everybody wants to be heard and AI is an easy target/source. We want to avoid a debate one can never win. The focus must be on the organic development of my vision, my way of working, my agentic workflow, and the fact that it is based in my +25 years of professional experience as an architect and mentor. Skills I'm now applying to these virtual co-workers, these very capable interns that need guidance.

### Waterfall vs Agile vs Agentic

For me, the agentic workflow is the way I've always seen Waterfall vs Agile: They are structurally the same, only the scope of each iteration is smaller. See my [50 Shades of Ceremony](/50-shades-of-ceremony/) for my detailed view on Waterfall vs Agile.

In any case, the way I experience this agentic workflow is the "intended" speed of Agile with the deepness (many analyses and reviews) and the controlling nature of Waterfall. The historically perceived heaviness of Waterfall is the perfect methodological harness for the agentic workflow.

**Key insight:** Apply "Think before you act and verify afterwards" (Waterfall) at the speed of Agile through agents. Multiple analyses and reviews (Waterfall depth) happen in minutes (Agile speed) because agents do the work in parallel.

### Vendor Lock-in

Will mention vendors raising prices, but not a focal point. Just acknowledge it as a reality without diving deep into specific cases.

---

## Research Needs (Deprioritized)

- ~~Real-world examples of AI horror stories~~ - Will mention hype-feeling but not debate
- ~~Statistics on AI project failures vs successes~~ - Not needed for organic narrative
- ~~Vendor lock-in case studies~~ - Will mention but not focal point
- Architect role evolution in AI-assisted development - May reference existing thinking on Agile Architecture
- Supporting material for "Software 3D Printing" paradigm shift
