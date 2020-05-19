import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog/blog.component';
import {RouterModule, Routes} from '@angular/router';
import {TubeDocComponent} from './tube-doc/tube-doc.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'tubedoc', component: TubeDocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
