import {screen, render, fireEvent} from '@testing-library/react'

import Home from './Home'


describe('HomePage', () => {
  const Setup = () => {render(<Home/>)}

  describe('Has a layout', () => {
    test('Page title that says "Välkommen till Westcoast Education"', () => {
      Setup()

      const pageTitle = screen.getByText('Välkommen till Westcoast Education')

      expect(pageTitle).toBeInTheDocument()
    })
  })
})