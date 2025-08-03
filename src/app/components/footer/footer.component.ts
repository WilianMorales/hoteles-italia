import { Component } from '@angular/core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faAddressCard, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMailBulk, faMailForward, faMapLocation, faMapLocationDot, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  iconFb = faFacebook;
  iconGm = faGoogle;
  iconLocation = faLocationDot;
  iconAddress = faMapLocationDot;
  iconPhone = faPhone;

  currentYear = new Date().getFullYear();

}
