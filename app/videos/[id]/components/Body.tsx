'use client';

import { useContext, useEffect, useState } from 'react';
import { getVideoInfo } from '@/sanity/sanity-utils';
import { VideoData } from '@/types';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MyContext } from '@/components/Layout';
import { Roboto_Font } from '@/components/Fonts';

const Body = () => {
  const [videoInfo, setVideoInfo] = useState<VideoData | null>(null);
  const params = useParams();
  const id = params.id;
  const link: string | undefined = videoInfo?.link;
  const { language } = useContext(MyContext);
  const [background, setBackground] = useState('');

  const extractVideoId = (link: string) => {
    let videoId;
    if (link?.includes('watch?v=')) {
      videoId = link.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    } else if (link?.includes('youtu.be/')) {
      videoId = link.split('/')[3];
    }
    return videoId;
  };

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await getVideoInfo(id);
      setVideoInfo(data);
    };
    fetchVideo();
  }, []);

  useEffect(() => {
    if (videoInfo && videoInfo.imageUrl) {
      const image = new Image();
      image.src = videoInfo.imageUrl;
      image.crossOrigin = 'Anonymous';

      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext('2d');
        if (context) {
          context.drawImage(image, 0, 0);
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );
          const colors = new Map<string, number>();

          for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            const rgb = `rgb(${r},${g},${b})`;

            if (colors.has(rgb)) {
              colors.set(rgb, colors.get(rgb)! + 1);
            } else {
              colors.set(rgb, 1);
            }
          }

          const sortedColors = Array.from(colors.entries()).sort(
            (a, b) => b[1] - a[1]
          );

          let backgroundColor = sortedColors[1]
            ? sortedColors[1][0]
            : sortedColors[0][0];

          if (
            isWhite(backgroundColor) ||
            isTooDark(backgroundColor) ||
            isTooLight(backgroundColor)
          ) {
            backgroundColor = sortedColors[2]
              ? sortedColors[2][0]
              : sortedColors[0][0];
          }

          //   document.body.style.backgroundColor = backgroundColor;
          setBackground(backgroundColor);
        }
      };
    }
  }, [videoInfo]);

  const isWhite = (color: string): boolean => {
    return color.toLowerCase() === '#ffffff';
  };

  const isTooDark = (color: string): boolean => {
    const rgb = hexToRgb(color);

    if (!rgb) {
      return false;
    }

    const darknessThreshold = 100; // Adjust this threshold value as needed

    return (
      rgb.r <= darknessThreshold &&
      rgb.g <= darknessThreshold &&
      rgb.b <= darknessThreshold
    );
  };

  const isTooLight = (color: string): boolean => {
    const rgb = hexToRgb(color);

    if (!rgb) {
      return false;
    }

    const lightnessThreshold = 200; // Adjust this threshold value as needed

    return (
      rgb.r >= lightnessThreshold &&
      rgb.g >= lightnessThreshold &&
      rgb.b >= lightnessThreshold
    );
  };

  const hexToRgb = (
    hex: string
  ): { r: number; g: number; b: number } | null => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      return null;
    }

    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    };
  };

  if (!videoInfo) {
    return null;
  }
  const videoId = extractVideoId(link);

  const about = videoInfo?.about[language];

  console.log(videoInfo);
  return (
    <div style={{}}>
      {videoInfo && background && (
        <>
          {/* <img
           src={videoInfo.imageUrl}
           alt='Video Image'
           width={1280}
           height={720}
         /> */}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: 'linear', duration: 1.0, delay: 0.1 }}
            className='flex flex-col justify-center  gap-5 '
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='2xl:w-[980px] 2xl:h-[620px] lg:w-[720px] lg:h-[420px]  md:w-[420px] md:h-[250px] w-[250px] h-[180px]'
            />
            <p
              className='font-Praktika font-bold text-lg mb-1 mt-3'
              style={{ color: background }}
            >
              JUST
            </p>
            <h1 className='text-xl uppercase'>{videoInfo.title[language]}</h1>
            <p className='font-Praktika text-zinc-500 font-bold uppercase mb-5'>
              {videoInfo?.subtitle[language]}
            </p>
            <hr
              style={{ backgroundColor: background }}
              className={`  w-full border-none h-[1px]`}
            />

            {/* {about &&
              about.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${Roboto_Font.className} font-bold mt-5 mb-5 w-2/4 uppercase text-sm `}
                >
                  {paragraph.children[0].text}
                </p>
              ))} */}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Body;
