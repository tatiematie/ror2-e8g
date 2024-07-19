import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    // Ensure to change the paths.base to your repo name
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/ror2-e8g' : ''
    },
    adapter: adapter({
      // default options are shown. these are optional
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
