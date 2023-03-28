import React from "react";

const App = () => {
    //Esto es un comentario
    return (
        // <div className="container mt-4">
        // {/Esto es un comentario dentro del return./}
        // <h1>Esta es mi primera página en React :D</h1>
        // <p>Este es un nuevo párrafo.</p>
        // <button type="button" class="btn btn-outline-danger">Danger</button>
        // </div>

        
    
        <div className="container md-4">
            <div className="row">

                <div className="col-8">

                <h1>EQUIPO 6</h1>


                    <h1>Lista</h1>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Danissa</td>
                                <td>Caballero</td>
            
                         {/*agregar botón eliminar | editar */}

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Editar</button>
                                <button class="btn btn-primary" type="button">Eliminar</button>
                                </div>



                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Sebastián</td>
                                <td>Castillo</td>


                       {/*agregar botón eliminar | editar */}

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Editar</button>
                                <button class="btn btn-primary" type="button">Eliminar</button>
                                </div>
                               
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                                <td>Felipe</td>
                                <td>Messina</td>


                         {/*agregar botón eliminar | editar */}

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Editar</button>
                                <button class="btn btn-primary" type="button">Eliminar</button>
                                </div>
                               
                            </tr>

                            <tr>
                            <th scope="row">4</th>
                                <td>Yesenia</td>
                                <td>Quiroz</td>


                          {/*agregar botón eliminar | editar */}

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Editar</button>
                                <button class="btn btn-primary" type="button">Eliminar</button>
                                </div>
                               
                            </tr>


                            <tr>
                            <th scope="row">5</th>
                                <td>María José</td>
                                <td>Paillavil</td>


                        {/*agregar botón eliminar | editar */}

        

                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary me-md-2" type="button">Editar</button>
                                <button class="btn btn-primary" type="button">Eliminar</button>
                                </div>
                               
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                <h1>Formulario</h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label" >Nombre</label>
                            <input type="text" class="form-control" id="exampleInputName" placeholder="Sebastián" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Apellido</label>
                            <input type="text" class="form-control" placeholder="Castillo" id="exampleInputLastName" />
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Registrarme</label>
                        </div>
                        <button type="reset" class="btn btn-primary">Enviar</button>
                    </form>

                </div>

            </div>
        </div>

        



    )
}
                
export default App;