

const Form = () => {
    return (
        <div className="max-w-7xl w-full py-20 m-auto flex items-center justify-between
          xl:px-0 xl:gap-20 
          lg:px-20 lg:gap-10 
          md:px-20 
          max-md:px-5 max-md:py-10"
        >
           <div className="brand-bg-green text-white px-10 py-10 w-full flex flex-col gap-10 rounded-2xl">
                <h2 className="font-heading text-2xl font-semibold">General Info</h2>

                <form className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                name="firstName" 
                                placeholder="Enter your first name" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                name="lastName" 
                                placeholder="Enter your last name" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                name="email" 
                                placeholder="Enter your Email Address" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="phoneNum">Phone Number</label>
                            <input 
                                name="phoneNum" 
                                placeholder="Enter your Phone number" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="company">Company</label>
                            <input 
                                name="company" 
                                placeholder="Enter your Company name" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-[50%]">
                            <label htmlFor="industry">Choose Industry</label>
                            <input 
                                name="industry" 
                                placeholder="Enter your Industry" 
                                className="outline px-4 py-2 rounded-full "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="message">Message</label>
                        <input 
                            name="message" 
                            placeholder="Leave your comments (4,000 symbols max.)" 
                            className="outline px-4 py-2 rounded-full "
                        />
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <button className="bg-white brand-text-green py-4 rounded-full cursor-pointer">
                        Send My Enquiry
                    </button>
                </form>
           </div>
        </div>
    )
}

export default Form;