import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./nav/nav.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent]
})
export class AppComponent implements OnInit {

  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;
  ngOnInit(): void {
    this.http.get('https://localhost:44304/api/users').subscribe({
      next: (response) => {this.users = response;},
      error:(e) => {console.log(e)},
      complete: () => {console.log('Request has completed')}
    });
  }

}
