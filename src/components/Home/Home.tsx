import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/components/Button/ActionButton.tsx";
import HomeText from "@/assets/images/western-gym-high-resolution-logo-transparent.png";
import HomeImg from "@/assets/images/close-up-squirrel-doing-liftings_23-2151004448.jpg-removebg-preview.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Home = ({setSelectedPage} : Props) => {
    const isAboveMdScreens = useMediaQuery("(min-width: 1115px)");

    return (
        <section
            id={"home"}
            className={"gap-16 bg-background py-10 md:h-full md:pb-0"}
        >
            <motion.div
                className={"flex flex-col md:flex-row mx-auto w-5/6 items-center justify-center md:h-5/6"}
                onViewportEnter={ ()=> setSelectedPage(SelectedPage.Home) }
            >
                <div className={"z-10 mt-32 md:basis-3/5"}>
                    <div className={"md:-mt-20"}>
                        <motion.div
                            className={"relative"}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{once: true, amount: 0.5 }}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x:-100},
                                visible: {opacity: 1, x:0}
                            }}
                        >
                            <div className={"before:absolute before:-top-24 md:before:content-[''] md:before:bg-bgtext before:opacity-50 before:-left-20 before:z-[-10] md:before:w-[65rem] md:before:h-[300px] before:bg-no-repeat before:bg-contain flex flex-col"}>
                                <img src={HomeText} alt="home-page-text"/>
                                <span className={"text-xl md:text-3xl text-center text-secondary"}>one-of-a-kind fitness</span>
                            </div >
                        </motion.div>

                        <motion.p
                            className={"mt-8 text-sm"}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{once: true, amount: 0.5 }}
                            transition={{duration: 0.5, delay: 0.1}}
                            variants={{
                                hidden: {opacity: 0, x:-100},
                                visible: {opacity: 1, x:0}
                            }}
                        >
                            Unrivaled Western Gym. Unparalleled Training Fitness Classes.
                            World Class Studios to get the Body Shapes That anyone Dream of...
                            Get your chance now!
                        </motion.p>
                    </div>

                    <motion.div
                        className={"mt-8 flex items-center gap-8"}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{once: true, amount: 0.5 }}
                        transition={{duration: 0.5, delay:0.2}}
                        variants={{
                            hidden: {opacity: 0, x:-100},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                            className={"text-sm underline text-accent hover:text-secondary transition duration-300"}
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                <div className={"md:z-10 flex basis-3/5 md:ml-40 md:mt-16 md:justify-end"}>
                    <img src={HomeImg} alt="home-page-graphic"/>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;