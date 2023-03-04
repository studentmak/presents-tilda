let arr_presents_amount_1000 = [
    "Сырные палочки", "Стрипсы", "Кальмар темпура",
].map(i => i.replace(/\s+/g, '_').toUpperCase())

let arr_presents_amount_1500 = [
    "Пепси 1л", "Миринда 1л", "7-up 1л",
].map(i => i.replace(/\s+/g, '_').toUpperCase())

let arr_presents_amount_2000 = [
    "Запеченный с мидиями", "Запеченная Калифорния", "Цыпленок с грибами",
].map(i => i.replace(/\s+/g, '_').toUpperCase())

let presents = document.querySelectorAll(".t-img-select__control")

function add_class(){
    for(i=0; i<presents.length; i++){
        let id
        let input_value = presents[i].querySelector("input").value.replace(/\s+/g, '_').toUpperCase()

        if(arr_presents_amount_1000.includes(input_value)){
            id = "presents_amount_1000"
        } else if (arr_presents_amount_1500.includes(input_value)){
            id = "presents_amount_1500"
        } else if (arr_presents_amount_2000.includes(input_value)){
            id = "presents_amount_2000"
        } else {
            id = 0
        }
        presents[i].classList.add(id)
    }
}

let presents_amount_1000 = document.querySelectorAll(".presents_amount_1000")
let presents_amount_1500 = document.querySelectorAll(".presents_amount_1500")
let presents_amount_2000 = document.querySelectorAll(".presents_amount_2000")

function add_banner(){
    let presents_amount_1000 = document.querySelectorAll(".presents_amount_1000")
    let presents_amount_1500 = document.querySelectorAll(".presents_amount_1500")
    let presents_amount_2000 = document.querySelectorAll(".presents_amount_2000")

    for(i=0; i<presents_amount_1000.length; i++){
        let banner_amount_1000 = document.createElement("div")
        banner_amount_1000.setAttribute("class", "banner_amount_1000")
        banner_amount_1000.innerHTML = `Доступно от 1000р`
        presents_amount_1000[i].appendChild(banner_amount_1000)
    }

    for(i=0; i<presents_amount_1500.length; i++){
        let banner_amount_1500 = document.createElement("div")
        banner_amount_1500.setAttribute("class", "banner_amount_1500")
        banner_amount_1500.innerHTML = `Доступно от 1500р`
        presents_amount_1500[i].appendChild(banner_amount_1500)
    }

    for(i=0; i<presents_amount_2000.length; i++){
        let banner_amount_2000 = document.createElement("div")
        banner_amount_2000.setAttribute("class", "banner_amount_2000")
        banner_amount_2000.innerHTML = `Доступно от 2000р`
        presents_amount_2000[i].appendChild(banner_amount_2000)
    }
}

function visibility_banners(){
    function visibility_banner(elementsClass, el_Class_Banner, visibility) {
        let elements = document.querySelectorAll(elementsClass)
        for(i=0; i<elements.length; i++){
            elements[i].style.pointerEvents = (visibility === true) ? "none" : "all"
            elements[i].querySelector('input').checked = false
            elements[i].querySelector(el_Class_Banner).style.visibility = (visibility === true) ? "visible" : "hidden"
        }
    }
    visibility_banner(".presents_amount_1000", ".banner_amount_1000", (tcart.amount >= 1000) ? false : true)
    visibility_banner(".presents_amount_1500", ".banner_amount_1500", (tcart.amount >= 1500) ? false : true)
    visibility_banner(".presents_amount_2000", ".banner_amount_2000", (tcart.amount >= 2000) ? false : true)
}

//When loading the page
add_class()
add_banner()  

// for proxy
visibility_banners();





