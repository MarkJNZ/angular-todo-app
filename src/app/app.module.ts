import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
