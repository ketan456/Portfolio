import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Experience, Post, Project, User } from '@models';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  BLOG_API = 'https://blog.uspiri.com/api';
  CV_API = 'https://cv.uspiri.com/api';
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(`${this.BLOG_API}/posts/latests.json`);
  }

  getExperience() {
    return this.http.get<Experience[]>(`${this.CV_API}/experience.json`);
  }

  getProjects() {
    return this.http.get<Project[]>(`${this.CV_API}/projects.json`);
  }

  getSkills() {
    return this.http.get<string[]>(`${this.CV_API}/skills.json`);
  }

  getUser() {
    return this.http.get<User>(`${this.CV_API}/user.json`);
  }
}
