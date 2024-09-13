import {SelectedPage, SessionType} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/components/HText/HText.tsx";
import {imgList} from "@/constants/constants.tsx";
import ClassCard from "./ClassCard/ClassCard";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Classes = ({setSelectedPage}: Props) => {
    return (
        <section className={"w-full bg-background py-40"} id={"ourclasses"}>
            <motion.div
                className={"mx-auto w-5/6"}
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-100},
                        visible: {opacity: 1, x:0}
                    }}
                >
                    <div className={"md:w-3/5"}>
                        <HText>
                            Our <span className={"text-accent"}>
                            Classes
                        </span>
                        </HText>
                        <motion.p
                            className="py-5"
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{once: true, amount: 0.5 }}
                            transition={{duration: 0.5, delay:0.2}}
                            variants={{
                                hidden: {opacity: 0, x:-100},
                                visible: {opacity: 1, x:0}
                            }}
                        >
                            During our classes you will be able to work with incredible trainers!
                            Here you can see some photos from our gyms and training sessions:
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once: true, amount: 0.5 }}
                    transition={{duration: 0.5, delay:0.25}}
                    variants={{
                        hidden: {opacity: 0, y:100},
                        visible: {opacity: 1, y:0}
                    }}
                >
                    <div className={" h-[500px] w-full overflow-x-auto overflow-y-hidden  py-10"}>
                        <ul className={"w-[2800px] whitespace-nowrap"}>
                            {imgList.map((item:SessionType) => (
                                <ClassCard
                                    key={item.img}
                                    title={item.title}
                                    img={item.img}
                                    desc={item.desc}
                                />
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Classes;