# We are Agent

URL: https://christophe.vg/about/we-are-agent/

## Summary

Part 2 of a three-part series on agentic workflows. This article dives into the mechanics: how LLMs work, the analogy to CPU/OS/apps, why governance is needed, the evolution from auditability to guardrails, agent-vs-agent stories, the fundamental workflow properties and components, the second agentic law, the rehabilitation of waterfall, and the introduction of Yoker — a Python-first agent harness framework.

## Key Takeaways

- **The LLM is a CPU**: An LLM generates the next most probable word. The harness is the OS. Agents and skills are applications. Context is the path through the model's multi-dimensional space.
- **Never trust an LLM**: The same request can produce two completely different answers. This uncertainty requires a governance layer — the agentic workflow.
- **Agents reviewing agents**: Multiple agents with different perspectives create self-reviewing, self-healing workflows that catch issues a single developer would miss.
- **Always iterate at least twice**: First iterations are drafts. Subsequent iterations incorporate prior knowledge.
- **Waterfall is rehabilitated**: With agents, analysis and review cycles take minutes instead of months, making the "think before you act" approach viable again.
- **Build your own harness**: Yoker was created to address the limitations of existing tools — visibility, control, Python-first integration, and no Bash() tool.

## From LLM to Workflow

### The CPU Analogy

An LLM is like a CPU: it receives input and generates output, one word at a time. The harness (Claude Code, Yoker) is the operating system, injecting system prompts and providing tools. Agents and skills are applications — pieces of text that define behavior and domain knowledge. Skills, unlike agents, are loaded on-demand to keep context manageable.

### Context and Its Limits

Context acts as a path into the LLM's multi-dimensional brain. Top-tier models support up to 1 million tokens — roughly 7-8 full novels. Yet even this fills quickly with system prompts, tool indexes, file contents, and conversation history. Context "rot" means harnesses employ algorithms to keep context small and relevant.

### The Infinite Monkey Theorem

An LLM can reproduce Shakespeare's prologue to Romeo & Juliet almost verbatim, but generates entirely different — and creative — continuations of Stephen King. The same request produces different results each time. This inherent uncertainty is both a superpower and a risk, necessitating governance.

## From Auditability to Guardrails

The journey started with paranoia: transcribing every session for audit trails. Over time, this evolved into proactive safeguards:

- **Research skill**: Caches all search results and content for verification.
- **Agent definitions as black boxes**: The author never manually edits definitions — agents improve themselves through lessons-learned loops.
- **The Bash() problem**: Complex shell commands are hard to verify and can contain single-character differences between safe and destructive. This became both a superpower and a major obstacle.

## Agent vs Agent Stories

### Agent Says No

The security engineer agent blocked the owner's progress on a configuration system, flagging it as insecure. Instead of overruling it, the owner respected the observation and filed an upstream feature request. Agents serve as active guardrails, not just processes.

### TOCTOU

The security engineer discovered a Time-Of-Check to Time-Of-Use vulnerability. By the time the human finished researching the concept, the workflow had already resolved it — security agent raised the issue, project manager dispatched the developer, and the fix was implemented. All without human intervention.

### Agents Aren't Mind-Readers

When specifications were vague ("vibe" programming style), agents produced suboptimal results. Clear articulation — prototypes, specifications, analysis — is the investment that leads to success. The frustration arises from expecting magic instead of doing the work.

### The Overachiever Agent

Despite crystal-clear instructions, agents introduced solutions to non-existent problems and over-engineered them. Close supervision is required because agents can deliver significant amounts of work in a short time, and recovery can take several iterations.

## Fundamental Workflow Properties

### Always Iterate at Least Twice

Avoid relying on a single iteration. The C3 workflow expands this: analysis undergoes two iterations (high-level MBI definition, then detailed functional analysis), followed by multi-level review (functionality, domain-specific, code quality, tests, documentation). With this multi-pass workflow, the source of issues is often solely the human's instructions.

### Empowering Agents to Create and Self-Reflect

Agents reviewing agents establishes self-reviewing, self-healing workflows. The author never manually edits agent definitions — agents improve themselves. They begin as junior entities and evolve into senior team members through organic growth.

### Bottom Line: Is It Different With Humans?

Trial and error, iterative workflows, guardrails, mentoring, teamwork, clear specifications, review cycles — nothing in this list would trigger a professional as not a best practice. Working with agents isn't, and shouldn't be, any different from working with humans. The most significant factor is you: "A fool with a tool is still a fool, only now a more dangerous fool."

## Workflow Components

- **Research**: Gather fresh information before taking action. Prevents uninformed decisions and grounds the workflow in facts.
- **Multiple Perspectives**: Multiple agents analyze and review from different angles (functional, API, security, UX). Issues are raised and resolved without human intervention.
- **Human Gatekeeper**: The human grants final approval. The pull request is the interface. The human is the sole responsible party.
- **Lessons Learned**: Agents review their performance and propose changes to their definitions. Every mistake becomes codified, every success becomes a pattern.

## Christophe's Agentic Law #2: Given Enough Agents, Agentic Workflows Become Reliable

The Law of Large Numbers is on our side. As the number of reviews increases, the observed quality converges toward the true quality. Variance decreases as N grows. Multiple agents reviewing each other's work — and even running parallel teams with different models — produces results that can be consolidated into superior outcomes.

## Rehabilitation of Waterfall

Waterfall's concerns (lack of user feedback, late testing, high risk) become obsolete when analysis and review cycles take minutes. Agents enable highly parallel analysis and review of small MBI segments at unprecedented pace. The cost of re-running the workflow is negligible. "Think before you act and verify afterward" becomes practical.

## Introducing Yoker

After growing discomfort with Claude Code — hidden processes, the Bash() tool problem, lack of Python-first integration, no SDK for embedding workflows — the author built Yoker: a Python-first agent harness framework. Yoker replaced Bash() with structured, guarded Python tools. It provides visibility, control, non-interactive operation, and multi-provider support. By late July, Yoker was self-hosting: using Yoker to fix Yoker, in real-time.

## The Common Thread

Humans and agents must work together. The human is the secret ingredient. The workflow, not the agent, is what makes the difference. Garbage in leads to garbage out. Grow your own team, don't download someone else's. Embrace the self-learning loop. And to truly harness the full potential, take control of the harness itself.

---

Author: Christophe Van Ginneken (Christophe VG)