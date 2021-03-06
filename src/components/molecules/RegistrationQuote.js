import React from 'react';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import QuoteFormWrapper from '../atoms/QuoteFormWrapper';
import { textData } from '../../data/textData';

const RegistrationQuote = () => {
    return (
        <QuoteFormWrapper>
            <H2 hyphensAuto quote>
                {textData.registrationQuote}
            </H2>
            <H3 bigMarginBottom>{textData.registrationSubTitle}</H3>
        </QuoteFormWrapper>
    );
}

export default RegistrationQuote;