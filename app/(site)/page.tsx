'use client';

import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Body from './components/Body';
export default async function Home() {
  return (
    <div>
      <Body />
    </div>
  );
}
