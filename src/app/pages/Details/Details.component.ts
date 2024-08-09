import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';
import { ImagePipe } from '../../shared/pipes/image.pipe';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css'],
  standalone:true,
  imports:[ImagePipe,CommonModule]
})
export class DetailsComponent implements OnInit {

    Details: any;
  movie_id: any;
  

  public DOM: any = fromEvent(document, 'keydown').subscribe((event: any) => {
 

    if (event.key === 'ArrowRight') {

 



    } else if (event.key === 'ArrowLeft') {

    } else if(event.key === 'ArrowDown'){

    }else if(event.key === 'ArrowUp'){
      
    }else if(event.key === 'Enter'){
     
    }else if(event.key === 'Backspace'){
      this.router.navigate(['/']);
    }
    


  });




  constructor(
    private _route:ActivatedRoute,
    private MovieServiceService: MoviesService,
    private router: Router
  ) { 

    this._route.params.subscribe(params => {

      this.movie_id = params['id'];
    });
  }

  ngOnInit(): void {

    this.MovieServiceService.getDetails(this.movie_id).subscribe((data)=>{

      this.Details = data;
      console.log(this.Details);
    });

  }

}
