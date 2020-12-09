const {
  generatePreset,
  injectGoogleFontLink,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => generatePreset(api, 'neumorphism-ui', () => {
  injectGoogleFontLink(api, 'Roboto:100,300,700')
})