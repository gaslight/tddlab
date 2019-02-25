import loadPolyfills from '@open-wc/polyfills-loader'; // eslint-disable-line

loadPolyfills().then(() => {
  import('./bowling-scorer.js');
});
