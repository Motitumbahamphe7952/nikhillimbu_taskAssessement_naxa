import React from "react";

interface HeroProps {
  subheading?: string;
  heading?: string;
  middleHeading?: string;
  afterHeading?: string;
  description?: string;
  highlightedText?: string;
  ctaPrimary?: string;
  showCta?: boolean;
  bgImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  subheading = "PORTFOLIO",
  heading = "Diverse, Impactful, and Reliable.",
  middleHeading = "and",
  afterHeading = "Reliable.",
  description,
  highlightedText = "Impactful",
}) => {
  // Split the heading at the position of middleHeading
  const words = heading.split(" ");
  let before = [];
  let after = [];
  let found = false;

  for (const word of words) {
    if (!found) {
      before.push(word);
      if (word.replace(/[.,]/g, "") === middleHeading) {
        found = true;
      }
    } else {
      after.push(word);
    }
  }

  const afterHeadingToShow = afterHeading || after.join(" ");

  return (
    <section className="w-full px-4 sm:px-8 py-50 md:pt-6 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subheading */}
        <h4 className="text-md sm:text-lg md:text-xl font-semibold text-yellow-500 tracking-wide uppercase mb-2 sm:mb-4">
          {subheading}
        </h4>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight md:leading-tight">
          {/* First part of heading */}
          <div className="inline-block">
            {before.map((word, i) => (
              <span
                key={i}
                className={
                  word.replace(/[.,]/g, "") === highlightedText
                    ? "text-blue-600"
                    : "text-gray-900"
                }
              >
                {word}{" "}
              </span>
            ))}
          </div>
          
          {/* Second part of heading */}
          {afterHeadingToShow && (
            <div className="block mt-1 sm:mt-2 text-gray-900">
              {afterHeadingToShow}
            </div>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;