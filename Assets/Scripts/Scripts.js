function toggleAccordion(accordion) {
    const body = accordion.querySelector('.accordion-body')
    const arrow = accordion.querySelector('.icon-arrow')

    body.classList.toggle('body-active')
    arrow.classList.toggle('icon-arrow-active')
}

let currentIndex = 0

function showSlides() {
    const items = document.querySelectorAll('.item')
    const totalItems = items.length

    items.forEach((item, index) => {
        item.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none'
    });

    if (currentIndex === totalItems - 3) {
        document.querySelector('.next').disabled = true
    } else {
        document.querySelector('.next').disabled = false
    }

    if (currentIndex === 0) {
        document.querySelector('.prev').disabled = true
    } else {
        document.querySelector('.prev').disabled = false
    }
}

function nextSlide() {
    const items = document.querySelectorAll('.item')
    const totalItems = items.length

    if (currentIndex < totalItems - 3) {
        currentIndex += 1
        showSlides()
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex -= 1
        showSlides()
    }
}

showSlides();

function toggleClass(element) {
    const options = document.querySelectorAll('.options-form > div')
    options.forEach(opt => {
        opt.classList.remove('opt-selection')
    })
    element.classList.add('opt-selection')

    const form1 = document.querySelector('.form-contato')
    const form2 = document.querySelector('.form-orcamento')
    const form3 = document.querySelector('.form-locacao')
    const form4 = document.querySelector('.form-trabalhe-conosco')


    switch (element.id) {
        case 'contato':
            form1.classList.remove('form-selection')
            form2.classList.add('form-selection')
            form3.classList.add('form-selection')
            form4.classList.add('form-selection')
            break
        case 'orcamento':
            form1.classList.add('form-selection')
            form2.classList.remove('form-selection')
            form3.classList.add('form-selection')
            form4.classList.add('form-selection')
            break
        case 'locacao':
            form1.classList.add('form-selection')
            form2.classList.add('form-selection')
            form3.classList.remove('form-selection')
            form4.classList.add('form-selection')
            break
        case 'trabalhe-conosco':
            form1.classList.add('form-selection')
            form2.classList.add('form-selection')
            form3.classList.add('form-selection')
            form4.classList.remove('form-selection')
            break
    }
}
