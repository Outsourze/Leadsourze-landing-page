import SectionContainer from "../ui/SectionContainer";

const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex items-center justify-between gap-5 brand-bg-green w-full rounded-2xl
                lg:px-8 lg:py-12 
                md:px-6 md:py-8
                max-md:px-4 max-md:py-5">
                <div className="flex flex-col 
                    lg:gap-5
                    md:gap-4
                    max-md:gap-3
                    max-md:w-1/2">
                    <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1 bg-white">
                        <p className="brand-text-green
                            lg:text-base
                            md:text-sm
                            max-md:text-xs">WHY CHOOSE LEADSOURZE?</p>
                    </div>
                    <h1 className="font-extrabold font-heading text-white
                        lg:text-7xl md:text-5xl max-md:text-4xl max-sm:text-3xl">Industries</h1>
                </div>
                <div className="w-1/2">
                    <p className="text-white 
                        lg:leading-8 lg:text-base
                        md:leading-6 md:text-base
                        max-md:leading-5 max-md:text-sm
                        max-sm:leading-4 max-sm:text-xs">Businesses across various industries trust Leadsourze for its adaptable solutions and proven results tailored to their unique needs.</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;