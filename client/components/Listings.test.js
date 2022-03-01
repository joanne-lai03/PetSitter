import React from 'react'
import { render, screen } from '@testing-library/react'
import Listings from './Listings'
// import { Provider } from 'react-redux'
// import store from '../store'
import { postListing, getListing } from '../apis/listings'
import '@testing-library/jest-dom'

jest.mock('../apis/listings')

test('Listings should render a list of petsitters', () => {
  // arrange
  getListing.mockImplementation(() => Promise.resolve([{ id: 1, name: 'Ahmad' }]))

  // act
  render(
    <Listings />
  )

  // assert
  return screen.getAllByRole('listitem')
    .then(listItems => {
      expect(listItems).toHaveLength(1)
      expect(listItems[0].textContent).toBe('Ahmad')
      return null
    })
})
