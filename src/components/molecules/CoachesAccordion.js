import { StyledDiv } from '../atoms/coachesAtoms';
import { textData } from '../../data/textData';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './accordion.css';

export default function CoachesAccordion() {
    return (
        <StyledDiv width={"80%"}>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                {textData.coachesAccordion.map((item, index) => (
                    <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {item.panel}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </StyledDiv>
    )
}

