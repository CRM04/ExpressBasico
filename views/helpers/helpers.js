const hbs = require('hbs');

//Helpers
/**
 * Se utilizan para realizar funciones, e implementarlas dentro del html
 */
hbs.registerHelper('getAnio' , () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar' , (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((element, indice) => {
        palabras[indice] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    });

    return palabras.join(' ');
});
