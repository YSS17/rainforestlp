import React from 'react';
import Icon1 from '../../images/order.svg';
import Icon2 from '../../images/lab.svg';
import Icon3 from '../../images/deliver.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './services';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>How it works!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Order</ServicesH2>
          <ServicesP>Go through our questionnaire and filter the best product for you</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Development</ServicesH2>
          <ServicesP>We create the customized product and leave it in ready delivery</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Delivery</ServicesH2>
          <ServicesP>receive your personalized product in the comfort of your home</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services