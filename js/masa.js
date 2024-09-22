//! Variables y elementos del DOM
const conversionRatesMasa = {
    kg: 1,
    ton: 0.001,
    g: 1000,
    mg: 1e+6,
    microgramo: 1e+9,
    tonLar: 0.000984207,
    tonCor: 0.00110231,
    stone: 0.157473,
    libras: 2.20462,
    onzas: 35.274
}; 

console.log (conversionRatesMasa)

const u_inicial_m = document.getElementById('unidad-inicial--masa'),
u_final_m = document.getElementById('unidad-final--masa'),
value_inicial_m = document.getElementById('value-inicial--masa'),
value_final_m = document.getElementById('value-final--masa');

let valorBase_m = 0,
valorIngresado_m = 0,
valorFinal_m = 0,
unidad_inicial_m = 'g',
unidad_final_m = 'kg';

//! Funcionamiento

value_inicial_m.addEventListener("input", () => {
    valorIngresado_m = value_inicial_m.value
})

u_inicial_m.addEventListener('change', () => {
    unidad_inicial_m = u_inicial_m.value
    console.log(unidad_inicial_m)
})

u_final_m.addEventListener('change', () => {
    unidad_final_m = u_final_m.value
    console.log(unidad_final_m)
})

function operar_masa() {
    valorBase_m = valorIngresado_m * (1 / conversionRatesMasa[unidad_inicial_m])
    valorFinal_m = valorBase_m * conversionRatesMasa[unidad_final_m];
    console.log(valorFinal_m)
    value_final_m.textContent = valorFinal_m
}   