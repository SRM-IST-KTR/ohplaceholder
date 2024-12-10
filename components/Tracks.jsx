import { cn } from "@/lib/utils";
import {
    IconBooks,
    IconHeart,
    IconShovelPitchforks,
    IconCurrencyBitcoin,
    IconFlask,
} from "@tabler/icons-react";

export function Tracks() {
    const features = [
        {
            title: "EdTech",
            description: "Innovative solutions for the future of education. Empowering learners and educators alike.",
            icon: <IconBooks />,
        },
        {
            title: "Healthcare",
            description: "Improving health and wellness with technology. Innovations in care, treatment, and accessibility.",
            icon: <IconHeart />,
        },
        {
            title: "Agritech",
            description: "Transforming agriculture through innovation. Solutions for sustainable farming and food production.",
            icon: <IconShovelPitchforks />,
        },
        {
            title: "Web3 and Crypto",
            description: "Building decentralized applications and exploring blockchain technology's potential.",
            icon: <IconCurrencyBitcoin />,
        },
        {
            title: "Open Innovation",
            description: "Collaborating across industries to create groundbreaking ideas and products.",
            icon: <IconFlask />,
        }
    ];

    return (
        <div className="mt-20" id="tracks">
            <h1 className="text-[#FCF961] text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg text-center">
                PARTNERS AND SPONSORS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-white">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                    {title}
                </span>
            </div>
            <p
                className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
