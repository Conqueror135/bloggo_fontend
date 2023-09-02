import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-management',
  templateUrl: './layout-management.component.html',
  styleUrls: ['./layout-management.component.scss'],
})
export class LayoutManagementComponent implements OnInit {
  @Input() darkMode!: boolean;
  @Input() distance!: number;
  isCollapsed = false;

  constructor() {}
  ngOnInit() {}
}
