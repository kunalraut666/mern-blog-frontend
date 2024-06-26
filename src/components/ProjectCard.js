import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link}) => {

  return (
    <div className="w-full mb-4">
      <a href={link} target="_blank" rel="noreferrer">
        <div>
          <img className="w-full h-auto" src={imgUrl} alt={title} /> {/* Added h-auto to ensure proper image height */}
          <div className="mt-2">
            <strong className="text-grey-900">{title}</strong>
            <br />
            <span className="text-grey-600 mt-2 mb-5">{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
