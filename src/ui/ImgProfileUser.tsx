import { SIDBAR_DATA } from "../constants";

export default function ImageProfileUser({
  className = "w-full h-full rounded-full object-fill",
  src = SIDBAR_DATA[0].srcXl,
  alt = SIDBAR_DATA[0].srcXl,
  ...rest
}: any) {
  return <img {...rest} alt={alt} src={src} className={className} />;
}
