function filterGenre (){
    const queryGenre = document.querySelectorAll(`.genreButton`)

    queryGenre.forEach(element => element.addEventListener(`click`, (e) => {
        const indexOfCategories = categories.indexOf(e.target.innerHTML)
        const filteredProducts = products.filter(product => product.category == indexOfCategories)
        const queryUl = document.querySelector(`.productsList`)
        const queryPriceRange = document.querySelector(`.priceRange`)
        queryGenre.forEach(buttonAgain => {
            if (buttonAgain.innerHTML != e.target.innerHTML){
                buttonAgain.classList.remove(`selected`)
            }
        })
        queryGenre.forEach(button => {
            if (button.innerHTML == e.target.innerHTML){
                queryUl.innerHTML = ``
                button.classList.add(`selected`)
                if (e.target.innerHTML != `Todos`){
                    produtsList (filteredProducts)
                    rangeFiltered (queryPriceRange.childNodes[3].innerHTML.slice(3))
                }else if (e.target.innerHTML == `Todos`){
                    produtsList (products)
                    rangeFiltered (queryPriceRange.childNodes[3].innerHTML.slice(3))
                }
            }
        })
    }))
}

filterGenre ()