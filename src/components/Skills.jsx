import React from 'react';
import { FaPaintBrush, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaGithub } from 'react-icons/fa';
import { SiKrita, SiCoreldraw, SiFigma, SiCodeigniter, SiSublimetext, SiXampp } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { TbBrandVscode } from 'react-icons/tb';

const artSkills = [
  { name: 'Krita', icon: <SiKrita size={64} color="#37A5E4" /> },
  { name: 'IbisPaint', icon: <FaPaintBrush size={64} color="#6385FF" /> },
  { name: 'Infinite Design', icon: <MdDesignServices size={64} color="#03A9F4" /> },
  { name: 'CorelDraw', icon: <SiCoreldraw size={64} color="#22C55E" /> },
  { name: 'Figma', icon: <SiFigma size={64} color="#F24E1E" /> },
];

const devSkills = [
  { name: 'HTML', icon: <FaHtml5 size={64} color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt size={64} color="#1572B6" /> },
  { name: 'JS', icon: <FaJs size={64} color="#F7DF1E" /> },
  { name: 'PHP', icon: <FaPhp size={64} color="#777BB4" /> },
  { name: 'CodeIgniter3', icon: <SiCodeigniter size={64} color="#EE4323" /> },
  { name: 'Laravel', icon: <FaLaravel size={64} color="#FF2D20" /> },
  { name: 'VSCode', icon: <TbBrandVscode size={64} color="#007ACC" /> },
  { name: 'SublimeText', icon: <SiSublimetext size={64} color="#FF9800" /> },
  { name: 'XAMPP', icon: <SiXampp size={64} color="#FB7A24" /> },
  { name: 'GitHub', icon: <FaGithub size={64} color="#FFFFFF" /> },
];

export default function Skills() {
  // We duplicate the arrays to create a seamless infinite marquee effect
  const artList = [...artSkills, ...artSkills, ...artSkills, ...artSkills];
  const devList = [...devSkills, ...devSkills, ...devSkills, ...devSkills];

  return (
    <section className="w-full py-24 bg-[#061423] overflow-hidden flex flex-col items-center">
      
      <div className="mb-16 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#7dd3fc]">Skills & Tools</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Art Skills - Moving Left */}
      <div className="w-full flex overflow-hidden">
        <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
          {artList.map((skill, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center justify-center mx-10 my-4 cursor-pointer"
              title={skill.name}
            >
              {skill.icon}
              <span className="absolute -bottom-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap bg-black/50 px-2 py-1 rounded text-white pointer-events-none z-10">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dev Skills - Moving Right */}
      <div className="w-full flex overflow-hidden mt-12">
        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {devList.map((skill, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center justify-center mx-10 my-4 cursor-pointer"
              title={skill.name}
            >
              {skill.icon}
              <span className="absolute -bottom-8 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap bg-black/50 px-2 py-1 rounded text-white pointer-events-none z-10">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
