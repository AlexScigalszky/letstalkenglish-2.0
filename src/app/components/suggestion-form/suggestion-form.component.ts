import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.scss'
})
export class SuggestionFormComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    text: ''
  });

  submit(){
    console.log(this.form.value);
  }
}
