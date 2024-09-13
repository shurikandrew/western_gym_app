import {motion} from "framer-motion";

type Props = {
    title: string;
    img: string;
    desc: string;
}

const ClassCard = ({title,img,desc}: Props) => {
    const overlayStyles = `
    p-5 absolute z-30 flex 
    h-[350px] w-[550px] flex-col
    items-center justify-center
    whitespace-normal bg-accent
    text-center opacity-0 transition duration-500 hover:opacity-90
    `;

    return (
        <li className={"relative mx-5 inline-block h-[350px] w-[550px]"}>
            <div className={overlayStyles}>
                <p className={"text-2xl"}>
                    {title}
                </p>
                <p className={"mt-5"}>
                    {desc}
                </p>
            </div>
            <div style={{backgroundImage: `url('${img}')`}} className={"h-full w-full bg-cover bg-no-repeat bg-center"}>

            </div>
        </li>
    );
};

export default ClassCard;