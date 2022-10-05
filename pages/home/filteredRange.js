function rangeFiltered (value){
    const queryLi = document.querySelectorAll(`.productCard`)
    // const queryRange = document.querySelector(`.priceSlide`)
    queryLi.forEach(li => {
        const liPrice = parseInt(li.childNodes[0].childNodes[1].childNodes[2].childNodes[0].innerHTML.slice(4))
        if (liPrice <= parseInt(value)){
            li.style.display = `flex`
        }else {
            li.style.display = `none`
        }
    })
}

rangeFiltered ()