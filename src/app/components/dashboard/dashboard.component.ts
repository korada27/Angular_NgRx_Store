import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/store/actions/auth.actions';
import { selectAuth } from 'src/app/store/selectors/auth.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  getState: Observable<any>;
  user={
    firstname: '',
    lastname: ''
  };
  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuth)
   }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      console.log(state)
      // this.isAuthenticated = state.isAuthenticated;
      const a = state.isAuthenticated ? state.user.user.user : '';
      this.user = a;
      
      // this.errorMessage = state.errorMessage;
    });
  }
  
  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
