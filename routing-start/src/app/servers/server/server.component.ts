import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router' ;

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )

    /*
      const id = +this.route.snapshot.params.id;
      console.log(id); add + sigh to make it integer
      this.server = this.serversService.getServer(id);
      console.log(this.server);
    */
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editServer() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
