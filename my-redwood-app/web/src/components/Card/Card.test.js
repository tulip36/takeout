import { render } from '@redwoodjs/testing'

import Card from './Card'

describe('Card', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Card />)
    }).not.toThrow()
  })
})
