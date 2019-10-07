import * as FormIndex from '../'

describe('Form', () => {
  it('should take a snapshot of FormIndex', () => {
    expect(FormIndex).toMatchSnapshot()
  })
})
