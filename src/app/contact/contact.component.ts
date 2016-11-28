import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  @Input() item: any;

}
