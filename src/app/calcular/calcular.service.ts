import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pessoa } from './Model/Pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {
  constructor(private http: Http) {}

  /**
   * metodo http para retornar um json dos elementos de imc
   */
  public consultarPessoa(): Promise<any> {
    return this.http
      .get('http://localhost:8080/pessoa')
      .toPromise()
      .then(response => response.json());
  }
  /**
   * @description metodo http post para adicionar uma pessoa
   * @param pessoa recebe uma pesso do tipo Pessoa
   */
  public adicionarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    console.log(pessoa);
    return this.http
      .post('http://localhost:8080/pessoa', pessoa)
      .toPromise()
      .then(response => response.json());
  }

  /**
   * @description metodo http delete para excluir uma pessoa pelo id
   * @param codigo recebe o id de pessoa
   */
  public excluirPessoa(codigo: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/pessoa/${codigo}`)
    .toPromise()
    .then(() => null);
  }

  /**
   * @description metodo http get que retorna um json com as categorias
   */
  public carregarCategorias(): Promise<any> {
    return this.http
      .get('http://localhost:3000/categoria')
      .toPromise()
      .then(response => response.json());
  }
}
