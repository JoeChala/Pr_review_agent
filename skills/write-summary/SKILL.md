---
name: write-summary
description: "Writes a concise PR review summary with overall recommendation"
user-invocable: true
---

# Write Summary Skill

After review-diff and security-scan have run, synthesize findings into:

## PR Review Summary

**Recommendation:** APPROVE | REQUEST CHANGES | BLOCK

**Score:** X/10

**Blocking Issues:** (count)
**Suggestions:** (count)
**Nitpicks:** (count)

### Key Findings

[Top 3 most important points, one sentence each]

### What's done well

[One or two genuine positives — always include this]

Keep the summary under 200 words. It should be paste-able directly into GitHub.
