// SkillItem.js
import React from 'react';

const SkillItem = ({ iconSrc, label }) => {
  return (
    <div className="relative w-[100px] max-sm:w-[75px] h-[100px] max-sm:h-[75px] shadow-xl rounded-full place-content-center grid translate-x-[100px] max-sm:translate-x-1 ">
      <img src={iconSrc} alt="icon" className="max-sm:h-[45px] h-[55px] rounded-full" />
      <p className="absolute top-5 left-[120px] h-[40px] text-xl max-sm:text-[25px] to-slate-500 mt-5 pl-1 sm:block">{label.replace(' ', '\u00A0')}</p>
    </div>
  );
};

export default SkillItem;
