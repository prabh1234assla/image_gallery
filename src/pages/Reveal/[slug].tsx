import { FC } from "react";
import { medias, label_names, label_descriptions, bg_colors, text_colors } from "..";
import Image, { StaticImageData } from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

type ParamsPaths = {
    slug: string
}

export const getStaticPaths: GetStaticPaths<ParamsPaths> = async () => {
    const paths = label_names.map((el, index) => ({ params: { slug: index.toString() } }))
    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        console.log("djjdjdj", params)
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
        console.log(data)
        return {
            props: { data }
        }
    }
    catch (error) {
        throw new Error(`Error in GetStaticProps. ${error}`)
    }
}

type ParamsProps = {
    data: {
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
}

const Reveal: FC<ParamsProps> = ({ data }) => {


    return (<>
        <div className={data.bg_color + " h-screen w-screen flex items-center justify-center data overflow-hidden "}>
            <div className="w-[25%] m-10 flex items-center justify-center img">
                <Image src={data.media} alt={data.alt_name} height={data.ht} width={data.wd} />
            </div>
            <div className="w-[30%] h-full p-20 flex flex-col items-center justify-center bg-black bg-opacity-60 titleinfo  ">
                <div className={"font-hipnouma text-[8em] mix-blend-exclusion title " + data.text_color}>
                    {data.sNo + ".) " + data.label_name}
                </div>
                <div className={"font-lostar text-[3em] mix-blend-exclusion opacity-90 info " + data.text_color}>
                    {data.label_description}
                </div>
            </div>
        </div>
    </>)
}


export default Reveal