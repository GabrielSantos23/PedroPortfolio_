import React from 'react';

import { ClipLoader } from 'react-spinners';
const Loading = () => {
  return (
    <div className='h-full w-full flex items-center justify-center  absolute top-0 left-0 bg-black'>
      <div className=''>
        <ClipLoader color='#fff' />
      </div>
    </div>
  );
};

export default Loading;
