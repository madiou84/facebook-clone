import React from 'react';

export function FbIcon ({
  notificationCount,
  backgroundSize = '25px 1171px',
  backgroundPosition = '0 -155px',
  className = "relative z-20 bg-no-repeat w-5 h-5",
}: any) {
    return (
      <div
        className={className}
        style={{
          backgroundSize,
          backgroundPosition,
          backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/nsNbresn0Ii.png")`,
        }}
      >
        {notificationCount && (
          <div className="absolute -top-1.5 -right-4 z-20 flex items-center justify-center w-5 h-5 text-white rounded-full bg-red-500">
            {notificationCount}
          </div>
        )}
      </div>
    )
}