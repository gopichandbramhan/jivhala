
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CollegeComponent } from './college/college.component';
import { ScienceComponent } from './science/science.component';
import { ArtsComponent } from './arts/arts.component';
import { SportComponent } from './sport/sport.component';
import { CommerseComponent } from './commerse/commerse.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistratinComponent } from './registratin/registratin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentpositionComponent } from './studentposition/studentposition.component';
import { College1Component } from './college1/college1.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoryComponent } from './category/category.component';
import { OurbestComponent } from './ourbest/ourbest.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';
import { Category5Component } from './category5/category5.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { Pro1Component } from './pro1/pro1.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CollegeComponent,
    ScienceComponent,
    ArtsComponent,
    SportComponent,
    CommerseComponent,
    NavbarComponent,
    RegistratinComponent,
    PageNotFoundComponent,
    StudentpositionComponent,
    College1Component,
    LogoutComponent,
    CategoryComponent,
    OurbestComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    AboutusComponent,
    ProductdescriptionComponent,
    ForgetpasswordComponent,
    WishlistComponent,
    Pro1Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
BrowserAnimationsModule,
 AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent },
      { path: 'knowmore', component: CollegeComponent },
      { path: 'science', component: ScienceComponent },
      { path: 'arts', component: ArtsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category1', component: Category1Component },
      { path: 'category2', component: Category2Component },
      { path: 'category3', component: Category3Component },
      { path: 'category4', component: Category4Component },
      { path: 'category5', component: Category5Component },
      { path: 'ourbest', component: OurbestComponent },
      { path: 'sport', component: SportComponent },
      { path: 'productdescription', component: ProductdescriptionComponent },
      { path: 'forgetpassword', component: ForgetpasswordComponent },
      { path: 'login', component: LoginComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'registration', component: RegistratinComponent },
      { path: '**', component: PageNotFoundComponent}])
      ],

  exports: [],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }