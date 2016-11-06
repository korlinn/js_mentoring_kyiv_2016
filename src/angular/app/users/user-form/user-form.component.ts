import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { User } from './../../models/user';
import { UserArrayService } from './../user-array-service/user-array.service';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;
  private sub: Subscription;

  constructor(
    private usersService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '', '', '', null, null, null, null);

    this.sub = this.route.params.subscribe(params => {
    let id = params["id"];

    if (id) {
      this.usersService.getUser(id)
        .then(user => {
          this.user = Object.assign({}, user);
          this.oldUser = user;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveUser() {
    console.log("save");
    let user = new User(
      this.user._id,
      this.user.username,
      this.user.email,
      this.user.hashedPassword,
      this.user.gender,
      this.user.age,
      this.user.height,
      this.user.weight,
      this.user.cnorm
    );

    if (user._id) {
      this.usersService.updateUser(user);
      this.oldUser = this.user;
      // optional parameter: http://localhost:4200/users;id=2
      this.router.navigate(['/users', {id: user._id}]);
    }
    else {
      this.usersService.addUser(user);
      this.oldUser = this.user;
      this.router.navigate(['/users']);
    }
  }

  goBack() {
     this.router.navigate(['./../'], { relativeTo: this.route});
  }
}
