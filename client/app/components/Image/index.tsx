import { ComponentProps } from "react";

function ImageComponent({
  url,
  alt,
  isLocal,
  ...props
}: {
  url?: string;
  alt?: string;
  isLocal?: boolean;
} & ComponentProps<"img">) {
  const fixedUrl = url
    ? isLocal
      ? url
      : `http://localhost:4000/api/files/get/${url}`
    : "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
  return <img {...props} src={fixedUrl} alt={alt} />;
}
export default ImageComponent;
