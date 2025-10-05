import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit, AfterViewInit {
  post: BlogPost | null = null;
  relatedPosts: BlogPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogService.getPostById(postId) || null;
    
    if (this.post) {
      this.loadRelatedPosts();
    }
  }

  ngAfterViewInit() {
    // Make copyCode available globally for HTML onclick handlers
    (window as any).copyCode = this.copyCode.bind(this);
  }

  getBlogPosts() {
    return [
      {
        id: 1,
        title: 'Building Scalable Microservices with .NET Core',
        excerpt: 'Learn how to design and implement microservices architecture using .NET Core, Docker, and Kubernetes for enterprise applications.',
        content: this.getMicroservicesContent(),
        category: 'Backend',
        tags: ['ASP.NET Core', 'Microservices', 'Docker', 'Kubernetes'],
        image: 'assets/blog/microservices.jpg',
        publishDate: '2025-09-15',
        readTime: '12 min read',
        featured: true,
        author: {
          name: 'Amine',
          avatar: 'assets/images/me.jpg',
          bio: 'Senior .NET Developer with 3+ years of experience in building enterprise applications and microservices architecture.'
        }
      },
      {
        id: 2,
        title: 'Advanced Entity Framework Core Patterns',
        excerpt: 'Discover advanced EF Core patterns, performance optimization techniques, and best practices for data access in .NET applications.',
        content: this.getEFCoreContent(),
        category: 'Backend',
        tags: ['Entity Framework', 'Database', 'Performance', 'LINQ'],
        image: 'assets/blog/ef-core.jpg',
        publishDate: '2025-09-10',
        readTime: '10 min read',
        featured: false,
        author: {
          name: 'Amine',
          avatar: 'assets/author-avatar.jpg',
          bio: 'Senior .NET Developer with expertise in database optimization and ORM patterns.'
        }
      },
      {
        id: 3,
        title: 'Implementing Clean Architecture in .NET',
        excerpt: 'A comprehensive guide to implementing Clean Architecture principles in .NET applications for maintainable and testable code.',
        content: this.getCleanArchitectureContent(),
        category: 'Architecture',
        tags: ['Clean Architecture', 'Domain-Driven Design', 'SOLID', 'Testing'],
        image: 'assets/blog/clean-architecture.jpg',
        publishDate: '2025-09-05',
        readTime: '15 min read',
        featured: true,
        author: {
          name: 'Amine',
          avatar: 'assets/author-avatar.jpg',
          bio: 'Senior .NET Developer specializing in software architecture and design patterns.'
        }
      },
      {
        id: 4,
        title: 'Securing .NET APIs with JWT and OAuth 2.0',
        excerpt: 'Learn how to implement robust authentication and authorization in your .NET APIs using JWT tokens and OAuth 2.0.',
        content: this.getSecurityContent(),
        category: 'Security',
        tags: ['JWT', 'OAuth 2.0', 'Authentication', 'Authorization', 'Security'],
        image: 'assets/blog/security.jpg',
        publishDate: '2025-08-28',
        readTime: '8 min read',
        featured: false,
        author: {
          name: 'Amine',
          avatar: 'assets/author-avatar.jpg',
          bio: 'Security-focused .NET developer with expertise in API security and authentication systems.'
        }
      },
      {
        id: 5,
        title: 'Advanced SignalR for Real-time Applications',
        excerpt: 'Build sophisticated real-time applications using SignalR with advanced patterns for scalability and performance.',
        content: this.getSignalRContent(),
        category: 'Frontend',
        tags: ['SignalR', 'Real-time', 'WebSockets', 'Hubs', 'Scaling'],
        image: 'assets/blog/signalr.jpg',
        publishDate: '2025-08-20',
        readTime: '11 min read',
        featured: false,
        author: {
          name: 'Amine',
          avatar: 'assets/author-avatar.jpg',
          bio: 'Full-stack .NET developer with expertise in real-time web applications.'
        }
      },
      {
        id: 6,
        title: 'DevOps for .NET: CI/CD with Azure DevOps',
        excerpt: 'Complete guide to setting up CI/CD pipelines for .NET applications using Azure DevOps, including testing and deployment strategies.',
        content: this.getDevOpsContent(),
        category: 'DevOps',
        tags: ['Azure DevOps', 'CI/CD', 'Deployment', 'Testing', 'Pipeline'],
        image: 'assets/blog/devops.jpg',
        publishDate: '2025-08-15',
        readTime: '13 min read',
        featured: true,
        author: {
          name: 'Amine',
          avatar: 'assets/author-avatar.jpg',
          bio: 'DevOps engineer and .NET developer with expertise in cloud deployment and automation.'
        }
      }
    ];
  }

  getMicroservicesContent(): string {
    return `
      <div class="blog-content">
        <h2>Introduction to Microservices Architecture</h2>
        <p>Microservices architecture has become the de facto standard for building large-scale, distributed applications. In this comprehensive guide, we'll explore how to leverage .NET Core to build robust microservices that can scale with your business needs.</p>
        
        <div class="info-box">
          <h4><i class="fas fa-lightbulb"></i> What You'll Learn</h4>
          <ul>
            <li>Microservices architecture fundamentals</li>
            <li>Setting up .NET Core microservices</li>
            <li>Docker containerization strategies</li>
            <li>Kubernetes orchestration</li>
            <li>Best practices and design patterns</li>
          </ul>
        </div>

        <h3>Key Benefits of Microservices</h3>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h4><i class="fas fa-expand-arrows-alt"></i> Scalability</h4>
            <p>Scale individual services based on demand</p>
          </div>
          <div class="benefit-card">
            <h4><i class="fas fa-cogs"></i> Technology Diversity</h4>
            <p>Use different technologies for different services</p>
          </div>
          <div class="benefit-card">
            <h4><i class="fas fa-users"></i> Team Independence</h4>
            <p>Teams can work independently on different services</p>
          </div>
          <div class="benefit-card">
            <h4><i class="fas fa-shield-alt"></i> Fault Isolation</h4>
            <p>Failures in one service don't affect others</p>
          </div>
        </div>

        <h3>Setting Up Your .NET Core Microservice</h3>
        <p>Let's start by creating a basic microservice using .NET Core:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span class="language">bash</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-bash">dotnet new webapi -n ProductService
cd ProductService
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Swashbuckle.AspNetCore</code></pre>
        </div>

        <h3>Implementing the Service Layer</h3>
        <p>Here's how to structure your service with proper separation of concerns:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Services
{
    public interface IProductService
    {
        Task&lt;ProductDto&gt; GetProductAsync(int id);
        Task&lt;IEnumerable&lt;ProductDto&gt;&gt; GetProductsAsync();
        Task&lt;ProductDto&gt; CreateProductAsync(CreateProductDto dto);
        Task&lt;bool&gt; DeleteProductAsync(int id);
    }

    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly ILogger&lt;ProductService&gt; _logger;
        
        public ProductService(
            IProductRepository repository,
            ILogger&lt;ProductService&gt; logger)
        {
            _repository = repository;
            _logger = logger;
        }
        
        public async Task&lt;ProductDto&gt; GetProductAsync(int id)
        {
            try
            {
                var product = await _repository.GetByIdAsync(id);
                return product?.ToDto();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving product {ProductId}", id);
                throw;
            }
        }

        public async Task&lt;IEnumerable&lt;ProductDto&gt;&gt; GetProductsAsync()
        {
            var products = await _repository.GetAllAsync();
            return products.Select(p =&gt; p.ToDto());
        }
    }
}</code></pre>
        </div>

        <h3>Docker Configuration</h3>
        <p>Create a production-ready Dockerfile for your microservice:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span class="language">Dockerfile</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-dockerfile">FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["ProductService.csproj", "."]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProductService.dll"]</code></pre>
        </div>

        <h3>Kubernetes Deployment</h3>
        <p>Deploy your microservice to Kubernetes:</p>
        
        <div class="code-block">
          <div class="code-header">
            <span class="language">YAML</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: product-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: product-service
  template:
    metadata:
      labels:
        app: product-service
    spec:
      containers:
      - name: product-service
        image: myregistry/product-service:latest
        ports:
        - containerPort: 80
        env:
        - name: ASPNETCORE_ENVIRONMENT
          value: "Production"</code></pre>
        </div>

        <div class="warning-box">
          <h4><i class="fas fa-exclamation-triangle"></i> Production Considerations</h4>
          <ul>
            <li><strong>Security:</strong> Implement proper authentication and authorization</li>
            <li><strong>Monitoring:</strong> Use Application Insights or similar tools</li>
            <li><strong>Logging:</strong> Implement structured logging with Serilog</li>
            <li><strong>Circuit Breaker:</strong> Use Polly for resilience patterns</li>
          </ul>
        </div>

        <h3>Conclusion</h3>
        <p>Building microservices with .NET Core provides excellent performance, scalability, and maintainability. Start small, focus on proper boundaries, and gradually evolve your architecture as your understanding deepens.</p>
      </div>
    `;
  }

  getEFCoreContent(): string {
    return `
      <div class="blog-content">
        <h2>Advanced Entity Framework Core Patterns</h2>
        <p>Entity Framework Core is a powerful ORM that can significantly boost your productivity when used correctly. This guide covers advanced patterns and optimization techniques.</p>
        
        <h3>Repository Pattern with EF Core</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">public interface IRepository&lt;T&gt; where T : class
{
    Task&lt;T&gt; GetByIdAsync(int id);
    Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync();
    Task&lt;T&gt; AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
}

public class Repository&lt;T&gt; : IRepository&lt;T&gt; where T : class
{
    private readonly DbContext _context;
    private readonly DbSet&lt;T&gt; _dbSet;

    public Repository(DbContext context)
    {
        _context = context;
        _dbSet = context.Set&lt;T&gt;();
    }

    public async Task&lt;T&gt; GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }
}</code></pre>
        </div>
        
        <h3>Performance Optimization</h3>
        <p>Key strategies for optimizing EF Core performance:</p>
        <ul>
          <li>Use AsNoTracking() for read-only queries</li>
          <li>Implement proper indexing strategies</li>
          <li>Use projection to select only needed columns</li>
          <li>Implement query splitting for large result sets</li>
        </ul>
      </div>
    `;
  }

  getCleanArchitectureContent(): string {
    return `
      <div class="blog-content">
        <h2>Implementing Clean Architecture in .NET</h2>
        <p>Clean Architecture promotes separation of concerns and creates maintainable, testable applications. Let's implement it step by step.</p>
        
        <h3>Project Structure</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">text</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code>MyApp.Domain/
├── Entities/
├── Interfaces/
└── ValueObjects/

MyApp.Application/
├── DTOs/
├── Services/
└── Interfaces/

MyApp.Infrastructure/
├── Data/
├── Repositories/
└── Services/

MyApp.Web/
├── Controllers/
└── Program.cs</code></pre>
        </div>
        
        <h3>Domain Layer Implementation</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">public abstract class BaseEntity
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class Product : BaseEntity
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }
    
    public void UpdatePrice(decimal newPrice)
    {
        if (newPrice <= 0)
            throw new ArgumentException("Price must be positive");
            
        Price = newPrice;
        UpdatedAt = DateTime.UtcNow;
    }
}</code></pre>
        </div>
      </div>
    `;
  }

  getSecurityContent(): string {
    return `
      <div class="blog-content">
        <h2>Securing .NET APIs with JWT and OAuth 2.0</h2>
        <p>Security is paramount in modern web applications. This guide covers implementing robust authentication and authorization.</p>
        
        <h3>JWT Configuration</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });</code></pre>
        </div>
        
        <h3>Token Generation</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">public class TokenService
{
    public string GenerateToken(User user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_secretKey);
        
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
        };
        
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}</code></pre>
        </div>
      </div>
    `;
  }

  getSignalRContent(): string {
    return `
      <div class="blog-content">
        <h2>Advanced SignalR for Real-time Applications</h2>
        <p>SignalR enables real-time web functionality, allowing server code to push content to clients instantly.</p>
        
        <h3>Hub Implementation</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">C#</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-csharp">public class ChatHub : Hub
{
    public async Task JoinGroup(string groupName)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        await Clients.Group(groupName).SendAsync(
            "UserJoined", 
            Context.User.Identity.Name);
    }

    public async Task SendMessageToGroup(string groupName, string message)
    {
        await Clients.Group(groupName).SendAsync(
            "ReceiveMessage", 
            Context.User.Identity.Name, 
            message);
    }

    public override async Task OnDisconnectedAsync(Exception exception)
    {
        await base.OnDisconnectedAsync(exception);
    }
}</code></pre>
        </div>
        
        <h3>Client Integration</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">JavaScript</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-javascript">const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chathub")
    .build();

connection.start().then(function () {
    connection.invoke("JoinGroup", "developers");
}).catch(function (err) {
    console.error(err.toString());
});

connection.on("ReceiveMessage", function (user, message) {
    const msg = document.createElement("div");
    msg.textContent = user + ": " + message;
    document.getElementById("messagesList").appendChild(msg);
});</code></pre>
        </div>
      </div>
    `;
  }

  getDevOpsContent(): string {
    return `
      <div class="blog-content">
        <h2>DevOps for .NET: CI/CD with Azure DevOps</h2>
        <p>Implementing robust CI/CD pipelines is crucial for modern software development. Let's build a complete pipeline for .NET applications.</p>
        
        <h3>Build Pipeline (YAML)</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">YAML</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-yaml">trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: UseDotNet@2
  inputs:
    packageType: 'sdk'
    version: '8.x'

- script: dotnet restore
  displayName: 'Restore packages'

- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'Build project'

- script: dotnet test --configuration $(buildConfiguration) --logger trx
  displayName: 'Run tests'

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'VSTest'
    testResultsFiles: '**/*.trx'</code></pre>
        </div>
        
        <h3>Release Pipeline</h3>
        <div class="code-block">
          <div class="code-header">
            <span class="language">YAML</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre><code class="language-yaml">stages:
- stage: Deploy
  displayName: 'Deploy to Production'
  jobs:
  - deployment: DeployWeb
    displayName: 'Deploy Web App'
    environment: 'production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: '$(azureSubscription)'
              appType: 'webApp'
              appName: '$(webAppName)'
              package: '$(Pipeline.Workspace)/drop'</code></pre>
        </div>
      </div>
    `;
  }

  loadRelatedPosts() {
    if (!this.post) return;
    
    this.blogService.getAllPosts().subscribe(allPosts => {
      this.relatedPosts = allPosts
        .filter(p => p.id !== this.post!.id && p.category === this.post!.category)
        .slice(0, 3);
    });
  }

  goBack() {
    this.location.back();
  }

  sharePost() {
    if (!this.post) return;
    
    if (navigator.share) {
      navigator.share({
        title: this.post.title,
        text: this.post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        console.log('URL copied to clipboard');
      });
    }
  }

  copyCode(button: HTMLElement) {
    const codeBlock = button.parentElement?.nextElementSibling?.querySelector('code');
    if (codeBlock) {
      navigator.clipboard.writeText(codeBlock.textContent || '').then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    }
  }
}