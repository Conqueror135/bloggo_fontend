import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent {
  tags = [
    'Khoa học',
    'Công nghệ',
    'Tâm linh',
    'Tâm lý học',
    'Sinh học',
    'Văn hóa',
    'Thể thao',
    'Giáo dục',
    'Chính trị',
    'Địa lý',
  ];
}
