import { Component, OnInit } from '@angular/core';
import {LiveService} from '../../shared/service/live.service';
import {Live} from '../../shared/model/live.model';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevius: Live[];
  livesNext: Live[];

  constructor(
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  // tslint:disable-next-line:typedef
  getLives() {
    this.liveService.getLivesWithFlag('previus').subscribe(data => {
      this.livesPrevius = data.content;
    });
    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
    });
  }

}
