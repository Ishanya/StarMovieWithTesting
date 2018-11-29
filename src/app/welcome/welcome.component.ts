import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  movies: Movie[];
  title: String;
  searchFlag = true;
  constructor(private route: ActivatedRoute, private router: Router,
    private userService: MovieServiceService) { }

  ngOnInit() {
  }
  searchFunction() {
    if (this.title.length > 0) {
      this.userService.getMovies(this.title)
      .subscribe(data => {
        this.movies = data;
        this.searchFlag = false;
      });
    }
  }
  getYearOfMovie(movieReleaseDate) {
     return movieReleaseDate.substring(0, 4);
  }
  addToFavourite(movie) {
    this.userService.addfavMovie(movie).subscribe(data => {
      console.log('Success');
    });
  }
}
