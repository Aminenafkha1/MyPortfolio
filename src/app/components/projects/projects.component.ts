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
      title: 'DNEXT Excel Add-in Connector',
      description: 'A VSTO Excel Add-in for the DNEXT platform enabling users to securely connect to DNEXT services directly from Excel. Provides dataset browsing, workflow execution, uploads, and downloads with a rich interactive UI.',
      category: 'Office Development',
       technologies: [
      '.NET Framework 4.6.2',
      'VSTO',
      'Office.js',
      'Excel API',
      'REST APIs',
      'OAuth2',
      'AWS S3',
      'AWS IAM',
      'CI/CD',
      'WPF',
      'Git',
      'JIRA'
    ],
    features: [
      'Excel Add-in Integration',
      'Dataset Upload/Download',
      'Workflow Execution',
      'Responsive Excel UI',
      'Bug Fixing & Performance Tuning',
      'Automated CI/CD Pipeline',
      'Auto-update via AWS S3'
    ],
      image: 'assets/images/addin.png',
      demoUrl: 'https://www.dnext.io',
      githubUrl: 'https://github.com/yourname/ecommerce-microservices',
      status: 'Active',
      featured: true,
      complexity: 'Enterprise',
      duration: 'Since April 2025',
      teamSize: '2 developers'
    },
    {
      id: 2,
      title: 'BMDRM - Digital Rights Management Platform',
      description: 'BMDRM is a Digital Rights Management (DRM) solution designed to protect digital content from unauthorized access, copying, and distribution. This solution aims to secure multimedia files and provide content owners with control over the usage and distribution of their content',
      category: 'Microservices',
      technologies: [
      '.NET Core 8',
      'Docker',
      'Nomad',
      'Nginx',
      'Netmaker',
      'Portainer',
      'PostgreSQL',
      'MS SQL Server',
      'Microsoft Orleans',
      'RabbitMQ',
      'PgLoader',
      'TimescaleDB',
      '.NET MAUI',
      'GitHub Actions'
    ],
         features: [
      'DRM Protection System',
      'Microservices Migration',
      'Private Cloud Networking (Hetzner)',
      'Session Grains & Transcoding (Orleans)',
      'Real-time Dashboard',
      'Patroni HA PostgreSQL Cluster',
      'Notification System (Pusher)',
      'Alert Workflow Engine',
      'Nomad-based Deployment',
      'Automated CI/CD Pipeline',
      'Database Migration SQL → PostgreSQL',
      'Cross-platform Desktop App (.NET MAUI)'
    ],
      image: 'assets/images/bmdrm.jpg',
      demoUrl: 'https://bmdrm.com/',
      githubUrl: 'https://github.com/yourname/analytics-dashboard',
      status: 'Completed',
      featured: true,
      complexity: 'Advanced',
    duration: 'May 2024 – April 2025',
    teamSize: '6 developers'
    },
    {
      id: 3,
    title: 'COMPTA - Payroll & Accounting System',
   description:
      'A payroll and accounting management application supporting multi-tenancy, document generation, and full financial operations for SMEs.',
    category: 'Full Stack',
    technologies: [
      '.NET Core 8',
      'ASP.NET Core',
      'PostgreSQL',
      'Blazor WASM',
      'MudBlazor',
      'Docker',
      'Grafana',
      'Prometheus',
      'QuestPDF',
      'AutoMapper'
    ],
        features: [
      'Salary Calculation & Tax Logic',
      'Stock Management',
      'Multi-Tenancy (ASP.NET Identity)',
      'Document Generation (PDF, CSV)',
      'Payment Parameter Management',
      'Containerized Deployment',
      'Monitoring (Grafana/Prometheus)',
      'Code Review and Merge Process'
    ],
      image: 'assets/images/comptabli.png',
      demoUrl: 'https://tasks-cloud.example.com',
      githubUrl: 'https://github.com/yourname/cloud-task-manager',
      status: 'Completed',
      featured: false,
      complexity: 'Advanced',
    duration: 'January 2024 – May 2024',
      teamSize: '7 developers'
    },
    {
      id: 4,
    title: 'IDENTIQUBE - Identity & Access Management Platform',
      description:
      'Enterprise IAM solution with BPMN-based workflow engine, form builder integration, and advanced authentication mechanisms.',
    category: 'Security',
    technologies: [
      '.NET Core 7',
      'Blazor Server',
      'Duende Identity Server',
      'Auth0',
      'SAML2',
      'FIDO2',
      'Quartz',
      'EF Core',
      'Dapper',
      'ServiceStack Ormlite',
      'Docker',
      'Nginx'
    ],
           features: [
      'Custom Workflow Engine (BPMN 2.0)',
      'Graphical Workflow Designer',
      'Form Builder Integration',
      'IAM Object Modeling (Users, Roles, Groups)',
      'Role-based Access Control',
      'Containerized Deployment',
      'GitHub Actions & Packages CI/CD'
    ],
      image: 'assets/images/identiqube.png',
      demoUrl: null,
      githubUrl: null, // Private repository
      status: 'Completed',
      featured: true,
      complexity: 'Enterprise',
    duration: 'Sept 2022 – Jan 2024',
      teamSize: '8 developers'
    },
    {
      id: 5,
      title: 'GDrivePGBackup',
      description: 'GDrivePGBackup is an automated PostgreSQL backup solution that securely uploads database dumps to Google Drive using rclone. It supports optional PostGIS integration, automatic backup cleanup, and easy restoration, providing a reliable, cloud-based backup solution for your PostgreSQL databases.',
      category: 'Open Source',
      technologies: ['PostgreSQL Client 16', 'Rclone', 'Google Drive', 'Cron', 'Docker'],
      features: [
        'Automated Backups',
        'PostGIS Support',
        'Backup Cleanup',
        'Easy Restoration',
        'Cloud-based Storage'
      ] ,
      image: 'assets/images/addin.png',
      demoUrl: 'https://github.com/Aminenafkha1/GDrivePGBackup',
      githubUrl: 'https://github.com/Aminenafkha1/GDrivePGBackup',
      status: 'Completed',
      featured: false,
      complexity: 'Intermediate',
      duration: '3 months',
      teamSize: '2 developers'
    },
    {
      id: 6,
  title: '.NET MAUI CI/CD Pipelines',
    description:
    'Demonstrates setting up CI/CD pipelines for a .NET MAUI application using GitHub Actions, automating builds and packaging for both Windows and macOS installers.',
  category: 'Mobile',
  technologies: ['.NET MAUI', 'C#', 'GitHub Actions', 'Inno Setup', 'macOS pkg', 'Windows Installer', 'CI/CD'],
  features: [
    'Automated Builds with GitHub Actions',
    'Windows Installer Packaging (.exe) via Inno Setup',
    'macOS Installer Packaging (.pkg)',
    'CI/CD Workflow Triggered on Push or Tag',
    'Release Automation for Multiple Platforms',
    'Cross-platform MAUI App Deployment'
  ],
      image: 'assets/images/maui.png',
  demoUrl: 'https://github.com/Aminenafkha1/MauiAppPipelines',
  githubUrl: 'https://github.com/Aminenafkha1/MauiAppPipelines',
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