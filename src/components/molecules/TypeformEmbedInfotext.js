import styled from 'styled-components';
import TypeformRight from '../organism/reg_form';
import { textData } from '../../data/textData';

const BoxAroundTypeform = styled.div`
  height: 500px;
  width: 80%;
  margin: auto;
  display: block;
  position: relative;
  background-color: lightgrey;
  border: 1px solid black;
  margin-bottom: 50px;
`;

const TextBoxForm = styled.div`
    height: 100px;
    width: 80%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    display: block;
    position: relative;
    background-color: "white";
    text-align: center;
    border: 1px solid black;
`;

const RegDivOnPage = styled.div`
  border: 3px solid #e95160;
  height: 250px;
  width: 80%;
  margin: auto;
  margin-top: 0px;
  /* padding-top: 200px; */
  display: block;
  position: relative;
  background-color: lightgrey;
`;

export default function TypeformEmbedInfotext() {



    return (
        <div>
            <BoxAroundTypeform>
              <TextBoxForm>
                <h3>{textData.infoAboveRegistrationForm[0].heading}</h3>
                <p>{textData.infoAboveRegistrationForm[0].text}</p>
              </TextBoxForm>

                <RegDivOnPage>
                  <TypeformRight />
                </RegDivOnPage>
            </BoxAroundTypeform>
        </div>
    )
}

