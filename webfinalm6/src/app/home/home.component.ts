import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-out'))
    ])
  ]
})
export class HomeComponent {
  showSummary = false;
  isLoggedIn = false;
  
  constructor(private authService: AuthService) {}

  toggleSummary() {
    this.showSummary = !this.showSummary;
  }

  logout() {
    this.authService.logout();
  }
}
