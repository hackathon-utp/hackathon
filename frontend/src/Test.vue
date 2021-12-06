<template>
<div>
    <div class="fondo1"></div>
    <div class="row justify-content-center">
        <div class="m-4 w-75 mb-0">
            <span><h5>Nit:</h5><h4 v-show="nit"></h4></span>
            <h1>Autoevaluación</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic iusto magni quasi, ad aspernatur, dicta nostrum molestias recusandae minima fuga id harum veritatis libero. Animi quaerat praesentium eos velit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora pariatur totam tempore quasi quisquam alias voluptatibus doloremque. Ad tempora voluptates saepe minima deleniti sapiente accusantium doloremque, obcaecati nemo itaque?
            </p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="m-3 w-50 mb-5">
            <div class="accordion" id="accordionRestaurante">
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
                        <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[0].autoevaluacion"></div>
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
                                  Los techos deben estar diseñados de manera que se evite la acumulación de suciedad, la condensación, la formación de hongos, el desprendimiento superficial y además se facilite la limpieza y el mantenimiento. En lo posible, no se debe permitir el uso de techos falsos o dobles techos. Material de pisos y paredes impermeable y de fácil limpieza.
                      </p>
                      <div class="row justify-content-evenly">
                        <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                        <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[1].autoevaluacion"></div>
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
                        <div class="col-3 m-2"><input type="checkbox" v-model="evaluacion.lista_requisitos[2].autoevaluacion"></div>
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
                                          Deben tener sistemas sanitarios adecuados, para la disposición de aguas servidas y excretas. Contarán con servicio sanitario en cantidad suficiente para uso público, salvo que por limitaciones del espacio físico no lo permita, caso en el cual se podrían utilizar los servicios sanitarios de uso del personal que labora en el establecimiento o los ubicados en los centros comerciales, los cuales deben estar separados por sexo y debidamente dotados y estar en perfecto estado de funcionamiento y aseo.
                      </p>
                      <div class="row justify-content-evenly">
                        <div class="col-7 m-2"><h5>¿Cumple este requerimiento?</h5></div>
                        <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[3].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[4].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[5].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[6].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[7].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[8].autoevaluacion"></div>
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
                                    <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[9].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[10].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="lista_requisitos[11].autoevaluacion"></div>
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
                                <div class="col-3 m-2"><input type="checkbox" v-model="evaluacion.lista_requisitos[12].autoevaluacion"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>