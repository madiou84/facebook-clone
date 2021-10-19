export default function Salons ({ styleContainer, children, ...rest }: any) {
    return (
        <div className={styleContainer} {...rest}>
            <div className="w-full flex items-center px-3 py-2 space-x-2">
                {children}
            </div>
        </div>
    )
}