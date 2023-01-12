import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiamondComponent } from './pages/diamond/diamond.component';
import { HeroComponent } from './pages/hero/hero.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'diamond',
    component: DiamondComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
