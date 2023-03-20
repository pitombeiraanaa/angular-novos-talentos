import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/services/requisicao.service';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.scss'],
})
export class RequisicoesComponent implements OnInit {
  resultado: string = '';

  constructor(private viaCepService: RequisicaoService) {}

  ngOnInit(): void {
    this.viaCepService.getDataFromViaCep('89066304').subscribe((result) => {
      this.resultado = JSON.stringify(result);
    });
  }
}
