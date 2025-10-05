import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionService } from '../../services/subscription.service';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentGreeting = '';
  greetingIndex = 0;
  typingInterval: any;

  // Subscription related properties
  subscriptionForm: FormGroup;
  isSubscribing = false;
  subscriberCount = 150; // Default count, will be updated from service
  subscriptionStatus = {
    success: false,
    error: false,
    message: ''
  };

  // Stats for the hero section
  experienceYears = 3;
  projectsCompleted = 12;
  technologiesUsed = 20;

  // Tech stack icons
  techStack = [
    { name: 'C#', icon: 'csharp-icon' }, // Custom C# icon
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'HTML/CSS', icon: 'fab fa-html5' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  greetings = [
    '.NET Developer',
    'Full Stack Developer',
    'Software Engineer',
    'Backend Developer'
  ];

  stats = [
    {
      icon: 'fas fa-code',
      title: 'Web Applications',
      description: 'Full-stack web applications built with ASP.NET Core, MVC, and modern frontend frameworks like Angular.',
      technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Angular', 'TypeScript']
    },
    {
      icon: 'fas fa-database',
      title: 'Database Management',
      description: 'Database design and optimization using SQL Server with Entity Framework for data access.',
      technologies: ['SQL Server', 'Entity Framework', 'T-SQL', 'Database Design', 'SSMS']
    },
    {
      icon: 'fas fa-desktop',
      title: 'Desktop Applications',
      description: 'Windows desktop applications using WPF, WinForms, and .NET Framework for business solutions.',
      technologies: ['WPF', 'WinForms', '.NET Framework', 'C#', 'XAML']
    }
  ];

  features = [
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and SOLID principles.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'DevOps Integration',
      description: 'Implementing CI/CD pipelines, containerization, and cloud deployment strategies.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security First',
      description: 'Building secure applications with proper authentication, authorization, and data protection.'
    }
  ];

  // Latest articles from blog (dynamically loaded)
  latestArticles: BlogPost[] = [];

  editorLines = Array(15).fill(0);

  codeLines = [
    { text: 'using Microsoft.AspNetCore.Mvc;', x: Math.random() * 100, delay: Math.random() * 2 },
    { text: 'using System.Threading.Tasks;', x: Math.random() * 100, delay: Math.random() * 3 },
    { text: '', x: 0, delay: 0 },
    { text: '[ApiController]', x: Math.random() * 100, delay: Math.random() * 4 },
    { text: '[Route("api/[controller]")]', x: Math.random() * 100, delay: Math.random() * 5 },
    { text: 'public class ProjectsController : ControllerBase', x: Math.random() * 100, delay: Math.random() * 5 },
    { text: '{', x: Math.random() * 100, delay: Math.random() * 5 },
    { text: '    [HttpGet]', x: Math.random() * 100, delay: Math.random() * 5 }
  ];

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    private blogService: BlogService
  ) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    // Get current subscriber count
    this.subscriberCount = this.subscriptionService.getSubscriberCount();
  }

  ngOnInit() {
    this.startTypewriterEffect();
    this.animateCodeLines();
    this.loadLatestArticles();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  // Subscription methods
  onSubscribe() {
    if (this.subscriptionForm.valid) {
      this.isSubscribing = true;
      this.subscriptionStatus = { success: false, error: false, message: '' };

      const email = this.subscriptionForm.get('email')?.value;
      
      // Use Kit.com integration with blog-related tags
      this.subscriptionService.subscribeViaEmbed(email).subscribe({
        next: (response) => {
          this.isSubscribing = false;
          if (response.success) {
            this.subscriptionStatus = { success: true, error: false, message: response.message };
            this.subscriberCount = this.subscriptionService.getSubscriberCount();
            
            // Reset form after success
            setTimeout(() => {
              this.subscriptionStatus = { success: false, error: false, message: '' };
              this.subscriptionForm.reset();
            }, 5000);
          } else {
            this.subscriptionStatus = { success: false, error: true, message: response.message };
          }
        },
        error: (error) => {
          this.isSubscribing = false;
          this.subscriptionStatus = { 
            success: false, 
            error: true, 
            message: 'Something went wrong. Please try again.' 
          };
        }
      });
    }
  }

  // Load latest articles from blog service
  loadLatestArticles() {
    this.latestArticles = this.blogService.getLatestPosts(2); // Get 2 latest articles
  }

  private startTypewriterEffect() {
    let charIndex = 0;
    
    this.currentGreeting = '';

    this.typingInterval = setInterval(() => {
      if (charIndex < this.greetings[this.greetingIndex].length) {
        this.currentGreeting += this.greetings[this.greetingIndex][charIndex];
        charIndex++;
      } else {
        clearInterval(this.typingInterval);
        
        setTimeout(() => {
          this.greetingIndex = (this.greetingIndex + 1) % this.greetings.length;
          charIndex = 0;
          this.currentGreeting = '';
          this.startTypewriterEffect();
        }, 2000);
      }
    }, 100);
  }

  private animateCodeLines() {
    // Add animation logic for code lines if needed
  }

  getHighlightedCode(): string {
    return `using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class AccountingController : Controller
    {
        private readonly IAccountingService _accountingService;
        
        public AccountingController(IAccountingService service)
        {
            _accountingService = service;
        }
        
        [HttpGet]
        public ActionResult GetFinancialReports()
        {
            var reports = _accountingService
                .GetReports()
                .Where(r => r.IsActive)
                .OrderBy(r => r.Date)
                .ToList();
                
            return Json(reports, JsonRequestBehavior.AllowGet);
        }
    }
}`;
  }

  onImageError(event: any) {
    // Set a placeholder image or hide the image if loading fails
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkEyQzM5Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzY0NkQ3QSIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEzMCA3MCA4MCAyMCA4MEM3MCA4MCA5MCA4MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEw1MCAyMDBIMTUwQzE1MCAyMDAgMTUwIDE1MCAxNTAgMTUwSDUwWiIgZmlsbD0iIzY0NkQ3QSIvPgo8L3N2Zz4K';
    event.target.alt = 'Professional Developer Photo (Placeholder)';
  }
}