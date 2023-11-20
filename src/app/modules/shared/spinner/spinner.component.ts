import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() type:String='';  //type canbe any value like (square-jelly-box)
  constructor(){}

  ngOnInit(): void {
  }
}
