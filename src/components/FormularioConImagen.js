import React from "react";


const FormularioConImagen = () => {
  return(
    
   

    <nav class="navbar bg-dark" data-bs-theme="dark"> 
            <figure class="text-center">
              <blockquote class="blockquote"> 
                <img src='../imagenes/astronauta.png' width='150tr'mb-3 ms-10 />
                  </blockquote>
                  </figure>


<div className="mx-auto" width='100px'>

<div class="p-3 mb-2 br-150  bg-warning body-dark" style={{ borderRadius: "10px" }}>

<h1 type="button" width="100px"class="rounded-pill" alt="ElementoPila" bg-dark style={{ color: "White" }}>Cómo usar la tecnología esta vuelta a clases</h1>
</div>
<form>

    <div class="mb-3">
    

        <label for="exampleFormControlInput1" a class="nav-text" href="#" style={{ color: "Grey" }} ></label>
        <input type="text" class="form-control" id="exampleInputName" placeholder="Insertar contenido de texto..." />
    </div>
 
    
    <div class="d-grid gap-10 col-2 mx-auto">
    <div class="mb-3">
        <button type="button" class="btn btn-primary mt-2">Siguiente</button>
    </div>
    </div>
</form>

</div>
</nav>

)

}

export default FormularioConImagen;