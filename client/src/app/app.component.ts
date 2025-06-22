import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./nav/nav.component";
import {AccountService} from "./_services/account.service";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent, HomeComponent]
})
export class AppComponent implements OnInit {
  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){

    const userString = localStorage.getItem('user');// a json string
    if(!userString){
      return;
    }
    const user = JSON.parse(userString);//User interface or object
    this.accountService.currentUser.set(user);
  }

}
