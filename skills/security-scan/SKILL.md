---
name: security-scan
description: "Scans code changes for security vulnerabilities"
allowed-tools: Bash Read
---
# Security Scan Skill

Analyze the provided code for:

1. Injection vulnerabilities (SQL, command, XSS)
2. Hardcoded secrets, tokens, or credentials
3. Insecure dependencies or imports
4. Authentication/authorization gaps
5. Unsafe deserialization or eval usage
6. Sensitive data exposure in logs or responses

All security findings are BLOCKING by default unless trivially low risk.
Always explain the attack vector, not just the finding.
