import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      role: 'admin',
    },
    { id: 2, name: 'Trần Thị B', email: 'tranb@gmail.com', role: 'user' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', role: 'user' },
    { id: 4, name: 'Phạm Thị D', email: 'phamd@gmail.com', role: 'user' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoange@gmail.com', role: 'user' },
    { id: 6, name: 'Nguyễn Thị F', email: 'nguyenf@gmail.com', role: 'user' },
    { id: 7, name: 'Trần Văn G', email: 'trang@gmail.com', role: 'user' },
    { id: 8, name: 'Lê Thị H', email: 'leh@gmail.com', role: 'user' },
    { id: 9, name: 'Phạm Văn I', email: 'phami@gmail.com', role: 'user' },
    { id: 10, name: 'Hoàng Thị J', email: 'hoangj@gmail.com', role: 'user' },
  ];

  // Biến chứa số trang hiện tại
  currentPage = 1;

  constructor() {}

  ngOnInit(): void {}
}
