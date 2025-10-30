import Link from "next/link";

const Button = ({
    children,
    url,
    style,
    onClick,
    bgColor,
    textColor
}) => {
    return (
        <Link 
            onClick={onClick}
            className={`${style} ${bgColor} ${textColor} font-cta py-2 px-4 rounded-md flex items-center gap-2
            max-md:py-2 max-md:px-3 max-md:text-sm`}
            href={url}
        >
            {children}
        </Link>
    )
}

export default Button;