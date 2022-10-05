function produtsList(array){
    array.forEach(element => createLi(element))
}

function createLi (element){
    const ul = document.querySelector(`.productsList`)

    const li = document.createElement(`li`)
          li.classList = `productCard`

    const cardHeader = document.createElement(`header`)
          cardHeader.classList = `cardHeader`
          
    const cardImg = document.createElement(`img`)
          cardImg.classList = `cardImg`
          cardImg.src = `${element.img}`
          cardImg.alt = `${element.band}, ${element.title}`

    const cardInfo = document.createElement(`div`)
          cardInfo.classList = `cardInfo`

    const bandInfo = document.createElement(`div`)
          bandInfo.classList = `bandInfo`

    const cardBand = document.createElement(`small`)
          cardBand.classList = `cardBand color-grey-2`
          cardBand.innerHTML = `${element.band}`

    const cardYear = document.createElement(`small`)
          cardYear.classList = `cardYear color-grey-2`
          cardYear.innerHTML = `${element.year}`

    const cardTitle = document.createElement(`h2`)
          cardTitle.classList = `cardTitle color-grey-1`
          cardTitle.innerHTML = `${element.title}`

    const priceDiv = document.createElement(`div`)
          priceDiv.classList = `priceDiv`
    
    const cardPrice = document.createElement(`p`)
          cardPrice.classList = `cardPrice color-grey-1`
          cardPrice.innerHTML = `R$: ${element.price.toFixed(2)}`

    const buyButton = document.createElement(`button`)
          buyButton.classList = `buyButton color-grey-2 bg-color-grey-7 radius-1`
          buyButton.innerHTML = `Comprar`

    ul.append(li)
    li.append(cardHeader)
    cardHeader.append(cardImg, cardInfo)
    cardInfo.append(bandInfo, cardTitle, priceDiv)
    bandInfo.append(cardBand, cardYear)
    priceDiv.append(cardPrice, buyButton)
}

produtsList (products)