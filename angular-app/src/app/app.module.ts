import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog-component/dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './_root-store';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './app-header/app-header.component';
import { IndexComponent } from './app-index/app-index.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent, 
        IndexComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        RootStoreModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    entryComponents: [DialogComponent, HeaderComponent, IndexComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
