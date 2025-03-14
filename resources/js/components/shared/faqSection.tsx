import AccordionV1 from '@/src/components/AccordionV1'
import React from 'react'

export default function FaqSection() {
  return (
    <section className="faq-section bg-soft-grey-color">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                        <div className="common-heading tagline-boxed-two title-line m-b-80">
                            <span className="tagline">Our Approach</span>
                            <h2 className="title">
                                Grow Your Business With Our SEO{' '}
                                <span>
                                    Agency <img src="assets/img/particle/title-line.png" alt="Line" />
                                </span>
                            </h2>
                        </div>
                        <div className="ReHostX-accordion-v1">
                            <AccordionV1 />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-9">
                    <div className="faq-image text-lg-right m-t-md-60">
                        <img src="assets/img/faq/faq-image.png" alt="faq image" className="animate-float-bob-y" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
