import SectionContainer from "../ui/SectionContainer";


const Introduction = () => {
    return (
        <SectionContainer>
            <div className="flex items-center justify-between">
              <div className="w-1/2 flex flex-col gap-5 items-start">
                <div className="rounded-lg px-5 py-3 font-bold font-heading shadow-1">
                  <p className="brand-text-green">WHY CHOOSE FINANCY ?</p>
                </div>
                <h1 className="text-navy text-7xl font-heading font-extrabold">Services</h1>
              </div>
              <div className="w-1/2">
                <p className="text-gray-500">Leadsourze earns great feedback from clients for delivering reliable and efficient outsourcing services that help businesses grow faster.</p>
              </div>
            </div>
        </SectionContainer>
    )
}

export default Introduction;