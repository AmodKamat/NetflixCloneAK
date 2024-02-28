import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserComponent } from './pages/browser/browser.component';
import { HeaderComponent } from './core/component/header/header.component';
import { BannerComponent } from './core/component/banner/banner.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/component/movie-carousel/movie-carousel.component';
import { DescriptionPipe } from './shared/pipe/description.pipe';
import { ImagePipe } from './shared/pipe/image.pipe';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowserComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    DescriptionPipe,
    ImagePipe,
    UserLoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
  ],
  providers: [
    provideClientHydration(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
