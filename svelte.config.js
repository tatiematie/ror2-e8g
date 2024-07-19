import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
