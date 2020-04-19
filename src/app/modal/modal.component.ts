import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalFlag:boolean;
  @Input() totalPrice:number;
  @Output() modelClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.modalFlag = false;
    this.modelClose.emit();
  }
}
