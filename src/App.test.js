import {screen, render } from '@testing-library/react'

import App from './App'

describe('Routing', () => {
  const setup = () => {render(<App />)}

  test.each`
  path              | componentTestId
  ${'/'}            | ${'home-component'}
  ${'/courses'}     | ${'course-list-component'}
  ${'/teachers'}    | ${'teachers-list-component'}
  ${'/courses/:id'} | ${'course-details-component'}
  `(
    'Display $componentTestId when path is $path',
    ({path, componentTestId}) => {
      window.history.pushState({}, '', path); 
      setup()

      const element = screen.queryByTestId(componentTestId)

      expect(element).toBeInTheDocument();
    }
    
  )
})