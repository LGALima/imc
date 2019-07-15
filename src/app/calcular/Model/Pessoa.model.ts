import { DadoCalculo } from './DadoCalculo.model';
import { PessoaDados } from './PessoaDados.model';

export class Pessoa {
  constructor(pessoaDados: PessoaDados) {
    this.pessoaDados = pessoaDados;
  }
  public id: number;
  public pessoaDados: PessoaDados;
  public dadoCalculo: DadoCalculo;
}
