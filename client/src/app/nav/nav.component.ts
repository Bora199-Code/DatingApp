import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AccountService} from "../_services/account.service";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  model :any = {};
  loggedIn = false;
  private accountService = inject(AccountService);
  login() {
    this.accountService.login(this.model).subscribe({next: res =>{
      this.loggedIn = true;
      console.log(res);
      },
    error: err => console.log(err)})
  }

  logout(){
    this.loggedIn = false;
  }
}
