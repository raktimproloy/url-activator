import { Accordion } from 'react-bootstrap';

const AccordionV1 = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Choose Work With MintTwist SEO Agency?</Accordion.Header>
                <Accordion.Body>
                    We are confident in our SEO strategies, and in general, we will start to see organic traffic and conversions growing after
                    approximately 4-6 months.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>How Long Does It Take to Start Ranking?</Accordion.Header>
                <Accordion.Body>
                    We are confident in our SEO strategies, and in general, we will start to see organic traffic and conversions growing after
                    approximately 4-6 months.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Can You Guarantee Results?</Accordion.Header>
                <Accordion.Body>
                    We are confident in our SEO strategies, and in general, we will start to see organic traffic and conversions growing after
                    approximately 4-6 months.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Do You Only Work Within The UK?</Accordion.Header>
                <Accordion.Body>
                    We are confident in our SEO strategies, and in general, we will start to see organic traffic and conversions growing after
                    approximately 4-6 months.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default AccordionV1;
