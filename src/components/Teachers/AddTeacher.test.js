import { screen, render } from "@testing-library/react";

import AddTeacher from './AddTeacher'

describe('Add teacher component', () => {
  const setup = () => {render(<AddTeacher />)}

    describe('has layout', () => {
    test('heading saying "Registrera Ny Lärare"', () => {
      setup();

      const pageHeading = screen.getByRole('heading', {name: 'Registrera Ny Lärare'})

      expect(pageHeading).toBeInTheDocument();
    })
  })

  describe('Has inputs', () => {
    test('firstname', () => {
      setup()

      const firstNameInput = screen.getByLabelText("Förnamn")

      expect(firstNameInput).toBeInTheDocument()
    })

    test('efternamn', () => {
      setup()

      const lastNameInput = screen.getByLabelText("Efternamn")

      expect(lastNameInput).toBeInTheDocument()
    })
  })
})