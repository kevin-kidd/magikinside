import {FunctionComponent} from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

const data = [
    {
        id: "wenmint",
        question: "When will the Magik Inside mint take place?",
        answer: "We will post an announcement shortly regarding the mint date for Magik Inside. Make sure to join the Discord server to keep up-to-date with all the latest information."
    },
    {
        id: "unique",
        question: "What makes Magik Inside such a unique collection?",
        answer: "Magik Inside is much more than just an NFT collection, it is a platform for an interactive collectible series called Magik Cards."
    },
    {
        id: "utilities",
        question: "What are Magik Cards? What are their utilities?",
        answer: "Magik Cards are a collectible series of tarot cards. The goal is to collect and trade cards until you have completed an entire deck." +
            " Filling a deck gives you the ability to upgrade your Magik Inside NFT. Upgrading will mint a brand new 'legendary' NFT made especially for you." +
            " These special NFTs are extremely rare and come with some exclusive perks."
    },
    {
        id: "collect",
        question: "How do I collect Magik Cards?",
        answer: "The first wave of Magik Cards will be distributed in an airdrop exclusively to Magik Inside holders. The following waves will consist of further airdrops to the Aptos community and public mints. " +
            " Following this, there will be many events with opportunities to earn cards. Collecting and trading cards will help you climb the leaderboard, which gives you access to exclusive events with prizes."
    },
    {
        id: "marketplace",
        question: "What marketplace will Magik Inside be listed on?",
        answer: "Our team is communicating with many of the marketplaces within the Aptos ecosystem. We will coordinate for Magik Inside and Magik Cards to be listed after each mint completes."
    }
]

export const FAQ: FunctionComponent = () => {
    return (
        <div className="w-full h-full min-h-screen flex flex-col sm:pb-0 bg-[#171717]" id="faq">
            <h1 className="text-6xl text-white font-AHS w-full text-center my-12">
                FAQ
            </h1>
            <div className="sm:pt-10 pb-20 flex-col flex justify-around gap-y-6 items-center mx-auto w-full max-w-5xl">
                { data.map((item) => (
                    <div id={item.id} key={`faq-item-${item.question.slice(0,5)}`} tabIndex={0} className="w-2/3 collapse collapse-arrow border border-base-300 bg-black rounded-md faq-box">
                        <div className="collapse-title text-gray-300 text-xl font-medium">
                            {item.question}
                        </div>
                        <div className="collapse-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};