"use client"
import ImageComponent from "@/app/components/Image";
import {ChangeEvent, useState} from "react";
import {useQueryClient} from "react-query";
import {useMutationFunc, useSubmitData} from "@/app/utils/mutationFunctions";

function ProfileImageChanger({src}: { src?: string }) {
    const [imageSrc, setImageSrc] = useState(src)
    const [isLocal, setIsLocal] = useState(!Boolean(src))
    const queryClient = useQueryClient()
    const mutation = useMutationFunc("/api/user/update", "PUT", true)
    const submitNewImage = useSubmitData.bind(null, mutation, queryClient)

    function handleChangeImage(event: ChangeEvent<HTMLInputElement>) {
        const files = event?.target?.files as FileList
        if (!files.length) return
        const newUrl = URL.createObjectURL(files[0])
        setImageSrc(newUrl)
        setIsLocal(true)
        const formData = new FormData()
        formData.append('image', files[0])
        submitNewImage(formData, "user")
    }

    return <label><ImageComponent className='w-[200px] h-[200px] rounded-full lg:m-0 m-auto my-2' isLocal={isLocal}
                                  url={imageSrc}/>
        <input onChange={handleChangeImage} type='file' className='hidden'/>
    </label>
}

export default ProfileImageChanger