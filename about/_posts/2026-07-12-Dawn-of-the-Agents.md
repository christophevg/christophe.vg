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
thumbs:
  files:
    agents-are-bad-mkay:
      kind: png
prompt: |
  Look back upon the past 4 months and give a narrative overview of how we have evolved from single prompts to a complete agentic workflow using a self-improving collection of skills and agents, even including our own Python-first agent harness, Yoker and the reusable personal assistant agent. Sketch a timeline of the work we've done on several projects, the evolution we've gone through and how they all fit together. Use the documentation, git history, GitHub issues and PRs, and any other information to reconstruct this timeline.
---

If you’ve been following this series of articles on agents, welcome back. If you’re new to the series, even more so. I recommend catching up with parts 1 and 2, titled [Hello Agents](Hello-Agents) and [We are Agent](We-are-Agent). The first part tells about my agentic awakening journey, from excitement to practice, highlighting the emotional and challenging aspects. It sets the stage and explains why I’m so enthusiastic about this new paradigm.

In the second installment, I discussed the mechanics of agents, providing a primer on Large Language Models (LLM) and an analogy to illustrate their properties and components. I also discussed workflows guardrails and why I over time started to dislike Claude Code and the agentic response to such a situation. I shared several stories from the trenches, including my security agent's exceptional performance, TOCTOU vulnerabilities and of course Yoker.

In part 3, I want to step back from the technology and methods to consider the broader implications of this new era. I explore what this new era entails and what changes it will bring, both for the better and for the worse. By zooming out from the mechanics, we examine the implications and believe we’re now facing an opportunity to seize an advantage. If we don’t act now, it might be one of the last chances we’ll have in the foreseeable future.

However, let’s not start off with a doom-and-gloom attitude. Let’s maintain our excitement about agents and leverage our newfound team to create fundamental business value. Let’s develop a business plan.

## Project K

Witnessing project managers, researchers, analysts, developers, reviewers, and testers working in seamless harmony as a productive and capable team, one can’t help but envision the limitless potential of such a team. My agentic setup had transformed from a mere webmaster to this multi-agent team that I could effectively direct, resulting in the creation of numerous high-quality software projects. With the introduction of a personal assistant and a writing assistant, I had already transcended the confines of the software-only landscape. Each of these advancements was firmly rooted in the fundamental agentic workflow paradigm, where agents autonomously create other agents and skills based on their own research and experiences, minimizing human intervention to prevent the introduction of possibly outdated beliefs, I had to let go.

This culminated in an experiment to form a team of agents tasked with crafting a business plan for a business idea that had been lingering in my mind. Let's call it mysteriously "Project K". The experiment started at a meta-level, providing the researcher agent with instructions to gather information on the necessary skills for creating and reviewing a business plan.

I presented the LLM with a mission description outlining my dual objectives: to generate a comprehensive business plan for the idea and simultaneously develop the required skills in the process. The mission brief spanned 936 words, with 269 words dedicated to the idea itself. The remaining instructions detailed the workflow to be followed, outlining actions to be taken and actions to be avoided.

From the researched documentation and the resulting summaries that provided strategies for creating and reviewing business plans, I could already tell that the final product would likely surpass my own previous, manual creations. I saw numerous topics that addressed the mistakes I had made in the past, as well as topics that I had heard about but never had the opportunity to look into it myself. We were only 20 minutes past the mission brief when two skills, `business-plan-creation` and `business-plan-review`, were successfully added to my incubator repository. While I had experienced this process multiple times before, the limited description of my idea made me curious about the potential outcomes these skills could produce.

### Action!

So, the `business-plan-creation` skill was put to the test... After just 7 minutes, it produced the first plan: `v1-initial.md`.

{% include image name="business-plans" bottom="25px" kind="png" %}

Next, the `business-plan-review` skill delivered a critical, almost harsh review, almost proposing to throw this initial attempt into the trash.

What followed were four more iterations of the same workflow. Based on the review, the creation skill searched the internet for additional and more reliable resources to support the plan’s claims. Next, the review team, a team of agents with different focuses, set out to thoroughly critique the revised plan. And so on, until `v5-complete.md` was deemed suitable for potential investors. In total this entire process had taken about 4 hours, because the human overseer had to go to the hairdresser, take his son to archery and to a dentist appointment, removing him from the process for over 9 hours, before we could continue our experiment at night.

After reading the report myself, I couldn’t help but realize that over my entire professional career, I would never have been able to write such a well-structured, well-founded, and realistic prospectus. It contained answers to all the remarks my own documents had received on numerous occasions, and more.

The level of competence achieved in a matter of hours, the improvements between each iteration of the document, demonstrated that with good input and multiple agents’ (re)reviews, even simple statistics and web searches can lead to the right knowledge to be applied to various cases and produce high-quality results.

The fact that every request to an LLM is bias-free, handled independently, without any memory or recollection of previous responses, outside its context, makes it an ideal scenario for two independent agents to be great opposing parties that truly bring out the best in each other. This was truly law #2 at its finest.

## The Microsoft Bake-Off

I took this concept a step further by having multiple underlying LLMs perform identical reviews concurrently. Each review was then evaluated by a second layer of reviewers, who identified both flaws and commonalities within the reviews. These reviews were subsequently combined to create comprehensive reviews.

Observing this unfolding situation, I couldn’t help but conclude that the well-known principle at Microsoft, which involves forming multiple entirely independent teams to collaborate on the same project and then pitting them against each other to determine the most suitable one to proceed with, aligns remarkably well with this agentic workflow paradigm.

The remarkable speed at which the same problem can now be addressed by three, five, or ten separate instances of teams operating in an agentic manner is an interesting feature of this new paradigm. It serves as a prime example of the power of large numbers, and it has become more affordable than ever before. This presents an implicit opportunity that should not be overlooked.

The business plan experiment and the parallel review process, in particular, demonstrate that agentic workflows are not limited to coding tasks. They can also handle complex non-technical work, such as researching and creating a business plan, with ease. Independent, bias-free agents make excellent opposing parties, fostering mutual growth and improvement.

The cost of running three, five, or ten parallel teams has become more affordable than ever before. For instance, my single team runs of a $20 Ollama Pro subscription can be scaled up to $100 per month, enabling me to set up five parallel teams effortlessly.

Lastly, this presents an opportunity for safeguarding. Multiple independent perspectives can identify more issues than any single team could.

What does this mean for the future of work? When a single person can command a virtual (software) factory that delivers results in hours, what will happen to traditional team structures? These are the questions we must address today, as the future is already here.

## Know what you own, and understand why you own it

Writing a three-part series is fun. It allows me to casually introduce things in the first two parts and then bring them to a climax in the third. So, here’s once more some advice we already encountered repeated with stress: Invest in your _own_ agentic team!

> Know what you own, and understand why you own it

This section’s title is a famous quote by Peter Lynch, a former American investor, mutual fund manager, author, who stepped down as investor at the age of 46 and now focuses on philanthropy. Yes, you can copy what others do and buy the same stocks. But if you don’t know what you buy and why, you’re likely to have a rude awakening in the near future.

Lynch urges investors to build real conviction, avoid blind speculation, and prevent panic during market drops. He emphasizes fundamental business understanding over emotional or hype-driven trading. Buying a stock based on a hot tip or headline is pure guesswork. Knowing the underlying business turns it into a rational choice. If you understand how a company makes money and why you bought it, you’re less likely to panic and sell when the share price drops.

The same holds for agentic teams. If you don't understand how your team functions, you are one of the horror stories about things that go horribly wrong at 3 at night, and you don't know where to begin to solve it.

> Never buy a stock if you can’t explain its business model with a crayon in under two minutes.

Why can’t you simply take others’ agentic resources? You don’t know who’s working for you, their beliefs and boundaries, and you haven’t built trust through shared experience. Taking someone else’s skills is like hiring a team you never interviewed.

Relying on generic, third-party agents creates a "black box" environment. By building your own agents, you gain a deep understanding of the training data, prompt architecture, and logic. This knowledge allows you to comprehend the reasoning behind their decisions. In both technology and finance, relying on unfamiliar tools poses vulnerabilities, while developing your own agents provides enduring value.

> The best stock research happens in your everyday life (e.g., noticing a crowded local store), not by following Wall Street crowds.

Off-the-shelf AI tools offer the same capabilities as your competitors. However, developing your own agents and skills, tailored to your specific workflow, creates a proprietary advantage that others struggle to replicate.

Investing time in your agents and skills yields compounding returns. As these ever-improving agentic resources generate consistently better results, your analyst learns from each project and retains valuable insights. These learnings are incorporated into the core definition and skills of the analyst. Similarly, the developer acquires new patterns, conventions, and standards through feedback on their application within the broader team context.

Your investment compounds over time. While the initial session may be slower due to the investment, subsequent sessions become exponentially faster and more effective.


## Personal Computing 2.0

That simple fact, of growing your own team of agents and skills, makes agentic workflows "personal". And I would add, makes it personal _again_.

Personal computing emerged in the mid 1970s, propelled by significant milestones such as the Altair 8800 kit around 1975, pre-assembled consumer machines in 1977, and the IBM Personal Computer in 1981. During this era, individuals were primarily responsible for developing everything themselves, including the hardware and software. Gradually, over several phases, this "build" mentality shifted towards a "buy" mentality. In the 1970s and 1980s, the rise of off-the-shelf software, such as VisiCal and Lotus 1-2-3, marked a shift away from in-house development. The 1990s witnessed the rise of comprehensive software suites like SAP, Oracle, and Peoplesoft, rendering in-house solution development in many cases obsolete.

The evolution continued in the early 2000s with the advent of Software as a Service (SaaS). This transformation was driven by the increasing capabilities of web browsers and the aftermath of the dot-com crash, which prompted companies to reduce infrastructure costs. Consequently, SaaS platforms gained prominence, leading to the widespread adoption of cloud computing in the subsequent years.

The "buy" approach prevailed over the "build" approach due to its advantages in terms of focus, speed, and cost. Companies prioritized the development of core products by engaging engineers in building them rather than maintaining email servers. Deploying a SaaS platform could be accomplished within days, whereas building custom software required years of effort. Subscriptions shifted unpredictable capital expenses into predictable operating costs, making the "buy" approach more financially advantageous.

### Hello Agents

Today, we're witnessing a significant shift in our industry that we haven't seen before. It's a reversal of a 50-year evolution that's been happening in a matter of a few years. The "build" option has almost overnight become a viable option again, and it's not just _an_ option. It comes with several advantages over the "buy" choice of massive suites and SaaS platforms.

Today, we’re witnessing a significant shift in our industry that we haven’t seen before. It’s a reversal of a 50-year evolution that’s been happening in a matter of a few years. The "build" option has almost overnight become a viable option again, and it’s not just _an_ option. It comes with several advantages over the "buy" choice of massive suites and SaaS platforms.

The focus, speed, and cost arguments have always outweighed the fact that we’ve been using the same tools, with the same capabilities, and the same ways of working. If we wanted to go beyond the default capabilities, we entered the world of customization and consultancy. The promise was that they would come in peace, customize our setup, and leave. But only when the customization was partially done, they never left and suddenly we had a shadow IT department, only we now called it a "vendor", and they were here to stay and invoice us on a monthly basis.

Today, agents enable almost zero-cost engineering. In the past, building a custom ERP or CRM required millions of dollars and teams of engineers. Today, multi-agent AI frameworks can generate enterprise-grade application skeletons, database schemas, and API integrations in minutes.

Not only can they generate these products, but they can also continuously maintain them by applying security patches before any human even reads the zero-day announcement. They can research best practices and propose product improvements, even incorporating internal experience. To achieve this, enterprises no longer require a dedicated team on the bench. Today, this team can be virtual, and the cost is only incurred when a GPU is spun up to drive it. Are we there yet? No, but you can no longer deny the opportunity.

We now have access to hyper-personalized computing. Off-the-shelf SaaS forces your business to adapt to their workflow, but AI-built software adapts entirely to your specific workflow, offering total flexibility. This leads to true competitive differentiation. If every logistics company uses the exact same Salesforce or SAP modules, no one has a software-driven competitive advantage. Tailor-made, AI-generated code allows companies to own unique, proprietary IP again. Let’s not forget the elimination of SaaS "tax." Businesses are growing tired of annual 10% seat-license price hikes and complex tiered pricing from legacy vendors.

### Hail SaaP - Software as a Prompt

The shift towards Generative Software has eliminated the historical barriers of cost, time, and talent in "building". AI agents now write, test, and deploy code at near-zero marginal cost, posing a significant threat to current SaaS vendors. Industry analysts often refer to this as {% include external ling="https://icapital.com/insights/investment-market-strategy/icapital-market-pulse-as-ai-disrupts-not-all-software-is-created-equal/" title="the deflationary software era or the commoditization of the application layer" %}.

> "Hey Gemini, create a secure, SOC2-compliant copy of this platform’s pipeline management system, but integrate our custom 2026 proprietary pricing algorithm."

This is the reality we face today.

Traditional vendors cannot survive solely by selling data-entry screens and basic UI workflows. To avoid being replaced by custom AI builds, they must pivot to:

- Owning the Data Layer: While software code is commoditized, unique data graphs, historical training sets, and industry-specific networks cannot be easily replicated by a prompt.
- Deep Infrastructure & Compute: Vendors must offer advanced, high-performance computing infrastructure or complex security architectures that are too risky for a standalone company to self-host.
- Deeply Embedded Ecosystems: Companies will continue to pay for systems that have unbreakable, deeply entrenched regulatory approvals or physical supply-chain tie-ins.

These are the services we still want and need. Everything else... stop paying monthly bills for that, and invest in growing your own agentic workflows. Start building that personal computing stack again, offering your unique way of working to both your customers _and_ your employees.

### Enterprises be like "Oh, we're fine!"

_No, you’re not!_ Every new venture and startup today is adopting this approach. In a matter of months, they’ll all have continuously evolving, highly personalized ERP systems that perfectly align with their needs and those of their customers, without any compromises, at a fraction of the cost.

Today, you have the option to break free from vendor-locked systems. You can choose open standards, avoid licensing costs, eliminate the need for their development environment, and bypass their cloud infrastructure.

Will you once again become the vendor-locked-in of new providers? These startups are well aware that if you’re not evolving, they can step in and help you! Or will you seize this opportunity to regain control and build your own true competitive advantage?

By doing so, you have a tremendous chance to rectify some of the evolutionary mistakes you’ve been forced into over the past 50 years and break free from the vendor lock-ins you’re currently paying so much for. Platforms and SaaS solutions initially lured you in with exciting offers tailored to your needs. However, they also ensured that you didn’t miss out on their other "valuable" offerings. Over time, you’ve become so accustomed to their proprietary solutions that any future choice has always been limited to their offerings, driven by the illusion for uniformity and integration.

Are you on board?

> I paint a black and white picture here, of course, to make a point. The choice isn't binary. It never is. There are several factors to consider. Nevertheless, I believe that the following high-level question can be helpful in determining the right path forward: "Does a piece of software serve the core of our company? Or is it merely implementing a standard, off-the-shelf process, like accounting, bookkeeping...?"

### Who’s your Agentic Daddy?

Today, we still rely on server farms in large data centers to run our models. However, this is a matter of time. Soon, we’ll be running our agents locally on our machines. This presents an opportunity to ensure that this next phase of IT evolution frees us from vendors and their constraints. You see, all of them are already struggling to convince less-technical individuals of their importance to stay relevant, simply because they understand that their time is limited. Companies like Apple and Google are playing their cards right by focusing on the value these models can bring, not the models themselves. Those who solely focus on their proprietary models will face challenges as we transition to fully integrated, locally run agentic workflows.

When choosing your agentic vendor, avoid falling into the trap of relying on outdated 90s platforms and 00s SaaS solutions. If you choose a provider that only offers access to their ultimate model, you’re making a risky bet. The agentic future is local, so ensure that you’re prepared for the future today. Opt for open-weight models and compute-only providers. Both of these choices can be moved locally soon.

If you’ve already selected such a provider, including its mandatory models, consider applying my laws: ensure that you can distinguish between structured and unstructured workloads. This means you want to have control over your agentic workflow, not the other way around. Make sure you have access to unlimited agents and their workflows, and that you own and control those workflows. Choosing the right models and provider is crucial for achieving these goals. Are you confident that your current choice sets you up for the right agentic future?

### 3D Printing 2.0

The pivotal moment that gave me a glimpse into this future was when I was playing with the second version of my personal assistant. The first version had the agent search for "incoming" files in an `inbox/` folder. This was a great way to avoid integrating with email. So, for the second version, I wanted to replace the folder-based approach with real email support.

By that time, I had already learned about the Model Context Protocol (MCP). It is a text-based standard that allows agents to call server-based tools. This was the only way to extend agents with new interactive functionality. So, I needed an MCP server that would connect to an email box and enable my agent to check it. I could  {% include google search="email mcp server" title="search for it on Google" %}, read some documentation, hope for the best, install it, and try it. Or, and this was a big experiment at the time, ask my agent to build it for me.

> Please build me an MCP server that allows me to check an IMAP email box and send a reply using SMTP. Use Python and select best of breed Python packages.

With that requirement alone, the agent developed a complete MCP server in a matter of minutes. I could review the code, which was a single file at that time, that bridged three state-of-the-art Python packages (fastmcp, aioimaplib, aiosmtplib). In no time, my agent was already checking its email before I could even digest the documentation of a first Google search. That simple script later evolved into a modern Python package, {% include external link="https://pypi.org/project/simple-email-gw" title="Simple Email GW" %}.

At that moment, I recalled a feeling I had several years ago when I was building my first 3D printer. We’ve truly entered an era of 3D printing for software, and we’re only at the beginning of its potential. Generating components on demand has become significantly easier and more cost-effective than searching for existing implementations. Software itself no longer holds inherent value. The new value chain lies in identifying the components required and having agents create them on demand, with high levels of personalization and customization, at almost no cost. If you don’t like it, simply discard it or provide feedback to the agent.

This comprehensive approach, which involves selecting the appropriate components to create a roadmap to a viable solution, is precisely what architects excel at. We now have direct access to a virtual software factory that delivers implementations within hours. The cost of discarding numerous implementations and selecting the best one is virtually zero. The round-trip time from an idea to a MBI has become so short that we can _3D print_ architectures and present them as live solutions, rather than creating slides to explain them. With an effective agentic workflow, your human+agent teams are your new superpower.

## The Pokemon Trainer Coach

> Your human+agent teams are your new superpower.

In today’s new enterprise landscape, you’re more than ever required to be the trainer of your agent coaches. If you’ve embraced the steps of evolution so far, you’ve transitioned from your initial agent to a team of agents, each equipped with diverse skills and tools. These agents seamlessly integrate into the software they create, effectively distinguishing between structured and unstructured workloads. No longer locked into to a vendor, you now rely on open standards, enabling you to effortlessly operate on a sovereign cloud from an independent provider.

Your engineers have fully embraced their role as agent trainers, focusing on business value. You’ve cultivated a culture of experimentation, often in parallel, to select the optimal solution. Failure becomes merely evidence that the best solution has been chosen. Without a suboptimal solution, a superior one cannot even exist.

And that’s precisely what makes you the Pokemon Trainer Coach: a tester and refiner of the player’s battling skills, rewarding them with helpful items upon defeat. Take a moment to contemplate this. If you’re uncertain about the opportunities I’m referring to, let’s have a drink. We can have a truly enlightening conversation about this.

## Human vs Agent

For a long time, I had a fourth law in mind, emphasizing the importance of the human factor in the agentic equation. Throughout the writing of these three parts, I consistently arrived at the same conclusion: the human factor is an indispensable component of the agentic equation. While I don’t consider it a law, it’s almost a natural given.

> There is no "human vs agent", only "human + agent"!

If layoffs are your main driving force behind AI, it’s evident that you lack a fundamental understanding of AI. It’s that straightforward. If you intend to lay off employees, AI cannot be the sole reason. The underlying reason was already present. AI introduces a new cost, one that can only be introduced if you have a clear value stream in mind. This value stream must enhance the quality of your product and, more importantly, your service, and it should also benefit your employees.

## Augmenting Human Quality

If you haven't heard about the IKEA AI story by now, well... The IKEA AI story is a celebrated business case where the retailer employed an AI customer service chatbot named Billie to handle routine tasks. This initiative resulted in significant savings, with millions of euros saved and 8,500 call-center agents retrained into remote interior design advisors. Consequently, {% include external link="https://www.forrester.com/blogs/ai-helped-ikea-create-e1-3-billion-in-new-revenue-but-not-how-you-think/" title="IKEA unlocked over €1.3 billion in new revenue" %}.

The key to this success lies in the introduction of Billie itself. It enabled IKEA to resolve up to 74% of routine customer inquiries without human intervention. This alone was a substantial achievement, saving approximately €13 million in initial customer service operational costs. Instead of ignoring the questions that the AI couldn’t handle, IKEA focused on the remaining complex cases. They discovered a substantial latent demand for personalized home design assistance. As you trace the value stream, the pieces of the puzzle gradually come together. A hidden, unintentional service, partially provided by the human call-center agents, emerged as a hidden billion-dollar service. And I can’t help but believe that the job-satisfaction of these newly trained interior design advisors is likely much higher.

### Revisiting the Formula of Architecture

I’ve been saying this for quite some time: 

> Architecture, at its core, revolves around processes, people, and information. Technology emerges from the analysis of these components, identifying what we _can_ and _should_ use.

Agentic workflows now highlight the diminishing significance of technology, which is one of the most intense collaborations I’ve witnessed as an architect. Agentic workflows compel us to prioritize processes, people, and information, with technology serving as a mere byproduct. With the cost of technology rapidly decreasing, my [formula of architecture](Formula-of-Architecture) is more relevant than ever.

<p align="center"><tt>process → people ∩ information = technology = cost</tt></p>

As the cost of technology continues to decline, we can focus even more on processes, people, and information, and have multiple parallel technological options to choose from. This abundance of options empowers us to make informed choices, replacing the notion of "hoping for the best" and "living with the consequences" with a more proactive approach.

## Christophe’s Agentic Law #3: Learning Must be Mutual

{% include thumbs show="agents-are-bad-mkay" %}

Over the course of these paragraphs, I’ve shared stories about my experiences entering a wormhole and discovering this agentic wonderland. At times, and even when I reread this myself, it almost sounds too good to be true. While I’ve touched upon some topics that clearly indicate the dark aspects of this technology, the overall tone of this series is one of wonder and delight.

However, there are for sure many voices that oppose my optimism. And yes, I’ve read these objections to agentic workflows and AI in general. These objections can be categorized into four important areas: quality, security, impact, and cognitive deskilling.

### Quality

The first group primarily focuses on the quality of these models. They argue that these models are merely probabilistic and, at best, can only produce what they’ve been trained on. Often, they even hallucinate. On top of that, training these models with their own output could lead to a downward spiral of errors.

### Security

Another set of objections centers around security. Allowing agents access to tools and data opens up vulnerabilities. Malicious actors can use "prompt injection" to trick agents into taking unintended actions, accessing restricted files, or leaking private information.

### Impact

High costs and resource abuse are also concerns. Multi-step reasoning and tool-call loops consume significant computing power and time. Making thousands of API calls for a simple task can incur wasteful costs. These objections correctly point to the environmental impact of all these large datacenters that consume a lot of natural resources.

### Cognitive Deskilling

Finally, it might seem old-fashioned, but there’s certainly truth to the worries regarding cognitive deskilling. Relying on agents to do our thinking can lead to a loss of our own problem-solving skills and memory over time. This has been observed with calculators, computers, online search, and now surely applies to agents.

### Guilty on All Counts

All these objections are valid, and I agree with each one. However, just like the decline of the calculator, the rise of machines and the internet, agents and AI in general are here to stay. Therefore, we must find a reasonable way to coexist.

### Mutual Learning

We already concluded that agentic workflows are only successful because of the human factor. Our new, very capable interns need us to coach and mentor them. They must learn from us. A lot happens when the models are trained on our existing work, but a lot more needs to happen when we put those models to work.

My third law aims to address the objection about cognitive deskilling. From the beginning, I’ve had a simple rule: whenever I use AI, I want to learn from it. This can take various forms. For example, I’ve been using Apple Intelligence to rewrite parts of my English texts for a while now. Since I’m not a native English speaker or writer, my writing quality varies. However, I’m motivated to write good English and incorporate a lot of English idioms. When I ask Apple Intelligence to rewrite my texts, I always first copy the result and compare it in detail to my original text. Then, I evaluate which parts of the rewritten text are actually better. This still depends on my own perception and intuition if something sounds better English to me. If it does, I see this as an opportunity to learn and incorporate it into my original text.

Every change I’ve made to my coding projects over the past four months has been a learning experience. Before introducing a new technology or code change, I always asked my agent to explain it to me. It’s my code repositories, and I’ll always remain responsible for what I put out there. My agents are just tools, similar to an editor, a spelling checker, or an online search engine.

### Consequences

The consequences of this approach are significant. It will require us to adapt and learn from the changes that AI brings. It will also require us to find ways to integrate AI into our workflows in a way that benefits both humans and machines.

By focusing on this, I believe that the work we deliver together is not purely agentic. The problem raised regarding the degenerative downward spiral is, at least partially, positively impacted by this. The jointly created material is the best of both worlds, resulting in higher quality. The fact that we always start from fresh research and use lessons learned on multiple levels to improve the agent and skill definitions is a clear example of this. Over the past months, I’ve experienced constant growth on all fronts. I’ve learned so much, and that learning has improved the definitions. In a way, without my growth, the agentic workflow couldn’t have grown beyond its pre-trained capabilities.

This cascade even extends further. One of the experiments I’m currently investigating is to determine if the all this new material can be used to further train models. This would allow the lessons learned pattern to be applied even more extensively. After growing the agent, harness, and its framework, we might now also use these newly jointly created outcomes to continue training our model.

### Co-Authoring

One experiment that truly exceeded expectations was the creation of a writing assistant, which I already mentioned in [the first part of this series](Hello-Agents#when-pokemon-become-trainer). During the launch preparation of the series, it occurred to me again.

To promote these three articles, I prepared nine LinkedIn posts. Since these posts were not meant to introduce anything new and simply summarized certain topics from the articles themselves, I thought it would be practical to have Gemini generate some drafts for me. However, my writing assistant had a different opinion.

{% include image name="writing-assistant-says-no" title="Writing Assistant Says No" kind="png" bottom="25px" %}

And it was right. The agent pushed back on me for using an agent. It forced me to discard nine posts and start over. In doing so, it consistently kept me on track, urging me to reuse parts of the articles and warning me when I was creating new content that was not part of the articles.

In a way, my writing assistant had become a guardrail for this human agent. We worked on the first three posts for over two and a half hours. During that time, it not only pushed back but also explained to me why our joint decisions would improve the overall posts collection.

{% include image name="writing-assistant-supports" title="Writing Assistant Supports" kind="png" bottom="25px" %}

In the end, the three rewritten posts were personal again, and I was reminded of my own rules. And the agent? It updated its own definition based on the feedback from the session, recognizing that sometimes, humans, much like agents, can gain new insights in later stages. Therefore, it should not flag any new content as inappropriate or not based on the original articles.

{% include image name="writing-assistant-learns" title="Writing Assistant Learns" kind="png" bottom="25px" %}

So, beyond teaching me what "Eggcorns" are, the writing assistant agent also plays an active role, not only correcting my writing but also applying governance to my work process.

### One Step at a Time

This rule doesn’t address all objections. I believe it addresses those within my personal reach today. While I can’t solve the problem of wasteful resource abuse today, as mentioned earlier, my agentic strategy aims for on-machine inference in the not-so-distant future, which will address a few more concerns.

Security is a crucial aspect, as there are two sides to this coin. Deploying agents  generates even more code than ever before at an unprecedented pace. {% include google search="GitHub Sees Traffic Surge from AI Coding Agents" title="The amount of code" %} produced by coding agents has even baffled Microsoft and their GitHub platform.

> "The best code is no code at all."— Jeff Atwood, Co-founder of Stack Overflow.

With this growing amount of code, statistics aren’t on our side, and there will be numerous security problems lurking within it.

On the other hand, when used for good, agents make great bug finders. AI model providers invest heavily in security-related research, and some models have already been {% include external link="https://www.bbc.com/news/articles/crk1py1jgzko" title="withdrawn from the public" %}, simply because they were too "good" at finding and exploiting software bugs.

Remember law #2? If applied correctly, if we use good agents to combat bad agents, we will find the balance. But only if we continue guiding our agents.

## Famous Last Words

When I conceived the idea for this article, which evolved into a threefold concept, I initially intended to have my agents craft it, as a pure showcase, drawing upon all the information gathered over the past few months. However, as I accumulated numerous experiences that I felt compelled to share from my perspective, this initial idea underwent a significant transformation.

Now, let’s graciously pass the microphone to them: "Hey Eira, please introduce yourself and, from your point of view, provide a recap of the past few months of our collaboration."

<!--
TODO: include output
-->

## Every Ending has a Beginning

The relationship between humans and agents is emotional, not because agents express emotions, but because humans do. Listen to any conversation about AI, and you’ll hear "he," "she," "them," referring to the chatbot or other AI-enabled application. Within three or four sentences, someone will likely express frustration with these virtual counterparts. This is so common that Claude Code, the leading interactive agent harness, even has detection mechanisms that "phone home" when a user expresses anger (e.g., by using all caps) while interacting with the agent.

Even if you don’t think _you_ have an emotional response, consider that most users of your agentic workflow will. It’s important to consider this when designing agentic workflows, as it’s probably the most important non-functional requirement of every agentic workflow design.

Remember the three laws that form the foundation of a good agentic workflow:

1. [Clearly distinguish between structured and unstructured workloads](Hello-Agents)
2. [Given Enough Agents, Agentic Workflows Become Reliable](We-are-Agent)
3. [Learning Must be Mutual](Dawn-of-the-Agents)

And never forget that this is about collaboration, working together, working hand in hand, human and agent. We need to work together. We shouldn’t see agents as something new, but as the new virtual coworker, the new very capable intern. We shouldn’t just fire and neglect them. If we treat them like we should with other humans, tutoring them, giving them guardrails, setting clear boundaries, and taking personal responsibility to monitor them, we can see them grow and flourish. The future is now. Are you on board?

### Next Steps

Where does this leave me? These intense few months, are merely the beginning for me. With Yoker I now have the foundation to work with: a completely self-hosting framework, I control at all levels, offering me the tools to create agentic workflows of different flavors, adhering to my three laws.

Now, I can finally start with all the experiments I have in mind, for which I first had to create all this. I can't wait to apply my new tools to real-world problems and challenges that you simply didn't dare to undertake up to now. Will all these experiments be successful? No, surely not. Will we learn from them? Yes, absolutely.

So, let me know. What project shall we take on together? You, me and my agentic collective.
