import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserModel } from '../user.model';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent {
  @Input() user: UserModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editUser(user: UserModel) {
  	let link = ['users/edit', user._id];
    this.router.navigate(link);
  }
}
