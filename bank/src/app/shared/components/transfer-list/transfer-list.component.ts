import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreditDebitIndicators, Transfer } from 'src/app/models';

@Component({
  selector: 'app-bank-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {

  @Input()
  transfers: Transfer[] = [];

  @Output()
  transferClick = new EventEmitter<Transfer>();

  CreditDebitIndicators = CreditDebitIndicators;

  constructor() { }

  ngOnInit(): void {
  }

}
