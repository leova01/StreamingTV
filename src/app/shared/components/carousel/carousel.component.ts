import {   AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { IVideoContent } from '../../models/video-content.interface';
import { CommonModule } from '@angular/common';
import { ImagePipe } from '../../pipes/image.pipe';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone:true,
  imports:[CommonModule,ImagePipe,RouterModule]
})

export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() movieContent:IVideoContent[]=[];
  @Input() title:string='';
  @Output() CarouselOptions:any = new EventEmitter<void>();;
  

   scrollDistance = 250;
   restartScroll = 100000;
  

setupScroll(containerClass:any, previousButtonClass:any, nextButtonClass:any, restart:any) {
    const previousButtons = document.querySelectorAll(`.${previousButtonClass}`);
    const nextButtons     = document.querySelectorAll(`.${nextButtonClass}`);
    const containers      = document.querySelectorAll(`.${containerClass}`);
    const restartScroll   = document.querySelector(`.${restart}`);

    containers.forEach((container, index) => {
        const previousButton = previousButtons[index];
        const nextButton = nextButtons[index];
        nextButton.addEventListener('click', () => {
            container.scrollBy({
                left: this.scrollDistance,
                behavior: 'smooth',
            });
        });
        
        previousButton.addEventListener('click', () => {
            container.scrollBy({
                left: - this.scrollDistance,
                behavior: 'smooth',
            });
        });


        

        restartScroll?.addEventListener('click', () => {
            container.scrollBy({
                left: - this.restartScroll,
                behavior: 'smooth',
            });
        });
        
        

        
    });
}

  ngOnInit() {
  
  this.setupScroll('netflix-container', 'netflix-previous', 'netflix-next','restart-scroll');


  }

  ngAfterViewInit(): void {
   const elementsSelector = document.getElementsByClassName('selector2');
   this.CarouselOptions.emit(elementsSelector);
}

    

}
