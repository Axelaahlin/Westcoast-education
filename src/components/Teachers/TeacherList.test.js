import {screen, render, fireEvent} from '@testing-library/react'

import TeacherList from './TeacherList' 

describe('TeacherList component', () => {
  const Setup = () => {render(<TeacherList/>)}

  describe('Has a layout', () => {
    test('Page title that says "Våra Lärare"', () => {
      Setup()

      const pageTitle = screen.getByRole('heading')

      expect(pageTitle).toHaveTextContent('Våra Lärare')
    })
  })

  describe('TeacherList api request', () => {
    test('render a list of teachers if request is succesfull', async () => {
      Setup() 

      window.fetch = jest.fn(); 
      window.fetch.mockResolvedValueOnce({
        json: async () => [
          {
            id: 1,
            firstName: "Axel",
            lastName: "Åhlin Andersson",
            PSN: "xxxxxxxxxx",
            email: "axelaahlin@gmail.com",
            phoneNumber: "0722335343",
        }
      ],
    })

    const courses = await screen.findAllByRole('listitem');

    expect(courses).not.toHaveLength(0);
    });
  })
})