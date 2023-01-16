import { useEffect, useState } from 'react';

import DividerDesktop from '/images/pattern-divider-desktop.svg';
import DividerMobile from '/images/pattern-divider-mobile.svg';
import Dice from '/images/icon-dice.svg';
import Spinner from './Spinner';

type Card = {
  id: number;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  advice: string;
  isLoading: boolean;
}

const desktopWidth = 540;

const Image = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimension);
      return () => window.removeEventListener("resize", updateDimension);
    }
  }, [])

  return (
    <>
      {width >= desktopWidth ? (
        <img src={DividerDesktop} alt="Divider" className='mb-16' />
      ) : (
        <img src={DividerMobile} alt="Divider" className='mb-16' />
      )}
    </>
  )
}

export default function Card({ advice, id, onClick, isLoading }: Card) {

  return (
    <article className='bg-dark-blue-500 px-12 flex flex-col text-center justify-center font-extrabold relative mx-2 min-h-[364px] h-full rounded-2xl md:mx-0 min-w-[343px] max-w-[540px]'>
      {isLoading ? <Spinner isLoading={isLoading} color="#53FFAA" /> : (
        <div>
          <p className='pt-12 uppercase text-neon-green mb-6 tracking-widest text-[11px] md:text-[13px]'>Advice #{id}</p>
          <p className='text-light-cyan leading-9 mb-10'>"{advice}"</p>
          <Image />
        </div>
      )}
      <div className='absolute -bottom-7 left-1/2 -translate-x-2/4 w-16 h-16 rounded-full bg-neon-green flex items-center justify-center cursor-pointer hover:scale-100 hover:shadow-default hover:rotate-45 transition-all' onClick={onClick}>
        <img src={Dice} alt="Dice Icon" />
      </div>
    </article>
  );
}