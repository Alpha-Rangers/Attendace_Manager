import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
    constructor(private barcodeScanner:BarcodeScanner) {

  }

  createCode(){
    this.createdCode=this.qrData;
  }
  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }
  }
