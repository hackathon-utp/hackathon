<template>
    <div>
        
        <div class="modal-dialog">
            <div class="logo_admin">
            <img src="../assets/logo-requersalud.png" alt="Logo RequerSalud">
        </div>
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Inicio Sesión - Inspector</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Usuario</label>
                            <input
                                type="text"
                                placeholder="Ingrese su Usuario"
                                class="form-control"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                class="form-control"                        
                                required
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="confirmar btn" data-bs-dismiss="modal" v-on:click="goToTal">Iniciar Sesión</button>
                   </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>