import { classNames } from '../helper';
import { FbIcon } from '../Shared';

export default function ButtonCreateSalon ({ className }: any) {
    return (
        <button
            type="button"
            className={
                classNames(
                    'w-40 px-2 py-2 flex justify-center items-center border border-opacity-30 border-primary-200 text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 ease-in',
                    className
                )
            }
        >
            <FbIcon
                backgroundSize="auto"
                classNameSize="w-8 h-6"
                backgroundPosition="0 -220px"
                backgroundUrl="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/XT_3HhaR9VX.png?_nc_eui2=AeGy7Cb7S3zaxx6uw9X7nZrXJhL1DOAhsEMmEvUM4CGwQ8YmIyddyy4zXXNB0YEQxUdEFUUZwTiEQthDCQRSvyNo"
            />
            <span className="w-full ml-1 -mt-1">
                Créer un salon
            </span>
        </button>
    )
}