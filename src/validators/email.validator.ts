import {FormControl} from '@angular/forms';

export class emailValidator {

  static validemail(fc: FormControl){

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fc.value);

      if (re){
        return null;
      }

      return {"invalidEmail": true};
    }
  }
