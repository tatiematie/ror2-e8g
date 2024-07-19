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
    }),
    prerender: {
      handleHttpError: 'warn' // or 'ignore' to suppress the error
    }
  }
};

export default config;
