import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component'
import { from } from 'rxjs';
import { LoginComponent } from './views/auth/login/login.component';

const routes: Routes = [
  /*{
    path: '',
    loadChildren:() =>import('/views/auth)

  },*/
  {
    path: '',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)

  },
  {
    path: 'admin', 
    component: AdminLayoutComponent,
    children :[
      {
        path :'news',
        loadChildren :() => import('./views/news/news.module').then(m => m.NewsModule)
      },
      {
        path :'posts',
        loadChildren :() => import('./views/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },


  /*{
    path: 'auth', 
    component: AuthLayoutComponent,
    children :[
      {
        path :'',
        loadChildren :() => import('./views/auth/auth.module').then(m => m.AuthModule)
      }]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
