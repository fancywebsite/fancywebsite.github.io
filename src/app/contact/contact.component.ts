import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private dialog: MatDialog) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  public hasRequiredError(field: string): boolean {
    const formField = this.formGroup.get(field);
    return !!(formField && (formField.touched) && formField.hasError('required'));
  }

  submit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'fancyweb2022@gmail.com',
      Password: '42AA5E8B38CAF82922B6CAC136496BC55D68',
      To: 'fancyweb2022@gmail.com',
      From: 'fancyweb2022@gmail.com',
      Subject: 'Contact form',
      Body: `
      <b>Správa cez kontaktný formulár</b><br />
      <br />
      <b>Meno: </b>${this.formGroup.value.name} <br />
      <b>Email: </b>${this.formGroup.value.email}<br />
      <br />
      <b>Správa:</b>
      <br /> ${this.formGroup.value.message}</b> `
    }).then(() => this.dialog.open(SuccessDialogComponent, {
      panelClass: 'success-dialog'
    }
    ));
  }
}
