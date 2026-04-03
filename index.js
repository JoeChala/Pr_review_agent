const { createAgent } = require('gitclaw');
const { execSync } = require('child_process');

async function reviewPR(baseBranch = 'main') {
  const agent = await createAgent({ repoPath: __dirname });

  // Get the actual diff to feed to the agent
  let diff;
  try {
    diff = execSync(`git diff ${baseBranch}...HEAD`, { encoding: 'utf8' });
  } catch (e) {
    diff = execSync(`git diff HEAD~1 HEAD`, { encoding: 'utf8' });
  }

  if (!diff.trim()) {
    console.log('No changes detected.');
    return;
  }

  console.log('🔍 Running PR review agent...\n');

  const response = await agent.chat(
    `Please review this pull request diff. Run your security-scan and review-diff 
     skills, then write a summary using write-summary.\n\n\`\`\`diff\n${diff}\n\`\`\``
  );

  console.log(response);
}

const base = process.argv[2] || 'main';
reviewPR(base).catch(console.error);