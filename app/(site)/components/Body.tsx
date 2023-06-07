import { getProjects } from '@/sanity/sanity-utils';
import { VideoProps } from '@/types';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { MyContext } from '@/components/Layout';

const Body = () => {
  const [projects, setProjects] = useState<VideoProps[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { language } = useContext(MyContext);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className='grid md:grid-cols-2 gap-x-2 grid-cols-1  p-10   items-center '>
      {projects.map((project) => (
        <Link key={project._id} href={`/videos/${project._id}`}>
          <motion.div
            className=' relative group'
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <LazyLoadImage
              className={`Image  w-[400px] object-cover `}
              src={project.imageUrl}
              threshold={0}
              effect='opacity'
              afterLoad={handleImageLoad}
            />
            <div className='absolute transition opacity-0  flex items-center bg-white py-3 px-8 drop-shadow-md bottom-14 left-6 group-hover:opacity-100 hover:scale-110'>
              <FaPlay className='text-black' />
            </div>
            <div className='text-sm max-w-[400px] text-center mt-2 truncate group-hover:text-[#ffc93a] transition'>
              {project?.title[language]}
            </div>
            <div className='font-Praktika text-xs max-w-[400px] text-zinc-500 uppercase truncate text-center'>
              {project?.subtitle[language]}
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Body;
