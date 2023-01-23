import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  searchResponse:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  ngOnInit(): void {
  }

  submitForm(){
   this.movieService.SearchMovieData(this.searchForm.value).subscribe(res=>
     this.searchResponse = res.results
    )
  }

}
