import React from "react";

const TablaAlumno = ({ estudiante,eliminarEstudiante,setEstudianteEditado }) => {
    return (
        <div className='col-8'>
            <h1>Lista</h1>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiante.map(e => (
                        <tr>
                            <th scope="row">{e.estudiante_id}</th>
                            <td>{e.nombre}</td>
                            <td>{e.apellido}</td>
                            <td>{e.equipo_id}</td>
                            <td><button type="button" class="btn btn-warning" onClick={()=>setEstudianteEditado(e)}>Editar</button>
                                <button type="button" class="btn btn-danger ms-2" 
                                onClick={()=>eliminarEstudiante(e.estudiante_id)}
                                >Eliminar</button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TablaAlumno;