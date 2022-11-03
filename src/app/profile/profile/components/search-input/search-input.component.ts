import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchUserService } from '../../../search-user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  public user: UserInterface;
  public username: string;

  constructor(
    private spinner: NgxSpinnerService,
    private searchUserService: SearchUserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.searchUserService.username$.next(this.user);
  }

  public submit(): void {
    console.log(this.username);
    this.spinner.show();
    this.searchUserService
      .getUser(this.username)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (user) => {
          console.log(user);
          this.searchUserService.username$.next(user);
          this.user = user;
          localStorage.setItem('user', JSON.stringify(user));
        },
        (error) => {
          this.toastr.error(error.error.text);
        }
      );
    this.username = '';
  }
}
