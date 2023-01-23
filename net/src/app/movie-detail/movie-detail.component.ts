import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
   movieDetails:any;
   movieVideo:any;
   movieCast:any;
  constructor(private movieService:MovieService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getId = this.router.snapshot.paramMap.get('id')
    this.getMovieDetail(getId)
    this.getMovieVideo(getId)
    this.getMovieCast(getId)
  }

  getMovieDetail(id:any){
   this.movieService.MovieDetailsApiData(id).subscribe(res=>
    this.movieDetails = res
    )
  }

  getMovieVideo(id:any){
    this.movieService.MovieVideoApiData(id).subscribe((res)=>{
      res.results.forEach((e:any)=>{
        if(e.type==='Trailer'){
          this.movieVideo = e.key
        }
      })
    })
  }

  getMovieCast(id:any){
    this.movieService.MovieCatsApiData(id).subscribe(res=>

      this.movieCast = res.cast
      )

  }

}
