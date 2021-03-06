import {
    Footer,
    Container,
    FooterWidgets,
    FooterWidgetsWrapper,
    Li,
    SocialMediaIcon,
  } from '../atoms/mentormeFooterAtoms';
import { Link } from 'react-router-dom';
  
export default function MentormeFooter() {
    return (
      <Footer>
        <Container>
            <FooterWidgetsWrapper>
                <FooterWidgets>
                <ul>
                    <Li>
                        <Link to="/Kontakt">Kontakt</Link>
                    </Li>
                    <Li>
                        <Link to="/Impressum">Impressum</Link>
                    </Li>
                    <Li>
                        <Link to="/Datenschutz">Datenschutz</Link>
                    </Li>
                </ul>
                </FooterWidgets>
                <FooterWidgets right>
                    <a href="https://facebook.com/MentorMeBerlin">
                        <SocialMediaIcon
                            src="/icons/facebook-logo.png"
                            alt="facebook"
                        />
                    </a>
                    <a href="https://instagram.com/mentorme_berlin">
                        <SocialMediaIcon
                            src="/icons/instagram-logo.png"
                            alt="instagram"
                        />
                    </a>
                    <a href="https://twitter.com/MentorMe_Berlin">
                        <SocialMediaIcon
                            src="icons/twitter-logo.png"
                            alt="twitter"
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/mentorme/">
                        <SocialMediaIcon
                            src="icons/linkedin-logo.png"
                            alt="linkedin"
                            last
                        />
                    </a>
                </FooterWidgets>
            </FooterWidgetsWrapper>
        </Container>
      </Footer>
    );
}
