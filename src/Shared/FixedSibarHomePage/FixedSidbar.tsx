import './index.css';

export default  function FixedSidbar ({ children, ...rest }: any) {
    return (
        <div className="fixed">
            <div
                {...rest}
                style={{ maxHeight: '93vh' }}
                className="w-full py-6 overflow-y-auto overflow-x-hidden"
            >
                {children}
            </div>
        </div>
    )
}