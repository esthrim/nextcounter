module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'refactor']],
    'subject-case': [2, 'always', ['lower-case']],
  },
};
