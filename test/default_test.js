import { defaultTo } from '../'
import test from 'tape'

// Returns the second argument if it is not `null`, `undefined` or `NaN`;
// otherwise the first argument is returned.

test('defaultTo', t => {
  const defaultToFunctional = defaultTo('functional')
  t.equals(defaultToFunctional(NaN), 'functional')
  t.equals(defaultToFunctional(undefined), 'functional')
  t.equals(defaultToFunctional(null), 'functional')
  t.equals(defaultToFunctional('jrs'), 'jrs')
  t.end()
})
