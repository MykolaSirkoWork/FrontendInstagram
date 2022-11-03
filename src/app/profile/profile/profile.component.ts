import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: UserInterface;
  constructor(private userSearchService: SearchUserService) {}

  ngOnInit(): void {
    this.userSearchService.username$.subscribe((user) => {
      this.user = user;
    });
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
