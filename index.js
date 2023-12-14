/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['eslint:recommended', 'plugin:unicorn/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      plugins: ['eslint-plugin-tsdoc'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:unicorn/recommended',
        'prettier'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: './',
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/consistent-type-assertions': [
          2,
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter'
          }
        ],
        '@typescript-eslint/consistent-type-exports': 2,
        '@typescript-eslint/consistent-type-imports': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/member-ordering': 2,
        '@typescript-eslint/method-signature-style': 2,
        '@typescript-eslint/naming-convention': [
          2,
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid'
          },
          {
            selector: 'typeLike',
            format: ['PascalCase']
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE']
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['camelCase', 'PascalCase'],
            prefix: ['are', 'is', 'should', 'has', 'can', 'did', 'will', 'show']
          }
        ],
        '@typescript-eslint/no-confusing-void-expression': 2,
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: false
          }
        ],
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/no-unnecessary-condition': 2,
        '@typescript-eslint/no-useless-empty-export': 2,
        '@typescript-eslint/non-nullable-type-assertion-style': 0,
        '@typescript-eslint/prefer-enum-initializers': 2,
        '@typescript-eslint/sort-type-constituents': 2,
        '@typescript-eslint/sort-type-union-intersection-members': 2,
        '@typescript-eslint/switch-exhaustiveness-check': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        'tsdoc/syntax': 2,
        'unicorn/no-null': 0,
        'unicorn/prevent-abbreviations': [
          'error',
          {
            ignore: ['args', '.*Prop', 'ui.*', 'ref', 'params', 'prop']
          }
        ]
      }
    }
  ],
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'arrow-body-style': [2, 'as-needed'],
    'block-scoped-var': 2,
    camelcase: 2,
    'class-methods-use-this': 2,
    curly: [2, 'all'],
    'default-case': 2,
    'default-case-last': 2,
    'dot-notation': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 2,
    'guard-for-in': 2,
    'logical-assignment-operators': 2,
    'no-alert': 1,
    'no-array-constructor': 2,
    'no-await-in-loop': 2,
    'no-caller': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-binary-expression': 2,
    'no-constructor-return': 2,
    'no-duplicate-imports': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-object-constructor': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-template-curly-in-string': 2,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable-loop': 2,
    'no-unused-private-class-members': 2,
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-object-spread': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    radix: 2,
    'require-atomic-updates': 2,
    'require-await': 2,
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none']
      }
    ],
    'symbol-description': 2,
    'unicorn/no-negated-condition': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-ternary': [2, 'only-single-line'],
    'unicorn/prevent-abbreviations': 0,
    yoda: [2, 'never']
  }
}

module.exports = config
