import React from "react";
import {useEffect,useState} from "react"; //para llamar a useEffect y useState


//Para crear un estudiante o constructor (JAVA) por defecto --> estudiante base o básico
const estudianteInit={
    "estudiante_id": 0,
    "nombre": "",
    "apellido": "",
    "equipo_id": 0


}

const FormularioAlumno =({agregarEstudiante,editarEstudiante, estudianteEditado,setEstudianteEditado})=>{ //Para recepcionar respuesta del usuario y guardarla en la variable agregarEstudiante.
    const [estudiante,setEstudiante] = useState(estudianteInit);
    const {estudiante_id,nombre,apellido,equipo_id} = estudiante;//Para descomponer el parámetro estudiante en sus atributos, y así lograr que pese menos la carga en el programa.
   
// Función que me permitirá calcular los eventos del formulario
//Función Handle Input Change --> Cuando un input cambie, haz algo

const handleInputChange = (e) => {
    console.log(e);

const handleFormValue={

    //Con los tres puntos yo me aseguro, que los datos que tiene el estudiante PERSISTEN, no se pierden.
    //Y desde eso le agrego el nuevo cambio desde el evento del formulario
    ...estudiante, //El parámetro estudiante se mantiene, pero lo que yo cambio me lo actualiza
    [e.target.name]:e.target.value,
}

setEstudiante(handleFormValue);
console.log(estudiante);


}

useEffect(()=>{
    if(estudianteEditado!==null){
        setEstudiante(estudianteEditado) //estudianteEditado, es quien me dice que el formulario será para editar estudiante. 
        //setEstudiante es la función
        //estudianteEditado es el parámetro
    } else {
        setEstudiante(

            {
                "estudiante_id":0,
                "nombre":"",
                "apellido":"",
                "equipo_id":0
            }

        )

    }



},[estudianteEditado])


    return (
        <div className='col-4'>
            //Funciona similar al condicional if
            //Si, el valor de estudiante editado es distinto de null, entonces aplica función "Editar Alumno"
            //En caso contrario, aplicar función "Agregar Alumno"
            {estudianteEditado!==null?(<h1>Editar Alumno</h1>):(<h1>Agregar Alumno</h1>)}

            {estudianteEditado!==null?( <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">ID Estudiante</label>
                <input
                    type="text"
                    class="form-control"
                    //id="exampleFormControlInput1" //borramos este id para poder utilizar handleInputChange
                    placeholder="ID"
                    id="estudiante_id"
                    name="estudiante_id"
                    value={estudiante_id}
                    onChange={handleInputChange} 
                    disabled/>

</div>)
                :
                (<></>)}

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Apellido"
                    id="apellido"
                    name="apellido"
                    value={apellido}
                    onChange={handleInputChange} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Número de Equipo</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Número Equipo"
                    id="equipo_id"
                    name="equipo_id"
                    value={equipo_id}
                    onChange={handleInputChange} />
            </div>
            {estudianteEditado !== null ? (<div class="mb-3">
                <button type="button" class="btn btn-success" onClick={() => editarEstudiante(estudiante)}>Editar</button>
                <button type="button" class="btn btn-danger" onClick={() => setEstudianteEditado(null)}>Cancelar</button>
            </div>
            ) : (
            <div class="mb-3">
                <button type="button" class="btn btn-primary" onClick={() => agregarEstudiante(estudiante)}>Guardar</button>
            </div>)}


        </div>
    )
}
const FormularioLogin = () => {
    return (
        <div className='col-4'>
            <h1>Formulario</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Correo" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña" />
            </div>
            <div class="mb-3"> 
            //solicito que el botn guardar registre los datos ingresados y agregue un estudiante al listado,
            //de acuerdo a la función agregarEstudiante 
            //y en base a los atributos contenidos en el parámetro estudiante.
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>

        </div>
    )
}


export {FormularioAlumno,FormularioLogin};