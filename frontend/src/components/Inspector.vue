<template>
    <div>
        <header>
    <div class="logo">
        <img src="../assets/logo-requersalud.png" alt="Logo Colombia Emprende">
    </div>
    <div class="iniciar_sesion">
    
        <button type="button" class="iniciar_text btn" data-bs-toggle="modal" data-bs-target="#Modal03">
            Editar mi Cuenta
          </button>
          <button type="button" class="iniciar_text btn">
            <a href="index.html">Cerrar Sesión</a>
          </button>
    </div>
    <div class="modal fade" id="Modal03" tabindex="-1" aria-labelledby="Registro" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Perfil</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form action="">
                  <div class="form-group">
                    <label>Razón Social</label>
                    <input
                        type="text"
                        placeholder="Ingrese la razón social"
                        class="form-control"                          
                        required
                    />
                  </div>
                  <div class="form-group">
                    <label>NIT</label>
                    <input
                        type="text"
                        placeholder="Ingrese el NIT"
                        class="form-control"                          
                        required
                    />
                  </div>
                  <div class="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        placeholder="Ingrese la dirección"
                        class="form-control"                          
                        required
                    />
                  </div>
                  <div class="form-group">
                    <label>Representante Legal</label>
                    <input
                        type="text"
                        placeholder="Ingrese el nombre del representante legal"
                        class="form-control"                          
                        required
                    />
                  </div>
                  <div class="form-group">
                    <label>Celular</label>
                    <input
                        type="text"
                        placeholder="Ingrese su número de celular"
                        class="form-control"                          
                        required
                    />
                  </div>
                  <div class="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese la contraseña de registro"
                        class="form-control"                          
                        required
                    />
                  </div>
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="iniciar_text btn">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
</header>
<div class="fondo1"></div>
<main>

    <div class="row justify-content-center">
        <div class="m-4 w-75 mb-0">
            <h1>Evaluación</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic iusto magni quasi, ad aspernatur, dicta nostrum molestias recusandae minima fuga id harum veritatis libero. Animi quaerat praesentium eos velit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora pariatur totam tempore quasi quisquam alias voluptatibus doloremque. Ad tempora voluptates saepe minima deleniti sapiente accusantium doloremque, obcaecati nemo itaque?
            </p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="m-5 w-50 mt-2">
            <div class="accordion" id="accordionInspector">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      1. Ubicación y Alrededores
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Su funcionamiento no debe poner en riesgo la salud y el bienestar de la comunidad Los alrededores se conservarán en perfecto estado de aseo, libres de acumulación de basuras, formación de charcos o estancamientos de agua. Ausencia de focos de contaminación.
                      </p>
                        <div class="row justify-content-evenly">
                            <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                            <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[0].auditoria"></div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2. Instalaciones
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Sus áreas deben ser independientes de cualquier tipo de vivienda y no pueden ser utilizadas como dormitorio. Deben estar diseñados y construidos para evitar la presencia de insectos, roedores u otro tipo de plaga. 
                            Los techos deben estar diseñados de manera que se evite la acumulación de suciedad, la condensación, la formación de hongos, el desprendimiento superficial y además se facilite la limpieza y el mantenimiento. En lo posible, no se debe permitir el uso de techos falsos o dobles techos. Material de pisos y paredes impermeable y de fácil limpieza.</p>
                          <div class="row justify-content-evenly">
                              <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                              <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[1].auditoria"></div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        3. Iluminación y Ventilación
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </p>
                          <div class="row justify-content-evenly">
                              <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                              <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[2].auditoria"></div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading4">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
                        4. Servicios Sanitarios
                      </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Contarán con servicios sanitarios para el personal que labora en el establecimiento, debidamente dotados y separados del área de preparación de los alimentos. 
                                Deben tener sistemas sanitarios adecuados, para la disposición de aguas servidas y excretas. Contarán con servicio sanitario en cantidad suficiente para uso público, salvo que por limitaciones del espacio físico no lo permita, caso en el cual se podrían utilizar los servicios sanitarios de uso del personal que labora en el establecimiento o los ubicados en los centros comerciales, los cuales deben estar separados por sexo y debidamente dotados y estar en perfecto estado de funcionamiento y aseo.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[3].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading5">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
                        5. Basura y Aguas Servidas
                      </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Se localizarán en sitios secos, no inundables y en terrenos de fácil drenaje. No se podrán localizar junto a botaderos de basura, pantanos, ciénagas y sitios que puedan ser criaderos de insectos, roedores u otro tipo de plaga. El manejo de residuos líquidos debe realizarse de manera que impida la contaminación del alimento o de las superficies de potencial contacto con este.. Los residuos sólidos deben ser removidos frecuentemente del área de preparación de los alimentos y disponerse de manera que se elimine la generación de malos olores, el refugio y alimento para animales y plagas, y que no contribuya de otra forma al deterioro ambiental. 
                                Deben disponerse de suficientes, adecuados y bien ubicados recipientes así como de locales e instalaciones si es del caso para el almacenamiento de los residuos sólidos, conforme a lo establecido en las normas sanitarias vigentes. Debe disponerse de recipientes de material sanitario para el almacenamiento de desperdicios orgánicos debidamente tapados, alejados del lugar donde se preparan los alimentos y deben ser removidos, lavados y desinfectados frecuentemente.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[4].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading6">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
                        6. Bodega/Almacenamiento de alimentos
                      </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Los alimentos y bebidas expuestos para la venta deben mantenerse en vitrinas, campanas plásticas, mallas metálicas o plásticas o cualquier sistema apropiado que los proteja del ambiente exterior. 
                                El recibo de insumos e ingredientes para la preparación y servido de alimentos se hará en un lugar limpio y protegido de la contaminación ambiental y se almacenarán en recipientes adecuados. </p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[5].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading7">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                        7. Mobiliario Estado y limpieza
                      </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                            </p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[6].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading8">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapseThree">
                        8. Refrigeración
                      </button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Los pisos de las cavas o cuartos fríos de refrigeración o congelación deben tener pendiente hacia drenajes ubicados preferiblemente en su parte exterior. Cuando el drenaje de las cavas o cuartos fríos de refrigeración o congelación se encuentren en el interior de los mismos, se debe disponer de un mecanismo que garantice el sellamiento total del drenaje, el cual puede ser removido para propósitos de limpieza y desinfección. 
                                Los alimentos perecederos, tales como, leche y sus derivados, carne y preparados, productos de la pesca deben almacenarse en recipientes separados, bajo condiciones de refrigeración y/o congelación y no podrán almacenarse conjuntamente con productos preparados o listos para el consumo con el fin de evitar la contaminación cruzada.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[7].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading9">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapseThree">
                        9. Cocina
                      </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>El piso de las áreas húmedas de elaboración debe tener una pendiente mínima de 2% y al menos un drenaje de 10 cm de diámetro por cada 40 m2 de área servida; mientras que en las áreas de baja humedad ambiental y en los almacenes, la pendiente mínima será del 1% hacia los drenajes, se requiere de al menos un drenaje por cada 90 m2 de área servida. Las hortalizas y frutas que se consuman deben someterse a lavado y desinfección con sustancias autorizadas por el Ministerio de Salud y Protección Social. El lavado y desinfección de utensilios debe hacerse con agua potable corriente, jabón o detergente y cepillo y con especial cuidado en las superficies donde se pican o fraccionan los alimentos, las cuales deben estar en buen estado de conservación e higiene; las superficies para el picado deben ser de material sanitario, de preferencia plástico, nylon, polietileno o teflón.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[8].auditoria"></div>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading10">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapseThree">
                        10. Procesamiento Alimentos
                      </button>
                    </h2>
                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Los alimentos o materias primas crudos, tales como, hortalizas, frutas, carnes y productos hidrobiológicos que se utilicen en la preparación de los alimentos deben ser lavados con agua potable corriente antes de su preparación. Se prohíbe el almacenamiento de sustancias peligrosas en la cocina, en las áreas de preparación de los alimentos o en las áreas de almacenamiento de materias primas.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[9].auditoria"></div>
                              </div>
                          </div>
                    </div>
                </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading11">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapseThree">
                            11. Trastos y Utensilios
                          </button>
                        </h2>
                        <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Los equipos y utensilios empleados en los restaurantes y establecimientos gastronómicos, deben cumplir con las condiciones establecidas en el Capítulo II de la presente resolución. La limpieza y desinfección de los utensilios que tengan contacto con los alimentos se hará en tal forma y con elementos o productos que no generen ni dejen sustancias peligrosas durante su uso. Esta desinfección debe realizarse mediante la utilización de agua caliente, vapor de agua o sustancias químicas autorizadas para este efecto. Cuando los establecimientos no cuenten con agua y equipos en cantidad y calidad suficientes para el lavado y desinfección, los utensilios que se utilicen deben ser desechables con el primer uso.</p>
                                  <div class="row justify-content-evenly">
                                      <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                      <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[10].auditoria"></div>
                                  </div>
                              </div>
                        </div>
                    </div>
                        <div class="accordion-item">
                    <h2 class="accordion-header" id="heading12">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapseThree">
                        12. Agua
                      </button>
                    </h2>
                    <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Disponer de suficiente abastecimiento de agua potable. Contar con un tanque donde
                                los pisos deben estar construidos con materiales que no generen sustancias o contaminantes tóxicos, resistentes, no porosos, impermeables no absorbentes, no deslizantes y con acabados libres de grietas o defectos que dificulten la limpieza, desinfección y el mantenimiento sanitario. 
                                Las paredes deben ser de colores claros, materiales resistentes, impermeables, no absorbentes y de fácil limpieza y desinfección. Además hasta una altura adecuada, las mismas deben poseer acabado liso y sin grietas, pueden recubrirse con material cerámico o similar o con pinturas plásticas que reúnan los requisitos antes indicados.</p>
                              <div class="row justify-content-evenly">
                                  <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                  <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[11].auditoria"></div>
                              </div>
                          </div>
                    </div>
                </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="heading13">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapseThree">
                        13. Manipulaciones
                      </button>
                    </h2>
                    <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Se prohíbe el acceso de animales y la presencia de personas diferentes a los manipuladores de alimentos. El servido de los alimentos debe hacerse con utensilios (pinzas, cucharas, etc.) según sea el tipo de alimento, evitando en todo caso el contacto del alimento con las manos.
                                El personal que está directamente vinculado a la preparación o servido de los alimentos no debe manipular dinero simultáneamente. </p>                              
                            <div class="row justify-content-evenly">
                                <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                                <div class="col-3 m-2"><input type="checkbox" v-model="evaluacion.lista_requisitos[12].auditoria"></div>
                            </div>
                          </div>
                    </div>
                  </div>
              
              <textarea class="mt-4 p-2" name="observaciones" id="observaciones" cols="90" rows="5" v-model="evaluacion.observaciones">Ingrese aqui la observación</textarea>
        </div>
    </div>
    </div>
</main>
    <footer>
        <div class="d-flex flex-row justify-content-center">
            <div class="col-4 m-2 p-3">
              <h5>En colaboración con:</h5>
              <span>
                <a href="https://mintic.gov.co/portal/inicio/" target="_blank"><img class="logos-footer" src="../assets/logo-mintic.png" alt=""></a>
                <a href="https://www.misiontic2022.gov.co/portal/" target="_blank"><img class="logos-footer" src="../assets/logo-mision.png" alt=""></a>
                <a href="https://www.utp.edu.co/" target="_blank"><img class="logos-footer" src="../assets/logo-utp.png" alt=""></a>
              </span> 
            </div>
            <div class="col-3 m-2 p-3">
              <h5>Siguenos en:</h5>
              <div class="d-flex flex-row">
                <a href="https://www.facebook.com/Colombia-Emprende-109565371475068" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/colombiaemprende5/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>  
                <a href="https://twitter.com/ColombiaEmpren5" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCjNR0g-WdYRHMZZBRtl5JUA" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                </a>
              </div> 
            </div>
            <div class="col-3 m-2 p-3">
              <h5>Acerca de:</h5>
              <span>
                <a href="html/acerca.html" target="_blank"><img class="logo-footer-acerca" src="../assets/logo-requersalud.png" alt=""></a>
              </span> 
            </div>   
          </div>
          <div class=baseDerechos>
            <div>Copyright 2021  | |  Todos los derechos reservados  | |  
              <a href="html/politicas.html" target="_blank"  id="politica"> Política de Tratamiento de Datos Personales</a>
            </div>
          </div>
    </footer>
    </div>
</template>
<script>
import axios from "axios";
export default {
  empresa:{},  
  evaluacion:{
    normatividad: String,
    lista_requisitos: [{numero_requisito: Number, descripcion: String, autoevaluacion:Boolean,auditoria:Boolean}],
    observaciones:String,
    id_empresa:String,
    /*created() {
      let apiURL = "https://http://localhost:4000/usuarios";
      axios
        .get(apiURL)
        .then((res) => {this.empresa = res.data;})
        .catch((error) => {console.log(error);});
    },*/
  },
   methods:{
      auditoria(){
        let apiURL = "localhost:4000/evaluacion/crear-evaluacion";
                axios
                .post(apiURL, this.evaluacion)
                .then(() => {
                  this.$router.push("/restaurante/:id")}) 
                .catch((err) => {
                  this.$router.push({name: "index"});
                  console.log(err);
                });
      }
   }
}
</script>