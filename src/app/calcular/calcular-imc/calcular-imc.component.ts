import { Component, OnInit } from '@angular/core';
import { CalcularService } from '../calcular.service';
import { FormControl } from '@angular/forms';
import { Pessoa } from '../Model/Pessoa.model';

import { CategoriaPeso } from '../Model/CategoriaPeso.model';
import { Dados } from '../Model/Dados.model';
import { PessoaDados } from '../Model/PessoaDados.model';

@Component({
  selector: 'app-calcular-imc',
  templateUrl: './calcular-imc.component.html',
  styleUrls: ['./calcular-imc.component.scss']
})
/**
 * @author Lucas Assis
 * @description classe de CalcularImcComponent, contem as seguinter variaveis:
 * dataPeso: variavel do tipo any que recebera os atributos do grafico
 * dataSexo: variavel do tipo any que recebera os atributos do grafico
 * categria: array de CategoriaPeso
 * pessoa: array de Pessoa
 * cCategoria: array do tipo number que contara quantas pessoas existem em cada categoria na variavel pessoa
 * cSexo: array do tipo number que contara quantos homens e muheres existem na variavel pessoa
 */
export class CalcularImcComponent implements OnInit {
  public dataPeso: any;
  public dataSexo: any;

  public categoria: CategoriaPeso[] = [];
  public pessoa: Pessoa[] = [];
  public cCategoria: number[] = [];
  public cSexo: number[] = [];
  public nomeCategoria: string[] = [];

  ngOnInit() {
    this.carregarPessoa();
  }

  /**
   *
   * @param calcularService variavel utilizada para acessar os serviços de requisição http
   *
   * @description inicializa os arrays de dataPeso e dataSexo com os graficos
   */
  constructor(private calcularService: CalcularService) {
    this.dataPeso = {
      datasets: [
        {
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF0000', '#DEB887'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF0000', '#DEB887']
        }
      ]
    };

    this.dataSexo = {
      labels: ['Masculino', 'Feminino'],
      datasets: [
        {
          backgroundColor: ['#0000FF', '#FF0000'],
          hoverBackgroundColor: [ '#0000FF', '#FF0000']
        }
      ]
    };
  }

  /**
   * @Description Atualizar os graficos
   */
  public update(): void {
    this.dataPeso = {
      labels: this.nomeCategoria,
      datasets: [
        {
          data: this.cCategoria,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#FF0000', '#DEB887'
          ],
          hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56', '#FF0000', '#DEB887'
          ]
        }
      ]
    };
    this.dataSexo = {
      labels: [
        'Masculino', 'Feminino'
      ],
      datasets: [
        {
          data: this.cSexo,
          backgroundColor: ['#0000FF', '#FF0000'],
          hoverBackgroundColor: [ '#0000FF', '#FF0000']
        }
      ]
    };
  }
  /**
   * @description tem função de atualizar o array de pessoa, após isso carregar as categorias e utilizar
   * o metodo contarGrafico()
   */
  public carregarPessoa() {
    this.calcularService.consultarPessoa().then(pessoa => {
      this.pessoa = pessoa;
      this.calcularService.carregarCategorias().then(categoria => {
        this.categoria = categoria;
        this.contarGrafico();
      });
    });
  }
/**
 * @description atualizar os contadores de cCategoria e de cSexo
 */
  public contarGrafico() {

    for (let i = 0; i < this.categoria.length; i++) {
      this.nomeCategoria[i] = this.categoria[i].status;
    }

    for (let i = 0; i < this.categoria.length; i++) {
      this.cCategoria[i] = 0;
    }
    this.cSexo = [0, 0];

    for (let i = 0; i < this.pessoa.length; i++) {
      for (let j = 0; j < this.categoria.length; j++) {
        if (
          this.pessoa[i].dadoCalculo.status === this.categoria[j].status
        ) {
          this.cCategoria[j]++;
        }
      }
      if (this.pessoa[i].pessoaDados.sexo === 'Masculino') {
        this.cSexo[0]++;
      } else {
        this.cSexo[1]++;
      }
    }
    this.update();
  }

  /**
   * @description tem como função adicionar uma nova pessoa, contem 4 constantes:
   * imc: calcula o imc da pessoa que sera adicionada
   * dadoCalculo: recebe o retorno da função calcularSaude
   * pessoaDados: recebe uma nova instancia de PessoaDados, armazenando nome, seo, peso e altura
   * pessoa: recebe uma nova instancia de Pessoa, armazenando as variaveis pessoaDados e dadoCalculo
   * O serviço adicionarPessoa recebe a variavel pessoa(do tipo Pessoa) e adiciona ela a base de dados,
   * alem de recarregar o array de pessoas e limpar o formulario
   *
   * @param form recebe a variavel de formulario
   * @param nome recebe o nome da pessoa informada no formulario
   * @param altura recebe a altura da pessoa informada no formulario
   * @param peso recebe o peso da pessoa informada no formulario
   * @param sexo  recebe o sexo da pessoa informado no formulario
   */
  public adicionar(
    form: FormControl,
    nome: string,
    altura: number,
    peso: number,
    sexo: string
  ) {
        const dados = new Dados(peso, altura);
        const pessoaDados = new PessoaDados(nome, sexo, dados);
        const pessoa = new Pessoa(pessoaDados);
        this.calcularService.adicionarPessoa(pessoa).then(() => {
        alert('Sucesso!');
        this.carregarPessoa();
        form.reset();
    });
      }
  }




