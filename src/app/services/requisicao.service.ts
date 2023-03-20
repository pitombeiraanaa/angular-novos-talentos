import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IViaCep } from '../interfaces/IViaCep';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoService {
  constructor(private http: HttpClient) {}
  getDataFromViaCep(cep: string) {
    return this.http.get<IViaCep>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  createDataFromViaCep(cep: string) {
    return this.http.post<IViaCep>(`https://viacep.com.br/ws/${cep}/json/`, {
      cep: '89066304',
    });
  }
}
