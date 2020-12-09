export class usuarioObject {

  //creamos el modelo de los usuarios
  constructor(
    public nomUsuari: string,
    public cognom: string,
    public edat: number,
    public DNI: string,
    public foto: string,
    public desc: string,
    public correu: string,
    public password?: string,
  ){}
}
