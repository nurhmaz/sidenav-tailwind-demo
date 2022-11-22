import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sidnav-tailwind-demo-2';

  fillerContent = Array.from({length: 20}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in`);

  isSideNavOpen = false;

  sideNavMode:string = 'side';
  isLargeScreen:boolean = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.observeScreenSizeChange();
  }

  observeScreenSizeChange() {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ])
      .subscribe(result => {
        // console.log(result)

        this.sideNavMode = 'side';

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.HandsetPortrait] || breakpoints[Breakpoints.HandsetLandscape]) {
          this.sideNavMode = 'over';
          this.isLargeScreen = false;
          this.isSideNavOpen = !(this.sideNavMode == 'over' && !this.isLargeScreen);
        }
        else if (breakpoints[Breakpoints.TabletLandscape]
          || breakpoints[Breakpoints.Medium]
          || breakpoints[Breakpoints.Large]
          || breakpoints[Breakpoints.XLarge]) {
          this.sideNavMode = 'side';
          this.isLargeScreen = true;
          this.isSideNavOpen = this.sideNavMode == 'side' && this.isLargeScreen;
        }

        console.log(this.isLargeScreen)
      })
  }

  toggleDrawer() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

}
