import { Component, inject } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  // imports: [Nav, RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App {
  // private accountService = inject(AccountService);
  protected router = inject(Router);
  // private http = inject(HttpClient);
  // protected readonly title = signal<any>('Dating App');
  // protected members = signal<any>([]);
  

  async ngOnInit(): Promise<void> {

    // this.members.set(await this.getMembers());
    // this.setCurrentUser();

    // this.http.get('https://localhost:5001/api/members').subscribe({
    //   next: response => this.members.set(response),
    //   error: error => console.log(error),
    //   complete: () => console.log('Http Request completed')
    // })
  }

  // setCurrentUser() {
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;
  //   const user = JSON.parse(userString);
  //   this.accountService.currentUser.set(user);
  // }


  // async getMembers() {
  //   try{
  //     return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
  //   }
  //   catch(error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

}
