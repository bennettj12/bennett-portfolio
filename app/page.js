/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { GiPaintBrush } from "react-icons/gi";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { MdArrowDropDownCircle } from "react-icons/md";
export default function Home() {
  return (<main>
  <div className='w-full background-gradient  text-light'>
    <div className='container mx-auto'>
      <div className='-my-3 flex gap-10'>
        <h1 className='self-center font-black text-7xl'> Bennett Johnson - Technical & Creative Professional</h1>
        <div className='flex gap-0'>
            <TfiAngleLeft className='size-64 text-light -mr-20 scale-110' />
            <GiPaintBrush className='brush-rotate size-64 text-light' />
            <TfiAngleRight className='size-64 text-light -ml-20 scale-110' />
        </div>
      </div>
    </div>
  </div>
  <div className=' w-full background-light min-h-24'>
    <div className='container flex flex-col mx-auto text-dark'>
      <div className='flex justify-between  py-16 gap-80'>
        <Image className='ml-8 rounded-full' src={'/img/bennett500x.png'} width={300} height={300} />
        <div className='self-center text-center font-thin'>
          <h1 className='text-5xl font-bold pb-4 self-center'>Hello, I'm <span className='text-primary'>Bennett</span></h1>
          <p className='text-3xl spac'>I am a creative based in the US with a love for programming, art, and games. As far as I can remember, I have had a drive for all things creative. From music to art to software, bringing things to life is my passion. </p>
          
          <button className='flex gap-2 mx-auto self-center mt-8 text-4xl transition-all background-gradient font-thin hover:font-black active:translate-y-1 text-light px-6 py-2 rounded-md'>
            <div>See my work </div>
            <MdArrowDropDownCircle className='self-center ml-2 -mr-1 scale-125' />
          </button>
        </div>
        

      </div>
    </div>
  </div>


  <div className='container h-svh mx-auto'>
    
    <div className='inverted h-full flex flex-col flex-grow'>
      <div className='flex-grow w-full h-auto p-4 background-primary text-left text-light text-5xl font-bold' >
        <ul className='select-none h-full py-24 flex flex-col justify-around font-light text-8xl list portfolio-list'>
          <li className='mx-4 px-4 py-2 w-full border-l-8 border-highlight'>
            Art
          </li>
          <li className='mx-4 px-4 py-2 w-full border-l-8 border-highlight'>
            Programming
          </li>
          <li className='mx-4 px-4 py-2 w-full border-l-8 border-highlight'>
            Games
          </li>
        </ul>
      </div>
    </div>
    
  </div>
  </main>)
}