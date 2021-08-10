import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { AddQuestionaireComponent } from './add-questionaire/add-questionaire.component';
import { ClientDetail1Component } from './client-detail1/client-detail1.component';
import { ClientComponent } from './client/client.component';
import { ComplianceDetailComponent } from './compliance-detail/compliance-detail.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { CreateThematicComponent } from './create-thematic/create-thematic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditQuestionaireComponent } from './edit-questionaire/edit-questionaire.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FreeStockComponent } from './free-stock/free-stock.component';
import { InvestCashComponent } from './invest-cash/invest-cash.component';
import { InvestingComponent } from './investing/investing.component';
import { LoginComponent } from './login/login.component';
import { ManagedAccountDetailComponent } from './managed-account-detail/managed-account-detail.component';
import { MatchingPortfolioComponent } from './matching-portfolio/matching-portfolio.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { PortfolioDetailEditComponent } from './portfolio-detail-edit/portfolio-detail-edit.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RaiseCashComponent } from './raise-cash/raise-cash.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { SelfDirectedDetailComponent } from './self-directed-detail/self-directed-detail.component';
import { SettingComponent } from './setting/setting.component';
import { StaticContentManagmentComponent } from './static-content-managment/static-content-managment.component';
import { SummaryComponent } from './summary/summary.component';
import { SupportMessageComponent } from './support-message/support-message.component';
import { SupportComponent } from './support/support.component';
import { ThematicDetailComponent } from './thematic-detail/thematic-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WaitListComponent } from './wait-list/wait-list.component';
import { AddTickerComponent } from './add-ticker/add-ticker.component';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
import { EtfsComponent } from './stocks/etfs/etfs.component';
import { EditThematicComponent } from './edit-thematic/edit-thematic.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'popularetfs', component: EtfsComponent },
  { path: 'forgot-passowrd', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client-detail-1', component: ClientDetail1Component },
  { path: 'model-detail/:id', component: ModelDetailComponent },
  { path: 'create-model', component: CreateModelComponent },
  { path: 'portfolio-detail/:id', component: PortfolioDetailComponent },
  { path: 'portfolio-detail-edit/:id', component: PortfolioDetailEditComponent },
  { path: 'thematic-detail/:id', component: ThematicDetailComponent },
  { path: 'edit-thematic/:id', component: EditThematicComponent },
  { path: 'create-thematic', component: CreateThematicComponent },
  { path: 'invest-cash', component: InvestCashComponent },
  { path: 'investing', component: InvestingComponent },
  { path: 'report-management', component: ReportManagementComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'compliance', component: ComplianceComponent },
  { path: 'compliance-detail', component: ComplianceDetailComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support-message', component: SupportMessageComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'static-content-managment', component: StaticContentManagmentComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'raise-cash', component: RaiseCashComponent },
  { path: 'self-directed-detail', component: SelfDirectedDetailComponent },
  { path: 'managed-account-detail', component: ManagedAccountDetailComponent },
  { path: 'category-detail', component: CategoryDetailComponent },
  { path: 'client', component: ClientComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'wait-list', component: WaitListComponent },
  { path: 'free-stock-distribution', component: FreeStockComponent },
  { path: 'edit-questionnaire/:id', component: EditQuestionaireComponent },
  { path: 'matching-portfolio/:id', component: MatchingPortfolioComponent },
  { path: 'add-questionnaire', component: AddQuestionaireComponent },
  { path: 'add-ticker', component: AddTickerComponent },
  { path: 'create-portfolio', component: CreatePortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
