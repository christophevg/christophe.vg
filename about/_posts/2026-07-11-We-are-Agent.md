---
title: We are Agent
short:
  - waa
tags:
  - thing
  - professional
  - agentic
  - ai
  - personal
header:
  teaser: /about/images/thumb/we-are-agent.png
  image: /about/images/header/we-are-agent.png
---

TODO: Write an introduction that bridges from Part 1 ("Hello Agents"). In Part 1, I shared the personal shift from excitement to practice — the holiday mode, the first argument over spaces, the website awakening, the emotional core. Here in Part 2, we go deeper into the mechanics: what makes an agentic workflow actually work? What are the components? How do you implement governance? This is the method article — practical, repeatable, grounded in 25+ years of architectural experience applied to virtual co-workers. We start with the technical foundation (the LLM primer), then build up through Law #2 (why enough agents make workflows dependable), then explore the workflow properties, components, and the stories that illustrate them in action.

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

## Christophe's Agentic Law #2: Given Enough Agents, Agentic Workflows Become Dependable

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

## The Researcher's Auditability

> From the very first version of my researcher agent, or rather the research skill, I focused on auditability. Most part of its instructions are on creating a local cache of everything it searched for and fetched. I really wanted to be able to both verify the search results, as well as the actual content that it based its reports on. I was very wary that it would produce material I could not review, knowing that by nature an LLM will produce very qualitative none-sense in the blink of an eye. Given the fundamental nature of a researcher agent, I had to draw a firm line here. This example again shows a fundamental aspect of an agentic workflow: governance, more specifically building in guards that monitor the workflow and make it auditable for the human in the equation.
> If you look at the definition of the {% include external link="https://github.com/christophevg/c3/blob/master/skills/research/SKILL.md" title="research skill" %} you notice pretty soon that this _skill_ isn't really about doing the research itself. It actually deals with the surrounding process, the surrounding workflow on how to deal with the artifacts, with the follow up of uncertainties, with quality checklists,... This typically includes explicitly what **not** to do, which is sometimes much more powerful than trying to describe what to do. Negatively phrased instructions limit the agent where **not** to go, yet at the same time keep all other options open, avoiding in steering it _only_ in the direction _you_ already know. This is another example of the whole "letting go".

TODO: Expand this section to connect the auditability principle to the broader workflow governance theme. The researcher agent's auditability is one concrete example of building in guards. How does this generalize to other agents? What other governance mechanisms has C3 implemented? How does the human stay in the loop without becoming the bottleneck?

## Agentic Workflow Properties

TODO: Write this section based on the following properties discovered through experience. Each property should be illustrated with a concrete example from the past 4 months.

### Always Iterate at Least Twice

TODO: The first design, the first generation is never "perfect." Illustrate with the example of the KB category structure: the initial researched category/section structure simply didn't work. After asking to research and review it, the structure became much better. This is the "think before you act" principle made concrete — the first pass is a draft, the second pass incorporates review feedback.

### Give Freedom to Create, Then Let It Review Itself Critically

TODO: Iteratively evolving agents and skills. Example: agent/skill design — research, create, ask questions, use it, give feedback, let it review and improve. The process is: let the agent create freely, then ask it to critically review its own work. This is the "verify afterwards" half of the Waterfall rehabilitation.

### The True Python Spirit: Better to Ask for Forgiveness Than Permission

TODO: Let it go, iterate, let agents discover and fix their own mistakes. Don't preemptively constrain — let them try, fail, and learn. This connects to the "letting go" theme from Part 1. The agents' mistakes are learning opportunities, not failures to be prevented.

### Agents Aren't Mind-Readers... Nor Are People!

TODO: Why treat agents differently from humans? The expectation of mind-reading is higher with agents than with human colleagues, yet the same communication principles apply: be clear, be specific, provide context. The frustration comes from expecting magic vs. doing the work. "A word is enough for the wise" applies because agents have seen patterns — they recognize what you're describing from training data. But when you're exploring novel territory (like the early Clevis project), you need to prototype first.

### Bottom-Line: Is It Any Different With Humans?

TODO: Best practices that all come together: text is everything, console is everything, Python is everything, iterative improvement is everything, teamwork is everything. "A tool with a fool is still a fool" — now any fool can generate an application in no time. But that application can be full of holes because the fool can't detect them. The workflow — not the agent — is what makes the difference.

## Agentic Workflow Components

TODO: Describe the components of a complete agentic workflow, based on what C3 has evolved into over 4 months. Each component should be explained with its role, how it was discovered/created, and how it interacts with the others.

### Research

TODO: The research phase — using the researcher agent to gather information before acting. How this prevents uninformed decisions and grounds the workflow in facts.

### Improve Skills/Agents

TODO: The self-improvement loop — agents review their own performance and propose changes to their definitions. Less than 1% of C3's definitions were authentically written by the author. The process: point out issues, ask agents to improve themselves, they analyze and refine, the collective gets better autonomously.

### Multiple Views on Analysis

TODO: Before development, multiple agents analyze from different perspectives: functional analyst, API architect, security engineer, UI/UX designer. Each catches different issues. The analysis isn't done until consensus is reached.

### Multiple Views on Review

TODO: After development, the same multi-perspective review happens. The project-manager issues reviews from the functional-analyst for feature completeness, then from domain-specific agents. Issues are raised, the developer agent fixes them, all without human intervening (unless the human gates it).

### Human Gate Keeper

TODO: The human remains the project owner. The human gives final approval before merging. The human is the source of truth for direction and priorities. The human provides feedback and comments that drive iterations. The GitHub pull request is the human's interface to the team.

### Lessons Learned

TODO: The lessons-learned skill at the end of sessions. It reviews the entire session and proposes changes/creations to agents/skills. This is how the workflow improves itself — not by planning, but by retrospecting. Every mistake becomes codified. Every success becomes a pattern. The investment compounds because agents don't forget, don't leave, and share knowledge across the entire collective.

## Rehabilitation of Waterfall

TODO: Write this section about how agentic workflows rehabilitate the Waterfall methodology. Waterfall has been downplayed for being slow and bloated. With agentic workflows allowing analysis, design, and review to happen in minutes, the "bloated" approach is no longer bloated. Applying many agents in parallel to create many different viewpoints for analysis and reviews creates guardrails and a dependable workflow with less chance of agents going haywire. The key insight: apply "Think before you act and verify afterwards" (Waterfall) at the speed of Agile through agents. Multiple analyses and reviews (Waterfall depth) happen in minutes (Agile speed) because agents do the work in parallel. See also [50 Shades of Ceremony](/50-shades-of-Ceremony/) for the detailed view on Waterfall vs Agile. The agentic workflow is the way I've always seen Waterfall vs Agile: they are structurally the same, only the scope of each iteration is smaller.

## The Security Agent Story

TODO: Write the story of the security agent that blocked a quick feature. While trying to implement a generic configuration system (using clevis), the security agent flagged it as insecure, requiring more security-related features to avoid implementing a local wrapper. See: https://github.com/christophevg/roomz/pull/6 and https://github.com/christophevg/clevis/issues/4. As the owner, I was confronted with an agent from my collective that literally blocked me from quickly moving forward. The Steve Jobs moment: "Why hire good people and tell them what to do?" I could have overridden the agent with "just do it" — but that would toss the value of my investment into the garbage. Instead, I honored the agent's remarks and created a feature request with the clevis project. The guardrails ARE the agents themselves — not just methodology or process, but active enforcement. The security agent literally blocked the owner from taking a shortcut. This is Waterfall's enforcement mechanism now made fast by agents. Multiple agents reviewing from different angles = multiple guardrails. This story demonstrates: agents enforce standards even when you don't want them to; this IS the "deep investment"; this prevents the horror stories; the human instinct to override is the exact moment where investment pays off or fails.

## TOCTOU - The Standard Workflow in Action

TODO: Write the TOCTOU story as an example of the standard workflow functioning as designed. During a standard agentic workflow session, the Python developer agent completed implementing a feature. Following the established workflow: (1) the project-manager issues reviews from the functional-analyst for feature completeness; (2) then domain-specific agents review from their perspectives — API Architect for APIs, UX-UI designer for user interaction, Security engineer for security aspects. The security engineer agent noticed a TOCTOU (Time-Of-Check to Time-Of-Use) vulnerability when accessing files — a classic security issue where the time between reading/confirming access rights and applying them creates an attack vector. The resolution: review issues raised by security agent, developer agent fixes them, all without user intervening. This demonstrates: no manual intervention needed, the workflow loops back and forth until everything is clear, multiple agent perspectives catch issues that a single developer — even an experienced one — might miss. The security engineer caught something I would never have thought of, despite my earliest professional experiences being in security. Trust the process.

## Autonomy While Agents Work

TODO: Write about the autonomy the workflow enables. The workflow: (1) create a feature request issue on GitHub; (2) agentic workflow loops back and forth until requirements are clear; (3) work begins in a feature branch with quality gates (draft PR checks); (4) final approval through pull request merge. While agents work (analyzing, developing, running tests, reviewing code from multiple perspectives, fixing issues), the user works on other topics. Example: writing an article while being interviewed by the functional-analyst agent. A popup notification signals when the user needs to validate, review, or give feedback. This demonstrates: the workflow enables autonomy through trust, the user is not bottlenecked by constant supervision, the investment in process pays off in regained time, multiple agents work in parallel on different aspects, the user stays in control without being in the way.

## "Agents Aren't Mind-Readers" - The Clevis Lesson

TODO: Write the story of expecting mind-reading and learning the lesson. While developing Clevis, I expected my agents to read my mind, like they sometimes had before. The LLM backing them is trained with so much material that it statistically produces things I would have thought of if I knew about them — but this is not mind-reading, it's pattern matching. Clevis was in a very early state, I was still discovering the right approach, which resulted in sub-optimal results from the agents and I got frustrated. I was wrong to be frustrated; my actions were correct: I started developing/prototyping the interface until I was happy with it, then enjoyed manually implementing the bare minimum, then started a session with the functional analyst to review my prototyping work. Within minutes the agent had analyzed my prototype and prepared tasks for the entire project team. The lesson: agents aren't mind-readers, but "a word is enough for the wise" certainly applies. When you clearly articulate (prototypes, specifications, analysis), agents excel. The frustration comes from expecting magic vs. doing the work. Clear articulation IS the investment.

## Pokemon: The Evolving and Specialized Agent

TODO: Continue the Pokemon analogy from Part 1. Here in Part 2, cover Stage 2 and Stage 3.

### Stage 2: The Evolving Agent

TODO: "Let it consolidate learning into workflow." Agents develop skills (abilities) and evolve (evolved forms). Investment: reviewing work, giving feedback, iterating. Analogy: leveling up through battles (real problems). Example: the KB structure refinement — initial structure didn't work, research + review, better structure. The agent learned from the mistake and the review, becoming better for the next task.

### Stage 3: The Specialized Agent

TODO: Agents have "workflow memory" from lessons learned. They apply patterns autonomously. Investment: minimal — they remember from context. Analogy: a Pokemon with the right nature, abilities, and moves for specific battles. Example: the TOCTOU catch, the autonomy while working, Eira's behavior retention (told once to use HTML for emails, she retained it across sessions). This is where the Pokemon progression becomes real: teach once, use forever. The key difference from human interns: human interns eventually leave, taking knowledge with them. Agents stay, share knowledge across the ENTIRE collective. Every lesson learned improves ALL future sessions. Investment compounds, doesn't walk out the door.

## Main Messages

TODO: Write the main messages section, summarizing the key takeaways from Part 2:

- Reuse the skills you as a human have acquired over time when dealing with other humans — they still apply. Managing an agentic workflow isn't any different from managing a human-based workflow. Both require clear specification, guidelines, review/control/follow-up.
- Sh*t in == Sh*t out. The quality of the workflow depends on the quality of the input. Agents amplify what you bring — expertise, standards, processes. Garbage in, garbage out.
- The workflow — not the agent — is what makes the difference. A single agent is a probability generator. A well-designed workflow with multiple perspectives, review gates, and governance is what produces dependable results.
- Invest in growing your own team. Don't download someone else's skills and expect the same results. You need to know who's working for you, their beliefs and boundaries, and you need to build trust through shared experience.
- Let agents improve agents. The self-learning loop — point out issues, ask agents to improve themselves, they refine — is the key investment multiplier.

## Stay Tuned...

TODO: Write the wrap-up for Part 2, bridging to Part 3 ("Dawn of the Agents"). In Part 3, I take a step back from the technology and the method and consider what this all means for us. What's this new era that is upon us? What will change? For the better and for the worse? From the mechanics of Part 2, we zoom out to the implications.

---

TODO
* Add section headings and sub-headings throughout for readability
* Introduce images/videos, especially for the security agent story and TOCTOU example
* Ensure all new images have webp versions
* Cross-reference with Part 1 and Part 3 for consistency
* The Pokemon analogy should thread through all three parts — verify Stage 1 (Part 1) -> Stage 2-3 (Part 2) -> Stage 4 (Part 3) progression is coherent
