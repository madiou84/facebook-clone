import classNames from "classnames";

export function FbIcon({
  notificationCount,
  classNameSize = "w-5 h-5",
  backgroundSize = "25px 1171px",
  backgroundPosition = "0 -155px",
  backgroundUrl = "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/y69_rC0PPzl.png",
}: any) {
  return (
    <div
      className={classNames(
        "relative z-20 inline-block bg-no-repeat",
        classNameSize
      )}
      style={{
        backgroundSize,
        backgroundPosition,
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      {notificationCount && (
        <div
          className={classNames(
            "absolute -top-1.5 -right-4 z-20 flex items-center justify-center text-white rounded-full bg-red-500",
            classNameSize
          )}
        >
          {notificationCount}
        </div>
      )}
    </div>
  );
}
