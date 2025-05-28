import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Reviews() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleReview = (index: number) => {
    setExpanded(prev => (prev === index ? null : index));
  };

  const reviews = [
    {
      name: "John Doe",
      review: "This is a review",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      rating: 5,
    },
    {
      name: "Sarah Smith",
      review: "Exceptional service",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5.0,
    },
    {
      name: "Ali Ben Youssef",
      review: "Solid experience",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4.5,
    },

  ];

  return (
    <div className="p-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 className="text-4xl font-semibold text-[#438D98]">
          What our customers say
        </h1>
        <div className="flex items-center mt-8">
          <StarIcon sx={{ fontSize: 40, color: "#FAAF00" }} />
          <h1 className="text-2xl"> 4.9</h1>
        </div>
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className={`bg-sky-50 rounded-2xl p-6 h-fit ${
            index === 1 ? "lg:-mt-20" : ""
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <Rating
              name={`rating-${index}`}
              value={review.rating}
              precision={0.5}
              readOnly
              size="large"
            />
            <button
              className="bg-[#438D98] p-2 rounded-2xl transition-transform"
              onClick={() => toggleReview(index)}
            >
              <ArrowForwardIosIcon
                fontSize="medium"
                className={`text-white transform transition-transform duration-300 ${
                  expanded === index ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          <div className="mb-2 text-3xl font-semibold text-gray-800">
            "{review.review}"
          </div>

          {/* Collapsible description */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              expanded === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600 text-sm mb-4 mt-2 text-xl">{review.text}</p>
          </div>

          <div className="text-gray-900 text-xl">- {review.name}</div>
        </div>
      ))}
    </div>
  );
}
