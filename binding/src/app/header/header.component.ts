import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Input() parentMessage :string;
 constructor(){}
 ngOnInit(){

 }
 message="No Message";
 receiveMessage($event){
  this.message=$event;
}
}
