import React from 'react';

const Welcomer: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 md:p-12 rounded-lg align-middle self-center text-center grid-cols-3 max-h-80 flex flex-col">
      {/* <img className="justify-self-end relative lg:right-[38%] right-[15%] bottom-5" src="/gifs/dancingjesus.gif" alt="X" style={{ transform: 'scaleX(-1)' }} /> */}
      <div className='flex flex-col justify-self-center text-center'>
        <h1 className="text-4xl md:text-7xl font-bold pt-5 md:pt-10">Welcome</h1>
        <h3 className="text-lg md:text-2xl">To ElEmis&apos;s blog. :)</h3>
      </div>
      {/* <img className="justify-self-start relative lg:left-[38%] left-[15%] bottom-5" src="/gifs/dancingjesus.gif" alt="X" /> */}
    </div>
  );
};

export default Welcomer;