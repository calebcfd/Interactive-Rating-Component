let score = 0

function handleClick(event, value) {
    console.log('fire')
    let active = document.getElementsByClassName('activeButton')
    console.log(active)
    if (active.length > 0) {
        active[0].setAttribute('class', 'button')
    }
    event.target.setAttribute('class', 'activeButton')
    score = value
}

function handleSubmit() {
    console.log('fire')
    let postHouse = document.createElement('div')
    postHouse.setAttribute('class', 'house postHouse')

    let img = document.createElement('img')
    img.setAttribute('src', 'images/illustration-thank-you.svg')
    img.setAttribute('class', 'img')

    let selector = document.createElement('p')
    selector.innerHTML = 'You selected '+score+' out of 5'
    selector.setAttribute('class', 'selector')

    let title = document.createElement('h1')
    title.innerHTML = 'Thank You!'

    let p = document.createElement('p')
    p.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!'
    p.setAttribute('class', 'moveUp')

    postHouse.appendChild(img)
    postHouse.appendChild(selector)
    postHouse.appendChild(title)
    postHouse.appendChild(p)

    document.querySelector('body').appendChild(postHouse)
}