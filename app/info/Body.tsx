'use client';

import { Roboto_Font } from '@/components/Fonts';
import { MyContext } from '@/components/Layout';
import { getInfo } from '@/sanity/sanity-utils';
import { InfoProps } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Body = () => {
  const [Info, setInfo] = useState<InfoProps[]>([]);
  const { language } = useContext(MyContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  const info = Info[0];
  const courses = info?.cousesName[language];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const InfoData = await getInfo();
      setInfo(InfoData);
    };

    fetchData();
  }, []);

  if (Info.length === 0) {
    return null;
  }

  console.log(info);
  return (
    <div className='p-10  flex lg:ml-16 m-3 flex-wrap  items-center justify-center   flex-col-reverse md:flex-row '>
      <div className='  w-full  lg:w-2/4 flex flex-col  items-center justify-center  '>
        <h1 className='text-3xl lg:w-2/4 '>{info?.apresentation[language]}</h1>
        <p className={`${Roboto_Font.className} lg:w-2/4 `}>
          {info?.resume[language]}
        </p>
        <div className='mt-4 lg:w-2/4 '>
          <h2 className='text-xl '>{info?.subtitle[language]}</h2>
          <p className={`${Roboto_Font.className} `}>{info?.about[language]}</p>
        </div>

        <div className='mt-4 w-full  lg:w-2/4'>
          <h2>{info?.courses[language]}</h2>
          {Array.isArray(courses) && (
            <ul>
              {courses.map((course: string, index: number) => (
                <li className={`${Roboto_Font.className}`} key={index}>
                  - {course}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        className=' flex m-3 bg-red-500   '
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <LazyLoadImage
          className={`Image  w-[300px] object-cover `}
          src={info.profilePicture}
          threshold={0}
          effect='opacity'
          afterLoad={handleImageLoad}
        />
      </motion.div>
    </div>
  );
};

export default Body;
