import {motion} from "framer-motion";
import {SelectedPage} from "@/shared/types.ts";
import HText from "@/components/HText/HText.tsx";
import {useForm} from "react-hook-form";
import manImg from "@/assets/images/athlete-bodybuilder-muscle-barbell-lifting.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `
    mt-5 w-full rounded-lg bg-background 
    px-5 py-3 placeholder-primary-darker 
    outline outline-0 focus:outline-2 outline-accent focus:bg-background-darker
    transition duration-300
     `;

    const {
        register,
        trigger,
        formState: {errors}
    }= useForm();

    const onSubmit = async (e : any) => {
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }
    }

    return (
        <section id={"contactus"} className={"pt-24 pb-32 bg-background-2"}>

           <motion.div
               className={"mx-auto w-5/6"}
               onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
           >
               <motion.div
                   className={"md:w-3/5"}
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
                       Join us <span className={"text-accent"}>now</span>
                   </HText>
                   <motion.p
                       className="my-5"
                       initial={"hidden"}
                       whileInView={"visible"}
                       viewport={{once: true, amount: 0.5 }}
                       transition={{duration: 0.5, delay:0.2}}
                       variants={{
                           hidden: {opacity: 0, x:-100},
                           visible: {opacity: 1, x:0}
                       }}
                   >
                       Join us to acquire a wonderful experience at our gym
                   </motion.p>
               </motion.div>

               <div className={"mt-10 justify-between gap-8 md:flex-row flex flex-col-reverse relative z-[0] " +
                   "before:absolute before:bottom-[-100px] md:before:content-[''] md:before:bg-bgtext before:opacity-50 before:left-[-70px] before:z-[-10] md:before:w-[65rem] md:before:h-[300px] before:bg-no-repeat before:bg-contain"}>
                   <motion.div
                       initial={"hidden"}
                       whileInView={"visible"}
                       viewport={{once: true, amount: 0.5 }}
                       variants={container}
                   >
                       <motion.div
                           initial={"hidden"}
                           whileInView={"visible"}
                           viewport={{once: true, amount: 0.5 }}
                           transition={{duration: 0.5, delay:0.25}}
                           variants={{
                               hidden: {opacity: 0, x:-100},
                               visible: {opacity: 1, x:0}
                           }}
                       >
                           <form
                               target={"_blank"}
                               onSubmit={onSubmit}
                               method={"POST"}
                               action={"https://formsubmit.co/a1622a4eb28b5e0e34f0e3ef8784e863"}
                               className={`before:bg-secondary p-10 pt-1 before:rounded-lg before:content-['']
                                before:w-full before:h-full before:top-0 before:left-0 relative before:absolute 
                                before:z-[-3] before:opacity-50 z-40 border-2 border-secondary rounded-xl`}
                           >
                               <motion.div
                                   initial={"hidden"}
                                   whileInView={"visible"}
                                   viewport={{once: true, amount: 0.5 }}
                                   transition={{duration: 0.5, delay:0.3}}
                                   variants={{
                                       hidden: {opacity: 0, y:100},
                                       visible: {opacity: 1, y:0}
                                   }}
                               >
                                   <input
                                       className={inputStyles}
                                       type={"text"}
                                       placeholder={"Name"}
                                       {...register("name",
                                           {
                                               required: true,
                                               maxLength:100
                                           }
                                       )}
                                   />
                                   {errors.name && (
                                       <p className={"mt-1 text-red-500"}>
                                           {errors.name.type === "required" && "This field is required."}
                                           {errors.name.type === "maxLength" && "Maximum length is 100 characters."}
                                       </p>
                                   )}
                               </motion.div>

                               <motion.div
                                   initial={"hidden"}
                                   whileInView={"visible"}
                                   viewport={{once: true, amount: 0.5 }}
                                   transition={{duration: 0.5, delay:0.3}}
                                   variants={{
                                       hidden: {opacity: 0, y:100},
                                       visible: {opacity: 1, y:0}
                                   }}
                               >
                                   <input
                                       className={inputStyles}
                                       type={"text"}
                                       placeholder={"Email"}
                                       {...register("email",
                                           {
                                               required: true,
                                               pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                           }
                                       )}
                                   />
                                   {errors.email && (
                                       <p className={"mt-1 text-red-500"}>
                                           {errors.email.type === "required" && "This field is required."}
                                           {errors.email.type === "pattern" && "Invalid email address."}
                                       </p>
                                   )}
                               </motion.div>

                               <motion.div
                                   initial={"hidden"}
                                   whileInView={"visible"}
                                   viewport={{once: true, amount: 0.5 }}
                                   transition={{duration: 0.5, delay:0.3}}
                                   variants={{
                                       hidden: {opacity: 0, y:100},
                                       visible: {opacity: 1, y:0}
                                   }}
                               >
                                   <textarea
                                       className={inputStyles}
                                       rows={4}
                                       cols={50}
                                       placeholder={"Message"}
                                       {...register("msg",
                                           {
                                               required: true,
                                               maxLength:2000
                                           }
                                       )}
                                   />
                                   {errors.msg && (
                                       <p className={"mt-1 text-red-500"}>
                                           {errors.msg.type === "required" && "This field is required."}
                                           {errors.msg.type === "maxLength" && "Maximum length is 2000 characters."}
                                       </p>
                                   )}
                               </motion.div>

                               <motion.div
                                   initial={"hidden"}
                                   whileInView={"visible"}
                                   viewport={{once: true, amount: 0.5 }}
                                   transition={{duration: 0.5, delay:0.3}}
                                   variants={{
                                       hidden: {opacity: 0, y:100},
                                       visible: {opacity: 1, y:0}
                                   }}
                               >
                                   <button
                                       type={"submit"}
                                       className={"mt-5 rounded-lg px-20 py-3 hover:bg-secondary transition duration-300 bg-accent"}
                                   >
                                       Submit
                                   </button>
                               </motion.div>
                           </form>
                       </motion.div>
                   </motion.div>

                   <motion.div>
                       <img src={manImg} alt="" className={"w-[400px] max-md:w-[200px] h-full mx-auto"}/>
                   </motion.div>
                   <motion.div>

                   </motion.div>
               </div>
           </motion.div>
        </section>
    );
};

export default ContactUs;