import { classNames } from "./helper"

export function FloatingButtonMakeMessage ({ children, className, ...rest }: any) {
    return (
        <div
            {...rest}
            className={classNames('fixed', className)}
            >
            <div
                className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-gray-900"
            >
                {children}
            </div>
        </div>
    )
}

export function NewMessageButtonAction ({ children }: any) {
    return (
        <button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900"
        >
            {children}
        </button>
    )
}