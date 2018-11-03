import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'ABC - 123';
  height = 200;
  colWidth = 40;

  getWidth() {
    return {
      width: this.colWidth + 'px',
    };
  }

  getHeight() {
    return {
      height: this.height + 'px',
    };
  }
}
