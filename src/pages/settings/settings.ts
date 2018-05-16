import { Component } from '@angular/core';
import { PincodeController } from 'ionic2-pincode-input';
import { NavController,NavParams, AlertController} from 'ionic-angular';

import CryptoJS from 'crypto-js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private code: string;
  public pincode: string;
  private newPincode: string;
  public faio: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pincodeCtrl: PincodeController, public storage: Storage, public alertCtrl: AlertController) {
    this.storage = navParams.get('storage');
  }

  ionViewCanEnter() {
    this.storage.get('password_encrypt').then(pwd => {
      this.pincode = String(pwd)
    });
    this.storage.get('faio').then((result) => {
      if (result !== undefined) {
        this.faio = result
      }
    })
  }

  toggleFaio() {
    this.storage.set('faio', this.faio);
    this.presentAlert("Touch ID", "Nova configuração de Touch ID efetuada. Reinicie a aplicação para concluir.")
  }

  resetPassword() {
    this.openPinCode(false)
  }

  cleanReset(){
    this.storage.remove('password_encrypt');
    this.storage.set('faio', false);
    this.storage.remove('token');
    this.storage.remove('key');
    this.storage.remove('users');
    this.presentAlert("Feito","Todos os seus dados foram removidos. Reinicie a aplicação para terminar.");
  }

  cleanHistory(){
    this.storage.remove('history').then(val => {
      this.storage.set('history', []);
      this.presentAlert("Feito","O seu histórico foi removido.");
    });
  }

  cleanToken(){
    this.storage.remove('token');
    this.storage.remove('key');
    this.presentAlert("Feito","Chave única apagada. Reinicie a aplicação para terminar.");
  }

  openPinCode(register: boolean): any {
    var title = "Insira o seu PIN";
    if (register) title = "Insira o seu novo PIN"
    let pinCode = this.pincodeCtrl.create({
      title: title,
      passSize: 6,
      hideForgotPassword: true,
      hideCancelButton: false,
      enableBackdropDismiss: true
    });

    pinCode.present();

    pinCode.onDidDismiss((code, status) => {
      // If user enter a password and the fase if confirm
      // do a login
      if (status === 'done' && !register) {
        this.login(code);
      }
      else if (status === 'done' && register) {
        this.newPincode = code;
        // Confirm if pincodes match
        this.confirmCode();
      }
    })
  }

  login(pincode) { 
    let entered_pincode = String(CryptoJS.SHA256(pincode))
    this.storage.get('password_encrypt').then(pwd => {
      let stored_pincode = String(pwd)
      console.log("Stored password: " + stored_pincode)
      if (entered_pincode == stored_pincode) {
        this.presentAlert("Novo PIN", "Configure o seu novo PIN");
        this.openPinCode(true);
      }
      else {
        this.presentAlert("Erro", "PIN errado")
      }
    })
    .catch((error: any) => console.log(error));
  }

  confirmCode(): any {
    let pinCode = this.pincodeCtrl.create({
      title: 'Confirme o seu novo PIN',
      passSize: 6,
      hideForgotPassword: true,
      hideCancelButton:false,
      enableBackdropDismiss: true
    });
    pinCode.present();
    pinCode.onDidDismiss((code, status) => {
      if (status === 'done') {
        if (this.newPincode == code) {
          // if match send a message and do a registration of pin code
          this.presentAlert("PIN", "Novo PIN configurado!");
          this.register();
        }
        else {
          this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.");
          this.openPinCode(true);
        }
      }
    })
  }

  resetToken() {
    let alert = this.alertCtrl.create({
      title: "Apagar chave",
      subTitle: "Tem a certeza que quer apagar a chave? Esta ação não pode ser desfeita.",
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Apagar',
          handler: () => {
            this.cleanToken();
          }
        }
    ]
    });
    alert.present();
  }

  resetAlert() {
    let alert = this.alertCtrl.create({
      title: "Apagar dados",
      subTitle: "Tem a certeza que quer apagar os dados? Esta ação não pode ser desfeita.",
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Apagar',
          handler: () => {
            this.cleanReset();
          }
        }
    ]
    });
    alert.present();
  }

  presentAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  register() {
    let hash = String(CryptoJS.SHA256(this.newPincode))
    this.storage.remove('password_encrypt').then((done) => {
      console.log("Nova password");
      this.storage.set('password_encrypt', hash);
      console.log(hash);
    })
  }
}

