import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = environment.tmdbApiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) { }

  getPopularMovies() {
    return this.httpClient.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getPopularTvShows() {
    return this.httpClient.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`);
  }
}
