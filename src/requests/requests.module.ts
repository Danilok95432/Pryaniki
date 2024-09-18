import axios from "axios"

const HOST = 'https://test.v5.pryaniky.com'

export async function authorizate(username: string, password: string) {
  return axios.post(`${HOST}/ru/data/v3/testmethods/docs/login`, JSON.stringify({ username, password }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function getTable(token: string) {
  return axios.get(`${HOST}/ru/data/v3/testmethods/docs/userdocs/get`, {
    headers: {
      'x-auth': `${token}`
    }
  })
}

export async function createNote(token: string, element: object) {
  return axios.post(`${HOST}/ru/data/v3/testmethods/docs/userdocs/create`, 
    element, 
    {
      headers: {
        'x-auth': `${token}`
      }
    })
}

export async function deleteNote(token: string, id: string) {
  return axios.get(`${HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, {
    headers: {
      'x-auth': `${token}`
    }
  })
}

export async function editNote(token: string, id: string, obj: object) {
  return axios.post(`${HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`, 
    obj,  
    {
    headers: {
      'x-auth': `${token}`
    }
  })
}
