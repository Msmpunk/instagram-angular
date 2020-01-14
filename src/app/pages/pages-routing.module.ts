import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PublishmentComponent } from './publishment/publishment.component';

@NgModule({
    imports:[RouterModule.forChild([
        {
            path:'',
            component: PublishmentComponent
        }
    ])]
})
export class PagesRotingModule {}