import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  nome: string = 'João';
  frase: string = 'Olá tudo bem';
  dataNascimento: Date = new Date();
  salario: number = 1234.56;
}
