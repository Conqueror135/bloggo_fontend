import {
  Component,
  TemplateRef,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnInit,
  OnChanges,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() hide = new EventEmitter<void>();

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit() {
    console.log('SHJJHDJS ', this.visible);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (this.visible) {
  //     this.modalRef = this.modalService.show(template, {
  //       class: 'gray modal-lg',
  //       ignoreBackdropClick: true,
  //     });
  //   }
  // }
  // hideModal() {
  //   this.modalService.hide();
  //   this.hide.emit();
  // }

  // openModalWithClass(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(
  //     template,
  //     Object.assign({}, { class: 'gray modal-lg' })
  //   );
  // }
}
