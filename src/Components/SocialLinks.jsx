import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
    const socials = [
        { id: 1, name: "Facebook", icon: <FaFacebookF className="text-[#1877F2]" /> },
        { id: 2, name: "Twitter", icon: <FaTwitter className="text-[#1DA1F2]" /> },
        { id: 3, name: "Instagram", icon: <FaInstagram className="text-[#E4405F]" /> },
    ];

    return (
        <div className="rounded-sm divide-y divide-gray-100 bg-white border border-base-300">
            {socials.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-base-200">
                        {item.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SocialLinks;
