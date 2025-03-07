import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
  @Input()
  contentTitle:string = "Lorem Ipsum"
  @Input()
  contentDescription:string ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nibh non diam facilisis, ac tincidunt quam fermentum. Nulla facilisi. Phasellus mi lorem, iaculis quis eleifend at, iaculis nec massa. Mauris pretium, lectus eu accumsan dapibus, eros augue facilisis lectus, sit amet sagittis quam mi a nisl. Phasellus tempor fringilla porta."

  constructor(){}
  ngOnInit(): void {

  }

}
