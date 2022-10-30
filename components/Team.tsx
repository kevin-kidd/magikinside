import {FunctionComponent} from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import {TeamCard} from "./TeamCard";

const teamMembers = [
    {
        name: "Seer",
        title: "Artist",
        socials: {
            discord: "Seer#4782"
        },
        image: "/team-2.webp"
    },
    {
        name: "Kevin",
        title: "Developer",
        socials: {
            discord: "KevinK#3387",
            twitter: "https://twitter.com/KevinAKidd"
        },
        image: "/team-1.webp"
    },
    {
        name: "Community Mod",
        title: "Recruiting",
        socials: {
            discord: "Apply in Discord!",
            twitter: "https://twitter.com/MagikInside"
        },
        image: "/team-3.webp"
    }
]

export const Team: FunctionComponent = () => {
    return (
        <div className="w-full h-full min-h-screen bg-black flex flex-col pb-10 sm:pb-0 team-section" id="team">
            <h1 className="text-6xl text-white font-AHS w-full text-center my-12">
                TEAM
            </h1>
            <div className="h-full sm:pt-20 flex-col sm:flex-row flex justify-around gap-y-10 items-center mx-auto w-full max-w-5xl">
                <Fade bottom>
                    { teamMembers.map((member) => <TeamCard key={`team-member-${member.name}`} {...member} />)}
                </Fade>
            </div>
        </div>
    )
};