import React from 'react';

const Welcomer: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 md:p-12 rounded-lg align-middle self-center text-center grid grid-cols-3 max-h-80">
      <img className="justify-self-end relative lg:right-[50%] right-[15%] bottom-5" src="/blog/gifs/dancingjesus.gif" alt="X" />
      <div className='justify-self-center'>
      <h1 className="text-4xl md:text-7xl font-bold pt-5 md:pt-10">Welcome</h1>
      <h3 className="text-lg md:text-2xl">To ElMalditoEmi&apos;s page. :)</h3>
      </div>
      <img className="justify-self-start relative lg:left-[50%] bottom-5" src="/blog/gifs/dancingjesus.gif" alt="X" />
    </div>
  );
};

export default Welcomer;