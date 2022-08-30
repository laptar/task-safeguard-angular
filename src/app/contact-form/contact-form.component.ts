import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  inputs = [
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      errorMessage: 'Full Name is required',
      pattern:
        '(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})',
      required: true,
    },
    {
      id: 2,
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      required: true,
    },
    {
      id: 3,
      name: 'phoneNumber',
      type: 'tel',
      label: 'Phone Number',
      errorMessage: 'Phone Number is invalid',
      pattern:
        '^(?:+38)?(?:(044)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$',
      required: true,
    },
    {
      id: 4,
      name: 'mail',
      type: 'email',
      label: 'E-mail',
      errorMessage: 'Email is invalid',
      pattern:
        '^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$',
      required: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
