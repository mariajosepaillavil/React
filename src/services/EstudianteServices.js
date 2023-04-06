import axios from "axios";
const baseURL = "http://localhost:8080";

//const getAll = async ()=>{
//                               http://127.0.0.1:8080/estudiante/FindAll
    //const rest = await axios.get(baseURL+"/estudiante/FindAll");
    //console.log(rest);
    //return rest.data;
//}

// Obtiene todos los estudiantes de la base de datos
const getAll = async ()=>{
    //                               http://127.0.0.1:8080/estudiante/FindAll
        const rest = await axios.get(baseURL+"/estudiante/FindAll");
        console.log(rest);
        return rest.data;
    }
    
    // Agrega un nuevo estudiante a la base de datos  
    //sintaxis de servicio para enviar un estudiante
    const estudianteAdd = async (estudiante) => {
        const rest = await axios.post(baseURL+"/estudiante/Save", estudiante)
        console.log(rest);
        return rest.data;
    }
    
        /* EJEMPLO DE ESTRUCTURA ESTUDIANTEADD
        cómo debería venir la variable estudiante
        {
            estudiante_id:1,
            nombre: "Pamela",
            apellido: "Nahum",
            equipo_id: 1
        }
        cuando AGREGAMOS un nuevo estudiante a la base, no debemos preocupar de que no venga el dato id, ya que este se agrega de forma autmática en la base de datos entonces debería venir así:
           {
            nombre: "Pamela",
            apellido: "Nahum",
            equipo_id: 1
        }
    
    
        */
    
        // const estu ={
          //   nombre:"Tomás",
             //apellido: "Valencia",
            // equipo_id: 6
         //}

      
       
    // Actualiza los datos de un estudiante existente en la base de datos
    const estudianteEdit = async (estudiante) => {
        // const estu ={
          //   estudiante_id: 43,
            // nombre:"Amalia",
            // apellido: "González",
            // equipo_id: 4
         //}
        const rest = await axios.put(baseURL+"/estudiante/Update", estudiante)
        console.log(rest);
        return rest.data;
    
    }
    
    // Elimina un estudiante de la base de datos según su ID
    const estudianteDelete = async (id) => {
    const rest = await axios.delete(baseURL + "/estudiante/Delete/" + id);
    console.log(rest);
    return rest.data;
  }
  
  estudianteDelete(45);
  
  export { getAll, estudianteAdd, estudianteEdit, estudianteDelete };