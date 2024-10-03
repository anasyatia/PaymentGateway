import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { TestComponent } from './dashboard/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions/transactions.component';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    TestComponent,
    SidebarComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TransactionsComponent,
    CalendarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
