<template>
    <div>
        <header>
        <div class="logo">
            <img src="../assets/logo-requersalud.png" alt="Logo RequerSalud">
        </div>
        <div class="iniciar_sesion">
            <button type="button" class="iniciar_text btn" data-bs-toggle="modal" data-bs-target="#Modal01">
                Iniciar Sesión
              </button>
              <button type="button" class="iniciar_text btn" data-bs-toggle="modal" data-bs-target="#Modal02">
                Registrarse
              </button>
        </div>
    </header>
    <div class="modal fade" id="Modal01" tabindex="-1" aria-labelledby="Iniciar Sesión" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Iniciar Sesión</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="onSubmit" >
                        <div class="form-group">
                            <label>NIT</label>
                            <input
                                type="text"
                                placeholder="Ingrese el e-mail registrado"
                                class="form-control"
                                v-model=empresa.nit
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                class="form-control" 
                                v-model=empresa.clave                       
                                required
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" class="confirmar btn" data-bs-dismiss="modal" >Iniciar Sesión</button>
                   </div>
                </form>
                </div>
            </div>
        </div>
      </div>
      <div class="modal fade" id="Modal02" tabindex="-1" aria-labelledby="Registro" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Registro</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
                <form @submit.prevent="registrarse()">
                  <div class="modal-body">
                    <div class="form-group">
                      <div class="form-group">
                      <label>NIT</label>
                      <input
                          type="text"
                          placeholder="Ingrese el NIT"
                          class="form-control"
                          v-model="empresa.nit"                            
                          required
                      />
                    </div>
                      <label>Razón Social</label>
                      <input
                          type="text"
                          placeholder="Ingrese la razón social"
                          class="form-control"  
                          v-model="empresa.razon_social"  
                          required
                      />
                    </div>
                    
                    <div class="form-group">
                      <label>Dirección</label>
                      <input
                          type="text"
                          placeholder="Ingrese la dirección"
                          v-model="empresa.direccion"  
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
                          v-model="empresa.telefono"                          
                          required
                      />
                    </div>
                    <div class="form-group">
                      <label>Representante Legal</label>
                      <input
                          type="text"
                          placeholder="Ingrese el nombre del representante legal"
                          class="form-control"
                          v-model="empresa.representante_legal"                             
                          required
                      />
                    </div>
                    <div class="form-group">
                      <label>E-mail</label>
                      <input
                          type="email"
                          placeholder="Ingrese el e-mail de resgistro"
                          class="form-control"    
                          v-model="empresa.email"                         
                          required
                      />
                    </div>
                    <div class="form-group">
                      <label>Contraseña</label>
                      <input
                          type="password"
                          placeholder="Ingrese la contraseña de registro"
                          class="form-control"
                          v-model="empresa.clave"                             
                          required
                      />
                    </div>
                  </div> 
              <div class="form-group  modal-footer" >
              <button class="confirmar btn" data-bs-dismiss="modal" >Registrar</button>
            </div> 
                </form>
            
            
          </div>
        </div>
      </div>
    <div class="fondo1"></div>
    <main>
        <div id="carouselIndex" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="banner-inicio" src="../assets/banner5.jpg" alt="...">
              </div>
              <div class="carousel-item">
                <img class="banner-inicio" src="../assets/banner2.jpg" alt="...">
              </div>
              <div class="carousel-item">
                <img class="banner-inicio" src="../assets/banner3.jpg" alt="...">
              </div>
               <div class="carousel-item">
                <img class="banner-inicio" src="../assets/banner4.jpg" alt="...">
              </div>
               
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndex" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndex" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
        <div class="fondo1"></div>
        <div class="row justify-content-center">
            <div class="col-7 mb-4">
                <div class="col-12 m-2 mb-1 mt-4 p-3 h-100">
                    <h1>RequerSalud</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum deserunt et temporibus in maxime aliquam pariatur deleniti molestias, unde nulla eveniet doloremque rem ea cumque. Cupiditate corrupti rem debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae voluptates, placeat sapiente blanditiis modi cupiditate repudiandae reiciendis cum sequi. Aut delectus quaerat repellat neque sunt, doloremque facilis atque? Voluptatum?
                    </p>
                    <h1>Mas info...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum deserunt et temporibus in maxime aliquam pariatur deleniti molestias, unde nulla eveniet doloremque rem ea cumque. Cupiditate corrupti rem debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae voluptates, placeat sapiente blanditiis modi cupiditate repudiandae reiciendis cum sequi. Aut delectus quaerat repellat neque sunt, doloremque facilis atque? Voluptatum?
                    </p>
                </div>
            </div>
            <div class="col-3">
                <div class="card col-12 m-2 mt-4 p-2 mb-1">
                    <h5 class="m-2">Licencia Sanitaria Restaurantes<br>Resolución 2674 de 2013<h6>Capítulo VIII</h6></h5>
                    <img src="../assets/img-resolucion.jpg" alt="" class="m-2">
                    <p class="m-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aut vitae odio natus veniam quasi facere eligendi. Lorem ipsum dolor sit amet.
                    </p><h5><a class="m-2" href="">Ver Resolución</a></h5>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mb-4">
            <div class="col-5">
                <div class="card col-12 m-2 mt-4 p-2">
                    <iframe height="300" src="https://www.youtube.com/embed/iyi6NDuXeJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-4 mb-5">
                <div class="card col-12 m-2 mt-4 pb-0 caja-publicidad">
                    <img src="../assets/fondo-publicidad.jpg" class="imagen-publicidad card-img mb-0 pb-0" alt="">
                    <div class="card-img-overlay">
                        <h1 class="publi mt-3">¿Deseas comenzar la evaluación de tu Restaurante?</h1>
                        <h4 class="publi">Ver más...</h4>
                    </div>
                    <div class="card-img-overlay">
                        <h2 class="publi-oculta mt-3">Registrate en RequerSalud y comienza tu evaluación.</h2>
                        <a class="publi-oculta-link" data-bs-toggle="modal" data-bs-target="#Modal02">Haz click Aqui</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="fondo1"></div>
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
import axios from "axios"
export default {
  data() {
 return {
  empresa:{
    nit:"",
    clave :""
  },
  evaluacion:{
    normatividad:"resolucion-2021"
  }
  };
 },
    methods: {
        onSubmit() { 
            axios
            .post(`http://localhost:4000/usuarios/sesion-usuario`, this.empresa)
            .then((res) => {
              sessionStorage.setItem("nit", res.data.nit),
              localStorage.setItem("jwtToken", res.data.token); 
              console.log(res.data);
              this.$router.push(`/restaurante`); 
              })
            .catch(error => {
              window.alert("Usuario o contraseña incorrectos");
              console.log(error);
            }); 
              
        },
        registrarse() {
                let apiURL = "http://localhost:4000/usuarios/crear-empresa";
                let apiCreadorEvaluacion="http://localhost:4000/normatividad/crear-evaluacion";
                axios
                .post(apiURL, this.empresa)
                .then((res) => {
                  console.log(res.data);
                  sessionStorage.setItem("nit", res.data.nit);
                  localStorage.setItem("jwtToken", res.data.token);
                  let config = {
                  headers: {
                  authorization:`Bearer ${res.data.token}` ,
                 }
                  }
                  axios
                      .post(apiCreadorEvaluacion, this.evaluacion, config)
                      .then((res) => {
                        console.log(res.data);
                       
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                   
                  this.$router.push("/restaurante")}) 
                .catch((err) => {
                  this.$router.push({name: "index"});
                  console.log(err);
                });    
            }
    }   
}
</script>