import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../../../search-user.service';
import { UserInterface } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: UserInterface;

  constructor(private userSearchService: SearchUserService) {}

  ngOnInit(): void {
    this.userSearchService.username$.subscribe((user) => {
      this.user = user;
    });
    JSON.parse(localStorage.getItem('user') || '{}');
  }

  public convert(labelValue: number) {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
      : Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
      : Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(labelValue));
  }
}
