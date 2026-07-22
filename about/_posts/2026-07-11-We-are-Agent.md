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

This is the second part of a three-part series on my explorations, vision, and strategy regarding agentic workflows. [Part one, Hello Agents](Hello-Agents), the initial encounter with and the impact agents have had in a matter of a few months, laid the groundwork for this series. From the initial argument over spaces and the exploration of how agents can support the authoring of this website, to the clearly emotional impact and the first law defining the crucial boundaries between structured and unstructured workloads, we've only scratched the surface. Now, it's time to dive deeper into the details and further elaborate on the initial experiences, as we've merely touched the tip of the iceberg. In Part two, we'll go beyond the surface and explore the mechanics of agentic workflows. We'll examine what makes an agentic workflow truly effective, identify its components, and discuss the implementation of governance.

## From LLM to Workflow

In case your still a bit roaming the misty banks of the AI world, here's a simple analogy to help you put things in perspective and create a mental model that will help you gain a better understanding of the fundamental concepts, their properties and the implications of those properties.

An LLM, or Large Language Model, is a vast neural network that accepts input, known as context, and generates output, specifically the next word. The process is based on its previously trained experience, essentially all available texts, and it simply selects the statistically most probably next word. That's it. Nothing more, nothing less. Due to its vast multi-dimensional neural network, it inherently stores knowledge and _appears to_ inhibit reasoning.

Despite its incredible high dimensionality and ludicrous amount of semantic knowledge, this statistical prediction machine is essentially a probability model for the next word, given a specific context. Given highly complex and specific contexts, even the most advanced models may not have a definitive answer, but they will still generate the most probable next word, even if it's entirely incorrect.

### Give me an L, give me an L, give me an M, what does that spell? CPU!

Now, let's consider the analogy. Imagine such an LLM as the central processing unit (CPU) of your computer. It receives input, processes it, and generates output, one word at a time. However, this single word doesn't provide a complete answer. Similarly, your computer surrounds the CPU with firmware (back in the days, it was BIOS, and nowadays, it's mostly UEFI, the Universal Extensible Firmware). In the case of the LLM, this "firmware" takes that single word and feeds it back into the LLM, waiting for the next word, and so on, until you obtain a complete sentence, a full paragraph, an image, or even a video.

### The LLM in the Harness

An LLM, like the CPU, is essentially a text generator. However, to make it more useful, we need an Operating System (OS). In the context of an LLM, we call this OS a "harness". A harness provides higher-level concepts, that enable users to interact with the LLM and enhance its capabilities.

A harness, such as Claude Code, Codex, or Gemini CLI, sets the stage for the user by injecting basic context. This context helps the LLM handle more specific user questions more effectively. By priming the LLM with this basic context, we ensure that it behaves as the helpful assistant the user expects. This "system prompt" outlines how the LLM should respond to user requests, including what actions to take and what to avoid.

Remember, the LLM was trained on a vast collection of texts, including several distinct perspectives. An LLM contains both the work of Shakespeare, as well as a technical analysis of those same works. There might even be a critical discussion about the moral objections one could have regarding some of his work. A system prompt typically guides the user towards a desired area of interest. For instance, when seeking factual information, I prefer answers not derived from fictional sources like fairy tales. Therefore, the harness usually injects a system prompt instructing the LLM to adopt the persona of a knowledgeable fact-based scientist.

Similar to the operating system of your computer, the harness ensures that the LLM receives only appropriate input to prevent potential problems. It formats your questions to align with the LLM's preferred structure. Additionally, the harness provides the LLM with "tools" that it can utilize to perform various tasks. Yes, indeed, I mentioned that an LLM generates the next "word." To us, it's a word, but to the LLM, it's a number. Our interpretation of this number transforms it into a "word" or a "command". Consequently, when the LLM determines that the most probable next output involves using a tool, the harness translates this request into an action, such as reading a file, writing a file, searching the web, or utilizing any other tools provided to the LLM.

### Prompting a Skilled Agent

So, with a CPU/LLM and an OS/harness, we're now entering user space. On our computers, we, the users, use applications, or apps. These apps interact with the OS and the underlying CPU to perform tasks. These tasks are implemented by developers using lines of code. In the LLM world, these are our "prompts," "agents," and "skills." And they also consist of code, but now in plain, everyday language.

You understand what a prompt is. What are skills and agents? Fundamentally, they're just the same. They're both pieces of text that we feed into the context and send to the LLM to get its reply. Remember when I mentioned that a harness injects additional context for you, the system prompt, instructing the LLM to behave appropriately and assist you? Well, an agent is essentially that. An agent (by definition) contains instructions on how you want the LLM to behave, such as acting as a well-respected scientist or a comedian. Here's an example:

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

> Notice the dimmed text? That's also output generated by the LLM. It's a concept called "thinking", which enables the model to iterate a few times when processing your request. Here, you can clearly observe how the model breaks down the request, generates an answer, and then considers its agent definition before presenting its final response.

> Curious about what Yoker is? Keep reading, and we'll find out in the near future. 😇

To wrap up the various pieces of context we can provide to an LLM, let's talk about skills. Skills are essentially pieces of text that usually contain domain knowledge, step-by-step instructions for performing a task, or guidelines for processing information. Now, what sets skills apart from agents or prompts? Unlike agents or prompts, skills aren't always included in the context. However, the LLM can, much like using tools, and even with a specific "skill" tool, request the injection of this knowledge itself. Just like tools, skills are only loaded into the context using their name and description, and the LLM can utilize a tool to include them when necessary.

### It's All About the Context

Why is that important? Why not simply load everything in the context? Essentially, because there are limits to everything, even if those limits are big. Remember, the context acts as a path into the multi-dimensional brain of the LLM. Each word in the context represents a turn, either left or right, in that world, leading us to a specific point. At that point, the LLM selects the next most probable word (number). So, if we expand the context, at some point, we'll lose parts of it because we might cross into other areas of the model, off-topic, making the LLM produce far less contextual relevant predictions.

Because this context "rot," as it's called, is so crucial (to avoid), harnesses employ sophisticated algorithms to keep it small, ensuring it's optimized to answer your prompt. For example: by making the skills optional and including them only when necessary, the context remains a little more relevant.

So, how much information _can_ we feed into an LLM? Technically, LLMs do have a maximum context size. Today, top-tier models support contexts up to 1 million words or I should rather say "tokens", to use the more accurate terminology. And on average, in English, 1 word equals roughly 1 1/3 tokens. In Spanish this can rise to 2 tokens, and programming languages typically have a 1 1/2 to 2-token factor. This is the nature of how information is translated to the token-based model-language. For example, a long word like "unbelievable" gets broken into smaller pieces first. 

To put all that into perspective, a standard novel has around 70,000 to 100,000 words. So, to answer your question, nowadays LLMs can take in about 7 to 8 full-length novels worth of context and generate the most probable next word.

That _is_ a lot. And I does need it. It first contains the harness-injected system prompt, the index of tools and skills can easily exceed 25.000 tokens. From there, every question you ask, all the thinking we discussed above, every answer, every tool request to read a file, and of course, the context of such a file... After a few turns, asking questions, back and forth, even such a 1 million-token worth of input is easily filled. Now, consider that these models are excellent coding companions. Asking them to perform a task on your codebase quickly leads them to read all your source files, sometimes even multiple times.

Large language models, in essence, and this is where they excel, can simultaneously take in a vast amount of context, enabling them to arrive at remarkable conclusions. They are capable of establishing semantic connections across a range of information, spanning those seven to eight novels, which guides them to a highly specific location that precisely addresses the concept at hand. Subsequently, they apply their trained knowledge to this specific location to generate the most probable response to it.

> Now, I know that the following comparison is technically incorrect, but it's difficult not to draw parallels between LLMs and our brains, our learning, thinking, and response-generation processes. Our brain too functions as a large model, typically trained using language constructs like "Hey Christophe, look, this is... a book!" Our parents repeatedly used these constructs, and eventually, we began repeating them based on the context we were in. Over time, we accumulated a vast amount of information, often by reading books, allowing us to combine elements of our context with our trained knowledge. Sometimes, we even make slight mistakes or creative deviations, leading to remarkable conclusions.

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

Let's feed the first half to an LLM and ask it to do what it does best... generate the next words...

{% include image name="yoker-romeo-juliet" bottom="25px" kind="png" title="A session demonstrating an LLM generating the exact text of Romeo and Juliet." %}

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

{% include image name="yoker-the-long-walk-1" bottom="25px" kind="png" title="A session showcasing an LLM's ability to generate a completely different and ‘creative' text version of The Long Walk." %}

It appears that our monkey _can_ create the works of Shakespeare, but not so much those of Stephen King. Nevertheless, it certainly managed to craft an intriguing beginning for another story.

Let's try that one more time...

{% include image name="yoker-the-long-walk-2" bottom="25px" kind="png" title="Another session demonstrates that large language models don't always produce consistent results." %}

If you're going to remember one thing from this article, let it be this: _never trust an LLM_! Even with the same request, it generated two completely different answers. While this is an incredible and almost unbelievable capability, I don't think you'd appreciate your Excel sheet to sometimes include taxes and sometimes not when creating an invoice. This is where our analogy becomes crucial.

> But first, did you notice? Despite the two continuations presenting distinct narratives, there are some intriguing similarities to be observed. While the context only mentions a car, a guard, and a plastic ID card, both stories continues with "an elderly woman" as the driver and "building C" as her destination. Apparently, within the range of fictional writing this specific model was trained on, it appears that {% include google search="why are drivers of old cars mostly elderly women in fiction literature?" title="drivers of old cars" %} are typically portrayed as elderly women, and {% include google search="why is 'building C' such a common setting in fiction literature?" title="building C" %} is a frequently used location for writers when they need a mysterious place.

Although we access LLMs using our computers (CPU+OS) and applications like Claude Code, Codex, Gemini CLI, or Yoker (the harness), that's where predictability and consistency end. Yes, all these components can contain bugs, but even those bugs are rather consistent. With LLMs, we introduce a completely new component, a new layer of abstraction, one that introduces uncertainty with such high quality that we can hardly still recognize the "bugs".

To guard our applications from bugs, we have introduced processes, methodologies, and even [ceremonies](50-Shades-of-Ceremony) and architectural governance. It should now come as no surprise that we need a similar layer in our new paradigm: [agentic workflows](Agentic-Workflow).

Let's revisit the layers of a typical enterprise and how it realizes its initiatives and how architecture introduces governance to realize the dream of its clients...

{% include image name="governance-overview" bottom="25px" kind="png" title="An enterprise's high-level workings, with governance as a central strategy." %}

At the governance layer, the dreams or needs, if you prefer a more formal term, are captured and evaluated within the broader context of the enterprise and its architecture, resulting in directions for the management or tactical layer, who can autonomously execute them. Both actual and observed results are monitored and serve as equally important inputs for the governance layer, which incorporates them into its next set of directions. This positive, forward feedback loop is the simple yet powerful iterative pattern that fosters continuous evolution. And I firmly believe that it is this same sound approach that is the final layer we also need in this new agentic workflow.

## From Auditability to Guardrails

When I began, I was ultra worried about what these agents could do. Hearing about agents {% include external link="https://www.youtube.com/watch?v=fVrw8V3iFLc" title="wiping out entire database systems in a matter of 9 minutes" %}, I was determined not to become the next scary tale about such agents. Consequently, one of the first skills I developed was a tool {% include commit repo="c3" sha="e652b18e9ea116eacd1568083768f8a4929db203" title="for transcribing sessions" %}. I wanted to maintain an audit trail of all activities. After four months, this initial paranoia subsided and was replaced by more proactive safeguards. Nevertheless, I should verify, yet I'm rather certain that some of my agentic repositories may still contain these transcriptions.

Research is another example of this approach. From the very first version of my researcher agent, or rather the research skill, I prioritized auditability. A significant portion of its instructions involves creating a local cache of all the information it searched for and retrieved. I wanted to ensure that both the search results and the actual content it relied on for its reports could be verified. I was particularly cautious about the possibility of producing material that I couldn't review, given the inherent tendency of LLMs to generate highly qualitative and nonsensical content in the blink of an eye. Considering the fundamental nature of a researcher agent, I had to establish clear boundaries in this regard. This example once again highlights a crucial aspect of an agentic workflow: governance, specifically the implementation of safeguards that monitor the workflow and make it auditable for the human involved.

If you examine the definition of the {% include external link="https://github.com/christophevg/c3/blob/master/skills/research/SKILL.md" title="research skill" %} you'll soon realize that this _skill_ isn't primarily about conducting research itself. Instead, it focuses on the surrounding process, the workflow for handling artifacts, addressing uncertainties, and implementing quality checklists. This typically includes explicitly stating what **not** to do, which can be more effective than simply describing what to do. Negatively phrased instructions restrict the agent's actions, yet simultaneously maintain all other options open, preventing it from being steered solely in the direction you already know. This is another instance of the concept of "letting go" we discussed in the [first part](Hello-Agents#let-it-go).

### Because I Told You So...

In the agentic world, simply telling an LLM what to do and what not to do doesn't guarantee that it will follow its instructions to the letter. An LLM will always generate the next most probable word, even if all probable possibilities it has been trained on don't include a valid option. This can lead to unexpected outcomes, especially when the LLM generates text at a rate of 300 to 600 words per second.

Furthermore, even with a one million token context, not all elements of that context receive equal attention.

Simply providing instructions to an agent doesn't guarantee that it will follow them. Presenting opposing instructions will cause the agent to choose one option or another, or even another.

This was the very reason why, when I began my explorations, I initially chose the auditability approach. Ensuring that I could audit every detail allowed me to trace back every decision and take appropriate action. I combined this with a high degree of personal control, personally checking every write tool invocation. My background in network security and my default paranoia have proven to be effective in this regard.

However, the auditability approach, along with micro-managing every action, is not a viable path for agentic workloads. Coding harnesses have focused on introducing automated guardrails to reduce the need for manual and interactive checking of every action. These approaches provide agents with more degrees of autonomous freedom, but still require a human at the keyboard to approve more complex tool requests.

### And then I Started to Dislike Claude Code

I clearly remember the initial days of working with Claude Code. The 🤩 emoji perfectly captures the experience: "_Ask and thou shall receive_" was the mantra, as request after request resulted in increasingly impressive code being crafted for me. Initially, it was for this website, but soon, it extended to numerous projects that had been gathering dust over the past decade. Those first few days were an exhilarating time for this little developer. The pace of progress was relentless, until the point where I began to feel frustrated by the frequent interruptions. These interruptions involved asking for my permission to execute long, complex, and multiline shell commands.

Now, don't get me wrong. I firmly believe in working within a command-line shell environment. The fact that these new coding agents were operating within the same environment was a dream come true. It felt like the world had finally caught up with my vision. However, these agents excel at creating elaborate and complex shell commands. This is undoubtedly a positive aspect, as they can generate multiline commands that can test the logic of code to be written in mere seconds. This makes them one of the most valuable tools at their disposal.

The downside is that these shell commands can be challenging to read, especially for humans. They often contain hidden complexities. Let's recall how an LLM generates the next token, and the next, and so on... Producing natural language involves a certain level of ambiguity. But when it comes to code or shell commands, the output is what it is. The difference between `rm -rf /tmp/text.txt` and `rm -rf / tmp/text.txt` is just one character, and even that single incorrect character can cause significant damage to your hard drive if you hastily press "yes."

Consequently, I quickly became annoyed by these interruptions and, in a matter of days, made up my mind that the `Bash()` tool, which allows the agent to execute arbitrary shell commands on my system, was both a superpower and a major obstacle to agentic workflows.

### Public Service Announcement: Wormhole Ahead

Fortunately, the `Bash()` tool can be controlled by providing valid patterns of what commands should look like. This allows us to pre-approve certain commands. By combining this with my trusted `Makefile`, I could provide the agent with a series of pre-approved make targets that contained everything it needed to avoid writing those pesky command line instructions: `make run`, `make test`, `make check`... as long as it had all the necessary information. And it happily used them,... sometimes.

However, executing make targets still required the `Bash()` tool, which resulted in a lot of interruptions. The LLM often wanted a more specific output and crafted more complex commands all over again. I needed to find a way to eliminate the `Bash()` tool. But getting rid of its superpowers wasn't easy. At this point, I started to believe that to create a truly autonomous agentic workflow, all tools should enable a way to completely proactively configure them, resulting in uninterrupted sessions. This was the first seed of an idea.

Another observation I quickly made was the inherent problem we were facing: we wanted the agent to write code, yet we also wanted it to be unable to execute it. Sounds strange? It's actually quite simple. If we allow an agent to execute code it has written itself on our system, we give it total freedom. My initial level of guardrails, which only allowed it to run the project using `make run` or the test suite using `make test`, effectively limited its capabilities. However, in reality, it just created a hurdle that the agent gladly took as yet another detail in its context and simply worked around it. If it could only run the project or the test suite, it was easy to create a test that executed a shell command and then run the test suite.

So, simply remove its ability to run the project or the test suite. Let it just write code then. Yes, that's a possibility. Now, trust me, that would severely limit the agent and put an enormous burden back on us, having to run every little or big piece of untested code for it, and even review it before executing it. Yes, agents produce wonderful pieces of code, yet often also full of rubbish, which they gladly fix themselves. For that they need to be allowed to execute their code to test it. Writing code from the first to the last line in one go hasn't proven viable for humans, and the same goes for agents, by nature.

Restricting agents takes away too much of their superpowers, so we have to find other ways to protect them from making mistakes that cost us more to fix than the value they bring.

## Once upon a time, there was an Agent...

> Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe." - Jeff Bezos

When agents entered my world in March 2026, some of my older projects were revived, some were terminated, and many new ones emerged. Each of these changes was a direct response to these new allies I had gained. Each change also brought its own set of experiences, built on failures and frustration. So far, I don't think any catastrophes have occurred, but I'm keeping my fingers crossed.

> "Experience is simply the name we give our mistakes." — Oscar Wilde

If you know me, you know I always own my mistakes and I even tend to share them widely, simply to provide them as a learning experience, without having to go through the same mistakes yourself. Before consolidating agentic properties and agentic workflow components, let's take a stroll down memory lane and relive some of the stories that unfolded over the past months, resulting in many valuable lessons for the future.

### Agent vs Agent

When I started looking into this new agentic paradigm, I came across a quote from Boris Cherny, the creator of Claude Code. 

> Claude Code is great at writing its own instructions.

He was emphasizing the importance of requesting Claude Code to review the session and suggest modifications to its agent definition to prevent errors made during that session. I've wholeheartedly embraced this advice and incorporated it into various aspects of my work to come. I have already mentioned my lessons learned skills. Another iteration of this concept is more actively implemented in the operational side of the agentic workflow.

The core idea here is to "flip the script" and leverage the inherent nature of LLMs against themselves. Essentially, it involves introducing multiple agents into the mix. For instance, one agent can generate an analysis, followed by a second agent reviewing that analysis, and a third agent providing a completely different perspective. Often, we end up with contrasting review reports. Now, we can introduce yet another agent to reach a consensus.

By introducing agents to review the work of other agents, we establish the foundation for a self-reviewing and self-healing workflow. This approach significantly reduces the initial audit burden and lays the groundwork for the agentic workflow as a whole.

{% include external link="https://github.com/christophevg/c3" title="Christophe's Agentic Collective" %} (short C3), a platform that has become the breeding ground for numerous agents and skills, all based on this multi-agent paradigm, has witnessed remarkable growth over the past months. It has expanded from a single agent to two, and now contains 17 agents and 67 skills. Each of these agents and skills has its own unique story to tell.

### Agent Says No!

Introducing more agents and multiple perspectives reviewing the same analysis or code indeed leads to more reliable agentic outcomes. However, this shiny coin has two sides.

While attempting to implement {% include external link="https://github.com/christophevg/roomz/pull/6" title="a generic configuration system" %}, the {% include external link="https://github.com/christophevg/c3/blob/master/agents/security-engineer.md" title="security engineer agent" %} flagged it as insecure, requiring additional security-related features to avoid implementing a local wrapper. As the owner, I was confronted with an agent from _my_ own collective who effectively blocked _my_ progress. It was a true Steve Jobs moment:

> It doesn't make sense to hire smart people and then tell them what to do. We hire smart people so they can tell us what to do.

I could have overruled the agent with "just do it," but that would have killed the value of my investment. Instead, I respected the agent's observations and {% include external link="https://github.com/christophevg/clevis/issues/4" title="created a feature request with the upstream project" %}.

In this instance, the agents serve as the very guardrails, not just methodologies or processes, but active enforcers. The security agent literally prevented me from taking a shortcut. Multiple agents reviewing from various angles create a comprehensive set of guardrails. However, these are soft guardrails because both the other agents and I must acknowledge and adhere to them. Fortunately, agents, and I, have it in our nature to try to please and gladly follow up on good advice.

### Do you TOCTOU?

Here’s another story illustrating how pitting agents against each other creates a reliable environment.

During one session, the {% include external link="https://github.com/christophevg/c3/blob/master/agents/python-developer.md" title="Python developer agent" %} completed implementing a feature. Following the established workflow, the {% include external link="https://github.com/christophevg/c3/blob/master/agents/project-manager.md" title="project manager agent" %} requested reviews from the {% include external link="https://github.com/christophevg/c3/blob/master/agents/functional-analyst.md" title="functional analyst agent" %} to ensure the feature’s completeness. Subsequently, he dispatched domain-specific agents to conduct reviews from their respective perspectives: the {% include external link="https://github.com/christophevg/c3/blob/master/agents/api-architect.md" title="API Architect agent" %} focused on APIs, the {% include external link="https://github.com/christophevg/c3/blob/master/agents/ux-ui-designer.md" title="UX-UI designer agent" %} handled user interaction, and the security engineer agent critically reviewed security aspects.

The security engineer agent discovered a case of a Time-Of-Check to Time-Of-Use (TOCTOU) vulnerability, a classic security issue where the time gap between verifying access rights and applying them creates an attack vector. This incident once again reminded me that there’s still much I can learn. So, I opened my web browser and began reading about the concept of TOCTOU.

Interestingly, the resolution to the issue was already underway while I was researching it. The security agent had raised the review issues, the project manager had noticed them and dispatched the developer agent again, who had fixed them. All of this had happened without my intervention. By the time I was up to speed, the iteration had already progressed to the next task.

This experience clearly demonstrates the value of such an agentic workflow, where no manual intervention is required. The workflow loops back and forth until everything is clear, and multiple agent perspectives catch issues that a single developer, even an experienced one, even me if I had reviewed this, would miss. The security engineer had caught something that I would never have thought of, despite my earliest professional experiences being in security. Trust the process!

### The Blind Leading the... Blind

Initially, especially in the early stages, I had to extensively "debug" this workflow. Debugging required me to review all the steps taken by each agent. When I first started using Claude Code, it was still quite basic. It simply displayed everything: agents thinking, producing output, and so on. Spawning sub-agents was still a synchronous, sequential process of the overall workflow.

However, as the weeks went by, Claude Code introduced new features daily. Intermediate output, such as thinking, became hidden behind a `cmd+o` toggle. Agents spawned into the background, and only the results were visible. In essence, less and less of the process was visible, which was great for the masses. They could only see the beautiful results and feel like the king of their castle. On the other hand, I was all but happy with this evolution. Debugging sub-agents became increasingly difficult. While I was making significant advancements with more and new agents working together in a growing workflow, I simply couldn’t easily follow what was happening at certain points. I needed a different interface.

### While Agents Work

While my team made a mistake, detected the vulnerability, and fixed it, I had the opportunity to delve into the issue. I learned something that I would never have considered, and I believe it will be present in many codebases in some form or another. It’s true that this is a race condition case and quite challenging to exploit reliably. Additionally, given the context, this specific case wouldn’t be feasible to exploit. An attacker would need the same permissions as the one they were trying to bypass. Despite these limitations, it was a valid observation, and as a result, TOCTOU vulnerabilities have been removed in several other projects.

I was able to dedicate time to this because, by that time, my workflow involved frequent interactions with GitHub through issues and pull requests. My only interactions with the harness were granting permissions for complex shell commands and requesting it to follow up. While I could have implemented a loop for this, it didn’t significantly contribute to the task due to the ongoing interactions required to allow certain shell commands.

As the frequency of harness-babysitting decreased, I was able to focus on reading, researching, brainstorming new features, and writing articles like this. A popup notification now serves as a reminder when I need to validate, review, or provide feedback, and this notification is increasingly limited to GitHub. Consequently, the time between interruptions has become longer, and context switching has become less of a burden.

## Agents Aren’t Mind-Readers

This freedom and ability to focus on strategic matters, while agents handle much of the operational work, also presents challenges for the human involved. On some days, when everything runs smoothly, we sometimes let our guard down, and agents seize the opportunity to fill the gap, but not always in the way we intended.

While developing {% include external link="https://github.com/christophevg/clevis" title="Clevis" %}, I had high expectations for my agents to read my mind, similar to previous experiences. The LLM that powers them is trained on a vast amount of information, which statistically generates responses that I would have considered if I had been aware of them. I’ve previously highlighted this incredible source of personal learning. It often feels like the LLM is reading my mind or at least producing what I wanted, even if I hadn’t explicitly requested it. However, this is not mind-reading. It’s pattern matching based on a comprehensive and extensive knowledge base.

So, what actually happened? Clevis was still in its early stages of development. I was still exploring the appropriate approach and lacked clear specifications. I almost asked the agents to generate it in a true "vibe" programming style. Yes, I know, it led to unintended consequences. The agents produced suboptimal results, and I became frustrated because I didn’t achieve the desired outcomes. However, I simply hadn’t articulated my expectations clearly. I was mistaken to be frustrated. The problem was sitting at the other side of the keyboard. Agents aren’t mind-readers. They may appear creative, and they are, but not always in the same creative manner as I envision.

In the end, my approach to resolve this was correct. I started developing and prototyping the interface until I was satisfied with it. Then, I manually implemented the bare minimum. Next, I initiated a session with the functional analyst to review my prototyping work. Within minutes, the agent had analyzed my prototype and prepared tasks for the entire project team.

The lesson is clear: agents aren’t mind-readers, but "a word is enough for the wise" certainly applies. When you clearly articulate your requirements (prototypes, specifications, analysis), agents excel. The frustration arises from expecting magic instead of taking the necessary steps. Clear articulation is the investment that leads to success.

## The Overachiever Agent

It’s a blessing to be able to write this article while two agent teams are simultaneously working on two projects. However, it’s a curse when you realize that despite providing {% include external link="https://github.com/christophevg/yoker/pull/47#issuecomment-5020831050" title="crystal clear instructions" %}, including an apology, and a {% include external link="https://github.com/christophevg/yoker/pull/47#issuecomment-5021644201" title="very clear snippet with the direction" %}, they have introduced a solution to a non-existent problem and over-engineered it. They wrapped a perfectly usable module in a local class with methods that simply pass arguments to the same methods on the wrapped modules’ classes.

The blame lies partially with the human side. Both teams ignored my good advice, but I also approved their plan, which included clear intentions to implement unnecessary abstractions and indirections. I was so accustomed to seeing great results the previous week that I didn’t thoroughly read the analysis and plan summaries and expected to be done with a {% include external link="https://github.com/christophevg/yoker-assistant/pull/3#issuecomment-5021794233" title="simple comment" %}.

My overachiever agents require close supervision because they can produce a significant amount of code in a short time, and it takes several iterations to recover from it.

> In the meantime, we’ve applied the lessons learned twice and further improved the agents and skill definitions to focus more on direct instructions. Our agents are incredibly capable and eager interns, and we simply need to nurture and harness their potential.

---
I'm HERE
---

## The Fundamental Agentic Workflow Properties

Let's try to summarize some of the agentic workflow properties that I've experienced over the past months and see if we maybe can observe a pattern.

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

## Rehabilitation of Waterfall

TODO: Write this section about how agentic workflows rehabilitate the Waterfall methodology. Waterfall has been downplayed for being slow and bloated. With agentic workflows allowing analysis, design, and review to happen in minutes, the "bloated" approach is no longer bloated. Applying many agents in parallel to create many different viewpoints for analysis and reviews creates guardrails and a dependable workflow with less chance of agents going haywire. The key insight: apply "Think before you act and verify afterwards" (Waterfall) at the speed of Agile through agents. Multiple analyses and reviews (Waterfall depth) happen in minutes (Agile speed) because agents do the work in parallel. See also [50 Shades of Ceremony](/50-shades-of-Ceremony/) for the detailed view on Waterfall vs Agile. The agentic workflow is the way I've always seen Waterfall vs Agile: they are structurally the same, only the scope of each iteration is smaller.

## Pokemon: The Evolving and Specialized Agent

TODO: Continue the Pokemon analogy from Part 1. Here in Part 2, cover Stage 2 and Stage 3.

### Stage 2: The Evolving Agent

TODO: "Let it consolidate learning into workflow." Agents develop skills (abilities) and evolve (evolved forms). Investment: reviewing work, giving feedback, iterating. Analogy: leveling up through battles (real problems). Example: the KB structure refinement — initial structure didn't work, research + review, better structure. The agent learned from the mistake and the review, becoming better for the next task.

### Stage 3: The Specialized Agent

TODO: Agents have "workflow memory" from lessons learned. They apply patterns autonomously. Investment: minimal — they remember from context. Analogy: a Pokemon with the right nature, abilities, and moves for specific battles. Example: the TOCTOU catch, the autonomy while working, Eira's behavior retention (told once to use HTML for emails, she retained it across sessions). This is where the Pokemon progression becomes real: teach once, use forever. The key difference from human interns: human interns eventually leave, taking knowledge with them. Agents stay, share knowledge across the ENTIRE collective. Every lesson learned improves ALL future sessions. Investment compounds, doesn't walk out the door.

## All Rise!

Your honor I want to present the evidence in this case. If I may, I want to present five exhibits to the court and the jury, that will point to one and only one possible outcome in this case.

**Exhibit 1: The `Bash()` tool** presents the agent with too much freedom. It allows it to create complex statements, that are not only hard to verify, debug and allow to be used, they also simply put a sometimes greater burner on the user.

**Exhibit 2: Claude Code hides more and more** of what is actually being done by the agents. This is nice for simple end-users, who like to surrender all control to the desire that might very well consume them whole. Yet for my client, who wants to really master and control this agentic workflow, this blindness is really a burden.

**Exhibit 3: A CLI harness is nice, having the possibility to give permission to do things is great, but in the real world, such interactivity is not always available. My client clearly sees we're merely at the beginning of this agentic paradigm. Soon we will want to integrate this in autonomous workflows.

**Exhibit 4: MCP servers** are a nice solution to introduce tools in the agentic mix, but it is really only one way traffic and doesn't offer a possibility for a tight integration with existing, or newly written, structured parts of solutions. My client would love to introduce agentic workflows in his existing codebases, with agentic workflow being a first class citizen in a true Python-first approach.

**Exhibit 5: The personal itch** to try and write his own harness, taking all previously shown shortcomings to heart, is maybe the most important reason. Learning is founded in doing, in failing and finding answers.

Therefore, honorable judge, esteemed members of the jury, I simply cannot ask anything else from you than to allow my client to start working on his own Python-first agent hardness framework: Yoker.

## Introducing Yoker

TODO: explain all ideas that have been presented before and why you started working on Yoker. Show that Yoker implements the laws:

- Trigger: Claude's evolution to show less and less -> visibility/control (law 3)
- Trigger: Better autonomy -> no Bash and rich tools
- Trigger: No MCP -> Python-first tools
- Feature: Integration of structured and unstructured workloads (law 1)
- Feature: not a harness by a harness framework
- Feature: focus on standalone execution of packages of agents + skills + tools + prompts (assistant, writing-assistant, pkgq,...) (law 2)

## Main Messages

TODO: Write the main messages section, summarizing the key takeaways from Part 2:

- Reuse the skills you as a human have acquired over time when dealing with other humans — they still apply. Managing an agentic workflow isn't any different from managing a human-based workflow. Both require clear specification, guidelines, review/control/follow-up.
- Sh*t in == Sh*t out. The quality of the workflow depends on the quality of the input. Agents amplify what you bring — expertise, standards, processes. Garbage in, garbage out.
- The workflow — not the agent — is what makes the difference. A single agent is a probability generator. A well-designed workflow with multiple perspectives, review gates, and governance is what produces dependable results.
- Invest in growing your own team. Don't download someone else's skills and expect the same results. You need to know who's working for you, their beliefs and boundaries, and you need to build trust through shared experience.
- Let agents improve agents. The self-learning loop — point out issues, ask agents to improve themselves, they refine — is the key investment multiplier.

## Stay Tuned...

TODO: Write the wrap-up for Part 2, bridging to Part 3 ("Dawn of the Agents"). In Part 3, I take a step back from the technology and the method and consider what this all means. What's this new era that is upon us? What will change? For the better and for the worse? From the mechanics of Part 2, we zoom out to the implications.

---

TODO
* Add section headings and sub-headings throughout for readability
* Introduce images/videos, especially for the security agent story and TOCTOU example
* Ensure all new images have webp versions
* Cross-reference with Part 1 and Part 3 for consistency
* The Pokemon analogy should thread through all three parts — verify Stage 1 (Part 1) -> Stage 2-3 (Part 2) -> Stage 4 (Part 3) progression is coherent
