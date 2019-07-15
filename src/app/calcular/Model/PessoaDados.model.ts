import { Dados } from './Dados.model';

export class PessoaDados {
  constructor(nome: string, sexo: string, dados: Dados){
    this.nome = nome;
    this.sexo = sexo;
    this.dados = dados;
  }
  public nome: string;
  public sexo: string;
  public dados: Dados;
}
