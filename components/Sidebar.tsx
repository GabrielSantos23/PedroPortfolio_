import { getInfo, getNavbar } from '@/sanity/sanity-utils';
import { InfoProps, NavbarProps } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';

interface SidebarProps {
  children: React.ReactNode;
  language: string;
  toggleLanguage: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  language,
  toggleLanguage,
}) => {
  const [sidebar, setSidebar] = useState<NavbarProps[]>([]);
  const [info, setInfo] = useState<InfoProps[]>([]);
  const social = sidebar[0];
  const Info = info[0];
  const pathname = usePathname();
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getNavbar();
      setSidebar(projectsData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getInfo();
      setInfo(projectsData);
    };

    fetchData();
  }, []);

  if (sidebar.length === 0 || info.length === 0) {
    return null;
  }

  return (
    <div>
      <div className='sidebar hidden 2xl:w-[500px] lg:w-[300px]  fixed top-0 left-0 h-full lg:flex flex-col justify-center items-end pr-10 '>
        <div>
          <Link href='/'>
            <h1 data-hover='glassy' className='Title'>
              <span>p.cacemiro</span>
            </h1>
          </Link>
          <div className='text-sm mt-4 flex flex-col gap-y-2'>
            <Link
              href='/'
              className={`hover:text-[#ffc93a] transition  ${
                pathname === '/' ? 'text-[#ffc93a]' : 'text-white'
              }`}
            >
              {social?.home[language]}
            </Link>
            <Link
              href='/info'
              className={`hover:text-[#ffc93a] transition  ${
                pathname === '/info' ? 'text-[#ffc93a]' : 'text-white'
              }`}
            >
              {social?.info[language]}
            </Link>
            <Link
              href='/contact'
              className={`hover:text-[#ffc93a] transition  ${
                pathname === '/contact' ? 'text-[#ffc93a]' : 'text-white'
              }`}
            >
              {social?.contact[language]}
            </Link>
          </div>
          <div className='flex gap-3 mt-4 '>
            <Link
              target='_blank'
              href={`https://youtube.com/${Info?.youtube}`}
              className={`hover:text-[#ffc93a] transition  `}
            >
              <AiOutlineYoutube
                style={{
                  fontSize: '26px',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Link
              target='_blank'
              href={`http://intagram.com/${Info?.instagram}`}
              className={`hover:text-[#ffc93a] transition  `}
            >
              <AiOutlineInstagram
                style={{
                  fontSize: '26px',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <button
              onClick={toggleLanguage}
              className='flex items-center justify-center w-[23px] h-[23px]  border-white border-[1.5px] hover:border-[#ffc93a] transition hover:text-[#ffc93a] '
            >
              <p className='text-[8px] p-2'>
                {language === 'en' ? 'EN' : 'PT'}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
