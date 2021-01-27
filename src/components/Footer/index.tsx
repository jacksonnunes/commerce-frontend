import React from 'react';

import instagramIcon from '../../assets/instagram_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <hr />
    <div>
      <div className="contact">
        <img src={instagramIcon} alt="Instagram" />
        <p>@rivoli_confeitaria</p>
      </div>
      <div className="contact">
        <img src={whatsappIcon} alt="Instagram" />
        <p>(88) 99999-9999</p>
      </div>
    </div>
  </Container>
);

export default Footer;
