import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-field-error-display',
  templateUrl: './app-field-error-display.component.html',
  styleUrls: ['./app-field-error-display.component.scss']
})
export class AppFieldErrorDisplayComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor() { }

  ngOnInit() {
  }

}
