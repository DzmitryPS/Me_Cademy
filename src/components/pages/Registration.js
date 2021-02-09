import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import Quote from '../molecules/Quote';
import StyledHomeQuoteForm from '../atoms/StyledHomeQuoteForm';
import TypeformEmbedInfotext from '../molecules/TypeformEmbedInfotext';
import PicBoxAboveTypeform from '../atoms/PicBoxAboveTypeform';
import RegHeroImg from '../molecules/RegistrationHeroImg'

const Registration = () => {
    return (
        <div>
            <MetaDecorator
             description='Registration'
             title='Register Here'
             />
            <RegHeroImg />
            <StyledHomeQuoteForm />
            <Quote />
            <PicBoxAboveTypeform />
            <TypeformEmbedInfotext />
        </div>
    )
}

export default Registration;
