export class usuarioObject {

  constructor(
    public nomUsuari: string,
    public cognom: string,
    public edat: number,
    public foto: string,
    public desc: string,
    public correu: string,
    public password?: string,
  ){}
}
