import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { PostsComponent } from './pages/posts/posts.component';
import { DiamondComponent } from './pages/diamond/diamond.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PostsComponent,
    DiamondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
