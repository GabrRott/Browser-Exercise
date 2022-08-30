//variables

const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color');


const max = new Date().getFullYear();
const min = max - 10;


//generate object-researche
const dataResearche={
    marca : '', 
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//events
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos);

    //llena las opciones de años
    fillSelect()



})

//event listener for the select-researche
marca.addEventListener ('change', e =>{
    dataResearche.marca= e.target.value;
    carFilter();
})

year.addEventListener ('change', e =>{
    dataResearche.year= parseInt(e.target.value);
    carFilter();
})

transmision.addEventListener ('change', e =>{
    dataResearche.transmision= e.target.value;
    carFilter();
})
color.addEventListener ('change', e =>{
    dataResearche.color= e.target.value;
    carFilter();
})
puertas.addEventListener ('change', e =>{
    dataResearche.puertas= e.target.value;
    carFilter();
})
maximo.addEventListener ('change', e =>{
    dataResearche.maximo= e.target.value;
    carFilter();
})
minimo.addEventListener ('change', e =>{
    dataResearche.minimo= e.target.value;
    console.log(dataResearche);
    carFilter();
})

//functions

function mostrarAutos(autos){

    cleanList();
    autos.forEach(auto =>{

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


function cleanList(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function fillSelect(){
    for( let i = max; i >= min; i--){
        const options = document.createElement('option');
        options.value = i;
        options.textContent = i;
        year.appendChild(options); //Add options to the year list


    }


}

function carFilter(){
    const resultado = autos.filter(singFilter).filter(yearFilter).filter(filterMinimo).
    filter(maximoFilter).filter(doorFilter).filter(colorFilter).filter(transmisionFilter)
    console.log(resultado);
   

   if (resultado.length){
     mostrarAutos(resultado);
   }else{
    noResultado();
   }
}
function noResultado(){

    cleanList();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No Hay Coicidencias con ese criterio de búsqueda'
    resultado.appendChild(noResultado);
}


function singFilter(auto){
    const {marca} = dataResearche;
    if(marca){
        return auto.marca === marca;
    }
    return auto;

}

function yearFilter(auto){
    const {year} = dataResearche;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filterMinimo(auto){
    const{minimo}=dataResearche;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function maximoFilter(auto){
    const {maximo} = dataResearche;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}
function transmisionFilter(auto){
    const{transmision} = dataResearche;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto
}

function colorFilter(auto){
    const{color} = dataResearche;
    if(color){
        return auto.color === color;
    }
    return auto;
}

function doorFilter(auto){
    const{puertas} = dataResearche;
    if(puertas){
        return auto.puertas == puertas;
    }
    return auto;
}