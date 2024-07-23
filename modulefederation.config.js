const deps = require('./package.json').dependencies

module.exports = {
  name: 'application',
  remotes: {
    oil_tanks_reactapp: 'oil_tanks_reactapp@http://localhost:3001/oil_tanks_reactapp.js',
    display_sheme_reactapp: 'display_sheme_reactapp@http://localhost:3002/display_sheme_reactapp.js'
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
  }
}
