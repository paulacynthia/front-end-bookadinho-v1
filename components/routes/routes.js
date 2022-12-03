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

  return login.data
}

export const profile = async ({profileid}) => {
  const profile = await axios({
    method: 'get',
    url: pathName + `/profiles/${profileid}`
  })

  return profile.data
}

export const createProfile = async ({name = "", userName = "", description = "", likes = [], changeBooks = [], latestReadings = [], photo =""}) => {
  if(!name || !userName) {
    return {"status": "203", "message": "Nome e nome de usuário são obrigatórios!"}
  }

  const profile = await axios({
    method: 'post',
    url: pathName + '/create_profile',
    data: {
      name,
      userName,
      description,
      likes,
      changeBooks,
      latestReadings,
      photo
    }
  })

  return profile.data
}

export const registerBook = async ({name = "", author = "", description = "", photo = "", profileid = ""}) => {
  if(!name || !author || !description || !photo || !profileid) {
    return {"status": "203", "message": "Nome do livro, o autor, a descrição, a imagem do livro e usuário são obrigatórios!"}
  }

  const book = await axios({
    method: 'post',
    url: pathName + '/register_book',
    data: {
      name,
      author,
      description,
      photo,
      profileid
    }
  })

  return book.data
}

export const changeBook = async ({bookid}) => {
  const book = await axios({
    method: 'get',
    url: pathName + `/change_book/${bookid}`
  })

  return book.data
}

export const chatsPreview = async ({profileid}) => {
  const chats = await axios({
    method: 'get',
    url: pathName + `/chats/preview/${profileid}`
  })

  return chats.data
}

export const chat = async ({idChat}) => {
  const chat = await axios({
    method: 'get',
    url: pathName + `/chats/${idChat}`
  })

  return chat.data
}

export const notifications = async ({profileid}) => {
  const notifications = await axios({
    method: 'get',
    url: pathName + `/notifications/${profileid}`
  })

  return notifications.data
}

export const createNotification = async ({sender = {}, recipient = {}, type = ""}) => {
  const notification = await axios({
    method: 'post',
    url: pathName + '/notifications/create_notification',
    data: {
      sender,
      recipient,
      type
    }
  })

  return notification.data
}

export const editProfile = async ({profileid = "", userName = "", description = "", photo = "", likes = [], latestReadings = []}) => {

  const profile = await axios({
    method: 'put',
    url: pathName + '/profiles/edit_profile',
    data: {
      profileid,
      userName,
      description,
      photo,
      likes,
      latestReadings
    }
  })

  return profile.data
}

export const registeredBooks = async ({profileid}) => {
  const book = await axios({
    method: 'get',
    url: pathName + `/books/registered_books/${profileid}`
  })

  return book.data
}

