import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Child component';
  public name = "Mohanappriya"
  public place= "Angular"
  public image="/assets/logo.png"
  public value= ""
  onClick(){
    console.log("Thank you for subcribing")
  }
}
