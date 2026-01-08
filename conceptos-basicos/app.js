//ejemplo de expresion regular
const regExp = /[A-Z0-9]/i;
console.log(regExp.test("Bryan")); 


//ejemplo de promesas
const miPromesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
        resolve("La promesa se ha cumplido");
    } else {
        reject("La promesa no se ha cumplido");
    }
});

// Usando async/await
async function ejecutarPromesa() {
    try {
        const mensaje = await miPromesa;
        console.log(mensaje);
    } catch (mensaje) {
        console.log(mensaje);
    }
}

ejecutarPromesa();

//uso de fetch para consumir una API
const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log('Error:', error))
    .finally(() => console.log('finalizo el proceso'));

//uso de fetch con async/await
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();
 



