import { Canvas } from '@react-three/fiber';
import './App.css'
import { OrbitControls, Stage } from '@react-three/drei';
import imm from './logo.png'
import { useEffect, useRef, useState } from 'react';
import { Model } from './Scene';
function App() {
  const [posx,setPositionx]=useState(0.0);
  const [posy,setPositiony]=useState(0);
  const [posz,setPositionz]=useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    
    if(position>0 && position<200){
      setPositionz(posz+position/200);
    }
    if(position>=200 && position<550){
      if((position/200)>posx){
        setPositionx(posx-position/200)
      }
      else{
      setPositionx(posx+position/200)
      }
    }
   
    console.log(posx)
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='App' >
      <img src={imm} style={{width:'15rem',zIndex:'9999',height:'10rem',position:'fixed',top:'10',left:'10'}}/>
      <h1 className='BMW-name' style={{fontSize:'200'}}>BMW</h1>

      <Canvas camera={{ position: [0, 0.2, 1] }} className='model' style={{position:'fixed'}}>
        <Stage>
          <Model position={[0,0,posz]} rotation={[0,posx,0]}></Model>
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
