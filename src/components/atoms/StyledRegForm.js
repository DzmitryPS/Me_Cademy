import styled from 'styled-components';

const StyledRegForm = styled.div `
    height: 300px;
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    border-radius: 3px;
    margin-top: 30px;

    h1, h2 {
        margin:40px;
    }
`;

const GotoRegButton = styled.button`
    height: 2em;
    background: ${props => props.theme.colors.meCademySalmon};
    border-radius: 5px;
    border: none;
    width: 65%;
    margin: 0 auto 0 auto;
    color: white;
    font-size: 1.2em;
    line-height: 2em;
    box-shadow: 0 1px 1px grey;
    -o-box-shadow: 0 1px 1px grey;
    -webkit-box-shadow: 0 1px 1px grey;
    -moz-box-shadow: 0 1px 1px grey;
    opacity: 0.8;
    transition: 0.3s;
    cursor: pointer;

    :focus {
        outline: none;
    }

    :hover {
        opacity: 1;
    }
    
    :active {
        transform: translateY(2px);
    }
`

export { StyledRegForm, GotoRegButton };