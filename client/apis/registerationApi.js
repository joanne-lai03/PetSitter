import request from 'superagent'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { setUser } from '../actions/user'
import { showError } from '../actions/error'

const rootUrl = '/api/v1/users'

export default function addUser(user, authUser, navigate) {
  const state = getState()
  const { token } = state.user

  const newUser = {
    name: user.name,
    location: user.location,
    description: user.description,
    email: authUser.email,
    auth0Id: authUser.sub,
    token
  }

  dispatch(setWaiting())
  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .send(newUser)
    .then(() => {
      dispatch(setUser(newUser))
      newUser.token = token
      navigate('/myaccount')
      return newUser
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
