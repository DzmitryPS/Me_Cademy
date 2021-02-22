import styled from 'styled-components';

const StyledTeamCompForm = styled.div `

margin-bottom: 50px;

.row2 {
    display: flex;
    } 

.row3 {
    display: flex;
    flex-direction: row-reverse;
    }  


.img2, .img3 {
    display: flex;
    height: 250px;
    object-fit: cover;
    }

.text2, .text3 {
    display: flex;
    position: relative;
    height: 250px;
    background-color: ${props => props.theme.colors.meCademyLightTeal};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px 0 30px;
    color : ${props => props.theme.colors.meCademyTextGrey}
    }      

.text2:after {
    position: absolute;
    left: -14px;
    top: 100px;
    content: '';
    width: 0;
    height: 0;
    border-right: solid 15px ${props => props.theme.colors.meCademyLightTeal};
    border-bottom: solid 15px transparent;
    border-top: solid 15px transparent;
    } 

.text3:after {
    position: absolute;
    right: -14px;
    top: 100px;
    content: '';
    width: 0;
    height: 0;
    border-left: solid 15px ${props => props.theme.colors.meCademyLightTeal};
    border-top: solid 15px transparent;
    border-bottom: solid 15px transparent;
    }
    
    H1 {
        margin: 3px;
       }
    
    H3 {
        margin: 7px;
        }


   @media screen and (max-width: 1025px){

       H1 {
        margin: 0;
       }
        H3 {
        margin: 5px;
        }
   }

    @media screen and (max-width: 865px){
        font-size: 0.8em;

       H1 {
        margin: 0;
       }
        H3 {
        margin: 5px;
        } 
   }

   @media screen and (max-width: 651px){
    font-size: 0.87em;

    H3 {
        margin: 0;
       }
    

    .text2:after, .text3:after {
        display: none;
        }

    .row2, .row3 {
        display: flex;
        flex-direction: column; 
    }
    }
   @media screen and (max-width: 395px){
       font-size: 0.75em;
    }
    `

export default StyledTeamCompForm;