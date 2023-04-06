import React from "react";
import { useEffect, useState } from "react";
import { FormularioAlumno, TablaAlumno } from "../components";
import { getAll,estudianteAdd,estudianteEdit,estudianteDelete } from "../services/EstudianteServices";
import { Link } from "react-router-dom";
import Banner from '../components/Banner';
import BarraBuscador from "../components/BarraBuscador";
import CursorEnSuperposicion from "../components/CursorEnSuperposicion";
import ProgresoAlumno from "../components/ProgresoAlumno";
import FormularioInsertarImagen from "../components/FormularioInsertarImagen";
import FormularioConImagen from "../components/FormularioConImagen";


const AdminPage = () => {
    const [estudiante, setEstudiante]=useState([]);
    const [estudianteEditado,setEstudianteEditado]=useState(null);
    

    const obtenerEstudiante=async()=>{
        setEstudiante(await getAll());
    }
    const agregarEstudiante = async (estudiante) =>{
        await estudianteAdd(estudiante);
        obtenerEstudiante();
    }
    
    const editarEstudiante = async (estudiante) =>{
        await estudianteEdit(estudiante);
        obtenerEstudiante();
        setEstudianteEditado(null);
    }

    const eliminarEstudiante = async (id) =>{ 
        await estudianteDelete(id);
        obtenerEstudiante();
    }
    //cada vez que la pagina se recargue, el useEffect corre
    //cada vez que las variables que enten dentro de los [] CAMBIEN el useEffect va a correr 
    useEffect(()=>{
        console.log(estudiante)
        obtenerEstudiante();
        agregarEstudiante();
        editarEstudiante();
        eliminarEstudiante();
    },[])

    //esto es un comentario
    return (
        <div className='container md-4'>
            <div className='row'>
            <Banner/>
            <hr></hr>
            <BarraBuscador/>
            <hr></hr>
            <CursorEnSuperposicion/>
            <hr></hr>
            <ProgresoAlumno/>
            <hr></hr>
            <FormularioInsertarImagen/>
            <hr></hr>
            <FormularioConImagen/>
            <hr></hr>



                <TablaAlumno estudiante={estudiante} eliminarEstudiante={eliminarEstudiante} />
                <FormularioAlumno 
                agregarEstudiante={agregarEstudiante} 
                editarEstudiante={editarEstudiante} // estudiante editado
                estudianteEditado={estudianteEditado} //parte con los datos del estudiante que ya se encuentran en la base, no con estudiante vacío (estudianteInit).--> set del axios, permite que se guarden los datos
                setEstudianteEditado={setEstudianteEditado} // 
                /> // Prop que recepciona desde AdminPage y lo manda a formularioEstudiante.
               //formato JASON
               

                <figure class="text-center">
                <blockquote class="blockquote">  
                
                <Link to="/FormularioDeAlumnos"><button type="button" class="btn btn-info">Ir a formulario</button></Link>
                <div class="d-grid gap-5 col-2 ms-2"></div>
                <a href="/TablaDeAlumnos"><button type="button" class="btn btn-info mt-2">Ir a Tabla</button></a>
            </blockquote>
            </figure>
            </div>
            </div>
    )
}



export default AdminPage;