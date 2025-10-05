import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentGreeting = '';
  greetingIndex = 0;
  typingInterval: any;

  // Stats for the hero section
  experienceYears = 5;
  projectsCompleted = 50;
  technologiesUsed = 25;

  // Tech stack icons
  techStack = [
    { name: 'C#', icon: 'fab fa-csharp' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  greetings = [
    'Senior .NET Developer',
    'Full Stack Engineer',
    'Cloud Solutions Architect',
    'DevOps Engineer'
  ];

  stats = [
    {
      icon: 'fas fa-code',
      title: 'Web Applications',
      description: 'Enterprise-grade applications built with ASP.NET Core, Entity Framework, and modern frontend frameworks.',
      technologies: ['C#', 'ASP.NET Core', 'Angular', 'React', 'TypeScript']
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design',
      description: 'Scalable database architectures using SQL Server, PostgreSQL, and NoSQL solutions with optimal performance.',
      technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework']
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud applications and DevOps practices using Azure, AWS, and automated CI/CD pipelines.',
      technologies: ['Azure', 'Docker', 'Kubernetes', 'DevOps', 'GitHub Actions']
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

  recentProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with microservices architecture',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Docker'],
      image: 'assets/project1.jpg',
      demoUrl: '#',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization',
      technologies: ['C#', 'SignalR', 'Chart.js', 'PostgreSQL'],
      image: 'assets/project2.jpg',
      demoUrl: '#',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

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

  ngOnInit() {
    this.startTypewriterEffect();
    this.animateCodeLines();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
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
    return `using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
²    private readonly ApplicationDbContext _context;
    
    public ProjectsController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
    {
        return await _context.Projects
            .Include(p => p.Technologies)
            .ToListAsync();
    }
}`;
  }

  onImageError(event: any) {
    // Set a placeholder image or hide the image if loading fails
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkEyQzM5Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzY0NkQ3QSIvPgo8cGF0aCBkPSJNNTAgMTUwQzUwIDEzMCA3MCA4MCAyMCA4MEM3MCA4MCA5MCA4MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEM5MCA5MCA5MCA5MCA5MCA5MEw1MCAyMDBIMTUwQzE1MCAyMDAgMTUwIDE1MCAxNTAgMTUwSDUwWiIgZmlsbD0iIzY0NkQ3QSIvPgo8L3N2Zz4K';
    event.target.alt = 'Professional Developer Photo (Placeholder)';
  }
}