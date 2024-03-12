import { FC } from "react";
import { medias, label_names, label_descriptions, bg_colors, text_colors } from "..";
import Image, { StaticImageData } from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

type ParamsProps = {
    bg_color: string,
    media: StaticImageData,
    alt_name: string,
    ht: number,
    wd: number,
    text_color: string,
    sNo: number,
    label_name: string,
    label_description: string
}

const Reveal: FC<ParamsProps> = ({ bg_color,
    media,
    alt_name,
    ht,
    wd,
    text_color,
    sNo,
    label_name,
    label_description }) => {

    return (<>
        <div className={bg_color + " h-screen w-screen flex"}>
            <div className="w-1/2 p-10 h-screen flex items-center justify-center">
                <Image src={media} alt={alt_name} height={ht} width={wd} />
            </div>
            <div className="w-1/2 p-10 h-screen flex flex-col items-center justify-center">
                <div className={"font-hipnouma text-[40em] mix-blend-exclusion title " + text_color}>
                    {sNo + ".) " + label_name}
                </div>
                <div className={"font-lostar text-[7em] mix-blend-color-dodge " + text_color}>
                    {label_description}
                </div>
            </div>
        </div>
    </>)
}

type ParamsPaths = {
    slug: string
}

export const getStaticPaths: GetStaticPaths<ParamsPaths> = async () => {
    const paths = label_names.map((el, index) => ({ params: { slug: index.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        if (!params)
            throw new Error("params not provided!!!")

        const data = {
            bg_color: bg_colors[Number(params.slug)],
            media: medias[Number(params.slug)],
            alt_name: label_names[Number(params.slug)],
            ht: medias[Number(params.slug)].height * 2,
            wd: medias[Number(params.slug)].width * 2,
            text_color: text_colors[Number(params.slug)],
            sNo: Number(params.slug) + 1,
            label_name: label_names[Number(params.slug)].toUpperCase(),
            label_description: label_descriptions[Number(params.slug)]
        }

        return {
            props: { data }
        }
    }
    catch (error) {
        throw new Error(`Error in GetStaticProps. ${error}`)
    }
}

export default Reveal