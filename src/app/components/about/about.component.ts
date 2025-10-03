import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h1>About Me</h1>
            <h2>Professional .NET Developer</h2>
            <p>
              I'm a passionate .NET developer with over 5 years of experience building 
              enterprise-grade applications. I specialize in C#, ASP.NET Core, Angular, 
              and modern cloud technologies.
            </p>
            <p>
              My focus is on creating scalable, maintainable solutions that solve real 
              business problems while maintaining high code quality and performance standards.
            </p>
            <div class="skills-highlight">
              <h3>Core Technologies</h3>
              <div class="skills-tags">
                <span class="skill-tag">.NET Core</span>
                <span class="skill-tag">C#</span>
                <span class="skill-tag">ASP.NET</span>
                <span class="skill-tag">Entity Framework</span>
                <span class="skill-tag">SQL Server</span>
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Azure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
    .about-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    .about-text h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .about-text h2 {
      color: var(--secondary-color);
      margin-bottom: 2rem;
    }
    .about-text p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }
    .skills-highlight {
      margin-top: 3rem;
    }
    .skills-highlight h3 {
      margin-bottom: 1.5rem;
      color: var(--primary-color);
    }
    .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .skill-tag {
      background: var(--bg-tertiary);
      color: var(--primary-color);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.9rem;
      border: 1px solid var(--border-color);
    }
  `]
})
export class AboutComponent {}