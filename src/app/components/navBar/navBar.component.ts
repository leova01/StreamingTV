import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css'],
  standalone:true,
  imports:[RouterModule,CommonModule]
})
export class NavBarComponent implements OnInit, AfterViewInit {
  NavOptions:any=[];
  
  @Output() filtrado = new EventEmitter<void>();
  @Output() Navselectors = new EventEmitter<void>();

  filtros:any[][] = [
   ['Horror'    ,27],
   ['Comedy'    ,35],
   ['Romantic'  ,10749],
   ['Animation' ,16],
  ];
 

  filtrar(filtro:any){
    this.filtrado.emit(filtro)
  }

  opcionesKeys(){
    this.NavOptions = Array.from(document.querySelectorAll('.selector'));
  }

  constructor() { }
 
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.opcionesKeys();
    this.Navselectors.emit(this.NavOptions);
  }

}
