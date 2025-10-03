import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  
  skillCategories = [
    {
      name: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'C#', level: 95, icon: 'fab fa-microsoft' },
        { name: 'ASP.NET Core', level: 90, icon: 'fas fa-code' },
        { name: 'Entity Framework', level: 88, icon: 'fas fa-database' },
        { name: 'Web API', level: 92, icon: 'fas fa-plug' },
        { name: 'SignalR', level: 85, icon: 'fas fa-broadcast-tower' },
        { name: 'Microservices', level: 87, icon: 'fas fa-cubes' }
      ]
    },
    {
      name: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'Angular', level: 88, icon: 'fab fa-angular' },
        { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
        { name: 'HTML5 & CSS3', level: 90, icon: 'fab fa-html5' },
        { name: 'Bootstrap', level: 82, icon: 'fab fa-bootstrap' },
        { name: 'SCSS/Sass', level: 80, icon: 'fab fa-sass' },
        { name: 'RxJS', level: 78, icon: 'fas fa-stream' }
      ]
    },
    {
      name: 'Database Technologies',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL Server', level: 92, icon: 'fas fa-server' },
        { name: 'PostgreSQL', level: 85, icon: 'fas fa-elephant' },
        { name: 'MongoDB', level: 80, icon: 'fas fa-leaf' },
        { name: 'Redis', level: 78, icon: 'fas fa-memory' },
        { name: 'ElasticSearch', level: 75, icon: 'fas fa-search' },
        { name: 'Azure Cosmos DB', level: 82, icon: 'fas fa-globe' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'Microsoft Azure', level: 88, icon: 'fab fa-microsoft' },
        { name: 'Docker', level: 85, icon: 'fab fa-docker' },
        { name: 'Kubernetes', level: 80, icon: 'fas fa-dharmachakra' },
        { name: 'Azure DevOps', level: 87, icon: 'fas fa-infinity' },
        { name: 'GitHub Actions', level: 82, icon: 'fab fa-github' },
        { name: 'Terraform', level: 75, icon: 'fas fa-layer-group' }
      ]
    },
    {
      name: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Visual Studio', level: 95, icon: 'fas fa-code' },
        { name: 'VS Code', level: 90, icon: 'fas fa-laptop-code' },
        { name: 'Git', level: 92, icon: 'fab fa-git-alt' },
        { name: 'Postman', level: 88, icon: 'fas fa-paper-plane' },
        { name: 'Azure Portal', level: 85, icon: 'fas fa-cloud' },
        { name: 'Jira', level: 82, icon: 'fab fa-jira' }
      ]
    },
    {
      name: 'Architecture & Design',
      icon: 'fas fa-drafting-compass',
      skills: [
        { name: 'Clean Architecture', level: 90, icon: 'fas fa-sitemap' },
        { name: 'SOLID Principles', level: 92, icon: 'fas fa-cube' },
        { name: 'Design Patterns', level: 88, icon: 'fas fa-puzzle-piece' },
        { name: 'Domain Driven Design', level: 85, icon: 'fas fa-brain' },
        { name: 'CQRS', level: 82, icon: 'fas fa-exchange-alt' },
        { name: 'Event Sourcing', level: 78, icon: 'fas fa-history' }
      ]
    }
  ];

  certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'AZ-204',
      icon: 'fab fa-microsoft',
      verified: true
    },
    {
      name: 'Microsoft Certified: Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'AZ-305',
      icon: 'fab fa-microsoft',
      verified: true
    },
    {
      name: 'Certified Kubernetes Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKAD',
      icon: 'fas fa-dharmachakra',
      verified: true
    }
  ];

  achievements = [
    {
      title: '5+ Years Experience',
      description: 'Professional .NET development',
      icon: 'fas fa-calendar-alt',
      count: '5+'
    },
    {
      title: 'Projects Completed',
      description: 'Successful enterprise applications',
      icon: 'fas fa-project-diagram',
      count: '50+'
    },
    {
      title: 'Technologies Mastered',
      description: 'Programming languages and frameworks',
      icon: 'fas fa-code',
      count: '25+'
    },
    {
      title: 'Teams Collaborated',
      description: 'Cross-functional development teams',
      icon: 'fas fa-users',
      count: '15+'
    }
  ];

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Trigger animations after view is initialized
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }

  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar: any) => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level + '%';
    });
  }

  getSkillColor(level: number): string {
    if (level >= 90) return 'var(--success-color)';
    if (level >= 80) return 'var(--primary-color)';
    if (level >= 70) return 'var(--warning-color)';
    return 'var(--info-color)';
  }

  getSkillsCountByLevel(minLevel: number, maxLevel?: number): number {
    let allSkills: any[] = [];
    this.skillCategories.forEach(category => {
      allSkills = allSkills.concat(category.skills);
    });

    if (maxLevel) {
      return allSkills.filter(skill => skill.level >= minLevel && skill.level <= maxLevel).length;
    } else {
      return allSkills.filter(skill => skill.level >= minLevel).length;
    }
  }
}