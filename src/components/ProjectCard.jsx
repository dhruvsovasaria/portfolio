import React from "react";

const ProjectCard = ({
  title,
  description,
  awardText,
  awardYear,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white p-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          🏆 {awardText} {awardYear}
        </span>
      </div>
      {imageUrl && (
        <div className="px-6 py-4">
          <img className="w-full" src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
