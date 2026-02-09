import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly destinationEmail = 'shreamhala004@gmail.com';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  private readonly emailJsConfig = environment.emailjs;

  async onSubmit(form: NgForm) {
    if (this.isSending || form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.status = 'idle';

    const payload = {
      service_id: this.emailJsConfig.serviceId,
      template_id: this.emailJsConfig.templateId,
      user_id: this.emailJsConfig.publicKey,
      template_params: {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_email: this.destinationEmail,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'EmailJS request failed');
      }

      this.status = 'success';
      form.resetForm();
    } catch (error) {
      console.error('EmailJS send failed', error);
      this.status = 'error';
    } finally {
      this.isSending = false;
    }
  }
}
