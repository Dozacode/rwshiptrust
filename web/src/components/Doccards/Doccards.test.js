import { render } from '@redwoodjs/testing'

import Doccards from './Doccards'

describe('Doccards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Doccards />)
    }).not.toThrow()
  })
})
