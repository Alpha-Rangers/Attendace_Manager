import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
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
