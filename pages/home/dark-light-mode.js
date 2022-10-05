function darkSite (){
    const darkButton = document.querySelector(`.dark-mode`)
    const moonImg = document.querySelector(`#moon-sun`)
    const html = document.querySelector(`html`)

    darkButton.addEventListener(`click`, (e) => {
        if (!window.localStorage.getItem(`dark`)){
            window.localStorage.setItem(`dark`, true)
            html.classList.add(`dark`)
            moonImg.src = `/assets/img/sun.jpg`
        }else if (window.localStorage.getItem(`dark`)){
            window.localStorage.removeItem(`dark`)
            moonImg.src = `/assets/img/moon.jpg`
            html.classList.remove(`dark`)
        }
    })
    if (window.localStorage.getItem(`dark`)){
        html.classList.add(`dark`)
        moonImg.src = `/assets/img/sun.jpg`
    }
}

darkSite ()