import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

import Icon1 from '../../images/service1.jpg'
import Icon2 from '../../images/service2.jpg'
import Icon3 from '../../images/service3.jpg'


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Affordable housing</ServicesH2>
                    <ServicesIcon src={Icon1} />
                    <ServicesP>We understand the importance of living in a comfortable home while being able to indulge in your other expenses.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Timely Maintenance</ServicesH2>
                    <ServicesIcon src={Icon2} />
                    <ServicesP>Accidents happen, and you can count on us to promptly arrive whenever there are any maintenance issues that occur.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Friendly Service</ServicesH2>
                    <ServicesIcon src={Icon3} />
                    <ServicesP>Here at Jack Mobile Home Park we value your opinions and we will provide excellent customer service to all of our residents.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
