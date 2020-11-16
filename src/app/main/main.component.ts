import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName: FormControl;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.userName = new FormControl();
  }

  onSubmit(): void {
    console.log(this.userName.value);
    this.router.navigate(['result'], {queryParams: {userName: this.userName.value}});
  }
}
