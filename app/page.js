import Image from 'next/image'

export default function Home() {
  return (<main className=' flex h-svh text-3xl font-normal h mx-auto'>
    <div className='w-1/4 p-12'>
      <p className='text-center'>Hello World</p>
    </div>
    <div className='w-3/4 inverted'>
      <div className='w-full h-full p-4 background-primary text-left text-light text-5xl font-bold' >
        <ul className='h-full py-24 flex flex-col justify-around font-light text-8xl list'>
          <li className='mx-4 w-full'>
            Art
          </li>
          <li className='mx-4 w-full'>
            Programming
          </li>
          <li className='mx-4 w-full'>
            Games
          </li>
        </ul>
      </div>
    </div>
    
  </main>)
}