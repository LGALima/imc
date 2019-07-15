import { Component, OnInit } from '@angular/core';
import { CalcularService } from '../calcular.service';
import { Pessoa } from '../Model/Pessoa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  constructor(private calcularService: CalcularService) {}
  public pessoa: Pessoa[] = [];
  ngOnInit() {
    this.carregarDados();
  }

  public carregarDados() {
    this.calcularService.consultarPessoa().then(pessoa => {
      this.pessoa = pessoa;
    });
  }

  public excluir(pessoa: Pessoa) {
    this.calcularService.excluirPessoa(pessoa.id).then(() => {
      this.carregarDados();
      alert('Excluido');
    })
  }
}
