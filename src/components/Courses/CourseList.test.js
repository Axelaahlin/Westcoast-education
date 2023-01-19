import {screen, render} from '@testing-library/react'

import CourseList from './CourseList'

describe('CourseList component', () => {
  const setup = () => {render(<CourseList/>)}

  describe('Has a layout', () => {
    test('Page title that says "Våra Kurser"', () => {
      setup()

      const pageTitle = screen.getByRole('heading')

      expect(pageTitle).toHaveTextContent('Våra Kurser')
    })
  })

  describe('CourseList api request', () => {
    test('render a list of courses if request is succesfull', async () => {
      setup() 

      window.fetch = jest.fn(); 
      window.fetch.mockResolvedValueOnce({
        json: async () => [
          {
            courseName: "JavaScript 4",
            courseNumber: "10946",
            courseLength: "5 veckor",
            courseStartDate: "2023-02-01",
            courseDescription: "faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor",
            id: 1,
        }
      ],
    })

    const courses = await screen.findAllByRole('listitem');

    expect(courses).not.toHaveLength(0);

    });
  })
})