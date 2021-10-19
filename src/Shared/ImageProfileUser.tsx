import { classNames } from './helper';

export function ImageProfileUser({
    src,
    hasStory = true,
    widthClass = 'w-10',
    heightCLass = 'h-10',
    widthClassDot,
    heightClassDot,
    wantToDotOnline = true,
}: any) {
    return (
        <div className="relative">
            <div className={classNames(widthClass, heightCLass)}>
                <img
                    alt={src}
                    src={src}
                    className={
                        classNames(
                            `w-full h-full object-cover rounded-full`,
                            hasStory && `ring-2 ring-primary-100 ring-offset-2`
                        )
                    }
                />
            </div>
            
            {wantToDotOnline && <DotStyle
                widthClass = {widthClassDot}
                heightClass = {heightClassDot}
            />}
        </div>
    )
}

export function DotStyle ({
    widthClass = 'w-2',
    heightClass = 'h-2',
}) {
    return (
        <div className="absolute bottom-1 -right-0.5">
            <div className={classNames('bg-green-500 rounded-full ring-1 ring-white ring-offset-1 ring-offset-white', widthClass, heightClass)}/>
        </div>
    )
}