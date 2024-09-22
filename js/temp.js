//! Variables y elementos del DOM
const conversionRatesTemp = {
    seg: 1,
    nanosegundo: 1e+9,
    microsegundo: 1e+6,
    milisegundo: 1000,
    min: 0.0166667,
    hora: 0.000277778,
    dia: 1.1574e-5,
    sem: 1.6534e-6,
    mes: 3.8052e-7,
    año: 3.171e-8,
    decada: 3.171e-9,
    siglo: 3.171e-10
}; 

console.log (conversionRatesTemp)

const u_inicial_t = document.getElementById('unidad-inicial--temperatura'),
u_final_t = document.getElementById('unidad-final--temperatura'),
value_inicial_t = document.getElementById('value-inicial--temperatura'),
value_final_t = document.getElementById('value-final--temperatura');

let valorBase_t = 0,
valorIngresado_t = 0,
valorFinal_t = 0,
unidad_inicial_t = 'seg',
unidad_final_t = 'hora';

//! Funcionamiento

value_inicial_t.addEventListener("input", () => {
    valorIngresado_t = value_inicial_t.value
})

u_inicial_t.addEventListener('change', () => {
    unidad_inicial_t = u_inicial_t.value
    console.log(unidad_inicial_t)
})

u_final_t.addEventListener('change', () => {
    unidad_final_t = u_final_t.value
    console.log(unidad_final_t)
})

function operar_temp() {
    valorBase_t = valorIngresado_t * (1 / conversionRatesTemp[unidad_inicial_t])
    valorFinal_t = valorBase_t * conversionRatesTemp[unidad_final_t];
    console.log(valorFinal_t)
    value_final_t.textContent = valorFinal_t
}   