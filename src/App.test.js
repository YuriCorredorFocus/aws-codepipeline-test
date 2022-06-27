import { fireEvent, render } from '@testing-library/react'
import App from './App'

test('Counter works properly', () => {
  const { getByTestId, getByText } = render(<App />)
  const counterValue = getByTestId("counter-value")
  expect(counterValue).toHaveTextContent("0")

  const plusButton = getByText("+1", { selector: "button" })
  const minusButton = getByText("-1", { selector: "button" })

  fireEvent.click(plusButton)
  expect(counterValue).toHaveTextContent("1")

  fireEvent.click(minusButton)
  fireEvent.click(minusButton)
  expect(counterValue).toHaveTextContent("-1")
})
