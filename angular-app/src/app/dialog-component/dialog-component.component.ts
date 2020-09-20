import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactsStoreActions, OrganizationStoreSelectors, ProductStoreActions, RootStoreState } from 'src/app/_root-store';
import { DialogModeEnum } from '../enums/dialog.enum';
import { AddContactModel } from '../models/addContact.model';
import { AddProductModel } from '../models/addProduct.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
    selector: 'dialog-component',
    templateUrl: 'dialog-component.component.html',
    styleUrls: ['./dialog-component.component.scss']
})

export class DialogComponent implements OnInit {
    public getOrganizationSelector$: Observable<string> = this.store.select(OrganizationStoreSelectors.getOrganizationSelector);
    public message = '';
    public modelType: DialogModeEnum = 1;

    public formProduct = {
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        unitPrice: new FormControl('', [Validators.required]),
        currencyId: new FormControl('', [Validators.required])
    };

    public formContact = {
        name: new FormControl('', [Validators.required]),
        countryId: new FormControl('', [Validators.required])
    };

    public confirmButtonText = 'Yes';
    public cancelButtonText = 'Cancel';

    private organizationId = '';

    /**
     * @param  private data dialog data
     * @param  MatDialogRef<DialogComponent> private dialogRef
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<DialogComponent>,
        private snackbar: MatSnackBar,
        private store: Store<RootStoreState.State>) {
        if (data) {
            this.message = data.message || this.message;
            this.modelType = data.modelType;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }

    getErrorMessage(form, field): string {
        if (this[form][field].hasError('required')) {
            return 'You must enter a value';
        }
    }

    ngOnInit(): void {
        this.getOrganizationSelector$.subscribe(resp => {
            console.log(resp);
            if (!!resp) {
                this.organizationId = resp;
            }
        });
    }

    /**
     * @returns void
     */
    onConfirmClick(): void {
        if (this.modelType === 0) {
            const contactData: AddContactModel = {
                organizationId: this.organizationId,
                name: this.formContact.name.value,
                countryId: this.formContact.countryId.value
            };

            this.store.dispatch(new ContactsStoreActions.AddContact(contactData));
        } else {
            const productData: AddProductModel = {
                organizationId: this.organizationId,
                name: this.formProduct.name.value,
                description: this.formProduct.description.value,
                prices: [
                    {
                        unitPrice: this.formProduct.unitPrice.value,
                        currencyId: this.formProduct.currencyId.value
                    }
                ]
            };

            this.store.dispatch(new ProductStoreActions.AddProduct(productData));
        }

        this.snackbar.open(`${this.modelType === 0 ? 'Contact' : 'Product'} successfully added!`, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-primary']
        })
        
        this.dialogRef.close(true);
    }
}
