import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input({required:true}) userImg:string='';
navlist=['Home','Tv Shows','News & Popular','My List','Browse by Language']
}
