import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import Swiper from 'swiper';
import { IvideoContent } from '../../models/video-content.interface';
import { DescriptionPipe } from '../../pipe/description.pipe';DescriptionPipe
import { ImagePipe } from '../../pipe/image.pipe';ImagePipe
@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css'
})
export class MovieCarouselComponent  implements OnInit, AfterViewInit{
  @Input() videoContents: IvideoContent[] = [];
  @Input() title!:string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef
  selectedContent: string | null = null;
  constructor(){}
  ngAfterViewInit(): void {
    this.initSwiper();
  }
 ngOnInit(): void {
   
 }

 private initSwiper(){
  return new Swiper(this.swiperContainer.nativeElement,{
    slidesPerView:3,
    slidesPerGroup:2,
    centeredSlides:true,
    loop:true,
    breakpoints:{
      600: {
        slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:5,
    centeredSlides:true,
      },
      900:{
        slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:5,
    centeredSlides:true,
      },
      1200:{
        slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:5,
    centeredSlides:false,
      },
      1500:{
        slidesPerView:5,
    slidesPerGroup:5,
    spaceBetween:5,
    centeredSlides:false,
      },
      1800:{
        slidesPerView:5,
    slidesPerGroup:6,
    spaceBetween:5,
    centeredSlides:false,
      }
    }
  })
 }

 setHoverMovie(movie: IvideoContent) {
  this.selectedContent = movie.title ?? movie.name;
}

clearHoverMovie() {
  this.selectedContent = null;
}
}
