import SectionContainer from "../ui/SectionContainer";

const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex items-center justify-between
            lg:flex-row gap-5
            md:flex-col 
            max-md:flex-col ">
              <div className="flex flex-col gap-5 
              lg:items-start 
              md:items-center md:w-1/2 
              max-md:items-center max-md:w-full">
                <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                  <p className="brand-text-green">WHY CHOOSE FINANCY ?</p>
                </div>
                <h1 className="text-navy font-heading font-extrabold whitespace-nowrap
                  lg:text-7xl md:text-6xl max-md:text-5xl">Pricing Page</h1>
              </div>
              <div className="w-1/2">
                <p className="text-gray-500 lg:text-left md:text-center max-md:text-center lg:text-base md:text-lg max-md:text-lg max-sm:text-base">Clients appreciate Leadsourze’s transparent and flexible pricing, offering exceptional value without compromising on quality.</p>
              </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;