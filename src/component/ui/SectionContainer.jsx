const SectionContainer = ({
    style,
    children
}) => {
    return (
        <div className={`${style} max-w-7xl py-10 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-5`}
        >
            {children}
        </div>
    )
}

export default SectionContainer;