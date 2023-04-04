export default function PostAction ({ children, ...rest }: any) {
    return (
        <div
            {...rest}
            className="border-t border-b border-opacity-50 border-secondary-500 mx-2 py-1"
        >
            <div
                className="flex items-center justify-evenly text-gray-700 font-bold"
            >
                {children}
            </div>
        </div>
    )
}