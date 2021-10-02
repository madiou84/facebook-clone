export default function Nav ({ bgContainer = 'bg-white', bgSubContainer = "flex items-center justify-center", children, ...rest } : any) {
    return (
        <nav className={bgContainer}>
            <ul className={bgSubContainer} {...rest}>
                {children}
            </ul>
        </nav>
    )
}