export interface Usuario{
  ID: number,
  nombre: string,
  apellidos: string,
  nick: string,
  email: string,
  contraseña: string,
  tipo:UserType
  
}
export enum UserType{
  Administrador,
  Cliente,
  Tecnico
}