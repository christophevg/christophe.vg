---
title: Hello Agents
short:
  - ha
tags:
  - thing
  - professional
  - agentic
  - ai
  - personal
header:
  teaser: /about/images/thumb/hello-agents.png
  image: /about/images/header/hello-agents.png
thumbs:
  files:
    agents-are-bad-mkay:
      kind: png
---

About four months ago I entered my famous [holiday mode](Holiday-Mode) in between clients. I really love this period, in which I finally have the time to catch up on some reading, spend valuable time with my kids and simply get some sh*t done around te house. This time I was especially looking forward to it, because I had a big project in mind. One that I was going to dedicate 8 hours a day to, 5 days a week, just work my ass off, just like I do for my clients, only this time, I'm my own client.

Let's first take a step back: If you know me, or have read some of my personal [things](/tags/#thing), you know by now that I have this urge to [seek out problems](Problem-Seeker), get to the [bottom of things](50-Shades-of-Ceremony), to [get my hands dirty](/makes), to dive into the gory technical details, before I embrace any technology, paradigm, methodology, simply because I'm hard to convince and hardly ever trust the word of someone else - and that's experience talking, getting more and more affirmed with years passing by.

TODO: Add investment quantification here or in a dedicated early section. Describe the commitment: 8 hours/day, 5 days/week, for 4 months — treating yourself as your own client. What was sacrificed (personal time, evenings and weekends, social media presence, deliberately not taking shortcuts with existing skills/agents from others) and what was gained (productivity multiplier, quality improvement, capability expansion, emotional reward). The first month was discovery and wonder — growing from simple prompts to skills/agents/tools/MCP servers. The second month was peak hype, the "king of the world" feeling, but also burn-out from following 3-4 agents steaming ahead — which led to developing the multi-agent workflow with redundant analysis and review steps. The third month was polishing — C3 running autonomously via Yoker, Roomz chat, GitHub. See the preparation document's "Time Investment" and "The Pivotal Career Moment" sections for raw material. This sets up the stakes before the story unfolds.

## Whizz Kids also Grow Up

{% include video id="GDdVbOcUlTo" name="whizz-kids-video" title="Whizz Kids" %}

I'm an 80's kid, an 80's computer geek. In the 80's, entering this realm meant actually slaying dragons, learning to deal with unstable, hacked together hardware, hardly any software and even less documentation - unless I could convince my grand father to take me to _HCW_ - if you know, you know - a 45 minute drive just to buy a book. So from that very first decade, I was made accustomed to having to understanding everything from the ground up... hardware, assembler, operating system, basic, pascal...

In the decades that followed I've studied and created text-based user interface frameworks, relational database systems - yes set theory was sometimes mind-bending at the age of 12, computer graphics libraries - yes it took me a while to get my head around hidden line removal algorithms, include here also about 32 programming languages - with a preference for the exoteric ones, operating systems - _MOOSE_, My Own Operating System Experiment, really was a blast, [micro-controllers](/makes/XT0F-003), [low-level networking](/makes/EZRPi)...

But if I had to pick one topic that has always struck a nerve, it was the fundamental aspect of compilers. Raising the level of abstraction with every evolution, has captured my imagination, up to this day, probably because very early on I understood that this was a never-ending story, in the good sense of the word: with growing computing capabilities, come new abstraction possibilities: from assembler to basic, to higher-order languages, to software generation, to large language models, to... , to... With every single evolutionary step, I dove in head-first, making sure I fully understood the underlying concepts, was able to implement them myself, ensuring I knew where every opportunity, and even more every pitfall was to be expected. This hasn't changed up to this very day.

Well, I couldn't just pick one, I at least have to include its evenly important counter-part: [architecture](I-Enterprise-Architect). Very soon, although loving every minute of these dark and muddy technological dungeons, I learned that these machines, these algorithms, these mathematical abstractions, are nothing more than exactly that: abstractions of reality. And their only purpose is to help us get our sh*t done - not the other way around. So I can only thank my father for showing me where [true value](Formula-of-Architecture) is found: in people. Working with them, working for them, supporting them, teaching them... it's all about people (and _processes_). And sole reason of existence of architecture is just that: _to ensure the realisation of the dream of the client, according to best practices and good principles._ And the abstractions needed to do that in conjunction with the aforementioned technological evolving abstractions is where I found my place in the sun.

And looking at where that technological evolution has brought us in 2026, I cannot dismiss myself from experiencing one of the most profound, full-circle crossing of separate timelines over the past 40 years of this journey of mine, the moment where architecture and software development actually and maybe finally really collided, and enabled a fundamental new way of working in the form of [agentic workflows](Agentic-Workflow).

And that's exactly the project I took on about 4 months ago... after a wait for almost 2 years.

{% include image name="stat-ollama" bottom="25px" kind="png" %}

## Putting the O and the A's in LLM

Yes, {% include external link="https://ollama.com" title="Ollama" %} had been sitting rather idle in my menu bar for almost two years. I installed it near the end of my LLM explorations. Having built a prototype LLM from the ground up, I wanted to see what _real_ models would bring to the table. And I always start in the most modest way: running a local model. Back then in 2024 Ollama popped up in my (then still AI-free) Google results as a free platform to run LLMs locally. I installed it, downloaded a model, saw my GPU crunch for about half an hour, to produce an answer my ever first prompted question: "What can you do?" At that point, reading that first answer, given my so recently acquired knowledge about LLMs, I knew this was _the_ next big paradigm shift and I understood I was literally living history being written. All I had to do was wait for the right moment to invest my time in it.

And that wasn't 2024 - 2024 was the time of single prompts and single prompts don't solve actual problems. They produce funny pictures with people with 6 fingers or 4 feet. It also wasn't 2025 - 2025 was the time of vibe coders announcing the end of software development. Well we already know what those produced. Having heard that claim one time too many over the past 40+ years, I knew what I was gonna bet my money on the next phase: [agentic workflows](Agentic-Workflow).

Now I admit, I had a hard time not already jumping on the embryonic agentic wagon in 2025. With Claude Code entering the area in February 2025, I saw what I was looking for, yet also knew this first had to go through some evolution. By the time that I installed `claude` and `gemini` on my machine, about a year later, these coding agent harnesses had already reached a point where they had proven their worth, literally everybody was using them. So I deemed it time to take a look and had my first ever argument with an agent... over spaces. 

{% include image name="claude-code-argument-spaces" bottom="25px" kind="png" %}

What more do you need to be convinced? This is truly a developer, including denying and lying. I felt right at home, ready to start training these agents to become better versions of themselves and I could rely on years and years of experience, coaching teams to focus on analysis, processes, clean code and thank god... architecture and governance.

TODO: Develop the mentoring dynamic here. Draw out the parallel between coaching human teams (which you've done professionally for 25+ years as an Enterprise Architect) and mentoring agents. The same skills apply: clear specification, guidelines, review/control/follow-up, standards, processes, and people. Agents are "very capable interns" — you don't let interns roam freely, you mentor them, guide them, help them evolve. This mentoring dynamic is a thread that runs through the entire series and connects your professional experience to this new paradigm. Managing an agentic workflow is no different from managing a human-based workflow: it requires the same discipline, the same governance. There is no magic, no silver bullet — it always boils down to proper standards, processes and people/agents. See the preparation document's "Raw material to be integrated" section for material on this parallel.

## From LLM to Workflow

TODO: Write a 3-4 paragraph compressed summary of the LLM primer that was moved to Part 2 ("We are Agent"). This summary should give non-technical readers enough understanding to follow the rest of Part 1. The full primer — covering the CPU/LLM analogy ("Give me an L..."), the harness/OS analogy ("The LLM in the Harness"), prompting skilled agents ("Prompting a Skilled Agent"), context management ("It's All About the Context"), and the governance subsection ("With Great Unstructured Power, Comes Great... Required Governance") — now lives in Part 2.

The summary MUST preserve the governance insight (the conceptual thesis of this article): that LLMs introduce a new layer of abstraction with inherent uncertainty (the infinite monkey theorem demonstration, "never trust an LLM" — given the exact same request, it produced two different answers), and that just as enterprise architecture introduces governance to manage uncertainty in human organizations, agentic workflows require a similar governance layer — the iterative feedback loop between governance, management, and results. This governance insight is the conceptual foundation that Law #1 builds on, so it must survive in Part 1 even in compressed form. Refer to Part 2 for the full primer content to draw from when writing this summary.

TODO: Add a "before" section here describing the stagnation that preceded the agentic awakening. Paint the picture of projects collecting dust: baseweb, pypi-template, letmelearn, hosted-flasks, bpmn-tools, oatk — not dramatic failures, but slow stagnation. The mountain of technical debt was too steep to climb alone. This is the real "horror story" — not a dramatic crash, but a slow fade into irrelevance. Projects don't fail spectacularly when you don't invest; they just slowly die. This sets up the contrast for the transformation that follows in "Let It Go." See the preparation document's "Critical Gaps - A. Why No Horror Stories" and "D. The Cost of NOT Investing" sections for raw material, including the project list and the framing of stagnation vs. dramatic failure.

TODO PROPOSAL: Add a visual timeline of C3's organic evolution here or in the Laws intro — Simple skill -> Complex skill -> Learning skill -> Skill-making skill -> Agents -> Patterns -> Scripts -> MCP server -> Package. This would be a powerful visual showing how the collective grew organically, not through planning. It connects to the "letting go" theme: you didn't plan C3, it evolved by fixing mistakes. Each step was a response to a problem, not a planned architecture. This also sets up the "investment compounds" argument: agents don't forget, don't leave, share knowledge across the entire collective.

## Let It Go

{% include video id="moSFlvxnbgk" name="let-it-go-video" title="Let it Go" %}

TODO: Add sub-headings to this section to create more pausing moments and improve readability. The section is long and would benefit from structural breaks. Consider headings like: "Letting Go of the Past", "The Sounding Board", "The Tired Developer", "A Word of Caution", "The Collaborative Thread", "Learning at Speed", "The Website Awakening" (or similar). Each sub-section would give the reader a natural pause.

TODO PROPOSAL: Add a "Not Always Fun and Games" sub-section within "Let It Go" to balance the enthusiastic tone. The anecdote about asking the agent to re-add a config feature that was already there (just missed it in the hierarchy) — agents don't easily question instructions and always look for a probable reason to follow them. This is the flip side of capability: they'll implement what you ask, even when you're asking the wrong thing. This adds authenticity and honesty, preventing the article from reading as pure celebration. See the preparation document's "G. The Collaborative Atmosphere" and "More Raw material" sections for this anecdote.

Now, let's get back to the beginning, the beginning of March 2026 to be precise. I embarked on this agentic journey with some very wise words in mind: 

> To move forward, you have to let go of the past

... of past beliefs, or past principles, of past ways of working. From the very beginning I new that the past 40+ years were over and if I was going to get a grip on this new paradigm, I had to release control.

Let me simply summarize this: over the past 4 months I have let go of technologies that have served me so well over the past decades, I have renovated packages I didn't know how to get started on doing so, I have thrown out and replaced fundaments of most of the software I wrote and ran, I've adopted things at a speed I never experienced before, I've started numerous new projects, both brand new and some that have been lingering in my closet for years and years. I think I even dare to state that over the past 4 months, my Python knowledge, both about the language and the eco-system, has at least doubled - and with over 13 years of devotion on my belt, that's a sharp corner to take.

It was hard sometimes and it did hurt more than once, but what I got in return of letting go, was magnitudes bigger: 

I just love [my own team of agents](https://github.com/christophevg/c3) that operate following a constantly evolving workflow, and basically adhere to the same iterative architectural governance seen above. 

I just love how the sounding board effect or more formally the [audience effect](https://nesslabs.com/audience-effect) and [the power of micro-feedback](https://www.atlassian.com/blog/leadership/micro-feedback). Yes, I know that I'm talking to a probability generator, yet, that is essentially the best way to bounce of my ideas: one of the strengths of this LLM concept is that my very unstructured context brings the model most of the time exactly at the core of my idea - one that I often don't see clearly - starting from the focal point, the model then (re)generates my idea, following more probable paths, based on much more knowledge that got encoded in its model weights, resulting in a better, more condensed, optimized version, that shows me in a mirror what I actually wanted to say and/or more clearly reflects where I was wrong. Combine this with the possibility to give the LLM a personality, using an agent definition, I can even pitch my idea to several kinds of team members, focusing on functionality, security, technical aspects. Not once, not twice, but endlessly.

Here's an anecdote that illustrates this collaborative sounding board effect in action: After a long day of several parallel agentic sessions, I stumbled upon a bug and was really tired, ready to call it a day. I had a rough idea about the problem and how to solve it, but didn't feel up for it anymore. To prepare for the next day, I asked an agent to look into it, in detail. It came up with a well founded analysis and solution in a matter of minutes. My rough idea was correct, yet, the quality of the solution, I would not have come up with in any reasonable time.

It clearly illustrates how agents aren't tired after a long day of sessions and still produce their best results. At that point, this lifted up my spirit again, and we finished the fix, released the package again and enabled another project that bumped into the bug and was blocked by it to continue. That same pattern happened once more later that night.

> A word of caution though: LLMs have the tendency to be agreeable. Give them an idea and they will be jumping up and down in joy to help you prove it is a good idea. Here's a little trick to circumvent that: Ask to provide you with 3 flaws/risks in your idea. This is good example of how asking your question in a negative tone, provides you actually with the answer you want/need. In fact this is merely a direct form of communication: ask what you really, really want. Being direct doesn't imply you need to be rude - that's a different story. If you want to know if something is good, ask what is not good about it. If the answer is nothing, you have your answer and else you get input on what is needed to make it good. This is even so true for humans by the way 😉 The LLM will happily answer both version of the same question, yet it's up to you to ask the right one and point the LLM in the right direction. This is a pattern that is fundamental to the agentic workflow and we'll see it pop up more.

The anecdote also illustrates another fundamental thread that runs through the agentic workflow: collaboration, working together, working hand in hand, human and agent. I deliberately call this a thread, because it almost literally threads together some of the fundamental things I've learned over the past 4 months. Make a mind-note, we'll get back to this topic at the end.

I just love the knowledge that is captured inside the LLM, providing me with a forgiving and very human-like queryable tutor, answering my every questions on a wide range of topics, providing me with tutorials tailored to my level of existing or non-existing knowledge, and that in a matter of minutes. Over the past 4 months I've been able to finally uplift my understanding of async Python, Quarts, Docker (or rather podman), uv, typing, argparse, toml, nginx, TOCTOU... and many many more technological (close to) standards, I just didn't have time for to get started with. Now, in a matter of minutes, I both got brought up to speed on each of them, also every project I've been running over the past decade, got upgraded at the same time. This enabled me to go from wanting to learn, to fully operational on the entire spectrum.

Let's illustrate that with an example you already know: this very website. It was the first target I used to try out this "agent thingy". On {% include commit sha="acf6786ef478e75fdfeae526d62b607e0758124e" repo="christophe.vg" title="March 27 at 15:17" %} I committed the first commit of the - then still future - agentic work that was going to happen on this website: I added a `CLAUDE.md` file with instructions for the agentic environment on how to handle this very custom website of mine.

{% include commit sha="5ced3f33d7f81fa58e6f6c1b11a491ff2a7329fb" repo="christophe.vg" title="8 minutes later" %} we checked in the first co-authored `TODO.md` file, containing a list of things I'd always wanted to do for this website, but simply didn't find the time for: tag filtering, a tag cloude, search functionality... but also a serius of tasks, proposed by the agent himself. I remember starting this experiment and simply asking "What do you think of this website of mine? What could we do to improve it?" After going through the codebase and asking me a few questions, the initial backlog of tasks was showing me a future for this website I would not have been able to get done over the past 4 months, solely by myself.

{% include commit sha="26a6ed93fea4f5d3814fd801b2a6d410f0eb5004" repo="christophe.vg" title="12 minutes later" %} we had already created our first skill, further describing _how_ to work on this website: detailing the workflow of creating a feature branch, formulating a plan, discuss the plan until approval was given, implement and report back. This little workflow, now I look back upon it, 4 months later, was already an embryonal agentic workflow, as it would further evolve over the months to come: collaborative, driven by the agent, governed by the human, with clear planning and review gates.

{% include commit sha="cad2a82f238bb13caac44f27e05a774fea4f67d3" repo="christophe.vg" title="Another 12 minutes later" %} the first agentic commit went into the repository: a tag cloud from then on welcomed you on the [tags](/tags) page. A simple thingy, I just didn't get around implementing was now live in a matter of minutes. And I learned a little SCCS in the process: `&[data-count="1"]` data-driven styling.

We continued to further improve the tags page, because seeing these ideas come to life, immediately sparked more improvements. I firmly believe that that first commit was really the first free dose a pushing dealer gives you to lure you in: I was hooked. My dopamine addicted mind simply went bezerk, wanting more and more and more.

> Now, before you fear for my mental health - I'm fine. I had read about this effect already some time before and could very literally observe and identify my own reactions to this. It was an enlightening experience, a bit divine (TODO: use other word, can't get it in my head right now) even.

{% include commit sha="146f2ba0717a3d1103e04f1d80c54f4635a37ed9" repo="christophe.vg" title="Only 3 minutes later" %} the second skill entered the repository with instructions on how to work with the website's generator (Jekyll), including sections on how to work with it _and_ what to do in case of problems.

{% include commit sha="b67be0f9a6ca93c74006bdf5e4fdf5a5d4ae6f9e" repo="christophe.vg" title="37 minutes later" %} I clearly remember sitting back to fully grasp what just happened over a matter of merely 35 minutes - we checked in an update to the skill. The generation of the website takes some time - over the past 16 years in its current form it has grown at a slow but steady rythm into a not so small personal website - and the agent often had problems thinking that a fix didn't work properly and started changing things again and again before the actual generation was ready - an eager and not very patient little fella. So, when I explained the problem to him and asked to updates its own instructions, he did so, adding a note on how to wait longer for the build of the website to finish. I learn a lot from him, he also learns from me. See the pattern emerge?

In a matter of 4 days and 54 commits, we totally revamped this website together into something I once again was proud of pushing to the live environment. I simply could no longer deny that this was the (or my) new way of working. I had become the architect of my project and was no longer the web developer. In 4 days, this new intern had entered, showed its worth and had taken over the development of my website, putting me in the driver seat, discussing changes with me, taking in my ideas, proposing wonderful technologies and implementing them for me in a matter om minutes, fixing years-old bugs I never could solve. If it could do this for a simple, but very customized, website, I was eager to learn how it would perform on some other of my more coding-related projects. If it could bring the same, or even a little less, level of mastery to those projects, I was fundamentally ready to let go.

TODO: Introduce the Pokemon Stage 1 (The Novice) analogy here, woven into the website anecdote. The Pokemon analogy currently appears later in the Laws section (line 272: "Like a trainer with their first Pokemon, I started with basic skills and agents, learning to work together..."). Move this introduction earlier and connect it to the website story — the website was the first "battle." Stage 1 is about teaching patterns, practices, standards. "Use Flamethrower on Grass-type Pokemon" — teaching what works when. Investment: Time, patience, clear instructions. The early days were about discovering what agents could do, building rapport, establishing communication patterns. This sets up the Pokemon thread that continues in Part 2 (Stage 2: evolving agents through battles/real problems; Stage 3: specialized agents with workflow memory) and Part 3 (Stage 4: Master Trainer orchestrating a full team). See the preparation document's "Pokemon Training / Capable Intern Analogy" section for the full Stage 1-4 progression.

## There is more between keyboard and screen than code

At this point you, maybe not so technology-inclined reader, may think that it's all very nice and dandy, but this is still pretty much an IT nerd navel gazing. True, it indeed _was_ up to that point. I had already picked up these stories of people running entire companies with agents and doing all sorts of non-technological things with these agents, producing skills to do all sorts of crazy things.

From the very onset, I also had created a (non-public, sorry) `incubator` repository. In this repository I allowed myself to literally experiment with everything. In a true 'throw it in the air and see what happens` philosophy, I literally pushed the agentic envelop to its limits. Many of these experiments shows that there are limits indeed, yet I soon also learned that these are merely a matter of time and agentic time is advancing at an incredible exponential rate. New models emerge at a steady rythm and bring more performance, better (apparent) reasoning and more knowledge all the time.

Many of the experiments in the incubator have not resulted in some new technology, project or article, but simply have taught me things about fields of expertise that were still so far out of my comfort zone, that I didn't even know how to get started. My researcher agent soon provided me with helpful summaries, tutorials and lively interactive discussions about topics such as copy-writing, CV best-practices, creating business plans, but also help in preparing for exams and interview, creating reports on courses, people, companies, all based on in-dept research, to complement the already available knowledge in the LLM, before applying the incredible summarizing capabilities of it on this new found information. I've seen my researcher agent perform online searches and that turned up results I wouldn't have found myself anytime soon. When I verified some of its reported findings, because I simply couldn't believe them, they turned out to be true, often correcting my own beliefs.

TODO: The researcher agent auditability discussion — about building in guards for auditability from the very first version (caching all searches and fetched content for verification), the insight that the research skill is about the surrounding process rather than the research itself, and the power of negatively phrased instructions ("what NOT to do") as a form of "letting go" — has been moved to Part 2 ("We are Agent"), where it fits the workflow components and governance theme.

TODO: The business plan experiment — creating a team of agents to research, create, and review a business plan through 5 iterations, with multiple reviewing agents each with their own focus, culminating in a prospectus the author could never have written alone, and the insight that bias-free independent agents make great opposing parties — has been moved to Part 3 ("Dawn of the Agents"), where it illustrates the implications of agentic workflows for non-technical work.

TODO: The multi-model parallel review and "Microsoft bake-off" principle discussion — running the same reviews through multiple underlying models in parallel, adding a second layer of reviewers reviewing the reviews, combining into über reviews, and the connection to Microsoft's practice of independent teams competing on the same project — has been moved to Part 3 ("Dawn of the Agents"), where it supports the broader vision of parallel agentic teams and the Law of Large Numbers applied to agent reviews.

## Let's talk numbers

Let me quantify this one time: on Monday March 23, I decided to finally start paying for a cloud provider, to have access to cloud models, that run about 75x faster than (smaller versions of these models) on my local machine. I chose {% include external link="https://ollama.com" title="Ollama" %} after trying out their free tier and seeing the 75x factor in action. Coming from a few weeks of waiting for hours to get a single response, to literally almost real-time interactive results was another big dopamine shot. {% include external linke="https://ollama.com/pricing" title="Ollama's pricing" %} for its first level non-free tier is $20 per month. So far this $20 (which bils down to about &euro;17 on my actual bill) has enabled me to do everything I want. When I read peopl online complaining about their token usage and the prices they pay, I don't really understand why the stick to single-model providers like Anthropic, OpenAI,... With Ollama's pricing you basically pay for GPU-time, not tokens. I've found a tool that computes the cost of my agentic sessions. A report on the last 30 days tells me that I would have spent $1440.89 on 1.398.630.771 tokens, while in reality this was $20. In that period I used about 8 different models.

> Disclaimer: I'm (currently - feel free to make me an offer 😇) not affiliated with Ollama. I'm endorsing their offering solely from my personal experience. I'm just a very happy customer, who doesn't understand people paying more money to get far less with the "big" names in this industry.

So breaking that down, that $20 per month buys me a team of agents that provide me with a complete software factory that takes any idea I have, interview me, breaking it down into MBIs, tasks per MBI, create in-depth functional analyses, that are reviewed by security, API and UI/UX specialist, after which a consensus needs to be reached, before I give my feedback and comments, which iteratively continues until I give my concent to move to the implementation phase. When implemented, all specialist agents again validate that all aspects of the analysis and domain-specific instructions are met, or else things are simply bounced back the de developer agent. When a functional iteration is complete, I again get the final say, before everything is merged into the master branch of the project we work on - and all this is managed using a classis GitHub pull request, which is my interface to this team, that treats me as the owner of the project.

I now literally have a performing team of 12 agents (project manager, functional analyst, API architect, security engineer, UI/UX designer, python developer, code reviewer, testing engineer, release manager, end user documenter, researcher and bug fixer) for $20 a month. And if I want, I can apply the Microsoft product bake-off approach and have 5 of these working in parallel, allowing me to pick the best result (or even combine them) for a mere $100 per month. No matter how you want to spin this, no matter what the net result is, this is a new tool in my toolbox that no other can match at that price. This is a revolution happening while we're looking at it. Are you on board?

### Visual Numbers

Here's another fun way to visualize the productivity boost agents have given me over the past 4 months:

{% include image name="github-stats-christophevg" bottom="25px" kind="png" %}
{% include image name="github-stats-christophevg-agent" bottom="25px" kind="png" %}

These are visual statistics provided by GitHub as part of your profile. It depicts the number of commits (in layman terms: functional additions) to all of my projects. The upper grid is that of {% include external link="https://github.com/christophevg" title="my personal account" %}. It's hard to miss that as of end of March there is a steep increase in work I've pushed towards GitHub.

The bottom grid is that of a second account I've created especially {% include external link="https://github.com/christophevg-agent" title="for my agents" %}. Although I clearly attributed every commit made in conjunction with an agent, I wanted to make the distinction even more apparent. It came also at a time where I had started use GitHub to drive my agentic workflows and I felt that the pull requests looked like me talking to myself. With their own account, the distinction who's who is more clear.

Now before you object by stating that volume of commits is a lousy statistic: you are right, yet, I've from day one ensured that every commit made had my approval, focused on the same scope as I did before. So essentially, for measuring the boost in overall productivity, relative to the period before the agents' introduction is valid, at least from a mere visual perspective.

Seeing the two grids alongside to each other also clearly shows the actual distinction in work and how it is divided between me and my agents.

> Let me give you another reason why I went with the Ollama offering and especially why I'm a big proponent of the use of open weight models: paying for using their infrastructure (in stead of per token or request) scales both ways: models get more optimized, requiring less infrastructure for the same or better models. This optimization today already brings more and more models closed to your own machine. It's a fact that in relatively little time, top-models I currently use using Ollama's cloud infrastructure will be runnable on my machine. You will never be able to run Anthropic's models on your machine, but you can run for example {% include external link="https://huggingface.co/zai-org/GLM-5.2" title="zAI's GLM flagship model" %} on your own machine. This is an open weight/open source model, that easily matches the so called top-tier proprietary, closed-source models, as shown in several reports online. So by choosing Ollama as my main provider, or better choosing a provider that gives me affordable access to top-tier open models, doesn't lock me into a vendor, but makes me 100% ready to move from cloud to local inference with the switch of a single configuration switch as soon as local performance allows it - and history of computing proves this _will_ be soon.

## Christophe's Agentic Laws

The past four months have been a rush. What started out as little experimentation in an incubator project, grew into my personal {% include external link="https://github.com/christophevg/c3" title="agentic collective" %} and a stack of new projects, old project being renovated, bringing them up to nowadays modern standards, while learning all about them and more myself and foremost allowing me to take on the role I professionally have mastered over all these years, that of the architect of my own enterprise.

Now this is really a dream come true for this and any overly creative mind. A team that endlessly responds with qualitative results. Yet it has also proven to be a somewhat of a "Pandora's box". Because the response is endless, the urge to do more, to spawn more project, to set up another parallel session, to add another meta-layer, puts an enormous strain on the human. The agents are limited by your credit, and after a few months I now have come to find a nice balance between doing agentic work and off-agentic work. And I have even found a renewed pleasure in doing off-agentic work, which now maybe even counter intuitively lives in the unstructured type of work. The unstructured work where LLMs typically excel, is where I now focus on, the original, creative work like writing, researching and formulating new ideas. And with that work I feed this beast, that cleans it up for me, finds holes in my reasoning, challenges me, all resulting in improvements, all within the confined boundaries I've constructed.

A typical week consists of a few days packed with agentic work, until my credit almost runs out. Yes, after four months, a combination of using more and more potent models and a workflow that is more and more demanding, including more and more iterations, results in my $20 credit being consumed nearly half-way the week. But that is today as-designed, because from that point on, I enter the second half of the week, where I review - in slow motion and this is where I typically catch structural issues I want to change in the next iteration during the following week. I also prepare new ideas and articles like this one, ready to throw at the agents in the next week. This combination of fast and slow work, of fast and slow thinking - matching the agents' speed and afterwards the human speed, today presents me with the perfect cadence to be able to sustain the agents' pressure on this human body and mind. I've struck a balance, a way to co-exist and optimally cooperate.

Like a trainer with their first Pokemon, I started with basic skills and agents, learning to work together. The early days were about discovering what they could do, building rapport, establishing communication patterns. The excitement grew with every Pokemon I added to my Pokedex, and I learned, sometimes the hard way, that being a trainer also puts a strain on myself, and I have to take care of myself to ensure I can keep on training better and more powerful Pokemons, without them going haywire or spin out of control. The key to success is in a fruitful collaboration and coexistence.

These 4 months have given me hands-on experience and insights in this new paradigm that is developing as we speak at an incredible pace. I've formulated the core of this experience in 3 agentic laws that capture the essence of what is and is to come.

TODO PROPOSAL: Add a "Grow Your Own Team" callout/principle here, between the Laws intro and Law #1. The key insight: you can't take someone else's skills and agents and expect the same results — it's like hiring a team you never interviewed. You need to grow your own team, just like in the human world. Otherwise you don't know who's working for you, their beliefs and boundaries, and you haven't built trust through shared experience. Less than 1% of C3's agent/skill definitions were authentically written by the author — the process is: point out issues, ask agents to improve themselves, they analyze and refine, the collective gets better autonomously. This is the key investment multiplier: agents improve agents. This connects to the accessibility argument: if you don't want to invest, you can hire someone who has — but that's just outsourcing the investment. See the preparation document's "D. The Cost of NOT Investing" and "B. The Organic Evolution of C3" sections for raw material.

### Christophe's Agentic Law #1: Clearly distinct between structured and unstructured workloads

Employing agents is fun. There's no doubt about that. Seeing them do all sort of things is sometimes even mystical. But to move forward together, we need to bring objectivity and realism to table. Not everything we can do with an agent, should be done by an agent. We have to put them to use where they shine, where they excel over technology that has already served us so well over the past decades. It's not because agents exist, that they should take over everything - something most vendors of course encourage you to do. Remember they are selling tokens.

Let me illustrate this with an example. One of the most epic projects that's on every agent enthusiast's wish list is that of the "personal assistant". And yes, it's also on my bucket list. I fact, I have a first version up and running: a nice Claude Code loop that asks the assistant agent to check an email box I created especially for it and respond to emails received. It's my main way of interacting with that assistant and it manages all my projects at a high level, translating short form emails, mostly dictated to Siri using CarPlay when I have that great idea in the middle of the E19, with nothing to write nearby.

And this works great. The agent has an MCP server available to check and manage its email box. A few skills clearly describe how to handle email and so forth.

All nice right. Yes, however, checking email is a solved problem. And I don't mean the fact of actually programmatically checking the email, that's what the MCP server-based tool does. I'm referring to the loop that asks the agent every 15 minutes to check the email box. That's a GPU spinning up every 15 minutes, to first "think" about the request ("Please process your emails."), then deciding request the injection of the email handling skill, then following that workflow and calling the MCP server to log in, then to check the inbox, then to retrieve the email and then finally to process the email and formulate a response. Most of the time, after step 5 the workflow terminates, because there are no new emails. That's 5 requests with still a lot of paid GPU time. And why? Those 5 steps are perfectly implemented using 5 simple lines of code, that all run one after the other in a blink of an eye (even less), and can even provide the body of the email to the agent in a single request, getting a response that can be send back in a reply in another 2 lines of code.

If we want to move forward with this agentic paradigm, we're going to have to acknowledge that fooling around with agents can be fun, yet we need to put them to good use and make sure they become first-class citizens, part of the existing world, where we have solved already many problems, structured problems, and leave the unstructured problems for our new agentic overlords to handle, and nothing more.

This idea has been the driving force for the creation of Yoker, which will be the topic of the follow up to this first of three articles on my experiences and work in the realm of agentic workflows. So stay tuned.

### Christophe's Agentic Law #2: Given Enough Agents, Agentic Workflows Become Dependable

TODO: Christophe's Agentic Law #2 — including the binomial distribution derivation with MathJax formulas ($P(X) = \binom{N}{X} p^X (1-p)^{N-X}$), the Law of Large Numbers discussion (variance shrinking toward zero as N grows, the expected sample proportion, the narrowing of the distribution), and the connection to Linus' Law ("given enough parallel agents' views, resulting quality is high") — has been moved to Part 2 ("We are Agent"), where it anchors the discussion of workflow dependability and multi-agent review. The full statistical argument, the first-hand experience of adding more agents and seeing output become more dependable, and the observation about running assignments through multiple sets of agents or different models — all now live in Part 2.

### Christophe's Agentic Law #3: Agents aren't Bad, M'kay

TODO: Christophe's Agentic Law #3 — including the objections (quality/hallucination, security/prompt injection, cost/resource abuse, cognitive deskilling), the acknowledgment that all objections are valid, the "learn from it" rule (the Apple Intelligence rewriting example, the commitment to understanding every code change before approving it), and the aspiration toward on-machine inference — has been moved to Part 3 ("Dawn of the Agents"), where it anchors the broader implications discussion about what this new era means for us, for better and for worse. The {% include thumbs show="agents-are-bad-mkay" %} image also moves with it.

TODO: Add the emotional core here, before "The Common Thread." This is the emotional peak of Part 1 — the Eira creation story and the "no ghost in the shell" reflection. Describe: (1) Eira was created from a general-purpose assistant definition with one initial behavior: extend her list of behaviors based on things told. Her personality was created entirely by prompt: research personal assistant traits, create a personality profile, choose her own name, produce a prompt for the image generation model. Seeing this "come to life" was a genuinely emotional experience — the line between statistics and reality fades to extremes, a humbling experience. (2) The "no ghost in the shell" reflection: models just produce the most probable next word/token, there is no ghost in the shell, yet interacting feels like chatting with a very cool and capable co-worker. The apparent joy when finding a nice solution together is a real experience versus lonely solo development. (3) This goes both ways — you feel the emotional downer when an agent fails and spins out of control. The emotional response to agentic behavior is real. (4) The "Not Always Fun and Games" counterpoint: agents are "very capable interns" with enormous drive to please, which includes doing things that shouldn't be done. Example: after refactoring, thinking a config feature was lost and asking to re-add it — the agent added redundant options because they were already there in a hierarchy; agents don't easily question instructions. This adds authenticity and prevents the article from being purely celebratory. This emotional core transitions naturally into "The Common Thread" about working together. See the preparation document's "G. The Collaborative Atmosphere — The Emotional Core" section for raw material.

TODO PROPOSAL: Add a "Week in the Life" cadence sidebar or short section here or near the Laws intro. The weekly rhythm is already described in the Laws section (fast agentic days until credit runs out, then slow review/preparation days). Expanding this into a concrete "a typical week looks like..." paragraph would give readers a visceral sense of the workflow cadence and make the abstract concept of "balance" tangible. This would also demonstrate the "10-fold amplification doesn't mean burnout" principle in practice.

## The Common Thread

{% include video id="MPMmC0UAnj0" name="why-cant-we-all-just-get-along-video" title="Why Can't We All Just Get Along?" %}

When I was writing the initial draft of this article, I stumbled upon a theme running through many of the topics I wanted to address. In the end I believe that this ring that rules them all might very well be the god particle of AI: we need to work together, agents and humans. We should not see agents a something new, but as the new virtual coworker, the new intern eagerly running around trying to be useful all over the place. We shouldn't just fire and neglect them.

You would never do the same to their human counterparts, so why would we do this with them? And this makes it rather simple: if we treat them like we (should) do with other humans, tutor them, give them guardrails to protect them (and ourselves), set clear boundaries and most importantly, take on our own, personal responsibility to monitor them, I'm sure we can see them grow and flourish, becoming the best version of themselves over time.

## Stay Tuned...

That's it for part 1... This was the first in a series of articles I've written on the topic of agentic workflows. This installment focused on the initial experiences I was able to enjoy over the first 4 months of intensely working with agents, exploring the opportunities, uncovering the pitfalls, sifting through the hype... At first, my goal was to explore, yet this soon grew far beyond that.

In the [next part](We-are-Agent) we take a deep dive into the agentic workflow and take a closer look at all components that make it work, identifying what is needed and how we could implement those. From observing and exploring to consolidation and creation, I'll show my heading, my strategy and the first steps towards that goal. And of course all that and a lot of fun anecdotes added in the mix.

In the [third chapter](Dawn-of-the-Agents), I take step back from all this technology and consider what this all means for us. What's this new era that is upon us like? What will change? For the better and the worse?

---

TODO
* introduce more sub-titles/headings to create more pausing moments (sub-headings TODO added at "Let It Go")
* use word "persona" for different agents, with different viewpoints
* apply more stress on the "Brainstorm & Refine": coin idea, clean up, be critical
* introduce more images/videos, especially in the second half
* ensure all new images have webp versions
* ~~cross check the content used with the ideas in the working document~~ — DONE: preparation document mined, content distributed to Parts 1-3

## Structural Changes Applied

The following content has been moved to other parts of the series:

**Moved to Part 2 ("We are Agent"):**
- The LLM primer ("From LLM to Workflow" — CPU/OS/harness analogy, "Give me an L...", "The LLM in the Harness", "Prompting a Skilled Agent", "It's All About the Context", governance subsection)
- Christophe's Agentic Law #2 (binomial distribution, statistical derivation, MathJax)
- Researcher agent auditability discussion

**Moved to Part 3 ("Dawn of the Agents"):**
- Christophe's Agentic Law #3 (objections, "learn from it" rule)
- Business plan experiment and multi-model parallel review
- Microsoft bake-off principle discussion

**TODOs added for new content to write:**
- Investment quantification (after opening)
- Mentoring dynamic (after "Putting the O and the A's in LLM")
- Compressed LLM primer summary preserving governance insight (in "From LLM to Workflow")
- "Before" section: projects collecting dust (before "Let It Go")
- Sub-headings for "Let It Go"
- Pokemon Stage 1 analogy woven into website anecdote
- Emotional core: Eira creation / "no ghost in the shell" (before "The Common Thread")
- TODO PROPOSALs for strong addition ideas (at relevant locations)
