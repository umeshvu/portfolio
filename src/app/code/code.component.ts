import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements OnInit {

  repoList: any[] = [];
  isGitRequestError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/umeshvu/repos').subscribe(
      (res: any) => {
        if (res.length) {
          this.repoList = res;
        }
      },
      (error) => {
        this.isGitRequestError = true;
      }
    );
  }
}
