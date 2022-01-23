import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  user: {id: number, name: string};

  constructor( private route: Router,
    private currentRoute: ActivatedRoute ) { }

  loadUser(id, name) {
    this.route.navigate([id, name], { relativeTo: this.currentRoute});
  }
}
