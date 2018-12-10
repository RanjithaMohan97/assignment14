import { Component,Input,SimpleChanges,OnInit,OnChanges,OnDestroy } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'myapp',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit,OnChanges,OnDestroy {
 
 @Input() country;

    ngOnInit(){
     console.log("Inside OnInit...")
    }

    ngOnChanges(changes:SimpleChanges){
      console.log("change occured...");
          console.log(JSON.stringify(changes));
    }

 ngOnDestroy(){
     console.log("Inside Destroy...")
 }
}
