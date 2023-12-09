import DefaultButton from "@/app/components/DefaultButton";
import Link from "next/link";
import GradientButton from "@/app/components/GradientButton";

function SubmitSettings() {
    return <div className=''>
        <DefaultButton style={{margin: "0 10px"}} type="submit">
            O'zgarishlarni saqlash
        </DefaultButton>
        <span className='my-4 block'/>
        <Link href="/">
            <GradientButton>Kartalar bo'limi</GradientButton>
        </Link>
    </div>;
}

export default SubmitSettings