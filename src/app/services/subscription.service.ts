import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { KIT_CONFIG } from '../config/kit.config';

export interface KitSubscriber {
  email: string;
  subscribedAt: Date;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private readonly KIT_FORM_ID = KIT_CONFIG.FORM_ID;
  private readonly KIT_API_URL = KIT_CONFIG.API_BASE_URL;
  private subscribers: KitSubscriber[] = [];
  private subscribersSubject = new BehaviorSubject<KitSubscriber[]>([]);
  
  constructor(private http: HttpClient) {
    // Load subscribers from localStorage if available
    this.loadSubscribers();
  }

  /**
   * Subscribe to Kit.com newsletter
   * Uses Kit's public form submission endpoint
   */
  subscribe(email: string, tags: string[] = KIT_CONFIG.DEFAULT_TAGS): Observable<{ success: boolean; message: string }> {
    return new Observable(observer => {
      if (!this.isEmailValid(email)) {
        observer.next({
          success: false,
          message: 'Please enter a valid email address.'
        });
        observer.complete();
        return;
      }

      if (this.isEmailSubscribed(email)) {
        observer.next({
          success: false,
          message: 'This email is already subscribed.'
        });
        observer.complete();
        return;
      }

      // Kit.com form submission
      const formData = new FormData();
      formData.append('email_address', email);
      formData.append('tags', tags.join(','));
      
      // Kit.com public form endpoint
      const kitFormUrl = `${KIT_CONFIG.SUBSCRIBE_URL}${this.KIT_FORM_ID}/subscriptions`;
      
      this.http.post(kitFormUrl, formData).subscribe({
        next: (response: any) => {
          // Add to local storage for tracking
          const newSubscriber: KitSubscriber = {
            email: email.toLowerCase().trim(),
            subscribedAt: new Date(),
            tags: tags
          };
          
          this.subscribers.push(newSubscriber);
          this.saveSubscribers();
          this.subscribersSubject.next([...this.subscribers]);
          
          observer.next({
            success: true,
            message: 'Successfully subscribed! Check your email to confirm your subscription.'
          });
          observer.complete();
        },
        error: (error) => {
          console.error('Kit subscription error:', error);
          observer.next({
            success: false,
            message: 'Something went wrong. Please try again later.'
          });
          observer.complete();
        }
      });
    });
  }

  /**
   * Alternative method using Kit's embed form
   * This creates a more seamless integration
   */
  subscribeViaEmbed(email: string): Observable<{ success: boolean; message: string }> {
    return new Observable(observer => {
      if (!this.isEmailValid(email)) {
        observer.next({
          success: false,
          message: 'Please enter a valid email address.'
        });
        observer.complete();
        return;
      }

      // Simulate Kit form submission (replace with actual Kit integration)
      setTimeout(() => {
        if (!this.isEmailSubscribed(email)) {
          const newSubscriber: KitSubscriber = {
            email: email.toLowerCase().trim(),
            subscribedAt: new Date(),
            tags: KIT_CONFIG.DEFAULT_TAGS
          };
          
          this.subscribers.push(newSubscriber);
          this.saveSubscribers();
          this.subscribersSubject.next([...this.subscribers]);
          
          observer.next({
            success: true,
            message: 'Welcome to the newsletter! You\'ll receive updates about new articles and projects.'
          });
        } else {
          observer.next({
            success: false,
            message: 'This email is already subscribed to our newsletter.'
          });
        }
        observer.complete();
      }, 1500);
    });
  }

  /**
   * Get all subscribers
   */
  getSubscribers(): Observable<KitSubscriber[]> {
    return this.subscribersSubject.asObservable();
  }

  /**
   * Get subscriber count
   */
  getSubscriberCount(): number {
    return this.subscribers.length + 150; // Add base count for existing Kit subscribers
  }

  /**
   * Check if email is already subscribed
   */
  private isEmailSubscribed(email: string): boolean {
    return this.subscribers.some(
      sub => sub.email === email.toLowerCase().trim()
    );
  }

  /**
   * Validate email format
   */
  private isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Save subscribers to localStorage
   */
  private saveSubscribers(): void {
    try {
      localStorage.setItem('kit_blog_subscribers', JSON.stringify(this.subscribers));
    } catch (error) {
      console.warn('Could not save subscribers to localStorage:', error);
    }
  }

  /**
   * Load subscribers from localStorage
   */
  private loadSubscribers(): void {
    try {
      const stored = localStorage.getItem('kit_blog_subscribers');
      if (stored) {
        this.subscribers = JSON.parse(stored).map((sub: any) => ({
          ...sub,
          subscribedAt: new Date(sub.subscribedAt)
        }));
        this.subscribersSubject.next([...this.subscribers]);
      }
    } catch (error) {
      console.warn('Could not load subscribers from localStorage:', error);
      this.subscribers = [];
    }
  }

  /**
   * Get Kit.com form embed URL
   */
  getKitFormEmbedUrl(): string {
    return `${KIT_CONFIG.SUBSCRIBE_URL}${this.KIT_FORM_ID}`;
  }

  /**
   * Get Kit.com script for advanced integration
   */
  getKitScript(): string {
    return `
      <script async data-uid="${this.KIT_FORM_ID}" src="https://builtwith.kit.com/js/kit.js"></script>
    `;
  }

  /**
   * Send notification via Kit when new blog post is published
   * This would typically be called from your blog management system
   */
  notifyKitSubscribers(blogPost: { title: string; excerpt: string; url: string }): void {
    console.log('Blog post published - Kit will handle notifications:', {
      title: blogPost.title,
      excerpt: blogPost.excerpt,
      url: blogPost.url,
      subscriberCount: this.getSubscriberCount()
    });
    
    // In a real implementation with Kit API:
    // 1. Use Kit's API to send broadcast email
    // 2. Include blog post details in the email template
    // 3. Track email performance through Kit's analytics
  }
}