import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router' ;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  sub;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params: Params ) => {
        this.user = {
          id : params['id'] ,
          name: params['name']
        };
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
