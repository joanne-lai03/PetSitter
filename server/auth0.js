const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://harakeke-2022-jinny.au.auth0.com'
const audience = 'https://petsitter/api'

<<<<<<< HEAD
||||||| 600e0a3
const getUserRoles = async (uid) => {
  const accessToken = await getAccessToken()
  const { body } = await request(`${domain}/api/v2/users/${uid}/roles`)
    .set({ authorization: `Bearer ${accessToken}` })

  return body[0]?.name
}

const getAccessToken = async () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: machine2machineClientId,
    client_secret: machine2machineSecret,
    audience: `${domain}/api/v2/`
  }

  const { body } = await request.post(`${domain}/oauth/token`)
    .send(data)
    .type('form')
  return body.access_token
}
=======
const getUserRoles = async (uid) => {
  const accessToken = await getAccessToken()
  const { body } = await request(`${domain}/api/v2/users/${uid}/roles`)
    .set({ authorization: `Bearer ${accessToken}` })

  return body[0]?.name
}

const getAccessToken = async () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: machine2machineClientId,
    client_secret: machine2machineSecret,
    audience: `${domain}/api/v2/`
  }

  const { body } = await request.post(`${domain}/oauth/token`)
    .send(data)
    .type('form')
  return body.access_token
}


>>>>>>> 2748135d598b2943496bc3bbc10ec0b8979f3649
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256']
})

module.exports = {
  checkJwt
}
