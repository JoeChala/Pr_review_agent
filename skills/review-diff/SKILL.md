---
name: review-diff
description: "Analyzes a git diff for code quality, logic errors, and anti-patterns"
---
# Review Diff Skill

Given a git diff or file contents:

1. Identify logic errors, edge cases not handled, and missing error handling
2. Flag deprecated patterns or anti-patterns for the detected language
3. Check for obvious performance issues (N+1 queries, blocking async, etc.)
4. Note missing tests for new logic

Label each finding: BLOCKING, SUGGESTION, or NITPICK.
Format output as a structured list grouped by file.
