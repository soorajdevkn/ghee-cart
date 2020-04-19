import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  @Input() selectedCount:number;
  @Output() valueChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  plusCount(){
    this.selectedCount++;
    this.valueChange.emit(this.selectedCount);
  }
  minusCount(){
    if(this.selectedCount > 0){
      this.selectedCount--;
      this.valueChange.emit(this.selectedCount);
    }
  }
}
