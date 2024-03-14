import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { EdtproductComponent } from "./edtproduct/edtproduct.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [{
            // path: 'products/:prodid/addcomp',
            path: ':prodid/addcomp',
            component: EdtproductComponent
        },
        {
            path: ':prodid',
            component: ProductComponent
        },
        {
            path: ':prodid/productedt',
            component: EdtproductComponent
        }]
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}