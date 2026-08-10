import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://cadu1996.github.io' : 'https://cadusouza.dev',
  base: isGitHubPages ? '/cadusouza.dev' : '/',
  output: 'static',
});