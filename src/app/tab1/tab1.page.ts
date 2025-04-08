import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonListHeader, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDown } from 'ionicons/icons';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonRefresher, IonSearchbar, IonRefresherContent, IonInfiniteScrollContent, IonInfiniteScroll, IonCard, IonCardHeader, IonCardSubtitle, IonList, IonListHeader, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, CommonModule, IonInfiniteScroll, FormsModule, IonInfiniteScrollContent],
})
export class Tab1Page implements OnInit {
  trendings: any[] = [];
  filteredTrendings: any[] = [];
  page: number = 1;
  loading: boolean = false;
  isSearching: boolean = false;

  constructor(private tmdbService: TmdbService) {
    addIcons({ arrowDown });
  }

  ngOnInit() {
    this.loadTrendings();
  }

  refreshTrendings(event: any) {
    this.page = 1;
    this.trendings = [];
    this.filteredTrendings = [];
    this.loading = false;
    this.isSearching = false;

    this.tmdbService.getAllTrendings(this.page).subscribe((response: any) => {
      this.trendings = response.results;
      this.filteredTrendings = this.trendings;
      this.page++;
      event.target.complete();
    });
  }

  filterTrendings(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.filteredTrendings = this.trendings;
      this.isSearching = false;
      return;
    }

    this.isSearching = true;
    this.tmdbService.searchTrendings(searchTerm).subscribe((response: any) => {
      this.filteredTrendings = response.results;
    });
  }

  loadTrendings(event?: any) {
    if (this.loading) return;
    this.loading = true;

    this.tmdbService.getAllTrendings(this.page).subscribe((response: any) => {
      this.trendings = [...this.trendings, ...response.results];
      this.filteredTrendings = this.trendings;
      this.page++;
      this.loading = false;

      if (event) {
        event.target.complete();
      }
    });
  }

  onIonInfinite(event: any) {
    if (this.isSearching) {
      event.target.complete();
      return;
    }

    this.loadTrendings(event);
  }
}
