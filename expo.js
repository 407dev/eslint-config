/** @type {import("eslint").Linter.Config} */
const reactNative = {
  extends: ['universe', '@407dev/eslint-config'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/hook-use-state': 2,
    'react/no-array-index-key': 2,
    'react/no-unstable-nested-components': 2,
    'react/self-closing-comp': 2,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-fragments': 2,
    'react/jsx-handler-names': [
      2,
      {
        eventHandlerPrefix: 'on'
      }
    ],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
        multiline: 'last'
      }
    ],
    'react/jsx-wrap-multilines': 2
  }
}
