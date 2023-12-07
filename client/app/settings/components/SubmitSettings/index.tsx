import DefaultButton from "@/app/components/DefaultButton";
import Link from "next/link";
import GradientButton from "@/app/components/GradientButton";

function SubmitSettings() {
    return <div>
        <DefaultButton style={{margin: "0 10px"}} type="submit">
            O'zgarishlarni saqlash
        </DefaultButton>
        <Link href="/">
            <GradientButton>Kartalar bo'limi</GradientButton>
        </Link>
    </div>;
}

export default SubmitSettings