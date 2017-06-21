import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() public owner = 'me';

  @Output() timePassed = new EventEmitter<number>()

  constructor() {
      setInterval(() => {
        this.timePassed.emit(+new Date());
    }, 2000);
  }

  ngOnInit() {

  }

}
