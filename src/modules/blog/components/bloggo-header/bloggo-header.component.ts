import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-bloggo-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bloggo-header.component.html',
  styleUrls: ['./bloggo-header.component.scss'],
})
export class BloggoHeaderComponent {
  @Input() backgroundImage!: string;
  @Input() heading!: string;
  @Input() subHeading!: string;
  @Input() meta!: string;
  @Input() siteHeading = false;
  safeBackgroudImage!: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) {}
  ngOnInit() {
    this.safeBackgroudImage = this.domSanitizer.bypassSecurityTrustStyle(
      this.backgroundImage
    );
  }
}
