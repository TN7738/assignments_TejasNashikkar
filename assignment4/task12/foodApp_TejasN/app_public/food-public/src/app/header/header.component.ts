import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit(): void {
  }
  pageContent = {
    header: {
      title: 'Dr. Pizza',
      body: ''
    }
  };
}
