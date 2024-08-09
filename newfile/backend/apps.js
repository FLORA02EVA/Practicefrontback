const  express = require ("express");
const cors = require ("cors");

const PORT = process.env.PORT || 3000;

const app =  express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>{
    console.log(`Listening on $PORT${PORT}`);
});


app.get ("/usuarios", (req,res) =>{
const status = [
    {Name: "Emma", Age:"32", Ocupation: "Maestra"},
    {Name: "Rick", Age:"50", Ocupation: "Artista"},
    {Name: "Luis", Age:"18", Ocupation: "Estudiante"},
];
    res.send (status); 
});


app.get ("/usuarios/mascotas", (req,res) =>{
    const nombres = [
        {Name: "Pelusa", Age:"5", Especie:"Gato", Raza: "Angora"},
        {Name: "Duquesa", Age:"8", Especie:"perro", Raza: "Pastor Aleman"},
        {Name: "Gigante", Age:"2", Especie:"hamnster", Raza: "desconocido"},
    ];
        res.send (nombres); 
    });

