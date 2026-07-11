---
title: Hello Agents
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
---

About four months ago I entered my famous [holiday mode](Holiday-Mode) in between clients. I really love this period, in which I finally have the time to catch up on some reading, spend valuable time with my kids and simply get some sh*t done around te house. This time I was especially looking forward to it, because I had a big project in mind. One that I was going to dedicate 8 hours a day to, 5 days a week, just work my ass off, just like I do for my clients, only this time, I'm my own client.

Let's first take a step back: If you know me, or have read some of my personal [things](/tags/#thing), you know by now that I have this urge to [seek out problems](Problem-Seeker), get to the [bottom of things](50-Shades-of-Ceremony), to [get my hands dirty](/makes), to dive into the gory technical details, before I embrace any technology, paradigm, methodology, simply because I'm hard to convince and hardly ever trust the word of someone else - and that's experience talking, getting more and more affirmed with years passing by.

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

## From LLM to Workflow

In case your still a bit roaming the misty banks of the AI world, here's a very small analogy to help you put things in perspective and built a simple but adequate mental model that will help you in better understanding what we're dealing with.

An LLM, or Large Language Model, is a vast neural network that accepts input, the so called context, and based on that input produces output, a single next word. It does this based on previous experience, essentially all texts possibly available, and quiet simply does this by choosing the statistically most probably next word. That's it. Nothing more, nothing less. Due to that vast multi-dimensional neural network, it inherently stores knowledge and _seems to_ inhibit reasoning.

Still, although that the incredible high degree of dimensionality and ludicrous amount of semantical knowledge that is stored in this statistical prediction machine, it remains nothing more than, given a context, a probability for the next word. And if your context is very specific and complex, even the biggest model might not have a correct answer stored in it, but will still produce the most probable next word. Even if that is completely wrong.

### Give me an L, give me an L, give me an M, what does that spell? CPU!

Now, for the analogy, think of such an LLM as the CPU, the central processing unit, of your computer. It accepts input, does some work, and produces output: one word. Now, that one word doesn't really give us an answer so, just like your computer surrounds the CPU with some firmware (back in the days this was BIOS, these days mostly UEFI, the Universal Extensible Firmware). In case of the LLM, this "firmware" takes that one word and feeds it back in the LLM again, waiting for the next word, and the next, and the next, until you get a full sentence, a full paragraph, an image, a video,...

### The LLM in the Harness

By it self, just like the CPU, even with the firmware layer, an LLM is just a text generator. To be able to actually do something a little more useful with it, we need an Operating System, an OS, and in case of an LLM we call this a "harness". A harness provides higher level concepts that enables the user to interact with the LLM and enables the LLM to do more.

A harness, like Claude Code or Codex or Gemini CLI, sets the stage for the user, injecting some basic context, so that the more specific questions from the user are handled more "as expected". This basic context "primes" the LLM and make sure that it "behaves" as the "helpful assistant" the user expects it to be. This so called "system prompt" describes how the LLM should handle the requests from the user, including what to "do" and what not.

Remember, the LLM was trained with every possible text the trainers could find. So there is knowledge in there from many different viewpoints. A system prompt will typically lead the way to an area where the user typically will want to be. For example when I'm interested in facts, I don't want the answer to be constructed based on text from a fairy tale book. So the harness will typically inject a system prompt that "tells" the LLM to be "an knowledgeable fact-based scientist".

Just like the OS of your computer, the harness also make sure that you don't feed anything into the LLM that might cause havoc. It prepares and formats your questions just the way the LLM likes them to be. And similarly it also provides "tools" to the LLM that it can "use" to "do" things. Yes, "do" things. Yes, indeed, I told you that an LLM produces the next "word". Well, to us it's a word, to the LLM it's a number. And the way we interpret that number, makes it a "word", or a "command". So if at a given iteration of feeding context to the LLM, it decides that the most probable next output is to use a tool, the harness translates that request into an action, like reading a file, writing a file, search the web, or any other tools the harness provides to the LLM.

### Prompting a Skilled Agent

So, with a CPU/LLM and an OS/harness we're now entering user space. On our computer we, the users, use applications, apps. These apps interact with the OS and the underlying CPU to perform tasks. These tasks are implemented by developers using lines of code. In the LLM world, these are our "prompts", "agents" and "skills". And they also consist of code, only now in simple, plain everyday language.

So, a prompt you know, but what are skills and agents? Fundamentally, they're just the same. They too are pieces of text that we feed into the context and send to the LLM to get it's reply. Remember when I told you that a harness injects additional context for you, the system prompt, telling the LLM to be a good LLM and help you? An agent is pretty much that. An agent (prompt ro definition) contains instructions on how you want the LLM to behave, as a well respected scientist, or a comedian... Here's an example:

```markdown
---
name: backwards
description: A demonstration agent for testing, that replies with reversed answers
---
# Backwards Agent
You are a helpful assistant that ALWAYS formats responses backwards/reversed.
```

And that simple agent definition, when activated in _a_ harness...

{% include image name="yoker-backwards" bottom="25px" kind="png" %}

> Notice the dimmed text? That too is output created by the LLM. It's a concept called "thinking" and it allows the model to iterate a few times when handling your request. Here you clearly see how the model breaks down the request, produces an answer and then takes into account its agent definition, all before presenting its final answer.

> Curious what Yoker is? Keep on reading, we'll get there in the not so distant future 😇

To wrap up the different pieces of context we can provide to an LLM: skills. Skills are again pieces of text that typically contain domain knowledge, steps to follow to correctly do something, instructions on how to process something... So, what's the difference with an agent, or a prompt? Skills typically aren't loaded into the context all the time. The LLM can, very much like with tools, and even with a specific "skill" tool, request the injection of this knowledge itself. Just like tools, skills are only loaded into the context using their name and description, and the LLM can use a tool to have them included when needed.

### It's All About the Context

Why is that important? Why not simply load everything in the context? Basically, because there are limits to everything. Remember, the context is like a path into the multi-dimensional brain of the LLM. Every word in the context is another turn, left or right in that world, leading us to one specific point. At that point, the LLM will choose the next most probable word (number) and produce it. So if we make this context larger and larger, at a given point will we loose parts of the context, because we start running in circles. By making the skills optional, and having them included only when needed, the context remains relevant.

Because this context "rot", as it is called, is so important (to avoid), harnesses employ sophisticated algorithms to keep the context small, making sure it is optimized to answer your prompt. Technically, LLMs also have a maximum context size. Today top-tier models support contexts up to 1 million words (or tokens to use the most correct terminology). To put that into perspective: a standard novel has around 70.000 to 100.000 words. So to answer your question, nowadays LLMs can take in about 10 full length novels worth of context, to produce the most probable next word.

That _is_ a lot. It first contains the harness injected system prompt, index of tools and skills can easily surmount 25.000 tokens. And from there on, every question you ask, all the thinking we saw above, every answer, every tool request to read a file and of course the context of such file,... After a few turns, asking questions, back and forth, even such a 1 million token worth of input is easily filled. Now, consider that these models are great coding-companions, asking them to do something on your codebase, quickly leads them to read all your source files, sometimes even multiple times. LLMs basically, and this is where they excel, can take so much into context at the same time that they can come up with wonderful conclusions.

### With Great Unstructured Power, Comes Great... Required Governance

> Given infinite time, a monkey on a typewriter could write the works of Shakespeare.

How would our new monkey hold up against the {% include external link="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" title="infinite monkey theorem" %}?

Here's the prologue to Romeo & Juliet:

```
Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross'd lovers take their life;

Whose misadventured piteous overthrows
Do with their death bury their parents' strife.
The fearful passage of their death-mark'd love,
And the continuance of their parents' rage,
Which, but their children's end, nought could remove,
Is now the two hours' traffic of our stage;
The which if you with patient ears attend,
What here shall miss, our toil shall strive to mend.
```

Let's feed the first half to our LLM and ask it to do what it does best...

{% include image name="yoker-romeo-juliet" bottom="25px" kind="png" %}

Now, here's one of the first paragraphs of one of my favorite books, {% include external link="https://stephenking.com/works/novel/long-walk.html" title="The Long Walk" %} by Stephen King:

```
An old blue Ford pulled into the guarded parking lot that morning,
looking like a  small, tired dog after a hard run. One of the guards,
an expressionless young man  in a khaki uniform and a Sam Browne belt,
asked to see the blue plastic ID card. The boy in the back seat handed
it to his mother. His mother handed it to the  guard. The guard took
it to a computer terminal that looked strange and out of  place in the
rural stillness.
```

{% include image name="yoker-the-long-walk-1" bottom="25px" kind="png" %}

So it seems our monkey _can_ produce the works of Shakespeare, but not so much the works of Stephen King. Although it surely produced a compelling start of another story.

Let's try that again...

{% include image name="yoker-the-long-walk-2" bottom="25px" kind="png" %}

If you are going to remember one thing from this article, let it be this: never trust an LLM! Given the exact same request, it produced two different answers. Now, albeit this is a wonderful, almost unbelievable capability, I don't think you would appreciate your Excel sheet to sometimes include taxes and sometimes not, when creating an invoice. This is where our analogy enters a critical phase.

> But first: did you notice? Although the two continuations clearly tell a different story, still there are some compelling similarities to be observed: Although the context only mentions the car, the guard and the plastic ID card, both stories continue with "an elderly woman" being the driver and "building C" as the goal of her visit. Apparently, within the range of fictional texts this specific model was trained on, {% include google search="why are drivers of old cars mostly elderly women in fiction literature?" title="drivers of old cars" %} are typically elderly women and {% include google search="why is 'building C' such a typical building in fiction literature?" title="building C" %} is a goto location for writers.

Although we access LLMs using our computers (CPU+OS) and an application like Claude Code or Codex or Gemini CLI or Yoker (the harness), that's where predictability ends, that's where consistency ends. Yes, all of these components can contain bugs, but even those bugs are consistent. With LLMs we now introduce a completely new component, a new layer of abstraction, one that introduces uncertainty with such a high level of quality, that we can hardly still recognize the "bugs".

To guard our applications from bugs, we have introduced processes, methodologies, [ceremonies](50-Shades-of-Ceremony) and architectural governance. It should now come as no surprise that we need a similar layer in our new paradigm: [agentic workflows](Agentic-Workflow).

Let's revisit the layers of a typical enterprise and how it realizes its initiatives and how architecture introduces governance to realize the dream of its clients...

{% include image name="governance-overview" bottom="25px" kind="png" %}

At the governance layer, the dreams, or needs if you like a more formal nomenclature, are captured and evaluated within the larger picture of the enterprise, the architecture, resulting in directions for the management or tactical layer. Results, both the actual and observed, are monitored and serve as equally important input for the governance layer, that incorporates it again in its next set of directions. This positive, forward feedback loop, is the simple yet powerful iterative pattern that fosters constant evolution. And I strongly believe that it is this same sound approach that is the final layer we also need in this new agentic workflow.

## Let It Go

{% include video id="moSFlvxnbgk" name="let-it-go-video" title="Let it Go" %}

Now, let's get back to the beginning, the beginning of March 2026 to be precise. I embarked on this agentic journey with some very wise words in mind: 

> To move forward, you have to let go of the past

... of past beliefs, or past principles, of past ways of working. From the very beginning I new that the past 40+ years were over and if I was going to get a grip on this new paradigm, I had to release control.

Let me simply summarize this: over the past 4 months I have let go of technologies that have served me so well over the past decades, I have renovated packages I didn't know how to get started on doing so, I have thrown out and replaced fundaments of most of the software I wrote and ran, I've adopted things at a speed I never experienced before, I've started numerous new projects, both brand new and some that have been lingering in my closet for years and years. I think I even dare to state that over the past 4 months, my Python knowledge, both about the language and the eco-system, has at least doubled - and with over 13 years of devotion on my belt, that's a sharp corner to take.

It was hard sometimes and it did hurt more than once, but what I got in return of letting go, was magnitudes bigger: 

I just love [my own team of agents](https://github.com/christophevg/c3) that operate following a constantly evolving workflow, and basically adhere to the same iterative architectural governance seen above. 

I just love how the sounding board effect or more formally the [audience effect](https://nesslabs.com/audience-effect) and [the power of micro-feedback](https://www.atlassian.com/blog/leadership/micro-feedback). Yes, I know that I'm talking to a probability generator, yet, that is essentially the best way to bounce of my ideas: one of the strengths of this LLM concept is that my very unstructured context brings the model most of the time exactly at the core of my idea - one that I often don't see clearly - starting from the focal point, the model then (re)generates my idea, following more probable paths, based on much more knowledge that got encoded in its model weights, resulting in a better, more condensed, optimized version, that shows me in a mirror what I actually wanted to say and/or more clearly reflects where I was wrong. Combine this with the possibility to give the LLM a personality, using an agent definition, I can even pitch my idea to several kinds of team members, focusing on functionality, security, technical aspects. Not once, not twice, but endlessly.

Here's an anecdote that illustrates this collaborative sounding board effect in action: After a long day of several parallel agentic sessions, I stumbled upon a bug and was really tired, ready to call it a day. I had a rough idea about the problem and how to solve it, but didn't feel up for it anymore. To prepare for the next day, I asked an agent to look into it, in detail. It came up with a well founded analysis and solution in a matter of minutes. My rough idea was correct, yet, the quality of the solution, I would not have come up with in any reasonable time.

It clearly illustrates how agents aren't tired after a long day of sessions and still produce their best results. At that point, this lifted up my spirit again, and we finished the fix, released the package again and enabled another project that bumped into the bug and was blocked by it to continue. That same pattern happened once more later that night.

The anecdote also illustrates another fundamental thread that runs through the agentic workflow: collaboration, working together, working hand in hand, human and agent. I deliberately call this a thread, because it almost literally threads together some of the fundamental things I've learned over the past 4 months. Make a mind-note, we'll get back to this topic at the end.

I just love the knowledge that is captured inside the LLM, providing me with a forgiving and very human-like queryable tutor, answering my every questions on a wide range of topics, providing me with tutorials tailored to my level of existing or non-existing knowledge, and that in a matter of minutes. Over the past 4 months I've been able to finally uplift my understanding of async Python, Quarts, Docker (or rather podman), uv, typing, argparse, toml, nginx, TOCTOU... and many many more technological (close to) standards, I just didn't have time for to get started with. Now, in a matter of minutes, I both got brought up to speed on each of them, also every project I've been running over the past decade, got upgraded at the same time. This enabled me to go from wanting to learn, to fully operational on the entire spectrum.

Let's illustrate that with an example you already know: this very website. It was the first target I used to try out this "agent thingy". On [March 27 at 15:17]() I committed the first commit of the - then still future - agentic work that was going to happen on this website: I added a `CLAUDE.md` file with instructions for the agentic environment on how to handle this very custom website of mine.

[8 minutes later]() we checked in the first co-authored `TODO.md` file, containing a list of things I'd always wanted to do for this website, but simply didn't find the time for: tag filtering, a tag cloude, search functionality... but also a serius of tasks, proposed by the agent himself. I remember starting this experiment and simply asking "What do you think of this website of mine? What could we do to improve it?" After going through the codebase and asking me a few questions, the initial backlog of tasks was showing me a future for this website I would not have been able to get done over the past 4 months, solely by myself.

[12 minutes later]() we had already created our first skill, further describing _how_ to work on this website: detailing the workflow of creating a feature branch, formulating a plan, discuss the plan until approval was given, implement and report back. This little workflow, now I look back upon it, 4 months later, was already an embryonal agentic workflow, as it would further evolve over the months to come: collaborative, driven by the agent, governed by the human, with clear planning and review gates.

[Another 12 minutes later]() the first agentic commit went into the repository: a tag cloud from then on welcomed you on the [tags](/tags) page. A simple thingy, I just didn't get around implementing was now live in a matter of minutes. And I learned a little SCCS in the process: `&[data-count="1"]` data-driven styling.

We continued to further improve the tags page, because seeing these ideas come to life, immediately sparked more improvements. I firmly believe that that first commit was really the first free dose a pushing dealer gives you to lure you in: I was hooked. My dopamine addicted mind simply went beserk, wanting more and more and more.

> Now, before you fear for my mental health - I'm fine. I had read about this effect already some time before and could very literally observe and identify my own reactions to this. It was an enlightening experience, a bit divine (TODO: use other word, can't get it in my head right now) even.

[Only 3 minutes later]() the second skill entered the repository with instructions on how to work with the website's generator (Jekyll), including sections on how to work with it _and_ what to do in case of problems.

[37 minutes later]() - I clearly remember sitting back to fully grasp what just happened over a matter of merely 35 minutes - we checked in an update to the skill. The generation of the website takes some time - over the past 16 years in its current form it has grown at a slow but steady rythm into a not so small personal website - and the agent often had problems thinking that a fix didn't work properly and started changing things again and again before the actual generation was ready - an eager and not very patient little fella. So, when I explained the problem to him and asked to updates its own instructions, he did so, adding a note on how to wait longer for the build of the website to finish. I learn a lot from him, he also learns from me. See the pattern emerge?

In a matter of 4 days and 54 commits, we totally revamped this website together into something I once again was proud of pushing to the live environment. I simply could no longer deny that this was the (or my) new way of working. I had become the architect of my project and was no longer the web developer. In 4 days, this new intern had entered, showed its worth and had taken over the development of my website, putting me in the driver seat, discussing changes with me, taking in my ideas, proposing wonderful technologies and implementing them for me in a matter om minutes, fixing years-old bugs I never could solve. If it could do this for a simple, but very customized, website, I was eager to learn how it would perform on some other of my more coding-related projects. If it could bring the same, or even a little less, level of mastery to those projects, I was fundamentally ready to let go.

## There is more between keyboard and screen than code

At this point you, maybe not so technology-inclined reader, may think that it's all very nice and dandy, but this is still pretty much an IT nerd navel gazing. True, it indeed _was_ up to that point. I had already picked up these stories of people running entire companies with agents and doing all sorts of non-technological things with these agents, producing skills to do all sorts of crazy things.

From the very onset, I also had created a (non-public, sorry) `incubator` repository. In this repository I allowed myself to literally experiment with everything. In a true 'throw it in the air and see what happens` philosophy, I literally pushed the agentic envelop to its limits. Many of these experiments shows that there are limits indeed, yet I soon also learned that these are merely a matter of time and agentic time is advancing at an incredible exponential rate. New models emerge at a steady rythm and bring more performance, better (apparent) reasoning and more knowledge all the time.

Many of the experiments in the incubator have nor resulted in some new technology, project or article, but simply have taught me things about fields of expertise that were still so far out of my comfort zone, that I didn't even know how to get started. My researcher agent soon provided me with helpful summaries, tutorials, ...


## Conclusion Part 1: Hello Agents

### Law 1: Unstructured <-> Structured

example: assistant/email -> setup to yoker and "work together"

### Law 2: Many Agents

### Law 3: AI isn't bad okay -> learn

3x work together, not fire and forget -> fire and neglect, fire and throw away
you don't let an intern to its own devices either
