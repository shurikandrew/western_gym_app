import { SelectedPage} from "@/shared/types.ts";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";

type Props = {
    icon: JSX.Element;
    title: string;
    desc: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariant={
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1}
}

const BenefitCard = ({icon, desc, title, setSelectedPage} : Props) => {
    return (
        <motion.div
            variants={childVariant}
            className={"mt-5 rounded-md border-2 border-secondary px-5 py-16 text-center hover:shadow-2xl hover:bg-background-darker outline outline-0 hover:outline-2 outline-secondary transition-all duration-200"}>
            <div className={"mb-4 flex justify-center"}>
                <div className={"rounded-full border-2 border-secondary bg-accent p-4"}>
                    {icon}
                </div>
            </div>
            <h4 className={"text-2xl"}>{title}</h4>
            <p className={"my-3"}>{desc}</p>
            <AnchorLink
                className={"text-sm text-accent underline hover:text-secondary transition duration-300"}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    );
};

export default BenefitCard;