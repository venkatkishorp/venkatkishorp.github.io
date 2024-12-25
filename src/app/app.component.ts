import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      window.location.href="https://venkat-kishor-padmanaban.vercel.app/";
    }, 3000);
  }
}
