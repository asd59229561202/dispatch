import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeliverInfoComponent, LoginComponent, ProfileComponent, RegisterComponent } from './modules';
import { AuthGuard } from './auth/guards/auth.guard';
import { PmComponent } from './modules/pm/p-m/pm.component';
import { adminGuard } from './auth/guards/admin.guard';


export const routes: Routes = [

    {
        path: 'deliverFor',
        loadChildren: () =>
            import('./modules/deliverFor/deliver-for.module').then((m) => m.DeliverForModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        loadChildren: () =>
            import('./modules/account/account.module').then((m) => m.AccountModule),
    },
    {
        path: 'register',
        component: RegisterComponent,
        loadChildren: () =>
            import('./modules/account/account.module').then((m) => m.AccountModule),
    },
    {
        path:'deliverInfo',
        component: DeliverInfoComponent,//記得如果要將資料導入到分頁
        loadChildren: () =>
            import('./modules/deliverInfo/deliver-info.module').then((m) => m.DeliverInfoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'personelManagement',
        component: PmComponent,
        loadChildren:()=>
            import('./modules/pm/pm-routing.module').then((m)=>m.PmRoutingModule),
        canActivate: [AuthGuard,adminGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        loadChildren:()=>
            import('./modules/pm/pm-routing.module').then((m)=>m.PmRoutingModule),
        canActivate: [AuthGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }