import React from 'react';

const Welcomer: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 md:p-12 rounded-lg align-middle self-center text-center">
      <h1 className="text-4xl md:text-7xl font-bold pt-5 md:pt-10">Welcome</h1>
      <h3 className="text-lg md:text-2xl">To ElMalditoEmi&apos;s page. :)</h3>
    </div>
  );
};

export default Welcomer;