import { render } from '@redwoodjs/testing'

import Tailwindcard from './Tailwindcard'

describe('Tailwindcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tailwindcard />)
    }).not.toThrow()
  })
})
