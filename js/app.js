//variables

const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

//events
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();

    //llena las opciones de años
    fillSelect()



})

//functions

function mostrarAutos(){
    autos.forEach( auto =>{

        const{ marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement ('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - 
            ${precio} - Color: ${color};    
        `;

        //insert on html
        resultado.appendChild(autoHTML);

    })
}

function fillSelect(){
    for( let i = max; i >= min; i--){
        const options = document.createElement('option');
        options.value = i;
        options.textContent = i;
        year.appendChild(options); //Add options to the year list


    }


}