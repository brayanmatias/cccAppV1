export class UsuarioApp{
    fecha_creacion: Date;
    usuario_id: Number;
    nombre: String;
    direccion: String;
    ciudad: String;
    estado: String;
    pais: String;
    contrasena: String;

    constructor(){
        if(!this.fecha_creacion){
            this.fecha_creacion = new Date();
        }
    }
}