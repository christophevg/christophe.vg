---
name: website-backlog
description: Use this skill when the user asks to "work on the backlog", "continue with the backlog", "next backlog item", or "implement a website improvement". Guides the process of working on TODO.md backlog items.
---

# Website Backlog Workflow

This skill defines the process for implementing website improvements from the TODO.md backlog.

## Process

For each backlog item:

1. **Read TODO.md** - Identify the next uncompleted `[ ]` item (skip `[x]` completed and `Don't Do` section items)

2. **Create a feature branch** from `agentic`:
   ```
   feature/<descriptive-name>
   ```

3. **Present a plan** describing:
   - What the feature does
   - Which files will be modified/created
   - Implementation approach
   - Any dependencies or considerations

4. **Discuss with user** - Wait for feedback, update plan if needed

5. **Implement** after approval:
   - Make the changes
   - **STOP and ask user to verify visually at `http://localhost:4000`**
   - **WAIT for user confirmation before committing**
   - Only after user confirms, commit with descriptive message

6. **Update TODO.md** - Mark item as `[~]` when starting, `[x]` when complete

7. **Report back** - Summarize what was done

## Backlog Structure

TODO.md is organized into sections:
- Content & UX
- Technical
- Visual & Design
- Content Features
- Don't Do (skip these)

## Naming Conventions

Feature branch names should match the item:
- "Tag filtering" → `feature/tag-filtering`
- "Search functionality" → `feature/search-functionality`
- "Schema.org markup" → `feature/schema-org-markup`

## Example

```
User: Continue with the backlog
Assistant: [Reads TODO.md]
The next item is **Tag filtering** in Content & UX.

I'll create branch `feature/tag-filtering` and propose a plan for...
```