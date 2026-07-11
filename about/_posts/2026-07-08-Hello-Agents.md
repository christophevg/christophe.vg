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
thumbs:
  files:
    agents-are-bad-mkay:
      kind: png
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
an expressionless young man in a khaki uniform and a Sam Browne belt,
asked to see the blue plastic ID card.

The boy in the back seat handed it to his mother. His mother handed it
to the  guard. The guard took it to a computer terminal that looked
strange and out of place in the rural stillness.
```

Now let's again feed the first half to our LLM and ask ik to do what it does best...

{% include image name="yoker-the-long-walk-1" bottom="25px" kind="png" %}

So it seems our monkey _can_ produce the works of Shakespeare, but not so much the works of Stephen King. Although it surely produced a compelling start of another story.

Let's try that one more time...

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

## There is more between keyboard and screen than code

At this point you, maybe not so technology-inclined reader, may think that it's all very nice and dandy, but this is still pretty much an IT nerd navel gazing. True, it indeed _was_ up to that point. I had already picked up these stories of people running entire companies with agents and doing all sorts of non-technological things with these agents, producing skills to do all sorts of crazy things.

From the very onset, I also had created a (non-public, sorry) `incubator` repository. In this repository I allowed myself to literally experiment with everything. In a true 'throw it in the air and see what happens` philosophy, I literally pushed the agentic envelop to its limits. Many of these experiments shows that there are limits indeed, yet I soon also learned that these are merely a matter of time and agentic time is advancing at an incredible exponential rate. New models emerge at a steady rythm and bring more performance, better (apparent) reasoning and more knowledge all the time.

Many of the experiments in the incubator have not resulted in some new technology, project or article, but simply have taught me things about fields of expertise that were still so far out of my comfort zone, that I didn't even know how to get started. My researcher agent soon provided me with helpful summaries, tutorials and lively interactive discussions about topics such as copy-writing, CV best-practices, creating business plans, but also help in preparing for exams and interview, creating reports on courses, people, companies, all based on in-dept research, to complement the already available knowledge in the LLM, before applying the incredible summarizing capabilities of it on this new found information. I've seen my researcher agent perform online searches and that turned up results I wouldn't have found myself anytime soon. When I verified some of its reported findings, because I simply couldn't believe them, they turned out to be true, often correcting my own beliefs.

> From the very first version of my researcher agent, or rather the research skill, I focused on auditability. Most part of its instructions are on creating a local cache of everything it searched for and fetched. I really wanted to be able to both verify the search results, as well as the actual content that it based its reports on. I was very wary that it would produce material I could not review, knowing that by nature an LLM will produce very qualitative none-sense in the blink of an eye. Given the fundamental nature of a researcher agent, I had to draw a firm line here. This example again shows a fundamental aspect of an agentic workflow: governance, more specifically building in guards that monitor the workflow and make it auditable for the human in the equation.
> If you look at the definition of the {% include external link="https://github.com/christophevg/c3/blob/master/skills/research/SKILL.md" title="research skill" %} you notice pretty soon that this _skill_ isn't really about doing the research itself. It actually deals with the surrounding process, the surrounding workflow on how to deal with the artifacts, with the follow up of uncertainties, with quality checklists,... This typically includes explicitly what **not** to do, which is sometimes much more powerful than trying to describe what to do. Negatively phrased instructions limit the agent where **not** to go, yet at the same time keep all other options open, avoiding in steering it _only_ in the direction _you_ already know. This is another example of the whole "letting go".

This culminated in an experiment to create a team of agents to create a business plan for a business idea I happen to have lying around. The experiment started at a meta-level with instructions for the researcher agent to find information about the skills needed to create and review a business plan. In the next phase, these newly created skills were used to again research and create a business plan for the idea provided to them. The resulting plan was then reviewed by the review skill, to produce a really harsh and incredibly critical review. After about 5 iterations of creating, reviewing, updating and again reviewing, the reviewing team (yes team, because the reviewing was done by several agents by that time, each with their own focus), concluded that the business plan was ready for presenting to investors. Upon reading the report myself, I could only conclude that over the course of my entire professional career, I myself would never have been able to write such a well structured, well founded and realistic prospectus, seeing it contain answers to all the remarks my own documents had received on numerous occasions, and more. The level of competence that was created in a matter of hours, the improvements between each iteration of the document, showing that given good input and enough different agents' (re)views, really proves that even simple statistics result in the right knowledge to be applied to about any case and can produce really high-quality results. The fact that every request to an LLM is bias-free, is handled independently, without memories or recollection of any prior response, outside its context, makes that two independent agents are great opposing parties that really bring out the best in each other.

I took this even one step further and had several underlying models perform exactly the same reviews in parallel, each time, adding in a second layer of reviewers that reviewed the reviews and again found both flaws and common ground in the reviews, combining these reviews into über reviews. I remember that I wrote once during this process that the well known principle at Microsoft to create multiple completely independent teams to work on the same project, and then pit them against each other and in the end pick the best one to continue, is _so_ well suited for this agentic workflow. Given the speed at which you can now actually have the exact same problem handled by 3, 5, 10 separate instances of agentic workflow teams is an incredible property of this new way of working. It is literally a prime example of large numbers at work, and it is now more affordable than ever and is in implicit guarding opportunity not to be missed.

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

Seeing the two grids alongside to each other also clearly shows the actual distinction in work and how it is divided between my and my agents.

> Let me give you another reason why I went with the Ollama offering and especially why I'm a big proponent of the use of open weight models: paying for using their infrastructure (in stead of per token or request) scales both ways: models get more optimized, requiring less infrastructure for the same or better models. This optimization today already brings more and more models closed to your own machine. It's a fact that in relatively little time, top-models I currently use using Ollama's cloud infrastructure will be runnable on my machine. You will never be able to run Anthropic's models on your machine, but you can run for example {% include external linkz="https://huggingface.co/zai-org/GLM-5.2" title="zAI's GLM flagship model" %} on your own machine. This is an open weight/open source model, that easily matches the so called top-tier proprietary, closed-source models, as shown in several reports online. So by choosing Ollama as my main provider, or better choosing a provider that gives me affordable access to top-tier open models, doesn't lock me into a vendor, but makes me 100% ready to move from cloud to local inference with the switch of a single configuration switch as soon as local performance allows it - and history of computing proves this _will_ be soon.

## Christophe's Agentic Laws

The past four months have been a rush. What started out as little experimentation in an incubator project, grew into my personal {% include external link="https://github.com/christophevg/c3" title="agentic collection" %} and a stack of new projects, old project being renovated, bringing them up to nowadays modern standards, while learning all about them and more myself and foremost allowing me to take on the role I professionally have mastered over all these years, that of the architect of my own enterprise.

Now this is really a dream come true for this and any overly creative mind. A team that endlessly responds with qualitative results. Yet it has also proven to be a somewhat of a "Pandora's box". Because the response is endless, the urge to do more, to spawn more project, to set up another parallel session, to add another meta-layer, puts an enormous strain on the human. The agents are limited by your credit, and after a few months I now have come to find a nice balance between doing agentic work and off-agentic work. And I have even found a renewed pleasure in doing off-agentic work, which now maybe even counter intuitively lives in the unstructured type of work. The unstructured work where LLMs typically excel, is where I now focus on, the original, creative work like writing, researching and formulating new ideas. And with that work I feed this beast, that cleans it up for me, finds holes in my reasoning, challenges me, all resulting in improvements, all within the confined boundaries I've constructed.

A typical week consists of a few days packed with agentic work, until my credit almost runs out. Yes, after four months, a combination of using more and more potent models and a workflow that is more and more demanding, including more and more iterations, results in my $20 credit being consumed nearly half-way the week. But that is today as-designed, because from that point on, I enter the second half of the week, where I review - in slow motion and this is where I typically catch structural issues I want to change in the next iteration during the following week. I also prepare new ideas and articles like this one, ready to throw at the agents in the next week. This combination of fast and slow work, of fast and slow thinking - matching the agents' speed and afterwards the human speed, today presents me with the perfect cadence to be able to sustain the agents' pressure on this human body and mind. I've struck a balance, a way to co-exist and optimally cooperate.

Like a trainer with their first Pokemon, I started with basic skills and agents, learning to work together. The early days were about discovering what they could do, building rapport, establishing communication patterns. The excitement grew with every Pokemon I added to my Pokedex, and I learned, sometimes the hard way, that being a trainer also puts a strain on myself, and I have to take care of myself to ensure I can keep on training better and more powerful Pokemons, without them going haywire or spin out of control. The key to success is in a fruitful collaboration and coexistence.

These 4 months have given me hands-on experience and insights in this new paradigm that is developing as we speak at an incredible pace. I've formulated the core of this experience in 3 agentic laws that capture the essence of what is and is to come.

### Christophe's Agentic Law #1: Clearly distinct between structured and unstructured workloads

Employing agents is fun. There's no doubt about that. Seeing them do all sort of things is sometimes even mystical. But to move forward together, we need to bring objectivity and realism to table. Not everything we can do with an agent, should be done by an agent. We have to put them to use where they shine, where they excel over technology that has already served us so well over the past decades. It's not because agents exist, that they should take over everything - something most vendors of course encourage you to do. Remember they are selling tokens.

Let me illustrate this with an example. One of the most epic projects that's on every agent enthusiast's wish list is that of the "personal assistant". And yes, it's also on my bucket list. I fact, I have a first version up and running: a nice Claude Code loop that asks the assistant agent to check an email box I created especially for it and respond to emails received. It's my main way of interacting with that assistant and it manages all my projects at a high level, translating short form emails, mostly dictated to Siri using CarPlay when I have that great idea in the middle of the E19, with nothing to write nearby.

And this works great. The agent has an MCP server available to check and manage its email box. A few skills clearly describe how to handle email and so forth.

All nice right. Yes, however, checking email is a solved problem. And I don't mean the fact of actually programmatically checking the email, that's what the MCP server-based tool does. I'm referring to the loop that asks the agent every 15 minutes to check the email box. That's a GPU spinning up every 15 minutes, to first "think" about the request ("Please process your emails."), then deciding request the injection of the email handling skill, then following that workflow and calling the MCP server to log in, then to check the inbox, then to retrieve the email and then finally to process the email and formulate a response. Most of the time, after step 5 the workflow terminates, because there are no new emails. That's 5 requests with still a lot of paid GPU time. And why? Those 5 steps are perfectly implemented using 5 simple lines of code, that all run one after the other in a blink of an eye (even less), and can even provide the body of the email to the agent in a single request, getting a response that can be send back in a reply in another 2 lines of code.

If we want to move forward with this agentic paradigm, we're going to have to acknowledge that fooling around with agents can be fun, yet we need to put them to good use and make sure they become first-class citizens, part of the existing world, where we have solved already many problems, structured problems, and leave the unstructured problems for our new agentic overlords to handle, and nothing more.

This idea has been the driving force for the creation of Yoker, which will be the topic of the follow up to this first of three articles on my experiences and work in the realm of agentic workflows. So stay tuned.

### Christophe's Agentic Law #2: Given Enough Agents, All Agentic Solutions Become Dependable

Building on law #1, we have to also acknowledge that unstructured input results in (mostly) unstructured output or at least output that has the level of dependability of unstructured output. If you want to put this differently: when we rely on a probabilistic method, the outcome is probabilistic.

Luckily, statistics is also on our side in this case: more reviews increase the reliability of a product's quality involves the Law of Large Numbers. As the number of reviews ($N$) grows, the average observed rating gets closer to the true, hidden quality.

For example, applying the binomial distribution. Imagine each review is a test. It can be a success (good review) or a failure (bad review). Let p be the true probability of a good review. Let N be the total number of reviews. Let X be the number of good reviews. The probability of getting exactly X good reviews is:

$$P(X) = \binom{N}{X} p^X (1-p)^{N-X}$$

This teaches us that a growing number of reviews improves the certainty of our quality estimate, causing the observed quality to lock onto the true quality.

In a binomial distribution, you have $$N$$ reviews and a true probability $$p$$ of a positive review.

* The expected number of positive reviews is: $$E(X) = N \times p$$.
* The expected sample proportion (observed quality) is: $$\frac{E(X)}{N} = p$$.
 
No matter if $$N$$ is 5 or 5,000, the average expected quality remains $$p$$. 

The magic happens when you look at the variance of that sample proportion. Variance measures how much your observed rating is likely to swing away from the truth.

Variance of the proportion = $$\frac{p(1-p)}{N}$$.

Because $$N$$ is in the denominator, as $$N$$ grows, the variance shrinks toward zero. 

When $$N$$ is small (e.g., $$N = 3$$), a few random bad reviews can completely skew the results, making a great product look terrible (observed quality $$= 0\%$$). As $$N$$ grows large 

* The distribution of the average rating narrows into a sharp spike.
* The probability that the observed quality deviates from the true quality approaches zero. 

Summary: A larger $$N$$ removes the "noise" of random chance. It does not make a bad product good, but it augments the statistical quality of the data, ensuring that a high rating on screen genuinely reflects a high-quality product in reality.

So, when applying agentic workflows, make sure to address a large amount of agents to the problem, each reviewing each other's work. What has proven {% include external link="https://en.wikipedia.org/wiki/Linus%27s_law" title="correct for bugs" %}, also applies here.

And I've experienced this first hand. I started out with a single (default) agent, but soon enough, as I added more agents, preparing work, reviewing work, all from different angles, I saw that the output became more and more dependable.

Also running the same assignment through multiple sets of agents or even using different models, produced different outcomes, which then could be used in a consolidation of best worlds style to produce a superior result over the initial works.

### Christophe's Agentic Law #3: Agents aren't Bad, M'kay

{% include thumbs show="agents-are-bad-mkay" %}

Yes, I've also read the objections to agentic workflows and AI in general: on one side these objections focus on the quality, stating it are merely probabilistic models, that only, at best, produce what you train them with, and often even ahllucinate. On top of that, training them now already with their own output will create a degenerative downward spiral of slot,...

Other objections focus on security: giving agents access to tools and data opens doors to vulnerabilities. Malicious actors can use "prompt injection" to trick agents into taking unintended actions, accessing restricted files or leaking private information.

High costs and abuse of resources is another class of objections: multi-step reasoning and tool-call loops consume significant computing power and time. Making thousands of API calls for a simple task can incur wasteful costs. As a consequence these objections also point to the environmental impact of all these huge datacenters that are consume a lot of (natural) resources.

It might seem old fashioned, but there is surely truth in the objection due to cognitive deskilling: relying on agents to do the thinking for us, can cause loss of our own problem-solving skills and memory over time. It has been said about calculators, computers, online search, and now surely applies to agents.

All these objections are valid. I subscribe to each and every one of them. Still, just like with the demise of the calculator, the rise of the machines and the internet, agents and AI in general are here to stay, so we will have to find a reasonable way to coexist.

I have formulated the following rule with respect to the use of AI: when I apply it, I want to at least learn from it. This can take many shapes: for some time now, I'm a happy camper, enjoying the benefits of having Apple Intelligence rewrite parts of my English texts. I'm not a native English speaker/writer, so the quality of my writing varies. However, I have an urge to write good English, using a good amount of English idioms. When I ask Apple Intelligence to rewrite my texts, I always first copy the result and compare it in detail to my own. Next I evaluate which parts of the rewritten text are apparently better. This still relies on my own perception and gut feeling if something sound more/better English to me. If so, I see this as a way learn, and I incorporate it in my original text.

Every change that has happened to my coding projects, over the past 4 months, has every time been a learning experience. Before an agent could introduce a new technology or code change in general, I asked it to explain it to me. In the end it are _my_ code repositories, and I will always remain (at least) responsible for what I put out there. My agents are in the end mere tools, just like an editor, a spelling checker, an online search engine,...

This rule doesn't answer all objections. I think it answers those that I can control, within my personal reach. Today I can't solve the problem of wasteful abuse of resources, yet, as state above, in the not so distant future, my agentic strategy strives towards on-machine inference, which then at least answers a few more.

## The Common Thread

{% include video id="MPMmC0UAnj0" name="why-cant-we-all-just-get-along-video" title="Why Can't We All Just Get Along?" %}

When I was writing the initial draft of this article, I stumbled upon a theme running through many of the topics I wanted to address. In the end I believe that this ring that rules them all might very well be the god particle of AI: we need to work together, agents and humans. We should not see agents a something new, but as the new virtual coworker, the new intern eagerly running around trying to be useful all over the place. We shouldn't just fire and neglect them.

You would never do the same to their human counterparts, so why would we do this with them? And this makes it rather simple: if we treat them like we (should) do with other humans, tutor them, give them guardrails to protect them (and ourselves), set clear boundaries and most importantly, take on our own, personal responsibility to monitor them, I'm sure we can see them grow and flourish, becoming the best version of themselves over time.

## Stay Tuned...

That's it for part 1... This was the first in a series of articles I've written on the topic of agentic workflows. This installment focused on the initial experiences I was able to enjoy over the first 4 months of intensely working with agents, exploring the opportunities, pitfalls,... At first, my goal was to explore, yet this soon grew far beyond that.

In the [next part]() we dive deeper into this realm of agents and I'll introduce you to my vision of it: Yoker. From observing and exploring, I'll show my heading, my strategy and the first steps towards my goal.

In the [third chapter](), I'll also lift the veil on the overall picture that has been driving me in this direction and how I've fundamentally embedded agentic workflows in everything I do. And all that is based on the fundamental laws and rules I set out above in this first part... Hello Agents!

---

TODO
* introduce more sub-titles/headings to create more pausing moments
* use word "persona" for different agents, with different viewpoints
* apply more stress on the "Brainstorm & Refine": coin idea, clean up, be critical
* introduce more images/videos, especially in the second half
* ensure all new images have webp versions
