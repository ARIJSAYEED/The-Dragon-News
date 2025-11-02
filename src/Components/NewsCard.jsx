import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
    } = news;

    return (
        <div className="border border-base-300 rounded-sm overflow-hidden shadow-lg bg-white">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt="author"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            {/* Title */}
            <div className="px-5 py-3">
                <h1 className="text-lg font-bold text-gray-900 leading-snug">
                    {title}
                </h1>
            </div>

            {/* Image */}
            <div className="px-5">
                <img
                    src={thumbnail_url}
                    alt="thumbnail"
                    className="w-full rounded-md object-cover"
                />
            </div>

            {/* Details */}
            <div className="px-5 py-3 text-sm text-gray-700">
                <p>
                    {format(new Date(author.published_date), "EEEE, MMMM dd, yyyy")} |{" "}
                    <span className="text-gray-500">
                        Tag Cloud Tags: {tags.join(", ")}
                    </span>{" "}
                    – {details.slice(0, 160)}...
                </p>
                <button className="text-orange-500 font-semibold mt-2 hover:underline">
                    Read More
                </button>
            </div>

            <hr className="my-3 mx-5 border-base-300" />


            {/* Footer */}
            <div className="flex items-center justify-between px-5 pb-4">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={`${i < rating.number ? "text-orange-400" : "text-gray-300"}`}
                        />
                    ))}
                    <span className="ml-2 text-gray-700 font-medium">
                        {rating.number.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
