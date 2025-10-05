import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  selectedCategory = 'All';
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.categories = this.blogService.getCategories();
    this.blogService.getAllPosts().subscribe(posts => {
      this.blogPosts = posts;
      this.filterPosts();
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterPosts();
  }

  filterPosts() {
    this.filteredPosts = this.blogService.getPostsByCategory(this.selectedCategory);
  }

  getFeaturedPosts() {
    return this.blogService.getFeaturedPosts();
  }

  trackByPostId(index: number, post: BlogPost): number {
    return post.id;
  }
}