import {motion} from "framer-motion";
import {BenefitType, SelectedPage} from "@/shared/types.ts";
import HText from "@/components/HText/HText.tsx";
import {benefits} from "@/constants/constants.tsx";
import BenefitCard from "@/components/Benefits/BenefitCard/BenefitCard.tsx";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },
}

const Benefits = ( {setSelectedPage}: Props ) => {
    return (
        <section
            id={"benefits"}
            className={" py-20 bg-background-2 "}
        >
            <motion.div
                className={"mx-auto w-5/6"}
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className={"md:w-3/5 md:my-5"}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-100},
                        visible: {opacity: 1, x:0}
                    }}
                >
                    <HText>
                        More than just a gym... <br/> A <span className={"text-accent"}>Western</span> Gym!
                    </HText>
                    <motion.p
                        className={"my-5 text-sm"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{once: true, amount: 0.5 }}
                        transition={{duration: 0.5, delay:0.2}}
                        variants={{
                            hidden: {opacity: 0, x:-100},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        We provide world class fitness equipment,
                        trainers and classes to assist you in
                        achieving your fitness goals with ease and pleasure.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mt-5 gap-8 md:grid grid-cols-3 auto-rows-max"
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once: true, amount: 0.5 }}
                    variants={container}
                >
                    { benefits.map((benefit: BenefitType) => (
                        <BenefitCard
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            desc={benefit.desc}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                <div>
                    <img src="" alt=""/>
                    <div>
                        <div className="relative">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;