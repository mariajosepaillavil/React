import React from "react";


const FormularioInsertarImagen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const file = event.target.elements.imagen.files[0];
    formData.append("imagen", file);
    console.log(formData.get("imagen"));
  };

  return (
    <nav class="navbar bg-dark" data-bs-theme="dark">
      <div className="col-4">
        <h1
          label
          for="tittle"
          a
          class="nav-text"
          href="#"
          style={{ color: "Yellow" }}
        >
          Formulario
        </h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              a
              class="nav-text"
              href="#"
              style={{ color: "pink" }}
            >
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              a
              class="nav-text"
              href="#"
              style={{ color: "pink" }}
            >
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Apellido"
              id="exampleInputLastName"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              a
              class="nav-text"
              href="#"
              style={{ color: "pink" }}
            >
              Número de equipo
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Número Equipo"
              id="exampleInputLastName"
            />
          </div>
          <label
            for="exampleInputEmail1"
            a
            class="nav-text"
            href="#"
            style={{ color: "pink" }}
          >
            Email
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="contacto@contacto.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div
            id="emailHelp"
            ca
            class="nav-text"
            href="#"
            style={{ color: "yellow" }}
          >
            No compartiremos tus datos con nadie.
          </div>
          <div class="mb-3">
            <label
              for="exampleInputFile"
              a
              class="nav-text"
              href="#"
              style={{ color: "pink" }}
            >
              Imagen
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleInputFile"
              name="imagen"
            />
          </div>
          <div class="d-grid gap-10 col-2 mx-auto">
            <div class="mb-3">
              <button type="submit" class="btn btn-primary mt-2">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default FormularioInsertarImagen;