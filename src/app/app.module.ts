import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { ClientComponent } from './client/client.component';
import { InvestingComponent } from './investing/investing.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ClientDetail1Component } from './client-detail1/client-detail1.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioDetailEditComponent } from './portfolio-detail-edit/portfolio-detail-edit.component';
import { ThematicDetailComponent } from './thematic-detail/thematic-detail.component';
import { CreateThematicComponent } from './create-thematic/create-thematic.component';
import { InvestCashComponent } from './invest-cash/invest-cash.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { ComplianceDetailComponent } from './compliance-detail/compliance-detail.component';
import { SupportComponent } from './support/support.component';
import { SupportMessageComponent } from './support-message/support-message.component';
import { SettingComponent } from './setting/setting.component';
import { StaticContentManagmentComponent } from './static-content-managment/static-content-managment.component';
import { NotificationComponent } from './notification/notification.component';
// import { NgApexchartsModule } from 'ng-apexcharts/lib/ng-apexcharts.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { RaiseCashComponent } from './raise-cash/raise-cash.component';
import { SelfDirectedDetailComponent } from './self-directed-detail/self-directed-detail.component';
import { ManagedAccountDetailComponent } from './managed-account-detail/managed-account-detail.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { WaitListComponent } from './wait-list/wait-list.component';
import { FreeStockComponent } from './free-stock/free-stock.component';
import { EditQuestionaireComponent } from './edit-questionaire/edit-questionaire.component';
import { MatchingPortfolioComponent } from './matching-portfolio/matching-portfolio.component';
import { AddQuestionaireComponent } from './add-questionaire/add-questionaire.component';
import { CustomPipe } from './pipe/custom.pipe';
import { AddTickerComponent } from './add-ticker/add-ticker.component';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
import { EtfsComponent } from './stocks/etfs/etfs.component';
import { EditThematicComponent } from './edit-thematic/edit-thematic.component';
// import { FusionChartsModule } from 'angular-fusioncharts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    DashboardComponent,
    SummaryComponent,
    ClientComponent,
    InvestingComponent,
    TransactionsComponent,
    ClientDetail1Component,
    ModelDetailComponent,
    CreateModelComponent,
    PortfolioDetailComponent,
    PortfolioDetailEditComponent,
    ThematicDetailComponent,
    CreateThematicComponent,
    InvestCashComponent,
    ReportManagementComponent,
    QuestionnaireComponent,
    ComplianceComponent,
    ComplianceDetailComponent,
    SupportComponent,
    SupportMessageComponent,
    SettingComponent,
    StaticContentManagmentComponent,
    NotificationComponent,
    RaiseCashComponent,
    SelfDirectedDetailComponent,
    ManagedAccountDetailComponent,
    CategoryDetailComponent,
    WaitListComponent,
    FreeStockComponent,
    EditQuestionaireComponent,
    MatchingPortfolioComponent,
    AddQuestionaireComponent,
    CustomPipe,
    AddTickerComponent,
    CreatePortfolioComponent,
    EtfsComponent,
    EditThematicComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      progressBar: true,
      autoDismiss: false
    }),
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    NgxSpinnerModule,
    // FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
