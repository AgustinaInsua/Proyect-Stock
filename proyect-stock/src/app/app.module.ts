import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ConfigurationComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    SidebarModule,
    MenubarModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
