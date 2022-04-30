const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  type; 
  __decrypt;

  constructor(type=true) {
    this.type = type;
  }

  encrypt(str, key) {
    this.__decrypt = false;
    return this.__vegener(str, key);
  }
  
  decrypt(str, key) {
    this.__decrypt = true;
    return this.__vegener(str, key);  
  }

  __vegener(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }

    let text = [];
    let ki=0;
    const offset = this.__decrypt ? 26 : 0;
    const prefix = this.__decrypt ? -1 : 1;

    str = str.toUpperCase();
    key = key.padEnd(str.length, key).toUpperCase();

    for(let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {  
        const diff = str.charCodeAt(i) + offset + (prefix * key.charCodeAt(ki));
        text += String.fromCharCode(diff % 26 + 65);
        ki++;
        continue;
      } 
        
      text +=str[i];
    }
    return this.type ? text : text.split('').reverse().join('');    
  }
}

module.exports = {
  VigenereCipheringMachine
};
