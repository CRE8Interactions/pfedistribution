import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  mail() {
    window.location.href = "mailto:rcogan@pfedistribution.com";
  }
}
