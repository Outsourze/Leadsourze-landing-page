import SectionContainer from "../ui/SectionContainer";

const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center text-center gap-10">
                <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                    <p className="brand-text-green">ABOUT US</p>
                </div>
                <div className="px-10 flex flex-col gap-5">
                    <h1 className="font-bold font-heading 
                    lg:text-7xl lg:leading-22
                    md:text-5xl md:leading-14
                    max-md:text-4xl max-md:leading-10">Trusted Telesales <br/> Partner for <br/> New Zealand Businesses</h1>
                    <p className="text-gray-500 
                        lg:leading-8
                        md:leading-6
                        max-md:leading-6">At Lead Sourze, we’ve built a reputation for delivering reliable, scalable telesales solutions across industries. Businesses trust us to represent their brand professionally, engage prospects consistently, and deliver measurable results. Our approach combines human-led communication with AI-powered support tools that improve efficiency, enhance lead qualification, and keep your databases accurate. The result: faster outreach, smarter conversations, and long-term database value for your business.</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;