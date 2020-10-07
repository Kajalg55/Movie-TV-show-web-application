import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';


@Injectable()
export class AppGlobals {
       base_url_jewelegance_ticketing_system = "http://13.233.73.103:3000/api/v1";
    // base_url_jewelegance_ticketing_system = "http://192.168.0.56:3000/api/v1";
   // base_url_jewelegance_ticketing_system = "http://192.168.0.65:3000/api/v1";
     //  base_url_jewelegance_ticketing_system =  "http://192.168.0.55:3000/api/v1";
    userData: any = localStorage.getItem("currentUserSubject");
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    default_home_page_limit = 10;

    constructor(private router:Router) {
        if(this.userData == null){
            this.router.navigate(['/login']);
        }else{
            this.userData = JSON.parse(this.userData)
            console.log("userData", this.userData);
            this.headers['Authorization'] = this.userData.token
        }
       
    }

}
