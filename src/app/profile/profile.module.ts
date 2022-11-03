import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/components/header/header.component';
import { PostsComponent } from './profile/components/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './profile/components/search-input/search-input.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    PostsComponent,
    SearchInputComponent,
  ],
  imports: [CommonModule, NgxSpinnerModule, FormsModule],
  exports: [SearchInputComponent],
})
export class ProfileModule {}
