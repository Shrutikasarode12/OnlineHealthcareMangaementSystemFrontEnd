import { Component } from '@angular/core';
import { PackagesService } from '../../services/packages.service';
import { Packges } from '../../moduls/packages';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
        
        
  constructor(private service:PackagesService){ }
  package =new Packges();

  onSubmit(){
    console.log("Save");
    this.save();
  
  }
    save(){
    }
}
