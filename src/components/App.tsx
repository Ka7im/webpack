import { useState } from 'react';
import classes from './App.module.scss'
import { Outlet } from 'react-router-dom';
import GattoPng from '@/assets/gatto.png'
import GattoJpg from '@/assets/gatto.jpg'
import GattoSvg from '@/assets/gatto.svg'

export const App = () => {
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(prev => prev + 1)
  }

  if (__PLATFORM__ === 'desktop') {
    return <div>ISDESKTOPPLATFORM</div>
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>ISMOBILEPLATFORM</div>
  }

  return (
    <div>
      <h1>PLATFROM={__PLATFORM__}</h1>
      <div>
        <img src={GattoPng} />
        <img src={GattoJpg} />
      </div>
      <div><GattoSvg fill={'red'} /></div>
      <div>{count}</div>
      <button className={classes.button} onClick={handleCounter}>увеличить</button>
      <Outlet />
    </div>
  );
};
