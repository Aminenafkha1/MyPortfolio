import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  selectedCategory = 'All';
  filteredProjects: any[] = [];

  categories = ['All', 'Backend', 'Frontend', 'Full Stack', 'Cloud', 'Microservices', 'Security', 'Mobile'];

  projects = [
    {
      id: 1,
      title: 'E-Commerce Microservices Platform',
      description: 'Comprehensive e-commerce solution built with microservices architecture using .NET Core, Docker, and Kubernetes. Features include user management, product catalog, order processing, payment integration, and real-time notifications.',
      category: 'Microservices',
      technologies: ['ASP.NET Core', 'Docker', 'Kubernetes', 'SQL Server', 'Redis', 'RabbitMQ', 'Angular'],
      features: [
        'Microservices Architecture',
        'API Gateway with Ocelot',
        'Event-driven Communication',
        'CQRS Pattern Implementation',
        'Container Orchestration',
        'CI/CD Pipeline',
        'Distributed Logging',
        'Health Check Monitoring'
      ],
      image: 'assets/projects/ecommerce-microservices.jpg',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/yourname/ecommerce-microservices',
      status: 'Completed',
      featured: true,
      complexity: 'Enterprise',
      duration: '8 months',
      teamSize: '6 developers'
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'Business intelligence dashboard providing real-time data visualization and reporting. Built with SignalR for live updates, Chart.js for interactive charts, and Entity Framework for data access.',
      category: 'Full Stack',
      technologies: ['ASP.NET Core', 'SignalR', 'Angular', 'Chart.js', 'PostgreSQL', 'Entity Framework'],
      features: [
        'Real-time Data Updates',
        'Interactive Charts & Graphs',
        'Custom Report Builder',
        'Export to PDF/Excel',
        'Role-based Access Control',
        'Responsive Design',
        'Data Filtering & Sorting',
        'Email Notifications'
      ],
      image: 'assets/projects/analytics-dashboard.jpg',
      demoUrl: 'https://analytics-demo.example.com',
      githubUrl: 'https://github.com/yourname/analytics-dashboard',
      status: 'Completed',
      featured: true,
      complexity: 'Advanced',
      duration: '4 months',
      teamSize: '3 developers'
    },
    {
      id: 3,
      title: 'Cloud-Native Task Management System',
      description: 'Modern task management application deployed on Azure with serverless functions, blob storage, and Cosmos DB. Features team collaboration, file sharing, and automated workflows.',
      category: 'Cloud',
      technologies: ['Azure Functions', 'Cosmos DB', 'Blob Storage', 'Azure AD', 'React', 'TypeScript'],
      features: [
        'Serverless Architecture',
        'Auto-scaling Capabilities',
        'Global Data Distribution',
        'Azure AD Integration',
        'File Upload & Sharing',
        'Automated Workflows',
        'Mobile-first Design',
        'Offline Synchronization'
      ],
      image: 'assets/projects/task-management.jpg',
      demoUrl: 'https://tasks-cloud.example.com',
      githubUrl: 'https://github.com/yourname/cloud-task-manager',
      status: 'Completed',
      featured: false,
      complexity: 'Advanced',
      duration: '5 months',
      teamSize: '4 developers'
    },
    {
      id: 4,
      title: 'Secure Banking API Gateway',
      description: 'High-security API gateway for banking applications with OAuth 2.0, JWT tokens, rate limiting, and comprehensive audit logging. Handles millions of transactions daily.',
      category: 'Security',
      technologies: ['ASP.NET Core', 'IdentityServer4', 'OAuth 2.0', 'JWT', 'Redis', 'ElasticSearch'],
      features: [
        'OAuth 2.0 & OpenID Connect',
        'Multi-factor Authentication',
        'Rate Limiting & Throttling',
        'Comprehensive Audit Logging',
        'API Versioning',
        'Request/Response Encryption',
        'GDPR Compliance',
        'Real-time Monitoring'
      ],
      image: 'assets/projects/banking-api.jpg',
      demoUrl: null,
      githubUrl: null, // Private repository
      status: 'Completed',
      featured: true,
      complexity: 'Enterprise',
      duration: '12 months',
      teamSize: '8 developers'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      description: 'Comprehensive inventory tracking system with barcode scanning, automated reordering, and supplier integration. Built with clean architecture principles.',
      category: 'Backend',
      technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Hangfire', 'AutoMapper'],
      features: [
        'Barcode Scanning Integration',
        'Automated Reordering',
        'Supplier Management',
        'Multi-warehouse Support',
        'Inventory Forecasting',
        'Audit Trail',
        'Report Generation',
        'API Integration'
      ],
      image: 'assets/projects/inventory-system.jpg',
      demoUrl: 'https://inventory-demo.example.com',
      githubUrl: 'https://github.com/yourname/inventory-management',
      status: 'Completed',
      featured: false,
      complexity: 'Intermediate',
      duration: '3 months',
      teamSize: '2 developers'
    },
    {
      id: 6,
      title: 'Progressive Web App Portfolio',
      description: 'Modern portfolio website built as a Progressive Web App with offline capabilities, service workers, and optimized performance. Features dark/light theme and multi-language support.',
      category: 'Frontend',
      technologies: ['Angular', 'PWA', 'Service Workers', 'TypeScript', 'SCSS', 'Workbox'],
      features: [
        'Progressive Web App',
        'Offline Functionality',
        'Service Worker Implementation',
        'Push Notifications',
        'Responsive Design',
        'Dark/Light Theme',
        'Multi-language Support',
        'Performance Optimized'
      ],
      image: 'assets/projects/pwa-portfolio.jpg',
      demoUrl: 'https://portfolio-pwa.example.com',
      githubUrl: 'https://github.com/yourname/portfolio-pwa',
      status: 'In Progress',
      featured: false,
      complexity: 'Intermediate',
      duration: '2 months',
      teamSize: '1 developer'
    }
  ];

  ngOnInit() {
    this.filterProjects();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProjects();
  }

  filterProjects() {
    if (this.selectedCategory === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === this.selectedCategory);
    }
  }

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }

  getComplexityColor(complexity: string): string {
    switch (complexity) {
      case 'Enterprise': return 'var(--danger-color)';
      case 'Advanced': return 'var(--warning-color)';
      case 'Intermediate': return 'var(--primary-color)';
      default: return 'var(--info-color)';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Completed': return 'var(--success-color)';
      case 'In Progress': return 'var(--warning-color)';
      case 'Planning': return 'var(--info-color)';
      default: return 'var(--text-secondary)';
    }
  }

  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  getAllTechnologies(): string[] {
    const allTechs = new Set<string>();
    this.projects.forEach(project => {
      project.technologies.forEach((tech: string) => allTechs.add(tech));
    });
    return Array.from(allTechs);
  }

  getCompletedProjects() {
    return this.projects.filter(project => project.status === 'Completed');
  }
}