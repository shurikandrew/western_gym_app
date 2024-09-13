import Logo from "@/assets/images/logo-white.png";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className={"bg-black py-8"}>
            <div className="mx-auto justify-content w-5/6 gap-16 md:flex-row flex flex-col">
                <div className=" w-1/2 ">
                    <img src={Logo} alt="Logo" className={"h-[100px]"}/>
                    <p className={"text-white"}>
                        © Western Gym. All Rights Reserved.
                    </p>
                </div>
                <div className={" flex items-baseline"}>
                    <div className={" max-md:mt-10"}>
                        <h4 className={"text-white text-lg"}>
                            Links
                        </h4>
                        <p className={""}>
                            <a
                                className={"text-white text-sm underline"}
                                href="https://www.freepik.com/free-photo/athlete-bodybuilder-muscle-barbell-lifting_1152636.htm#query=gym%20png&position=5&from_view=keyword&track=ais_hybrid&uuid=e190a904-1bea-4cfd-9af5-24f87d4b5cb6"
                            >
                                Image by luis_molinero on Freepik
                            </a>
                            <br/>
                            <a
                                className={"text-white text-sm underline"}
                                href="https://www.freepik.com/"
                            >
                                Images from Freepik
                            </a>
                        </p>
                    </div>
                    <div className={"ml-20 text-white"}>
                        <h4 className={"text-lg"}>
                            Social Media
                        </h4>
                        <div className={" gap-3 flex"}>
                            <FaSquareFacebook className={"h-6 w-6"}/>
                            <FaYoutube className={"h-6 w-6"}/>
                            <FaSquareInstagram className={"h-6 w-6"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;