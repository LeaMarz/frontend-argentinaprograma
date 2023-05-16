import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  edu:any;
  constructor(private datosPortfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.edu=data.formacion;
    });
  }
  }