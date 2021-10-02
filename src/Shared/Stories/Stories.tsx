import React from 'react';
import { DotsCircleHorizontalIcon } from '@heroicons/react/outline'

export default function Stories({ className, children }: any) {
    return (
        <div className={className}>
            <div className="flex items-center justify-between py-2">
                <h6 className="font-bold leading-none">
                    Stories
                </h6>
                <div className="flex items-center justify-center space-x-1">
                    <DotsCircleHorizontalIcon
                        className="w-4 h-4"
                    />
                    <span className="text-gray-600 text-sm leading-none">
                        Votre archive
                    </span>
                </div>
            </div>

            {children}
        </div>
    )
}