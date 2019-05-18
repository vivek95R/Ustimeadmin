import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService} from '../login/login.service';
import { menu } from '../Model/Menu';
import { SharedServiceService} from 'src/SharedService/shared-service.service'


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sub: any;
  id: number;
  menulist : menu[];
  name:string;

  constructor(private route: ActivatedRoute ,private loginService: LoginService
             
    ) { 
         
    }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
 
        this.id = params['log'] ;

        this.loginService.Menu('0','ADM').subscribe(data => {
          if(data){
            this.menulist = data;
          }
      });
  })
}

}
