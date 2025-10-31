import { CiCircleCheck } from "react-icons/ci";
import SectionContainer from "../ui/SectionContainer";

const industryData = [{
    title: "Home",
    highlighTitle: "Services",
    dscrpt: "Contractors and trades rely on timely follow-up to win household jobs.",
    listTitle: "What we do for Home Services:",
    list: [
        "Call inbound leads from ads or referrals",
        "Pre-qualify households for contractor services",
        "Schedule consultations and quote appointments",
        "Refresh and maintain household databases for repeat marketing"
    ]
}, {
    title: "Debt Collection &",
    highlighTitle: "Recovery",
    dscrpt: "Chasing overdue invoices takes time and risks straining client relationships.",
    listTitle: "What we do for Debt Collection:",
    list: [
        "Call overdue accounts with structured escalation",
        "Flag uncontactable or disconnected debtors",
        "Provide clear reporting for your finance team",
        "Maintain professionalism and compliance at all times"
    ]
}, {
    title: "Mortgage &",
    highlighTitle: "Lending",
    dscrpt: "Brokers and loan officers juggle large lead volumes from multiple channels. Without structured follow-up, good borrowers are lost.",
    listTitle: "What we do for Mortgage & Lending:",
    list: [
        "Contact borrowers quickly before they shop elsewhere",
        "Pre-qualify based on loan criteria",
        "Set appointments with brokers or loan officers",
        "Clean databases to remove duplicates and disconnected numbers"
    ]
}, {
    title: "Legal",
    highlighTitle: "Services",
    dscrpt: "Missed intake calls can mean missed clients.",
    listTitle: "What we do for Legal:",
    list: [
        "Manage inbound and outbound intake",
        "Follow up with unconverted leads",
        "Confirm appointments and reminders",
        "Maintain accurate contact records"
    ]
}, {
    title: "Education",
    highlighTitle: "",
    dscrpt: "From training providers to universities, timely contact drives enrollments.",
    listTitle: "What we do for Education:",
    list: [
        "Nurture student enquiries",
        "Follow up post-outreach campaigns",
        "Book enrollment calls or campus visits",
        "Clean student databases for accuracy"
    ]
}, {
    title: "Insurance",
    highlighTitle: "",
    dscrpt: "Retention and trust are everything in insurance. Regular, professional contact helps prevent churn and drive growth.",
    listTitle: "What we do for Insurance:",
    list: [
        "Call policy renewals to prevent lapses",
        "Cross-sell or upsell additional cover",
        "Qualify new enquiries from web or events",
        "Manage follow-ups so your agents can close sales"
    ]
}, {
    title: "Financial",
    highlighTitle: "Services",
    dscrpt: "Advisers and accountants often rely on referrals but need structured follow-up to scale.",
    listTitle: "What we do for Financial Services:",
    list: [
        "Follow up with tax season leads quickly",
        "Qualify clients for accounting/advisory services",
        "Book consultations and reviews",
        "Maintain compliance-ready records"
    ]
}, {
    title: "Retail &",
    highlighTitle: "E-commerce",
    dscrpt: "Abandoned carts and inactive customers = lost revenue.",
    listTitle: "What we do for Retail & E-commerce:",
    list: [
        "Call to recover abandoned carts",
        "Re-engage dormant customers",
        "Upsell buyers into memberships or loyalty programmes",
    ]
}, {
    title: "Healthcare",
    highlighTitle: "",
    dscrpt: "Missed appointments and disengaged patients cost providers millions.",
    listTitle: "What we do for Healthcare:",
    list: [
        "Call with appointment reminders to reduce no-shows",
        "Manage follow-ups for treatments or prescriptions",
        "Handle new patient enquiries",
        "Flag disconnected numbers to keep records clean"
    ]
}, {
    title: "Real",
    highlighTitle: "Estate",
    dscrpt: "With over 15,000 licensed agents in  New Zealand & Australian, competition is fierce. Consistent follow-up is the difference between closing deals and losing them.",
    listTitle: "What we do for Real Estate:",
    list: [
        "Qualify buyers & sellers so you only engage serious prospects",
        "Book appraisals, valuations, and viewing appointments directly into your calendar",
        "Follow up with open home attendees and online inquiries before competitors do",
        "Keep databases clean by removing inactive contacts"
    ]
}, {
    title: "Solar",
    highlighTitle: "",
    dscrpt: "The solar industry is booming, but high-value deals require persistence and timing. Without consistent follow-up, marketing dollars are wasted and competitors step in.",
    listTitle: "What we do for Solar Providers:",
    list: [
        "Qualify households based on property ownership and solar suitability",
        "Rapidly follow up on digital enquiries from ads or web forms",
        "Nurture prospects through long sales cycles with ongoing touchpoints",
        "Book in-home consultations and system assessments directly into your calendar",
        "Clean and update solar lead databases for future efficiency"
    ]
}]


const ListIndustries = () => {
    return (
        <SectionContainer>
            <div className="w-full flex flex-wrap justify-between gap-x-5 gap-y-10">
                {industryData.map((list, index) => (
                    <div key={index} className="shadow-2 flex flex-col gap-5 p-5 rounded-xl
                        lg:w-[31%] 
                        md:w-[48%]
                        max-md:w-full">
                        <h2 className="text-2xl font-heading font-semibold">{list.title} <span className="brand-text-green">{list.highlighTitle}</span></h2>
                        <p className="text-sm text-gray-500">{list.dscrpt}</p>
                        <h3 className="brand-text-green font-heading font-semibold text-lg">{list.listTitle}</h3>
                        <div className="flex flex-col gap-3">
                            {list.list.map((list, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <CiCircleCheck size={30} className="brand-text-green flex-shrink-0 font-extralight"/>
                                    {list}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    )
}

export default ListIndustries;