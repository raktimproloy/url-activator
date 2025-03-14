import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionV2 = () => {
    const [toggle, setToggle] = useState(1);
    return (
        <Accordion className="accordion" id="generalFAQ" defaultActiveKey="collapseOne">
            <div className="accordion-item">
                <div className="accordion-header">
                    <Accordion.Toggle
                        as="button"
                        eventKey="collapseOne"
                        className="accordion-button"
                        type="button"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                        aria-expanded={toggle === 1 ? 'true' : 'false'}
                    >
                        Choose Work With MintTwist SEO Agency?
                    </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="collapseOne">
                    <div className="accordion-body">
                        <p>
                            We are confident in our SEO strategies and in general we will start to see organic traffic and conversions growing after
                            approximately 4-6 months.
                        </p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header" id="headingTwo">
                    <Accordion.Toggle
                        as="button"
                        eventKey="collapse2"
                        className="accordion-button"
                        type="button"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                        aria-expanded={toggle === 2 ? 'true' : 'false'}
                    >
                        How Long Does It Take to Start Ranking?
                    </Accordion.Toggle>
                </h5>
                <Accordion.Collapse eventKey="collapse2">
                    <div className="accordion-body">
                        <p>
                            We are confident in our SEO strategies and in general we will start to see organic traffic and conversions growing after
                            approximately 4-6 months.
                        </p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header" id="headingThree">
                    <Accordion.Toggle
                        as="button"
                        eventKey="collapse3"
                        className="accordion-button"
                        type="button"
                        onClick={() => setToggle(toggle === 3 ? 0 : 3)}
                        aria-expanded={toggle === 3 ? 'true' : 'false'}
                    >
                        Can You Guarantee Results?
                    </Accordion.Toggle>
                </h5>
                <Accordion.Collapse eventKey="collapse3">
                    <div className="accordion-body">
                        <p>
                            We are confident in our SEO strategies and in general we will start to see organic traffic and conversions growing after
                            approximately 4-6 months.
                        </p>
                    </div>
                </Accordion.Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                    <Accordion.Toggle
                        as="button"
                        eventKey="collapse4"
                        className="accordion-button"
                        type="button"
                        onClick={() => setToggle(toggle === 4 ? 0 : 4)}
                        aria-expanded={toggle === 4 ? 'true' : 'false'}
                    >
                        Do You Only Work Within The UK?
                    </Accordion.Toggle>
                </h5>
                <Accordion.Collapse eventKey="collapse4">
                    <div className="accordion-body">
                        <p>
                            We are confident in our SEO strategies and in general we will start to see organic traffic and conversions growing after
                            approximately 4-6 months.
                        </p>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};

export default AccordionV2;
