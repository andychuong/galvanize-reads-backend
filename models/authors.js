// Models
const authors = []

// Add An Author
function addAuthor(body) {
  const errors = []
  const firstName = body.firstName
  const lastName = body.lastName
  const portraitUrl
  if(body.portraitUrl){
    portraitUrl = body.portraitUrl
  }
  let response
  if (!firstName) {
    errors.push(`First name is required`)
    response = {
      errors
    }
  } else if (!lastName){
    errors.push(`Last name is required`)
    response = {
      errors
    }
  } else {
    if()
    const newAuthor = {
      firstName,
      lastName,
    }
    if(portraitUrl){
      newAuthor.portraitUrl = portraitUrl
    }
    costumes.push(newAuthor)
    response = newAuthor
  }
  return response
}

// Get All Authors
function getAllAuthors() {
  return authors
}

// Get One Author
function getOneAuthor(id) {
  let error = ''
  const author = authors.find(author => author.id === id)
  let response
  if (!author) {
    error = `Could not find author with id of ${id}`
    response = {
      error
    }
  } else {
    response = {
      author
    }
  }
  return response
}

// Update An Author
function updateAuthor(id, body) {
  let error = {}
  const author = authors.find(author => author.id === id)
  const authorIndex = authors.indexOf(author)
  // const name = body.name
  let newFirstName = author.firstName
  let newLastName = author.lastName
  let newPortraitUrl = author.portraitUrl
  if(body.firstName) newName = body.firstName
  if(body.lastName) newPrice = body.lastName
  if(body.portraitUrl) newDesc = body.portraitUrl
  let response
  if (!author) {
    error.message = `Could not find author with id of ${id}`
    error.status = 404
    response = {
      error
    }
  } else {
    author.firstName = newFirstName
    author.lastName = newLastName
    author.portraitUrl = newPortraitUrl
    authors[authorIndex] = author
    response = {
      author
    }
  }
  return response
}

// Delete An Author
function deleteAuthor(id) {
  let error = {}
  const author = authors.find(author => author.id === id)
  const authorIndex = authors.indexOf(author)
  if (!author) {
    error.message = `Could not find author with id of ${id}`
    error.status = 404
    response = {
      error
    }
  } else {
    authors.splice(authorIndex, 1)
    response = {
      author
    }
  }
  return response
}

module.exports = {
  addAuthor,
  getAllAuthors,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
}
