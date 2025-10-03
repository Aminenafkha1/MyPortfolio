import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  selectedCategory = 'All';
  filteredPosts: any[] = [];

  categories = ['All', 'Cloud', 'Security', 'Backend', 'Frontend', 'DevOps', 'Architecture'];

  blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Microservices with .NET Core',
      excerpt: 'Learn how to design and implement microservices architecture using .NET Core, Docker, and Kubernetes for enterprise applications.',
      content: 'Full article content about microservices...',
      category: 'Backend',
      tags: ['ASP.NET Core', 'Microservices', 'Docker', 'Kubernetes'],
      image: 'assets/blog/microservices.jpg',
      publishDate: '2025-09-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Securing APIs with JWT and OAuth 2.0',
      excerpt: 'Comprehensive guide to implementing authentication and authorization in .NET applications using JWT tokens and OAuth 2.0.',
      content: 'Full article content about API security...',
      category: 'Security',
      tags: ['JWT', 'OAuth', 'Security', 'Authentication'],
      image: 'assets/blog/api-security.jpg',
      publishDate: '2025-09-10',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Azure DevOps CI/CD Pipeline Best Practices',
      excerpt: 'Step-by-step guide to creating efficient CI/CD pipelines using Azure DevOps for .NET applications.',
      content: 'Full article content about DevOps...',
      category: 'DevOps',
      tags: ['Azure DevOps', 'CI/CD', 'Deployment', 'Automation'],
      image: 'assets/blog/devops.jpg',
      publishDate: '2025-09-05',
      readTime: '10 min read',
      featured: true
    },
    {
      id: 4,
      title: 'Cloud-Native Applications with Azure',
      excerpt: 'Designing and deploying cloud-native applications using Azure services, containers, and serverless computing.',
      content: 'Full article content about cloud development...',
      category: 'Cloud',
      tags: ['Azure', 'Cloud-Native', 'Serverless', 'Containers'],
      image: 'assets/blog/cloud-native.jpg',
      publishDate: '2025-08-28',
      readTime: '15 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Modern Frontend with Angular and TypeScript',
      excerpt: 'Building responsive and performant frontend applications using Angular, TypeScript, and modern web standards.',
      content: 'Full article content about frontend development...',
      category: 'Frontend',
      tags: ['Angular', 'TypeScript', 'Frontend', 'Web Development'],
      image: 'assets/blog/angular-frontend.jpg',
      publishDate: '2025-08-20',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Enterprise Architecture Patterns',
      excerpt: 'Exploring common architectural patterns for enterprise applications including CQRS, Event Sourcing, and Domain-Driven Design.',
      content: 'Full article content about architecture...',
      category: 'Architecture',
      tags: ['Architecture', 'CQRS', 'DDD', 'Design Patterns'],
      image: 'assets/blog/architecture.jpg',
      publishDate: '2025-08-15',
      readTime: '14 min read',
      featured: true
    }
  ];

  ngOnInit() {
    this.filterPosts();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterPosts();
  }

  filterPosts() {
    if (this.selectedCategory === 'All') {
      this.filteredPosts = this.blogPosts;
    } else {
      this.filteredPosts = this.blogPosts.filter(post => post.category === this.selectedCategory);
    }
  }

  getFeaturedPosts() {
    return this.blogPosts.filter(post => post.featured);
  }

  trackByPostId(index: number, post: any): number {
    return post.id;
  }
}