export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface BenefitType{
    icon: JSX.Element;
    title: string;
    desc: string;
}

export interface SessionType{
    img: string;
    title: string;
    desc: string;
}