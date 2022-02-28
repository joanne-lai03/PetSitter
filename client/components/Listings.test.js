import React from 'react'
import { render, screen } from '@testing-library/react'
import Listings from './Listings'
import { getListing } from '../apis/listings'
import '@testing-library/jest-dom'

jest.mock('../apis/listings')

test('Listings should render a list of petsitters', () => {
  // arrange
  getListing.mockImplementation(() => Promise.resolve([{ id: 1, name: 'Ahmad' }]))

  // act
  render(<Listings />)

  // assert
  const p = screen.getByText('My pet type')
  expect(p.textContent).toMatch('My pet type')
})
