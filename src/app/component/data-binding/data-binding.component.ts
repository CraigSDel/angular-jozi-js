import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  value = '';

  onKey(event: any) {
    this.value = event.target.value;
  }
}
