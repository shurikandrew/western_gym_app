import { HiBars3, HiXMark } from "react-icons/hi2";
import {useState} from "react";
import Logo from "@/assets/images/logo-no-background.png";
import Link from "@/components/Navbar/Link/Link.tsx";
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/components/Button/ActionButton.tsx";
import {links} from "@/constants/constants.tsx";

type Props ={
    isTopOfPage: boolean;
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMdScreens = useMediaQuery("(min-width: 1115px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const navbarBg = isTopOfPage ? "" : "bg-background-darker drop-shadow-xl";

    return (
        <nav className={`${flexBetween} ${navbarBg} fixed top-0 z-50 w-full py-3 transition duration-300`}>
            <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
                <img src={Logo} alt="Logo" width={150}/>

                {isAboveMdScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                {
                                    links.map(
                                        (link ) => (
                                            <Link
                                                key={link.page}
                                                page={link.page}
                                                selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage}
                                            />
                                        )
                                    )
                                }
                            </div>

                            <div className={`${flexBetween} gap-8`}>
                                <button>Sign In</button>
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                >Become a Member</ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-accent p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <HiBars3 className="h-6 w-6 text-primary"/>
                        </button>
                    )
                }
            </div>

            {!isAboveMdScreens && (
                <>
                    <div className={`before:content-[''] before:bg-black before:w-[100vw] transition-opacity duration-200 
                        before:h-[100vh] before:top-0 before:left-0 before:fixed before:z-[-3] ${isMenuToggled ? 
                        "before:opacity-30"
                        : "before:content-none"}`}>

                    </div>
                    <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] 
                    drop-shadow-xl bg-background-darker rounded-l-lg div-transition
                    ${isMenuToggled ? "menuShow" : ""}
                    `}>
                        <div className={"flex justify-end p-12 z-30"}>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <HiXMark className={"h-6 w-6 text-primary"}/>
                            </button>
                        </div>

                        <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
                            {
                                links.map(
                                    (link : {page:string} ) => (
                                        <Link
                                            key={link.page}
                                            page={link.page}
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    )
                                )
                            }
                        </div>

                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;