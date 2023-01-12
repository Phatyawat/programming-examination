import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setDiamond(){
    let lev = 4
    let result = '';
    result =  this.setDiamondRowTop(lev, result);
    result =  this.setDiamondRowBottom(lev, result)
    return result
  }

  setDiamondRowTop(lev:number,result:string){

    for(let i = 1; i <= lev ; i++){
    
      let textResult = '';
      textResult = textResult + i
      for(let j = 0 ; j < ((i-1)*2) ; j++){
        textResult += '*'
      }
      textResult = textResult + i + '<br>'
      result += textResult
    }
   
    return result
  }

  setDiamondRowBottom(lev:number,result:string){

    for(let i = lev-1; i > 0 ; i--){
       i
      let textResult = '';
      textResult = textResult + i
      for(let j = 0 ; j < ((i-1)*2) ; j++){
        textResult += '*'
      }
      textResult = textResult + i + '<br>'
      result += textResult
    }
    return result
  }

}
