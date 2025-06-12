import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';
 
export const initEmailJS = () => {
  emailjs.init(emailjsConfig.publicKey);
}; 