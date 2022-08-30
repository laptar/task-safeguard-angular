import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputComponent } from './input/input.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuMobComponent } from './nav-menu-mob/nav-menu-mob.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContactFormComponent,
    InputComponent,
    NavMenuComponent,
    NavMenuMobComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
