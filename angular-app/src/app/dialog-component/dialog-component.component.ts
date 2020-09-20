import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponent {
  message: string = ""
  modelType: string = ""
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  formProduct = {
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required]),
    currencyId: new FormControl('', [Validators.required])
  }
  formContact = {
    name: new FormControl('', [Validators.required]),
    countryId: new FormControl('', [Validators.required])
  }
  
  /**
   * @param  {} @Inject(MAT_DIALOG_DATA
   * @param  {any} privatedata
   * @param  {MatDialogRef<DialogComponent>} privatedialogRef
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>) {
      if(data){
        this.message = data.message || this.message;
        this.modelType = data.modelType || this.modelType;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
  }
  /**
   * @param  {} form
   * @param  {} field
   */
  getErrorMessage(form, field) {
    if (this[form][field].hasError('required')) {
      return 'You must enter a value';
    }
  }
  /**
   * @returns void
   */
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}