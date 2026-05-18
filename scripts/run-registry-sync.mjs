import { spawnSync } from 'node:child_process';

const registryPath = 'knowledge/05_agent_memory/agent_shipyard/agent_container_registry.md';

const args = [
  'run',
  './cmd/agent-registry-sync',
  '--registry',
  registryPath,
  ...process.argv.slice(2),
];

const result = spawnSync('go', args, {
  cwd: 'go-core',
  stdio: 'inherit',
});

if (result.error) {
  console.error('[registry-sync] failed to start Go process');
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
