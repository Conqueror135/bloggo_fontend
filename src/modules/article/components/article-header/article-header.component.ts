import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-article-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent {
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
