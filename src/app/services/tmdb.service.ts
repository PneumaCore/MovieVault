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

  searchTrendings(query: string, page: number = 1) {
    return this.httpClient.get(`${this.baseUrl}/search/multi`, {
      params: {
        api_key: this.apiKey,
        query: query,
        page: page.toString()
      }
    });
  }

  getAllTrendings(page: number = 1) {
    return this.httpClient.get(`${this.baseUrl}/trending/all/week`, {
      params: {
        api_key: this.apiKey,
        page: page.toString()
      }
    });
  }
}
