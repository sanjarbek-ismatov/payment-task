import Image from "next/image";
import Text from "../Text";
import ErrorImage from "@/public/icons/error-icon.png";

function ErrorComponent() {
  return (
    <div className="flex pt-24  flex-col items-center">
      <Image src={ErrorImage} alt="Error image" />
      <Text>Hmm, yana bug chiqibdi, dasturchi aybdorda</Text>
    </div>
  );
}
export default ErrorComponent;
