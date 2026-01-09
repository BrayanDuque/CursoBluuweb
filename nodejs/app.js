const express = require('express')
const app = express()
const port = 3000
const fs = require('fs'); // filesystem su proposito es leer y escribir archivos

//middleware
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.json()); //para que entienda json 
app.use(express.static(__dirname)); // servir archivos estáticos como index.html

app.get('/', (req, res) => {
    res.send('esto es un ejemplo con get');
});

app.post('/formulario', (req, res) => {
    // recibir datos POST desde el formulario
    const { nombre = '', apellido = '' } = req.body || {};
    
    if(!nombre || !apellido) return res.status(400).send('Faltan datos obligatorios'); 
    res.send(`Hola ${nombre} ${apellido}, sus datos fueron enviados correctamente`);

    // fs.appendFile('datos.txt', `Nombre: ${nombre}, Apellido: ${apellido}\n`, (err) => {
    //     if (err) {
    //         console.error('Error al guardar los datos:', err);
    //     } else {
    //         console.log('Datos guardados correctamente');
    //     }
    // });
});




app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`);
})

