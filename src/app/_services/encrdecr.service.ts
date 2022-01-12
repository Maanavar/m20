import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncrDecrService {
  private encryptionKey = "123456$#@$^@1ERF";

  constructor() { }

  set(value : any){
    var key = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    var iv = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  get(value : any){
    var key = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    var iv = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}