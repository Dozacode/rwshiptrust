import { render } from '@redwoodjs/testing'

import RoadmapPage from './RoadmapPage'

describe('RoadmapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoadmapPage />)
    }).not.toThrow()
  })
})
