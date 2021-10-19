export default function Layout ({
    leftComponent,
    rightComponent,
    centerComponent,
    leftComponentClass = "w-1/5",
    rightComponentClass = "w-1/5",
    centerComponentClass = "w-3/7",
    className = 'flex justify-between items-center',
    ...rest
}: any) {
    return (
        <div className={className} {...rest}>
            <div className={leftComponentClass}>
                {leftComponent}
            </div>

            <div className={centerComponentClass}>
                {centerComponent}
            </div>
            
            <div className={rightComponentClass}>
                {rightComponent}
            </div>
        </div>
    )
}