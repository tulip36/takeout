import { render } from '@redwoodjs/testing'

import HomeHeader from './HomeHeader'

describe('HomeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHeader />)
    }).not.toThrow()
  })
})
