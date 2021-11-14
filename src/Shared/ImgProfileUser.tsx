import { sidbarData } from "../utils";

export default function ImageProfileUser ({
    className = "w-full h-full rounded-full object-fill",
    src = sidbarData[0].srcXl,
    alt = sidbarData[0].srcXl,
    ...rest }: any) {
    return (
        <img
            {...rest}
            alt={alt}
            src={src}
            className={className}
        />
    )
}