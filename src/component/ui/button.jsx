import Link from "next/link";

const Button = ({
    text,
    url,
    style,
    onClick,
    bgColor,
    textColor
}) => {
    return (
        <Link 
            onClick={onClick}
            className={`${style} ${bgColor} ${textColor} font-cta py-2 px-4 rounded-md 
            max-md:py-2 max-md:px-3 max-md:text-sm`}
            href={url}
        >
            {text}
        </Link>
    )
}

export default Button;