import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['searchQuery'] || '';
    });
  }

  search(): void {
    if (this.searchQuery) {
      this.router.navigate(['/search'], { queryParams: { searchQuery: this.searchQuery } });
    } else {
      this.router.navigateByUrl('/propertylistings');
    }
  }

  checkSearchQuery(): void {
    if (!this.searchQuery) {
      this.router.navigateByUrl('/propertylistings');
    }
  }
}