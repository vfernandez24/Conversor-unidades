//! Variables y elementos del DOM
const conversionRatesLongitud = {
    nm: 1e+9,
    m: 1,
    micrones: 1e+6,
    mm: 1000,
    cm: 100,
    km: 0.001,   
    in: 39.3701, //pulgadas
    yd: 1.09361, //yardas
    mi: 0.00621371,
    miNau: 0.000539957,
    ft: 3.28084
}; 

console.log (conversionRatesLongitud)

const u_inicial_l = document.getElementById('unidad-inicial--longitud'),
u_final_l = document.getElementById('unidad-final--longitud'),
value_inicial_l = document.getElementById('value-inicial--longitud'),
value_final_l = document.getElementById('value-final--longitud');

let valorBase_l = 0,
valorIngresado_l = 0,
valorFinal_l = 0,
unidad_inicial_l = 'm',
unidad_final_l = 'cm';

//! Funcionamiento

value_inicial_l.addEventListener("input", () => {
    valorIngresado_l = value_inicial_l.value
})

u_inicial_l.addEventListener('change', () => {
    unidad_inicial_l = u_inicial_l.value
    console.log(unidad_inicial_l)
})

u_final_l.addEventListener('change', () => {
    unidad_final_l = u_final_l.value
    console.log(unidad_final_l)
})

function operar_longitud() {
    valorBase_l = valorIngresado_l * (1 / conversionRatesLongitud[unidad_inicial_l])
    valorFinal_l = valorBase_l * conversionRatesLongitud[unidad_final_l];
    console.log(valorFinal_l)
    value_final_l.textContent = valorFinal_l
}   