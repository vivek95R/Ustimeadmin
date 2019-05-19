import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SharedServiceService } from '../SharedService/shared-service.service';
import { AgGridModule } from 'ag-grid-angular';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MerchantComponent } from './merchant/merchant.component';
import { GridButtonComponent } from './grid-button/grid-button.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddnewmerchantComponent } from './addnewmerchant/addnewmerchant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InviteMerchantComponent } from './invite-merchant/invite-merchant.component';
import { InviteNewMerchantComponentComponent } from './invite-new-merchant-component/invite-new-merchant-component.component';
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    showDismissButton: true,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    SideBarComponent,
    IndexComponent,
    TopBarComponent,
    MerchantComponent,
    GridButtonComponent,
    RegistrationComponent,
    AddnewmerchantComponent,
    InviteMerchantComponent,
    InviteNewMerchantComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    AgGridModule.withComponents([GridButtonComponent,InviteNewMerchantComponentComponent]),
    NgbModule

  ]
  // ,entryComponents:[
  //   GridButtonComponent
  // ]
  ,
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
