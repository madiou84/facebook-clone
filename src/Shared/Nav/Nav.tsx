import Layout from '../Layout';
import { HomeIcon } from '@heroicons/react/solid';
import { SearchIcon, UsersIcon, PlayIcon, BriefcaseIcon, ArchiveIcon } from '@heroicons/react/outline';

import { FbIcon } from '../../Shared';
import { classNames } from '../helper';
import ImageProfileUser from '../ImgProfileUser';

export default function Nav ({ bgContainer = 'bg-white', bgSubContainer = "flex items-center justify-center", children, ...rest } : any) {
    return (
        <>
            <nav className={classNames(bgContainer, 'xl:hidden')}>
                <ul className={bgSubContainer} {...rest}>
                    {children}
                </ul>
            </nav>

            <nav className={classNames('hidden xl:block h-14')}>
                <div className="w-full fixed bg-white z-50">
                    <Layout
                        className="flex items-center justify-between px-3"
                        leftComponent={
                            <div className="flex items-center justify-start">
                                <div className="w-14 h-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full rounded-full">
                                        <linearGradient id="CXanuwD9EGkBgTn76_1mxa" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#2aa4f4"/>
                                            <stop offset="1" stopColor="#007ad9"/>
                                        </linearGradient>
                                        <path
                                            fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                                            d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"/><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"/><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"
                                        />
                                    </svg>
                                </div>

                                <div className="w-full relative">
                                    <SearchIcon className="absolute top-3 left-3 w-4 h-4 text-gray-400"/>
                                    <input
                                        type="search"
                                        placeholder="Rechercher sur Facebook"
                                        className="w-full pl-9 py-2 rounded-full bg-gray-100 placeholder-gray-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                        }
                        centerComponent={
                            <div className="flex items-center justify-center">
                                {[
                                    <HomeIcon className="w-7 h-7"/>,
                                    <UsersIcon className="w-7 h-7"/>,
                                    <PlayIcon className="w-7 h-7"/>,
                                    <BriefcaseIcon className="w-7 h-7"/>,
                                    <ArchiveIcon className="w-7 h-7"/>,
                                ].map((item, key) => (
                                    <div
                                        key={key} 
                                        className={
                                            classNames(`
                                                ${key === 0 ? 'border-b-4 border-defaultcolor-500 text-defaultcolor-500' : 'text-gray-500'}
                                                relative w-full h-14 flex items-center justify-center cursor-pointer
                                            `)
                                        }
                                    >
                                        <div
                                            className={
                                                classNames(key !== 0 ? 'hover:bg-gray-100 rounded-lg' : null, 'w-full flex justify-center items-center h-12')
                                            }
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                        rightComponent={
                            <div className="w-full flex items-center justify-end">
                                <a href="https://madioubah.herokuapp.com" className="flex items-center rounded-full hover:bg-gray-100 mx-2 py-1">
                                    <div className="w-10 h-7 rounded-full">
                                        <ImageProfileUser />
                                    </div>

                                    <div className="w-full relative">
                                        <h6 className="ml-1 font-semibold">Madiou</h6>
                                    </div>
                                </a>

                                <div className="flex space-x-2">
                                    {[
                                        {
                                            iconSize: 'auto',
                                            iconPosition: '0 -128px',
                                            backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png?_nc_eui2=AeH5pejNVT8D-168nPGXHPoALbdPuRKRHYktt0-5EpEdibtyl3U-q7XECulCj545_JDnuaFd3hPe8SNdm2AZ3cJN',
                                        },
                                        {
                                            iconSize: '25px 1171px',
                                            iconPosition: '0 -176px',
                                            backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/nsNbresn0Ii.png',
                                        },
                                        {
                                            iconSize: '25px 1171px',
                                            iconPosition: '0 -281px',
                                            backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/nsNbresn0Ii.png',
                                        },
                                        {
                                            iconSize: 'auto',
                                            iconPosition: '-168px -128px',
                                            backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png?_nc_eui2=AeH5pejNVT8D-168nPGXHPoALbdPuRKRHYktt0-5EpEdibtyl3U-q7XECulCj545_JDnuaFd3hPe8SNdm2AZ3cJN',
                                        },
                                    ].map((item, key) => (
                                        <div
                                            key={key}
                                            className="flex items-center justify-center p-3 rounded-full bg-secondary-400 cursor-pointer"
                                        >
                                            <FbIcon
                                                backgroundSize={item.iconSize}
                                                backgroundUrl={item.backgroundUrl}
                                                backgroundPosition={item.iconPosition}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    />
                </div>
            </nav>
        </>
    )
}