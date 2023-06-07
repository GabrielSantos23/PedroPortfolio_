'use client';

import { Roboto_Font } from '@/components/Fonts';
import { MyContext } from '@/components/Layout';
import { getContact } from '@/sanity/sanity-utils';
import { ContactProps } from '@/types';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Body = () => {
  const [Contact, setContact] = useState<ContactProps[]>([]);
  const { language } = useContext(MyContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const contact = Contact[0];
  useEffect(() => {
    const fetchData = async () => {
      const InfoData = await getContact();
      setContact(InfoData);
    };

    fetchData();
  }, []);

  if (Contact.length === 0) {
    return null;
  }
  console.log(contact);
  return (
    <div className='p-10 flex gap-1 flex-wrap lg:flex-row flex-col-reverse items-center'>
      <div>
        <h1 className='text-3xl'>{contact.title[language]}</h1>
        <h2 className={Roboto_Font.className}>{contact.subtitle[language]}</h2>

        <div className='mt-7'>
          <h3 className=' text-lg mb-1'>personal</h3>
          <Link href={`mailto:${contact?.email}`}>
            <p className={`${Roboto_Font.className} hover:underline `}>
              {contact?.email}
            </p>
          </Link>
        </div>
        <div className='mt-7'>
          <h3 className=' text-lg mb-1'>instagram</h3>
          <Link
            target='blank'
            href={`https://instagram.com/${contact?.instagram}`}
          >
            <p className={`${Roboto_Font.className} hover:underline`}>
              {contact?.instagram}
            </p>
          </Link>
        </div>
        <div className='mt-7'>
          <h3 className=' text-lg mb-1'>youtube</h3>
          <Link
            target='blank'
            href={`https://www.youtube.com/${contact?.youtube}`}
          >
            <p className={`${Roboto_Font.className} hover:underline`}>
              {contact?.youtube}
            </p>
          </Link>
        </div>
        <div className='mt-7'>
          <h3 className=' text-lg mb-1'>twitter</h3>
          <Link
            target='blank'
            href={`https://www.twitter.com/${contact?.youtube}`}
          >
            <p className={`${Roboto_Font.className} hover:underline`}>
              {contact?.twitter}
            </p>
          </Link>
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
          src={contact.profilePicture}
          threshold={0}
          effect='opacity'
          afterLoad={handleImageLoad}
        />
      </motion.div>
    </div>
  );
};

export default Body;
