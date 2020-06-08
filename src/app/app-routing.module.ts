import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog/blog.component';
import {RouterModule, Routes} from '@angular/router';
import {TubeDocComponent} from './tube-doc/tube-doc.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {YouTubePlayerComponent} from './you-tube-player/you-tube-player.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'ytlist', component: TubeDocComponent },
  { path: 'ytlist/detail/:id', component: YouTubePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
