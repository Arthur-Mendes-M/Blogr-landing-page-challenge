const menu = document.getElementById('menu')
const handleMenu = document.getElementById('handleMenu')
const linkList = document.querySelectorAll('#menu ul li span')

handleMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
    handleMenu.classList.toggle('active')
})

// if(window.innerWidth < 850) {
if(window.screen.width < 1065) {
    console.log('entrou')
    linkList.forEach(link => {
        link.addEventListener('click', () => {
            const li = link.parentElement
            li.classList.toggle('active')

            document.querySelectorAll('#menu ul li.active').forEach(item => {
                if(item != li && item.classList.contains('active')) {
                    item.classList.toggle('active')
                }
            })
        })
    })
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) 
        menu.parentElement.classList.add('scrolling')
    else 
        menu.parentElement.classList.remove('scrolling')
})
