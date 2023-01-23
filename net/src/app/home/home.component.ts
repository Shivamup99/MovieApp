import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   bannerPost :any = [];
   trendingMoviePost :any = [];
   ActionMovie:any =[];
   ThrillerMovie:any =[];
   AdventureMovie:any =[];
   ComedyMovie:any =[];
   ScienceMovie:any =[];
   DocumentryMovie:any =[];
   AnimationMovie:any=[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.bannerData()
    this.trendingDayMovie()
    this.ActionDataMovie()
    this.ThrillerDataMovie()
    this.ComedyDataMovie()
    this.ActionDataMovie()
    this.DocumentryDataMovie()
    this.ScienceDataMovie()
    this.AdventureDataMovie()
    this.AnimationDataMovie()
  }

  bannerData(){
    this.movieService.bannerApiData().subscribe(res=>
       this.bannerPost = res.results
      )
  }

  trendingDayMovie(){
    this.movieService.TrendingMovieApiData().subscribe(res=>
      this.trendingMoviePost = res.results
      )
  }

  ActionDataMovie(){
    this.movieService.FetchActionMovie().subscribe(res=>
      this.ActionMovie = res.results
      )
  }

  ThrillerDataMovie(){
    this.movieService.FetchThrillerMovie().subscribe(res=>
      this.ThrillerMovie = res.results
      )
  }

  ComedyDataMovie(){
    this.movieService.FetchComedyMovie().subscribe(res=>
      this.ComedyMovie = res.results
      )
  }

  DocumentryDataMovie(){
    this.movieService.FetchDocumentryMovie().subscribe(res=>
      this.DocumentryMovie = res.results
      )
  }

  AdventureDataMovie(){
    this.movieService.FetchAdventureMovie().subscribe(res=>
      this.AdventureMovie = res.results
      )
  }

  ScienceDataMovie(){
    this.movieService.FetchScienceMovie().subscribe(res=>
      this.ScienceMovie = res.results
      )
  }
  AnimationDataMovie(){
    this.movieService.FetchAnimationMovie().subscribe(res=>
      this.AnimationMovie = res.results
  )}

}
