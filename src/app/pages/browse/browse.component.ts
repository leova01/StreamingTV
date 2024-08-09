import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { MoviesService } from '../../shared/services/movies.service';
import { IVideoContent } from '../../shared/models/video-content.interface';
import { Carousel2Component } from '../../shared/components/carousel2/carousel2.component';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  standalone: true,
  imports: [NavBarComponent, CarouselComponent, Carousel2Component,CommonModule],
})
export class BrowseComponent implements OnInit, AfterViewInit {
  movieContent: IVideoContent[] = [];
  movieContent2: IVideoContent[] = [];


  title: string = 'Top Movies';
  NavegacionKeyboardV: any = [];
  select: any;
  valorHorizontal: number = 0;
  valorVertical: number = 0;

  next:any; 
  previus:any;
  restart:any;

  filtrarbrowser(filtro: any) {
    if (filtro === 'all') {
      this.ngOnInit();
    } else {
      this.MoviesService.getMoviesByGenre(filtro[1]).subscribe((data) => {
        this.movieContent = data.results;
        this.title = filtro[0];
      });
    }
  }

  NavegacionKeyboard(Navselectors: any) {
    this.NavegacionKeyboardV = [
      ...this.NavegacionKeyboardV,
      Navselectors,
    ];
    //  console.log('arrayMenu:')
    //  console.log(this.NavegacionKeyboardAltura)
    //  console.log('-------------------------------------')
  }

  CarouselKeyboard(CarouselSelector: any) {
    this.NavegacionKeyboardV = [
      ...this.NavegacionKeyboardV,
      CarouselSelector,
    ];
    //  console.log('arrayMenu:')
    //  console.log(this.NavegacionKeyboardAltura)
    //  console.log('-------------------------------------')
  }



  public DOM: any = fromEvent(document, 'keydown').subscribe((event: any) => {
 

    if (event.key === 'ArrowRight') {

      
      if (this.valorHorizontal < this.NavegacionKeyboardV[this.valorVertical].length - 1) this.valorHorizontal++;
      
      this.select.classList.remove('selected', 'active');
      this.select = this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
      this.select.classList.add('selected', 'active');

      if(this.valorVertical===1){
        console.log(this.next);
       this.next = document.querySelector('.netflix-next');
        (this.next as HTMLButtonElement)?.click();
      }

      if(this.valorVertical===2){
        console.log(this.next);
       this.next = document.querySelector('.netflix-next2');
        (this.next as HTMLButtonElement)?.click();
      }
      



    } else if (event.key === 'ArrowLeft') {
      if (this.valorHorizontal!=0) this.valorHorizontal--;
      
      
      this.select.classList.remove('selected', 'active');
      this.select = this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
      this.select.classList.add('selected', 'active');

      if(this.valorVertical===1){
        console.log(this.next);
        this.previus = document.querySelector('.netflix-previous');
         (this.previus as HTMLButtonElement)?.click();
      }
      if(this.valorVertical===2){
        console.log(this.next);
        this.previus = document.querySelector('.netflix-previous2');
         (this.previus as HTMLButtonElement)?.click();
      }


    } else if(event.key === 'ArrowDown'){
      

      if (this.valorVertical < this.NavegacionKeyboardV.length - 1){

        this.restart = document.querySelector('.restart-scroll');
        (this.restart as HTMLButtonElement)?.click();
        this.restart = document.querySelector('.restart-scroll2');
        (this.restart as HTMLButtonElement)?.click();
        this.valorVertical++;
       
      } 
  
      this.select.classList.remove('selected', 'active');
      this.valorHorizontal=0;
      this.select = this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
      this.select.classList.add('selected', 'active');

      console.log(this.valorVertical)

    }else if(event.key === 'ArrowUp'){
      
      if (this.valorVertical !=0) {
        this.restart = document.querySelector('.restart-scroll');
        (this.restart as HTMLButtonElement)?.click();
        this.restart = document.querySelector('.restart-scroll2');
        (this.restart as HTMLButtonElement)?.click();
        this.valorVertical--;
      }

      

      this.select.classList.remove('selected', 'active');
      this.valorHorizontal=0;
      this.select = this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
      this.select.classList.add('selected', 'active');

    }else if(event.key === 'Enter'){
      this.select.click();
    }else if(event.key === 'Backspace'){
      this.select.classList.remove('selected', 'active');
      this.valorHorizontal = 0;
      this.valorVertical = 0;
      this.select = this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
      this.select.classList.add('selected', 'active');
      this.ngOnInit();
    }
    


  });


  constructor(private MoviesService: MoviesService) {}

  ngOnInit() {
    this.MoviesService.getMovies().subscribe((data) => {
      this.movieContent = data.results;
      this.title = 'All Movies';
    });

    this.MoviesService.getMovies2().subscribe((data) => {
      this.movieContent2 = [...data.results, ...this.movieContent, ...this.movieContent2,  ];
      this.title = 'All Movies';
      console.log(this.movieContent2)
    });
  }

  ngAfterViewInit(): void {
    this.NavegacionKeyboardV[0][0].classList.add('selected', 'active');

    this.select =
      this.NavegacionKeyboardV[this.valorVertical][this.valorHorizontal];
    console.log(this.select);
  }
}
