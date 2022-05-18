import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lengthOfPassword = 0
  inculdeLetters = false
  inculdeNumbers = false
  inculdeSymbols = false
  password = ''
  

  onChangeOfLength(event : Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value)

    if(!isNaN(parsedValue)) {
      this.lengthOfPassword = parsedValue
    }
  }

  onChangeLetters() {
    this.inculdeLetters = !this.inculdeLetters
  }

  onChangeNumbers() {
    this.inculdeNumbers = !this.inculdeNumbers
  }
  
  onChangeSymbols() {
    this.inculdeSymbols = !this.inculdeSymbols
  }

  onButtonClick() {
    const number = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'
    
    let validChar = ''

    if (this.inculdeLetters) {
      validChar += letters;
    }
    if (this.inculdeNumbers) {
      validChar += number;
    }
    if (this.inculdeSymbols) {
      validChar += symbols;
    }

    let generatedPassword = ''
    for (let i = 0; i < this.lengthOfPassword; i++) {
      const index = Math.floor(Math.random() * validChar.length)
      generatedPassword += validChar[index]
    }
    this.password = generatedPassword
  }
  
}
