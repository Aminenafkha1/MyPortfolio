import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPostsSubject = new BehaviorSubject<BlogPost[]>([]);
  public blogPosts$ = this.blogPostsSubject.asObservable();

  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Microservices with .NET Core',
      excerpt: 'Learn how to design and implement microservices architecture using .NET Core, Docker, and Kubernetes for enterprise applications.',
      content: `<h2>Introduction to Microservices</h2>
                <p>Microservices architecture has become the go-to pattern for building scalable, maintainable enterprise applications...</p>
                <h3>Key Benefits</h3>
                <ul>
                  <li>Independent deployment and scaling</li>
                  <li>Technology diversity</li>
                  <li>Fault isolation</li>
                  <li>Team independence</li>
                </ul>`,
      category: 'Backend',
      tags: ['ASP.NET Core', 'Microservices', 'Docker', 'Kubernetes'],
      image: 'assets/images/bmdrm.jpg',
      publishDate: '2025-09-15',
      readTime: '8 min read',
      featured: true,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    },
    {
      id: 2,
      title: 'Securing APIs with JWT and OAuth 2.0',
      excerpt: 'Comprehensive guide to implementing authentication and authorization in .NET applications using JWT tokens and OAuth 2.0.',
      content: `<h2>Modern API Security</h2>
                <p>Security is paramount when building APIs. In this article, we'll explore how to implement robust security...</p>
                <h3>Implementation Steps</h3>
                <ol>
                  <li>Setting up JWT authentication</li>
                  <li>Configuring OAuth 2.0</li>
                  <li>Implementing role-based authorization</li>
                </ol>`,
      category: 'Security',
      tags: ['JWT', 'OAuth', 'Security', 'Authentication'],
      image: 'assets/images/supwarden.jpeg',
      publishDate: '2025-09-10',
      readTime: '12 min read',
      featured: false,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    },
    {
      id: 3,
      title: 'Azure DevOps CI/CD Pipeline Best Practices',
      excerpt: 'Step-by-step guide to creating efficient CI/CD pipelines using Azure DevOps for .NET applications.',
      content: `<h2>DevOps Excellence</h2>
                <p>Continuous Integration and Continuous Deployment are essential for modern software development...</p>
                <h3>Pipeline Components</h3>
                <ul>
                  <li>Source control integration</li>
                  <li>Automated testing</li>
                  <li>Deployment strategies</li>
                  <li>Monitoring and feedback</li>
                </ul>`,
      category: 'DevOps',
      tags: ['Azure DevOps', 'CI/CD', 'Deployment', 'Automation'],
      image: 'assets/images/identiqube.png',
      publishDate: '2025-09-05',
      readTime: '10 min read',
      featured: true,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    },
    {
      id: 4,
      title: 'Cloud-Native Applications with Azure',
      excerpt: 'Designing and deploying cloud-native applications using Azure services, containers, and serverless computing.',
      content: `<h2>Cloud-First Development</h2>
                <p>Building applications that leverage cloud capabilities from the ground up...</p>
                <h3>Azure Services</h3>
                <ul>
                  <li>Azure App Service</li>
                  <li>Azure Functions</li>
                  <li>Azure Container Instances</li>
                  <li>Azure Kubernetes Service</li>
                </ul>`,
      category: 'Cloud',
      tags: ['Azure', 'Cloud-Native', 'Serverless', 'Containers'],
      image: 'assets/images/comptabli.png',
      publishDate: '2025-08-28',
      readTime: '15 min read',
      featured: false,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    },
    {
      id: 5,
      title: 'Modern Frontend with Angular and TypeScript',
      excerpt: 'Building responsive and performant frontend applications using Angular, TypeScript, and modern web standards.',
      content: `<h2>Frontend Excellence</h2>
                <p>Modern web applications require sophisticated frontend architectures...</p>
                <h3>Key Technologies</h3>
                <ul>
                  <li>Angular 18+ features</li>
                  <li>TypeScript best practices</li>
                  <li>State management</li>
                  <li>Performance optimization</li>
                </ul>`,
      category: 'Frontend',
      tags: ['Angular', 'TypeScript', 'Frontend', 'Web Development'],
      image: 'assets/images/maui.png',
      publishDate: '2025-08-20',
      readTime: '9 min read',
      featured: false,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    },
    {
      id: 6,
      title: 'Enterprise Architecture Patterns',
      excerpt: 'Exploring common architectural patterns for enterprise applications including CQRS, Event Sourcing, and Domain-Driven Design.',
      content: `<h2>Architectural Excellence</h2>
                <p>Enterprise applications require robust architectural patterns...</p>
                <h3>Design Patterns</h3>
                <ul>
                  <li>CQRS (Command Query Responsibility Segregation)</li>
                  <li>Event Sourcing</li>
                  <li>Domain-Driven Design</li>
                  <li>Microservices patterns</li>
                </ul>`,
      category: 'Architecture',
      tags: ['Architecture', 'CQRS', 'DDD', 'Design Patterns'],
      image: 'assets/images/addin.png',
      publishDate: '2025-08-15',
      readTime: '14 min read',
      featured: true,
      author: {
        name: 'Amine Nafkha',
        avatar: 'assets/images/me.jpg',
        bio: 'Senior .NET Developer and Cloud Solutions Architect with expertise in building scalable enterprise applications.'
      }
    }
  ];

  constructor() {
    this.blogPostsSubject.next(this.blogPosts);
  }

  /**
   * Get all blog posts
   */
  getAllPosts(): Observable<BlogPost[]> {
    return this.blogPosts$;
  }

  /**
   * Get featured blog posts
   */
  getFeaturedPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.featured);
  }

  /**
   * Get latest blog posts (most recent)
   */
  getLatestPosts(count: number = 3): BlogPost[] {
    return this.blogPosts
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, count);
  }

  /**
   * Get blog post by ID
   */
  getPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }

  /**
   * Get posts by category
   */
  getPostsByCategory(category: string): BlogPost[] {
    if (category === 'All') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(post => post.category === category);
  }

  /**
   * Get all categories
   */
  getCategories(): string[] {
    return ['All', 'Cloud', 'Security', 'Backend', 'Frontend', 'DevOps', 'Architecture'];
  }

  /**
   * Add new blog post (for dynamic updates)
   */
  addPost(post: Omit<BlogPost, 'id'>): void {
    const newPost: BlogPost = {
      ...post,
      id: Math.max(...this.blogPosts.map(p => p.id)) + 1
    };
    this.blogPosts.unshift(newPost);
    this.blogPostsSubject.next(this.blogPosts);
  }

  /**
   * Update existing blog post
   */
  updatePost(id: number, updates: Partial<BlogPost>): void {
    const index = this.blogPosts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.blogPosts[index] = { ...this.blogPosts[index], ...updates };
      this.blogPostsSubject.next(this.blogPosts);
    }
  }

  /**
   * Delete blog post
   */
  deletePost(id: number): void {
    this.blogPosts = this.blogPosts.filter(post => post.id !== id);
    this.blogPostsSubject.next(this.blogPosts);
  }

  /**
   * Get total posts count
   */
  getTotalPostsCount(): number {
    return this.blogPosts.length;
  }
}