---
title: Formula of Architecture
full_title: The Formula of Architecture
short:
  - foa
tags:
  - thing
header:
  teaser: /about/images/thumb/formula-of-architecture.png
  image: /about/images/header/formula-of-architecture.png
---

Dearly beloved, I am honoured to present to you the holy grail of information technology, the one to rule them all, the ultimate, the one and only, behold... the Formula of Architecture:

![the formula of architecture](/about/images/full/the-formula.png)

Okay, everyone can go home now. Thank you very much. Yes, it was a lot of work, and I know things will never be the same. But let’s hope for world peace, no more hunger, and God bless 🫳🎤

<p style="text-align:center">
  <img src="/about/images/full/math-confused.gif">
</p>

Still here? Okay, I understand that a comprehensive formula, one that incorporates years of experience and research, can be dense and may require some explanation. Allow me to guide you through it...

## Are You Capable?

Do you possess the necessary capabilities to drive your business to success? Are you equipped with the required processes, the right people, information, and technology? Or at the very least, do you have a clear understanding of what these elements are, or even what they should be?

{% include image name="capability" bottom="25px" kind="png" %}

Capabilities are the most recent evolution in paradigms for structuring the analysis and design of organizations, also known as Enterprise Architecture. While the concept has existed since the early 2000s, its popularity has surged in recent years, primarily due to its prominence in Enterprise Architecture frameworks like TOGAF and Archimate, which gained significant traction in 2016 and 2018, respectively. If this all seems relatively new to you, it’s time to catch up, as this paradigm is strong and will be around and  relevant for some time.

> Remember that, like most paradigms you can recall, capabilities are simply rehashing common sense. Long before capabilities grouped processes, people, information, and technology, we applied business analysis to identify processes, collaborated with HR and project managers for staffing, conducted functional analysis to understand the details of the required information, and techies have always been raving about their toys. If you’ve been around long enough, you’ve witnessed this firsthand and recognise it. There’s nothing new here, it’s merely another effective marketing of plain old common sense. Nevertheless, it’s commendable that more people now are considering this thanks to capabilities. Every paradigm that attracts a broader audience is valuable.

## Order of Capabilities

Gathering processes, people, information, and technology alone isn’t sufficient. Just as a football team requires a skilled coach to maximize the potential of its star players (OMG, did _I_ just use a football metaphor? 😳), an Enterprise Architect is essential to establish and maintain order within all components. Or rather: the Architect governs the order that is already inherently present. And it’s once again a matter of pure common sense.

### Once Upon a Time...

Why are we doing all this in the first place? Essentially, to help the organization drive its business to success. Their business involves several processes, executed sequentially or in parallel, planned or interrupted. These processes can be explicit or simply occur naturally due to the expertise of experienced individuals. Long before the advent of Information Technology, organizations have driven their business to success. These processes have always existed. Therefore, Information Technology’s sole purpose is to automate them, just as a factory conveyor belt automated parts of the factory processes before it. To automate anything, one must thoroughly understand it. After all, remember, “_A fool with an automated tool is still a fool, but a dangerous one now._” So, within any capability, processes serve as the starting point for effectively mapping business needs.

> This is so important and I can't stress this enough: automating business needs essentially involves automating existing (or desired) business processes. People, information and technology never exist for their own purpose.

Processes are essentially formalisations of what people do, how they interact with each other, and what information is exchanged, processed, and stored. Therefore, we can consider processes as the inherent top of the order of capabilities, and then move down to people and information, which are the building blocks of processes.

Well, not quite. What you actually need are _skills_ and information. Now, skills are immaterial and can only manifest in the form of people. However, it’s important to note this distinction because we don’t always get what we want or _need_. People aren’t an absolute resource. Often, you have to work with what you have or can get. The technical skills of your available workforce eventually determine the technology you **_can_** use.

> If you only know how to operate a hammer, everything looks like a nail. No! You simply shouldn’t expect someone with such skills to work with a screwdriver and screws. They’ll only hurt themselves and you.

On the other hand, automating processes necessitates specific information. This information is absolute and defined by one’s own requirements (read: processes) and those of other stakeholders. However, there’s always a gray area that allows for variations, providing some leniency in choosing a less optimal approach when other non-absolute factors come into play. Just as with skills, information is not always black or white. Nevertheless, at some point, the required information will be known, and the type of information you need to handle will dictate the technology you **_should_** use.

### The Tail of the Tale is the Tool

In the early days there was only the SQL Server Hammer. And we were so happy to store literally everything in there. And it did hurt, more than once. Today, we can only rejoice the plentitude of options to store and handle information. The pendulum might even have swung to far in the opposite direction and we might already have too many options. And the same goes for networking components, communication protocols... But let's consider all that choice foremost a luxury. Today we can almost objectively decide which technology is suited best to handle a given set of information and even consider how it should optimally be accessed.

In the early days, SQL Server was the only option, our proverbial hammer, and we were thrilled to store everything in it. However, it did hurt us more than once. Today, we can rejoice in the abundance of information storage and handling options available. The pendulum might have swung too far in the opposite direction, leading to an overwhelming number of choices. The same applies to networking components, communication middleware... Nevertheless, let’s consider all this choice primarily as a luxury. Today, we can almost objectively determine which technology is best suited to handle a specific set of information and even consider how it _should_ be optimally accessed.

And this brings us to the following dilemma: on the one hand, we are aware of the technology we _should_ use to manage our information, while on the other hand, we are also aware of the technology our people _can_ use. Setting aside the most significant disruptor, technology hype, the only way to determine which technology to use is to consider the intersection between people and information, between what we _can_ and what we _should_.

{% include image name="intersection" bottom="25px" kind="png" %}

And there you have it, folks: the Formula of Architecture simply states that technology is the result of a thorough analysis of processes involving people and information. This analysis leads to a small intersection between the technology our people can use and the technology we should use to manage our information.

{% include image name="business-needs" bottom="25px" kind="png" %}

## Business Needs Resources

Hold on a moment! We haven’t reached the end yet. Choosing technology wasn’t the final destination. Technology comes with various costs, including purchase, setup, maintenance, incident, and upgrade expenses. In an ideal scenario, these costs would simply be a consequence of carefully considered choices, as per our Formula of Architecture: <tt>process → people ∩ information = technology = cost</tt>.

From the outset, business needs are constrained by available resources, which include time, money, and people. These resources shape the entire internal capability order. The resulting cost is never absolute and is highly influenced by the money resource. So a feedback loop is introduced into our capability limiting the choice of technology even further. Even more so, also our people factor is further influenced by the same resource limitations. Even is we would be able to get the people with the skills we need, often we simply can't due to resource constraints. And so even more cost-feedback is introduced into our capabilities.

From the outset, Business needs are inherently constrained by available resources, including time, money, and personnel. These resources shape the entire internal capability order. The resulting technology cost is not absolute, and is highly influenced by the business' money resource. This feedback loop further limits the choice of technology, and even the availability of skilled personnel is often hindered by resource constraints. Consequently, even more cost-feedback is introduced into our capabilities.

{% include image name="business-needs-resources" bottom="25px" kind="png" %}

## The Moral of this Capable Story

Architecture, at its core, revolves around processes, people, and information. Technology emerges from the analysis of these components, identifying what we _can_ and _should_ use.

Languages, frameworks, middleware, virtualisation, and AI, all these aspects become irrelevant if an organization lacks the skilled individuals to build and maintain them. They merely become additional costs, hindering progress in unforeseen ways. On top of that, in most scenarios, those meticulously crafted layers of abstraction, clean code design patterns, and preemptive optimisations don’t contribute significantly. The only viable path forward in selecting a sensible technology choice lies in examining processes, the people and information involved, and the available resources, all while being mindful of the business’s actual needs.

## TL;DR - The One Slide

If you've worked with me before, you known about my <tt>all</tt> slide decks. A Keynote (off course, what else? 😇) slide deck with _all_ slides and presentations I create within the context of the assignment I'm working on. Often spanning of hundreds of slides, they offer a wonderful historic and often nostalgic journey through the evolution of our ideas.

Many of my writings begin with a slide. This one was no exception. While it clearly isn't a slide for an actual deck - text simply doesn’t belong on there - I believe it effectively conveys the main message, after reading the full story above. It’s a perfect fit for the TL;DR format. 😉

{% include image name="formula-of-architecture-slide" %}
