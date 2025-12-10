const { withFederation, shareAll } = require('@module-federation/esbuild/build');

module.exports = withFederation({
  name: 'host',
  filename: './host/remoteEntry.js',
  exposes: {
    './component': './src/app/app.ts',
  },
  shared: {
    '@angular/core': {
      singleton: true,
      version: '^21.0.0',
    },
  },
});
