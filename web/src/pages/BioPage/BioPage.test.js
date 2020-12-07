import { render } from '@redwoodjs/testing'

import BioPage from './BioPage'

describe('BioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BioPage />)
    }).not.toThrow()
  })
})
