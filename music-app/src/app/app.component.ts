import { Component } from '@angular/core';


interface MenuItem {
  path: string;
  label: string;
  exact?: boolean;
}


@Component({
  selector: 'ma-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public is default visibility
  title = 'ma';
  menu: MenuItem[] = [
    {path: '', label: 'Home', exact: true},
    {path: 'spotify', label: 'Music'},
    {path: 'contact', label: 'Contact'},
  ];
   
  constructor() {
    // setTimeout(()=>{
    //   // debugger
    // }, 1000);

    setInterval(() => { this.title += '.'; }, 1000);
  }

  handleTime(ts: number) {
    console.log('handled: ', ts);
  }

  handleClick(event: MouseEvent) {
    console.log(event.clientX, event.clientY);
  }
}
