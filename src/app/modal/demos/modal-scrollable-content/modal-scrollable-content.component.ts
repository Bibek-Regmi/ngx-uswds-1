import { Component } from '@angular/core';
import { ModalDismissReasons, UsaModal, UsaModalRef } from "uswds-components";

@Component({
  selector: 'usa-modal-scrollable-content',
  templateUrl: './modal-scrollable-content.component.html',
})
export class ModalScrollableContentComponent {

  closeResult = '';

  modalRef: UsaModalRef;

  constructor(private modalService: UsaModal) {}

  open(content) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(reason) {
    this.modalRef.close(reason);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if (reason === ModalDismissReasons.CLOSE_CLICKED) {
      return 'by clicking close button';
    }
    else {
      return `with: ${reason}`;
    }
  }
}