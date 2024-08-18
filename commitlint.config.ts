import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'chore' // Other changes that don't modify src or test files
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'setup', // Project setup
        'config', // Configuration files
        'deps', // Dependency updates
        'feature', // Feature-specific changes
        'bug', // Bug fixes
        'docs', // Documentation
        'style', // Code style/formatting
        'refactor', // Code refactoring
        'test', // Tests
        'build', // Build scripts or configuration
        'ci', // Continuous integration
        'release', // Release related changes
        'other' // Other changes
      ]
    ]
  }
}

export default Configuration
