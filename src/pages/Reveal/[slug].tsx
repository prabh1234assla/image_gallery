import { useRouter } from "next/router";
import { FC } from "react";
import { medias, label_names, label_descriptions, bg_colors, text_colors } from "..";
import Image from "next/image";

type Props = {

}

const Reveal: FC<Props> = () => {
    const router = useRouter()
    const { slug } = router.query

    console.log(slug, medias[Number(slug)])

    return (<>
        <div className={bg_colors[Number(slug)] + " h-screen w-screen flex"}>
            <div className="w-1/2 p-10 h-screen flex items-center justify-center">
                <Image src={medias[Number(slug)]} alt={label_names[Number(slug)]} height={medias[Number(slug)].height * 2} width={medias[Number(slug)].width * 2} />
            </div>
            <div className="w-1/2 p-10 h-screen flex flex-col items-center justify-center">
                <div className={"font-hipnouma text-[40em] mix-blend-exclusion title " + text_colors[Number(slug)]}>
                    {Number(slug)+1 + ".) " + label_names[Number(slug)].toUpperCase()}
                </div>
                <div className={"font-lostar text-[7em] mix-blend-color-dodge " + text_colors[Number(slug)]}>
                    {label_descriptions[Number(slug)]}
                </div>
            </div>
        </div>
    </>)
}

export default Reveal