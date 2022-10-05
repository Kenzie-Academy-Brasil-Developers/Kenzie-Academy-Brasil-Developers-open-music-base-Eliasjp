function priceRange (){
    const divRange = document.querySelector(`.priceRange`)
    const priceSlide = document.querySelector(`.priceSlide`)
    const pPrice = document.createElement(`p`)
          pPrice.classList = `maxRange color-grey-2`
          pPrice.innerHTML = `R$ ${priceSlide.value}`
    
    priceSlide.addEventListener(`input`, e => {
        pPrice.innerHTML = `R$ ${e.target.value}`
        rangeFiltered (e.target.value)
    })

    divRange.append(pPrice)
}

priceRange ()