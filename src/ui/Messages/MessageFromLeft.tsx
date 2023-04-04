import { ImageProfileUser } from "../ImageProfileUser";

export default function MessageFromItem({ srcImgUser, message }: any) {
  return (
    <div className="flex items-end space-x-2 space-y-4">
      {srcImgUser && (
        <ImageProfileUser
          src={srcImgUser}
          hasStory={false}
          widthClass="w-6"
          heightCLass="h-6"
          widthClassDot="w-1.5"
          heightClassDot="h-1.5"
          wantToDotOnline={false}
        />
      )}
      <p className="w-60 px-3 py-2 bg-gray-200 text-gray-700 rounded-2xl">
        {message}
      </p>
    </div>
  );
}
