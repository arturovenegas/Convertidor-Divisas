import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'LIBRA';
  total = 0;

  monedas: string[]=['USD','LIBRA','EURO']

  constructor() { }

  ngOnInit(): void {
  }

  convertir(){
    switch(this.tengo){
      //caso DOLAR
      case 'USD':{
        if(this.quiero === 'usd'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.72;
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 0.83;
        }
        break;
      }
      //caso LIBRA
      case 'LIBRA':{
        if(this.quiero === 'usd'){
          this.total = this.cantidad * 1.39;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 1.16;
        }
        break;
      }
      //caso EURO
      case 'EURO':{
        if(this.quiero === 'usd'){
          this.total = this.cantidad * 1.20;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.86;
        }
        if(this.quiero === 'EURO'){
          this.total = this.cantidad;
        }
        break;
      }
    }
  }

}
