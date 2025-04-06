import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonList, IonListHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonList, IonListHeader, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, CommonModule, IonSearchbar, FormsModule],
})
export class Tab1Page implements OnInit {
  movies: any[] = [];
  tvShows: any[] = [];
  filteredMovies: any[] = [];
  filteredTvShows: any[] = [];
  searchText: string = '';

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe((res: any) => {
      this.movies = res.results;
      this.filteredMovies = res.results;
    });

    this.tmdbService.getPopularTvShows().subscribe((res: any) => {
      this.tvShows = res.results;
      this.filteredTvShows = res.results;
    });
  }

  onSearch() {
    const query = this.searchText.toLowerCase();

    if (query.trim() !== '') {
      this.movies = this.filteredMovies.filter(movie =>
        movie.title?.toLowerCase().includes(query)
      );

      this.tvShows = this.filteredTvShows.filter(tv =>
        tv.name?.toLowerCase().includes(query)
      );
    } else {
      this.movies = [...this.filteredMovies];
      this.tvShows = [...this.filteredTvShows];
    }
  }
}
