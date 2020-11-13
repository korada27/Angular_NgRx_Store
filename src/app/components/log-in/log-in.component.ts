import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: User = new User();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    // console.log(this.user);
    const payload = {
      username: this.user.username,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }
}
