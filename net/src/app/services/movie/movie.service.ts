import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  baseurl = 'https://api.themoviedb.org/3';
  apiKey = '3bfe544743a0a0cb831214ea3804ee7a';

  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
  }

  TrendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  SearchMovieData(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  MovieDetailsApiData(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`)
  }

  MovieVideoApiData(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  MovieCatsApiData(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  FetchActionMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }
  FetchThrillerMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }
  FetchAdventureMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }
  FetchComedyMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }
  FetchDocumentryMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }
  FetchScienceMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }
  FetchAnimationMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }
}
