import request from 'superagent'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { setUser } from '../actions/user'
import { showError } from '../actions/error'

const rootUrl = '/api/v1/users'

export default function addUser (user, authUser, navigate) {
  const newUser = {
    name: user.name,
    location: user.location,
    description: user.description
    // email: authUser.email,
    // auth0Id: authUser.sub
    // 🎈if AuthUser setup finished comment out!
  }

  console.log('From APi', user, authUser, navigate)
  console.log('from addUser registeration', newUser)

  const storeState = getState()
  const { token } = storeState.user

  dispatch(setWaiting())

  return request
    .post(rootUrl)
    .set('authorization', `Bearer ${token}`)
    .set(({ Accept: 'application/json' }).send(newUser))
    .then((res) => {
      console.log('from inside api', newUser, res.body)
      const newUser = res.body
      // newUser.isAdmin = isAdmin
      // newUser.token = token
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
