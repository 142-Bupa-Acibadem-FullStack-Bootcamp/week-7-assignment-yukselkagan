import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor() { }
  currencyAmount:number = 1;
  resultMessage:string = "Waiting for values";

  currencies = [
    {
      currencyName : "Turkish Lira",
      currencyCode : "TRY",
      factor : 1/13,
    },
    {
      currencyName : "US Dolar",
      currencyCode : "USD",
      factor : 1,
    },
    {
      currencyName : "Euro",
      currencyCode : "EUR",
      factor : 1.127,
    },
    {
      currencyName : "British Pound",
      currencyCode : "GBP",
      factor : 1.35,
    }
  ];

  currentCurrency:string = "USD";
  targetCurrency:string = "TRY";

  ngOnInit(): void {
  }

  convertCurrency(){
    if(!isNaN(this.currencyAmount)){
      let currentFactor = this.findCurrencyFactor(this.currentCurrency);
      let targetFactor = this.findCurrencyFactor(this.targetCurrency);
      if(targetFactor != undefined && currentFactor != undefined){

        let convertedAmount = ((this.currencyAmount*currentFactor) / targetFactor).toFixed(2);
        this.resultMessage = `${this.currencyAmount} ${this.currentCurrency} = ${convertedAmount} ${this.targetCurrency} `;

      }else{
        this.resultMessage = `Can not find selected currencies`;
      }


    }else{
      this.resultMessage = "Need number input for convert currency";
    }
  }


  findCurrencyFactor(targetCode:string){
    let foundItem = this.currencies.find(item => item.currencyCode == targetCode);
    if(foundItem){
      return foundItem.factor;
    }else{
      console.log("Error");
      return undefined;
    }


  }

}
