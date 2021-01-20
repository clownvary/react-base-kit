module.exports = {
  /**
   * The parser preset used to parse commit messages can be configured
   */
  parserPreset: {
    pattern: /^(\w+-\d+)\s(\w+):\s(.*)$/,
    patternCorrespondence: ['ticket', 'type', 'subject'],
  },
  /**
   * every rule include [when, value]
   * when can be 'always' or 'never', means enable or disable this rule
   * value can be any type, you can use value as a param to implement your rule, default is null
   */
  rules: {
    'ticket-upper-case': ['always'],
    'ticket-format': ['always'],
    'subject-no-capitalize': ['always'],
    'subject-no-symbol-end': ['always'],
    'type-enum': ['always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore']],
  },
};
