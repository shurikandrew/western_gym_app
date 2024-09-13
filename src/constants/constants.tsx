import { PiCowboyHatFill } from "react-icons/pi";
import { MdGroups3 } from "react-icons/md";
import { TbHomeFilled } from "react-icons/tb";
import {BenefitType, SessionType} from "@/shared/types.ts";
import {
    img1,
    img7,
    img8,
    img6,
    img3,
    img4,
    img5,
    img2
} from "@/assets/images/scroll";

export const links = [
    {
        page: "Home"
    },
    {
        page: "Benefits"
    },
    {
        page: "Our Classes"
    },
    {
        page: "Contact Us"
    }
];

export const benefits: Array<BenefitType> = [
    {
        icon: <PiCowboyHatFill className={"w-12 h-12"}/>,
        title: "Best coaches from Texas",
        desc: "Meet incredible coaches who own and maintain their ranch by themself! Learn from people who are professionals in their area."
    },
    {
        icon: <MdGroups3 className={"w-12 h-12"}/>,
        title: "100% of diverse classes",
        desc: "Our classes are suitable for anyone who wants to join us and reach their goal. Fitness has no borders!"
    },
    {
        icon: <TbHomeFilled className={"w-12 h-12"}/>,
        title: "The new picturesque gym",
        desc: "Our gyms are designed by professionals. Every part of the building is a prove of our attention to details."
    }
];


export const imgList:Array<SessionType> = [
    {
        img: img1,
        title: "Newest Equipment",
        desc:"In our gyms we use only newest equipment."
    },
    {
        img: img2,
        title: "Authentic Design",
        desc:"The spirit of the Western movies and books."
    },
    {
        img: img3,
        title: "Biceps Workout",
        desc:"Photos from one of our training session. "
    },
    {
        img: img4,
        title: "Mike Typhoon",
        desc:"One of the best our coaches. Friendly guy!"
    },
    {
        img: img5,
        title: "Equipment on-demand",
        desc:"You can request anything. If we don't have it, just ask."
    },
    {
        img: img6,
        title: "Abs workout",
        desc:"Another photo from one of our sessions."
    },
    {
        img: img7,
        title: "Aerobics Equipment",
        desc:"In our gym we have any kind of a equipment."
    },
    {
        img: img8,
        title: "Our Team",
        desc:"Those fellas are co-founders of this wonderful place."
    }
]