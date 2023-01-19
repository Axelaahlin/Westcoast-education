import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import AddCourse from './AddCourse'

describe('AddCourse component', () => {
  const setup = () => {render(<AddCourse />)}

  describe('has layout', () => {
    test('heading saying "Registrera Kurs"', () => {
      setup()

      const pageHeading = screen.getByRole('heading', {name: 'Registrera Kurs'})

      expect(pageHeading).toBeInTheDocument()
    })
  })

  describe('Has inputs', () => {
    test('CourseName', () => {
      setup()

      const CourseInput = screen.getByLabelText("Kursnamn")

      expect(CourseInput).toBeInTheDocument()
    })

    test('courseNumber', () => {
      setup()

      const CourseNumberInput = screen.getByLabelText("Kursnummer")

      expect(CourseNumberInput).toBeInTheDocument()
    })
  })


  //Lämnar kvar detta test även om det inte fungerar pågrund av import
  //har gjort mock req med jest.fn() men ville visa upp detta ändås
  describe('form interactions', () => {
    test('add a user works', async () => {
      let reqBody;

      const server = setupServer(
        rest.post('http://localhost:3010/courses', (req, res, context) => {
          req.json.then((data) => (reqBody = data))
          return res(context.status(201))
        })
      );

      server.listen(); 

      setup(); 
      const courseNameInput = screen.getByLabelText('Kursnamn')
      const couseNumberInput = screen.getByLabelText('Kursnummber')
      const courseLengthInput = screen.getByLabelText('kursens längd')
      const courseStartdateInput = screen.getByLabelText('Startdatum')
      const courseDescInput = screen.getByLabelText('kurs beskrivning')
      const regBtn = screen.getByRole('button', {
        name: 'Registrera'
      })

      await userEvent.type(courseNameInput, 'Erik Johansson');
      await userEvent.type(CourseNumberInput, '024256');
      await userEvent.type(courseLengthInput, '10 veckor');
      await userEvent.type(courseStartdateInput, '2022221010');
      await userEvent.type(courseDescInput, 'Detta är en kurs som vi kommer att ha');

      await userEvent.click(regBtn);

      await new Promise((resolve) => setTimeout(resolve, 500));

      expect(reqBody).toEqual({
        courseName: 'Erik Johansson', 
        courseNumber: '024256', 
        courseLength: '10 veckor', 
        courseLength: '202222-10-10', 
        courseDescription: 'Detta är en kurs som vi kommer att ha',
      })
    })
  })
})