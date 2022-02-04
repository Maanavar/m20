import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {
  showPassword: any;
   showPasswordOnPress: any
  constructor() { }

  ngOnInit(): void {
  }

}
