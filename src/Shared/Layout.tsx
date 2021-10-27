export default function Layout ({
    leftComponent,
    rightComponent,
    centerComponent,
    leftComponentClass = "w-1/5",
    rightComponentClass = "w-1/5",
    className = 'flex justify-between items-center',
    ...rest
}: any) {
    return (
        <div className={className} {...rest}>
            <div className={leftComponentClass}>
                {leftComponent}
            </div>

            <div style={{ width: '45.45%' }}>
                {centerComponent}
            </div>
            
            <div className={rightComponentClass}>
                {rightComponent}
            </div>
        </div>
    )
}