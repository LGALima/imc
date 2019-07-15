export class CategoriaPeso {
  constructor(id: number) {
    this.id = id;
    if (this.id === 0) {
      this.status = 'Abaixo do peso';
    } else if (this.id === 1) {
      this.status = 'Peso normal';
    } else if (this.id === 2) {
      this.status = 'Levemente acima do peso';
    } else if (this.id === 3) {
      this.status = 'Acima do peso';
    } else if (this.id === 4) {
      this.status = 'Obeso';
    }
  }
  public id: number;
  public status: string;
}
