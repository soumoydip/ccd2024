import AlternateHeader from "@/components/blocks/AlternateHeader";
import LeaderboardData from "@/public/assets/content/Leaderboard/content.json"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Speakers",
};

const fakeScoreData = [
    { name: "Alice Johnson", score: "1200", rank: "1" },
    { name: "Bob Smith", score: "1150", rank: "2" },
    { name: "Carol White", score: "1100", rank: "3" },
    { name: "David Brown", score: "1050", rank: "4" },
    { name: "Eva Green", score: "1000", rank: "5" },
    { name: "Frank Black", score: "950", rank: "6" },
    { name: "Grace Wilson", score: "900", rank: "7" },
    { name: "Henry Miller", score: "850", rank: "8" },
    { name: "Ivy Davis", score: "800", rank: "9" },
    { name: "Jack Garcia", score: "750", rank: "10" },
    { name: "Kara Martinez", score: "700", rank: "11" },
    { name: "Leo Taylor", score: "650", rank: "12" },
    { name: "Mia Thomas", score: "600", rank: "13" },
    { name: "Noah Jackson", score: "550", rank: "14" },
    { name: "Olivia Harris", score: "500", rank: "15" },
    { name: "Paul Clark", score: "450", rank: "16" },
    { name: "Quinn Lewis", score: "400", rank: "17" },
    { name: "Ruby Lee", score: "350", rank: "18" },
    { name: "Sam Walker", score: "300", rank: "19" },
    { name: "Tina Young", score: "250", rank: "20" }
];

const fakeEventData = {
    title: "GCCD Extended Events",
    name: "GCCD Kolkata x Flutter Kolkata"
}

export default function Leaderboard() {
    return (
        <section className='flex flex-col w-full max-w-6xl mx-auto space-y-8'>
            <section className='flex flex-col local-container gap-6 p-4 space-y-4'>
                <div className="flex flex-col items-center">
                    {
                        !!LeaderboardData.icon &&
                        <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1338_1050)">
                                <path d="M32.3995 19.3102L24.8795 5.11016C24.1595 3.76016 22.1095 3.76016 21.3895 5.11016L13.8695 19.3102C13.4295 20.1302 12.4095 20.5302 11.4795 20.2202L6.68952 18.6502C5.18952 18.1602 3.71952 19.4702 4.17952 20.9002L8.34952 33.8602C8.59952 34.6302 9.35952 35.1602 10.2095 35.1602H36.0395C36.8995 35.1602 37.6595 34.6302 37.8995 33.8602L42.0695 20.9002C42.5295 19.4702 41.0695 18.1502 39.5595 18.6502L34.7695 20.2202C33.8395 20.5202 32.8195 20.1302 32.3795 19.3102H32.3995Z" fill="#FBBC04" />
                                <path d="M27.2293 4.1C27.2293 6.36 25.3993 8.2 23.1293 8.2C20.8593 8.2 19.0293 6.37 19.0293 4.1C19.0293 1.83 20.8593 0 23.1293 0C25.3993 0 27.2293 1.83 27.2293 4.1Z" fill="#F8BF2A" />
                                <path d="M45.3797 18.7191C45.3797 20.9791 43.5397 22.8191 41.2797 22.8191C39.0197 22.8191 37.1797 20.9891 37.1797 18.7191C37.1797 16.4491 39.0097 14.6191 41.2797 14.6191C43.5497 14.6191 45.3797 16.4491 45.3797 18.7191Z" fill="#FBBC04" />
                                <path d="M8.19023 18.7191C8.19023 20.9791 6.36023 22.8191 4.09023 22.8191C1.82023 22.8191 -0.00976562 20.9891 -0.00976562 18.7191C-0.00976562 16.4491 1.82023 14.6191 4.09023 14.6191C6.36023 14.6191 8.19023 16.4491 8.19023 18.7191Z" fill="#F8BF2A" />
                                <path d="M39.5802 18.6401L34.7902 20.2101C33.8602 20.5101 32.8402 20.1201 32.4002 19.3001L29.9002 14.5801C23.8702 21.5601 16.7002 28.0101 8.16016 33.2401L8.35016 33.8401C8.60016 34.6101 9.36016 35.1401 10.2102 35.1401H36.0402C36.9002 35.1401 37.6602 34.6101 37.9002 33.8401L42.0702 20.8801C42.5302 19.4501 41.0702 18.1301 39.5602 18.6301L39.5802 18.6401Z" fill="#FBBC04" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1338_1050">
                                    <rect width="45.38" height="35.15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    }
                    <AlternateHeader
                        title={LeaderboardData.title}
                        color={LeaderboardData.color}
                        description={LeaderboardData.description}
                    />
                </div>
            </section>
            <section style={{ marginTop: "250px", marginBottom: "250px" }} className="hidden md:flex relative justify-center items-end">
                <div className="flex top-28 flex-col justify-center relative">
                    <div id="top" className="flex items-center gap-y-20 h-full flex-col absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '32%' }}>
                        <div className="flex items-center flex-col">
                            <img src="/assets/images/leaderboard-cloud.png" alt="" />
                            <span className=" font-bold">{fakeScoreData[1].name}</span>
                            <button className="bg-google-blue w-32 text-center text-lg font-bold border-white border-2 rounded-md" disabled>{fakeScoreData[1].rank}nd</button>
                        </div>
                        <div className="flex flex-col text-center gap-y-2 py-2 text-black h-20 w-44 text-xs text-nowrap bg-white rounded-md border">
                            <span className=" font-semibold">{fakeEventData.title}</span>
                            <span className="text-wrap">{fakeEventData.name}</span>
                        </div>
                    </div>
                    <svg width="243" height="455" viewBox="0 0 200 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0078125 29.5312L140.566 0.000545715L242.046 49.1549L101.488 78.6856L0.0078125 29.5312Z"
                            fill="url(#paint0_linear_1338_1032)" />
                        <path d="M241.596 49.0469L101.488 78.685L101.939 455L241.596 416.381V49.0469Z" fill="#4285F4" />
                        <path d="M0.000167847 29.2891L101.488 78.4781L101.938 455.001L0.000167847 416.36V29.2891Z" fill="#4285F4" />
                        <path d="M0.000167847 29.5234L101.488 78.6853L101.938 455L0.000167847 416.381V29.5234Z" fill="black"
                            fill-opacity="0.25" />
                        <defs>
                            <linearGradient id="paint0_linear_1338_1032" x1="-33.2312" y1="66.1119" x2="411.851" y2="344.174"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4285F4" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex top-10 flex-col justify-center relative">
                    <div id="top" className="flex items-center gap-y-20 h-full flex-col absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '32%' }}>
                        <div className=" flex items-center flex-col">
                            <img src="/assets/images/leaderboard-cloud.png" alt="" />
                            <span className=" font-bold">{fakeScoreData[0].name}</span>
                            <button className="bg-google-red w-32 text-center text-lg font-bold border-white border-2 rounded-md" disabled>{fakeScoreData[0].rank}st</button>
                        </div>
                        <div className="flex flex-col text-center gap-y-2 py-2 text-black h-20 w-44 text-xs text-nowrap bg-white rounded-md border">
                            <span className=" font-semibold">{fakeEventData.title}</span>
                            <span className="text-wrap">{fakeEventData.name}</span>
                        </div>
                    </div>
                    <svg width="243" height="455" viewBox="0 0 243 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0078125 29.5312L140.566 0.000545715L242.046 49.1549L101.488 78.6856L0.0078125 29.5312Z"
                            fill="url(#paint0_linear_1338_1045)" />
                        <path d="M241.596 49.0469L101.488 78.685L101.939 455L241.596 416.381V49.0469Z" fill="#E84435" />
                        <path d="M0.000167847 29.2891L101.488 78.5L101.938 455.001L0.000167847 416.36V29.2891Z" fill="#E84435" />
                        <path d="M0.000167847 29.5234L101.488 78.6853L101.938 455L0.000167847 416.381V29.5234Z" fill="black"
                            fill-opacity="0.25" />
                        <defs>
                            <linearGradient id="paint0_linear_1338_1045" x1="-279.5" y1="79.0005" x2="217.689" y2="432.57"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E84435" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex top-40 flex-col justify-center relative">
                    <div id="top" className="flex items-center gap-y-20 h-full flex-col absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '32%' }}>
                        <div className="flex items-center flex-col">
                            <img src="/assets/images/leaderboard-cloud.png" alt="" />
                            <span className=" font-bold">{fakeScoreData[2].name}</span>
                            <button className="bg-google-green w-32 text-center text-lg font-bold border-white border-2 rounded-md" disabled>{fakeScoreData[2].rank}rd</button>
                        </div>
                        <div className="flex flex-col text-center gap-y-2 py-2 text-black h-20 w-44 text-xs text-nowrap bg-white rounded-md border">
                            <span className=" font-semibold">{fakeEventData.title}</span>
                            <span className="text-wrap">{fakeEventData.name}</span>
                        </div>
                    </div>
                    <svg width="243" height="455" viewBox="10 0 243 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0078125 29.5312L140.566 0.000545715L242.046 49.1549L101.488 78.6856L0.0078125 29.5312Z"
                            fill="url(#paint0_linear_1338_1027)" />
                        <path d="M241.596 49.0469L101.488 78.685L101.939 455L241.596 416.381V49.0469Z" fill="#0F9D58" />
                        <path d="M0.000167847 29.2891L101.488 78.4781L101.938 455.001L0.000167847 416.36V29.2891Z" fill="#0F9D58" />
                        <path d="M0.000167847 29.5234L101.488 78.6853L101.938 455L0.000167847 416.381V29.5234Z" fill="black"
                            fill-opacity="0.25" />
                        <defs>
                            <linearGradient id="paint0_linear_1338_1027" x1="-225.501" y1="79.0006" x2="411.526" y2="540.937"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0F9D58" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="bg-black h-72 absolute  z-10 w-full top-full flex justify-center ">
                </div>
            </section>
            <div className="flex bg-black md:relative w-full -top-72 z-50 justify-center">
                <div className="py-10 w-3/4 flex flex-col">
                    <h2 className=" text-4xl font-bold text-google-yellow h-min">Lists of people joined</h2>
                    <nav className="pt-2 text-xl justify-between flex">
                        <ul className="justify-between w-full flex">
                            <li>Rank</li>
                            <li>Event Name</li>
                            <li>Contest Name</li>
                            <li>Atendee Name</li>
                        </ul>
                        <span className="mx-8">Score</span>
                    </nav>
                    <div className="flex flex-col gap-y-2">
                        {fakeScoreData.slice(3).map((data, key) => {
                            return (
                                <ul key={key} className=" p-2 *:pr-8 text-black bg-white rounded-md justify-between items-center text-xs flex">
                                    <li>{data.rank}</li>
                                    <li>{fakeEventData.title}</li>
                                    <li>{fakeEventData.name}</li>
                                    <li>{data.name}</li>
                                    <li>{data.score}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}