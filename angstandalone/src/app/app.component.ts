import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
// Properties to hold input data
userInput: string = '';
selectedOption: string = '';
displayMessage: string = '';
// Options for the dropdown list
options = ['Option 1', 'Option 2', 'Option 3'];
// Function to be called when the button is clicked
onSubmit() {
this.displayMessage = `You entered: ${this.userInput}, and selected:
${this.selectedOption}`;
}
}
