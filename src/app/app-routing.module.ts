import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { addInitializeModuleGuard } from '@onecx/angular-integration-interface'
import { startsWith } from '@onecx/angular-webcomponents'

export const routes: Routes = [
  {
    matcher: startsWith(''),
    loadChildren: () => import('./tenant/tenant.module').then((mod) => mod.TenantModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(addInitializeModuleGuard(routes)), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
