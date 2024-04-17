import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products : any ;
  public keyword:string="";
  constructor() {
  }
ngOnInit() {
    this.products =  [
      {"id":1,"name":"computer","price":4300},
      {"id":2,"name":"Printer","price":3500},
      {"id":3,"name":"Mouse","price":2000},
      {"id":1,"name":"Smart-Phone","price":2500},
    ];
}

  deleteProduct(p: any) {

    let index = this.products.indexOf(p);
    this.products.splice(index,1);

  }
/* la methode de cherche avec une boocle
  search() {
    let result=[];
    for( let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products = result;
  }*/
  //la methoode de chercher
  search(){
    this.products = this.products.filter((p:any)=>p.name.includes(this.keyword));
  }
}
