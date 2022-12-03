const axios = require('axios');

const pathName = 'http://localhost:4000'

export const home = async () => {
  const books = await axios({
    method: 'get',
    url: pathName + '/home',
  })
  return books.data
}

export const login = async ({userName, password}) => {
  const login = await axios({
    method: 'post',
    url: pathName + '/login',
    data: {
      userName,
      password
    }
  })
}

login({userName: 'felipe.ogoms', password: 'senha'})



