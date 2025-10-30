
import SectionContainer from "../ui/SectionContainer";


const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex items-center justify-between
            lg:flex-row gap-5
            md:flex-col 
            max-md:flex-col ">
              <div className="flex flex-col gap-5 
              lg:items-start lg:text-left
              md:items-center md:w-full md:text-center
              max-md:items-center max-md:w-full max-md:text-center">
                <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                  <p className="brand-text-green">Contact Us</p>
                </div>
                <h1 className="text-navy font-heading font-extrabold
                  lg:text-7xl md:text-6xl max-md:text-5xl">Let’s Talk About Growing Your Business</h1>
              </div>
              <div className="lg:w-1/2 md:w-full max-md:w-full">
                <p className="text-gray-500 lg:text-left md:text-center max-md:text-center lg:text-base md:text-lg max-md:text-lg max-sm:text-base">Our team is ready to discuss your telesales and database management needs.</p>
              </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;