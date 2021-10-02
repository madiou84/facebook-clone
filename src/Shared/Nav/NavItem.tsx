import { FbIcon } from "../Shared";
import { classNames } from "../helper";

export default function NavItem({ item, isActive, notificationCount } : any) {
    return (
        <li className={classNames('py-2 w-full block', isActive && '-mb-0.5 text-primary-500 border-b-2 border-primary-100')}>
            <div className="flex justify-center items-center">
                <FbIcon
                    backgroundPosition={item}
                    notificationCount={notificationCount}
                />
            </div>
        </li>
    )
}