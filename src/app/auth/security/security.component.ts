import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwtClient.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any={
    "name": String,
    "password": String,
  }

  constructor(private jwtService:JwtClientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp=this.jwtService.generateToken(authRequest);
    resp.subscribe(data=>console.log("Token : "+data));
  }
}
