import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homelog',
  templateUrl: './homelog.component.html',
  styleUrls: ['./homelog.component.scss'],
  providers: [UserService]
})
export class HomelogComponent implements OnInit {
  public identity;

  constructor(private _userService: UserService) {     
    this.identity =  this._userService.getIdentity();
  }

  ngOnInit() { 
    this._userService.getMisConferencias().subscribe(
      response=>{
        
      }
    )   
  }

}
