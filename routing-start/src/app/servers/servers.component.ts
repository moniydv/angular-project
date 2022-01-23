import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private route: Router, private currentRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadServers() {
    this.route.navigate(['servers']);
  }

  loadServer(id) {
    this.route.navigate([id], { relativeTo: this.currentRoute});
  }
}
