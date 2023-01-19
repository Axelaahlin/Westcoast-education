import { screen, render } from "@testing-library/react"

import CourseDetails from "./CourseDetail"

describe('Course details component', () => {
  const setup = () => {render(<CourseDetails />)}

  describe('has layout', () => {
    test('heading saying "Kurs detaljer"', () => {
      setup()

      const pageHeading = screen.getByRole('heading', {name: 'Kurs detaljer'})

      expect(pageHeading).toBeInTheDocument()
    })
  })
})