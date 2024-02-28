import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/component/header/header.component';import { MovieService } from '../../shared/services/movie.service';
import { IvideoContent } from '../../shared/models/video-content.interface';
import { Observable, forkJoin, map ,switchMap} from 'rxjs';
import { BannerComponent } from '../../core/component/banner/banner.component';BannerComponent
import { MovieCarouselComponent } from '../../shared/component/movie-carousel/movie-carousel.component';MovieCarouselComponent
import { CommonModule } from '@angular/common';CommonModule
HeaderComponent
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css',
  
  
})
export class BrowserComponent implements OnInit {
// constructor(private auth:AuthService){}
auth=inject(AuthService);
movieService=inject(MovieService);
name=JSON.parse(sessionStorage.getItem("LoggedInUser")!).name
userProfileImg=JSON.parse(sessionStorage.getItem("LoggedInUser")!).picture
Email=JSON.parse(sessionStorage.getItem("LoggedInUser")!).email
phone=JSON.parse(sessionStorage.getItem("LoggedInUser")!).phone
bannerDetail$= new Observable<any>();
bannerVideo$ =new Observable<any>();



movies: IvideoContent[] = [];
tvShows: IvideoContent[] = [];
ratedMovies: IvideoContent[] = [];
nowPlayingMovies: IvideoContent[] = [];
popularMovies: IvideoContent[] = [];
topRatedMovies: IvideoContent[] = [];
upcomingMovies: IvideoContent[] = [];

sources=[
  this.movieService.getMovies(),
  this.movieService.getTvShows(),
  this.movieService.getNowPlayingMovies(),
  this.movieService.getUpcomingMovies(),
  this.movieService.getPopularMovies(),
  this.movieService.getTopRated(),
]

ngOnInit(): void {
 forkJoin(this.sources)
 .pipe(map(([movies])=>{
  this.bannerDetail$=this.movieService.getBannerDetail(movies.results[3].id);
  this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[3].id);
return {movies}
 }))
 .subscribe((res:any)=>{
this.movies=res.movies.results as IvideoContent[];
this.tvShows=res.movies.results as IvideoContent[];
this.topRatedMovies=res.movies.results as IvideoContent[];
this.nowPlayingMovies=res.movies.results as IvideoContent[];
this.popularMovies=res.movies.results as IvideoContent[];
this.upcomingMovies=res.movies.results as  IvideoContent[];
this.getMovieKey();
 })
}

 getMovieKey(){
  this.movieService.getBannerVideo(this.movies[0].id)
  .subscribe(res=>{
    console.log(res);
  })
 }
signOut(){
  sessionStorage.removeItem("LoggedInUser")
  this.auth.singOut();
}
}
