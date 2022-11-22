import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidnav-tailwind-demo-2';

  isSideNavOpen = false;

  toggleDrawer() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

}
