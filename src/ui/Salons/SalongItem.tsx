import { ImageProfileUser } from "../ImageProfileUser";

export default function SalongItem({ user, ...rest }: any) {
  return (
    <ImageProfileUser
      {...rest}
      src={user.src}
      hasStory={false}
      widthClass="w-10"
      heightCLass="h-10"
      widthClassContainer="w-2.5"
      heightClassContainer="h-2.5"
    />
  );
}
