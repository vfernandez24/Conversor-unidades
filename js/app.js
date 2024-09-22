//! Variables y Elementos del DOM

const longitud = document.getElementById('longitud'),
masa = document.getElementById('masa'),
temp = document.getElementById('temperatura');

const btn_long = document.getElementById('btn-l'),
btn_masa = document.getElementById('btn-m'),
btn_temp = document.getElementById('btn-t');

//! Styles

function longitud_active() {
    if (longitud.classList.contains('active')) {}
    else {
        longitud.classList.add('active')
        btn_long.classList.add('active')
        masa.classList.remove('active')
        btn_masa.classList.remove('active')
        temp.classList.remove('active')
        btn_temp.classList.remove('active')
    }
}

function masa_active() {
    if (masa.classList.contains('active')) {}
    else {
        masa.classList.add('active')
        btn_masa.classList.add('active')
        longitud.classList.remove('active')
        btn_long.classList.remove('active')
        temp.classList.remove('active')
        btn_temp.classList.remove('active')
    }
}

function temperatura_active() {
    if (temperatura.classList.contains('active')) {}
    else {
        temp.classList.add('active')
        btn_temp.classList.add('active')
        masa.classList.remove('active')
        btn_masa.classList.remove('active')
        longitud.classList.remove('active')
        btn_long.classList.remove('active')
    }
}

function copy() {
    
}