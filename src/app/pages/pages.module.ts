import { NgModule } from "@angular/core";
import { PagesRotingModule } from './pages-routing.module';
import { PublishmentComponent } from './publishment/publishment.component';

@NgModule({
    declarations:[PublishmentComponent],
    imports:[
        PagesRotingModule
    ],
    providers:[

    ],
    bootstrap:[]
})
export class PagesModule {}