import request from 'superagent'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { setUser } from '../actions/user'
import { showError } from '../actions/error'

const rootUrl = '/api/v1/users'

export default function addUserv(user, authUser, navigate) {
  const newUser = {
    name: user.name,
    location: user.location,
    description: user.description,
    email: authUser.email,
    auth0Id: authUser.sub
  }

  console.log('From APi', user, authUser, navigate)

  const storeState = getState()
  const { token } = storeState.user

  console.log('from addUser registeration', newUser)

  dispatch(setWaiting())
  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .set({ Accept: 'application/json' })
    .send(newUser)
    .then((res) => {
      const newUser = res.body
      console.log('from addUser registeration22222', newUser)
      newUser.token = token
      dispatch(setUser(newUser))
      navigate('/')
      return newUser
    })
    .catch((err) => {
      dispatch(showError(err.message))
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
