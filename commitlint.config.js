module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'scope-enum': [0],
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        // Standard tp-1/type/message
        const { header: commitMessage } = parsed
        const [tpId] = commitMessage.split('/')
        const tpIdRegex = /tp-([0-9]+)/g
        if (!tpIdRegex.test(tpId)) {
          return [false, 'You need to fill TP card code.']
        }
        return [true]
      },
    ],
  },
}