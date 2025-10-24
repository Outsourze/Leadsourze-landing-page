import SectionContainer from "../ui/SectionContainer";

const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center text-center gap-10">
                <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                    <p className="brand-text-green">ABOUT US</p>
                </div>
                <div className="px-10 flex flex-col gap-5">
                    <h1 className="text-7xl font-bold font-heading leading-22">Trusted Telesales <br/> Partner for <br/> New Zealand Businesses</h1>
                    <p className="text-gray-500 leading-8">At Lead Sourze, we’ve built a reputation for delivering reliable, scalable telesales solutions across industries. Businesses trust us to represent their brand professionally, engage prospects consistently, and deliver measurable results. Our approach combines human-led communication with AI-powered support tools that improve efficiency, enhance lead qualification, and keep your databases accurate. The result: faster outreach, smarter conversations, and long-term database value for your business.</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;