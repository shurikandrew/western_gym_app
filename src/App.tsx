import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar/Navbar.tsx";
import {SelectedPage} from "@/shared/types.ts";
import Home from "@/components/Home/Home.tsx";
import Benefits from "@/components/Benefits/Benefits.tsx";
import Classes from "@/components/Classes/Classes.tsx";
import ContactUs from "@/components/ContactUs/ContactUs.tsx";
import Footer from "@/components/Footer/Footer.tsx";


function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(()=> {
            const handleScroll = () => {
                if(window.scrollY=== 0){
                    setIsTopOfPage(true);
                    setSelectedPage(SelectedPage.Home);
                }
                if(window.scrollY !== 0){
                    setIsTopOfPage(false);
                }
            }
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
  return (
    <div className={"app"}>
        <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <Classes setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
    </div>
  )
}

export default App
