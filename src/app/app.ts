import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Mobile navigation state
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  constructor() {
    // Handle scroll events for navbar
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 100);
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(isOpen => !isOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
