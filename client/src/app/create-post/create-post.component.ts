import {CommonModule} from '@angular/common';
import{Component, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'

  })
  export class CreatePostComponent
  {

  }



