'use client';
import { Twirl as Hamburger } from 'hamburger-react';
import { NavbarProps } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { getNavbar } from '@/sanity/sanity-utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MyContext } from './Layout';

const MobileSidebar = () => {
  const [navbar, setNavbar] = useState<NavbarProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(MyContext);
  const NavbarItem = navbar[0];

  useEffect(() => {
    async function fetchData() {
      const postsData = await getNavbar();
      setNavbar(postsData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className='lg:hidden block'>
      <div className=' fixed right-10 top-5 z-[99999]  '>
        <Hamburger toggled={isOpen} toggle={setIsOpen} direction='right' />
      </div>

      {isOpen && (
        <>
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className={`z-[9999] ${
              isOpen ? 'flex' : 'hidden'
            } fixed  justify-center items-center flex-col gap-y-4 bg-black w-full h-full text-2xl `}
          >
            <Link
              onClick={() => setIsOpen(false)}
              className='hover:text-yellow-400 transition '
              href={'/'}
            >
              {NavbarItem.home[language]}
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className='hover:text-yellow-400 transition '
              href={'/info'}
            >
              {NavbarItem.info[language]}
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className='hover:text-yellow-400 transition '
              href={'/contact'}
            >
              {NavbarItem.contact[language]}
            </Link>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MobileSidebar;
