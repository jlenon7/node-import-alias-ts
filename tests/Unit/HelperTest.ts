import { Helper } from '#src'
import { test } from '@japa/runner'

test.group('HelperTest', () => {
  test('should log hello world!', () => {
    Helper.log()
  })
})
