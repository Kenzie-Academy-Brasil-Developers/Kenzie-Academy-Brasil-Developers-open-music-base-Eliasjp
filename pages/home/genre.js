function genreButtons (){
    createGenreButtons (`Todos`)
    createGenreButtons (`Pop`)
    createGenreButtons (`MPB`)
    createGenreButtons (`Forró`)
    createGenreButtons (`Samba`)
    createGenreButtons (`Baião`)
    createGenreButtons (`Rap`)
    createGenreButtons (`Hip-Hop`)
    createGenreButtons (`Rock`)
    createGenreButtons (`Reggae`)
    createGenreButtons (`Country`)
    createGenreButtons (`Gospel`)
    startHighlight ()
}

function createGenreButtons (type){
    const button = document.createElement(`button`)
          button.classList = `genreButton color-disable font-weight-2 radius-1 bg-color-grey-8 ${type.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}`
          button.innerHTML = `${type}`

    const queryDiv = document.querySelector(`.genre`)
    queryDiv.append(button)
}

function startHighlight (){
    const queryTodos = document.querySelector(`.todos`)
    queryTodos.classList.add(`selected`)
}

genreButtons ()