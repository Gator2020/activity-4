import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {CreatePostsComponent} from './create-posts/creata-post.Component';
import {ViewPostCompontent} from '.view-post/view-post.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreatePostsComponent},
  {path: 'posts/:id', component: ViewPostCompontent},
  { path: '**', component:HomeComponent,pathMatch:'full'},


];
