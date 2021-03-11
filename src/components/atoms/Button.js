import styled, { css } from 'styled-components';

const Button = styled.button` 
    height : 1.5em;
    border-radius : 3px;
    border : none;
    color : ${props => props.theme.colors.meCademyTextGrey};
    line-height : 1.5em;
    background-color : transparent;
    font-weight : bold;
    cursor: pointer;

    ${props => !props.right && css`
        width : 20%;
        margin-top : 2.5%;
    `}

    ${props => props.right && css`
        float : right;
        padding-left : 5px;
        padding-right : 5px;
        margin-left : -30px;

        @media (max-width : ${(props) => props.theme.smallViewport.size}) {
            margin-top: -30px;
        }
    `}

    :hover {
        background-color : ${props => props.theme.colors.meCademyLightGrey}
    }

    :active {
        transform: translateY(2px);
    }

    :focus {
        outline: none;
    }
`;

export default Button;
