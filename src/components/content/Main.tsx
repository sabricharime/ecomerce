import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className=' h-calc flex'>
      <div className='container  mx-auto  p-8 flex items-center justify-between'>
        <div className='text max-w-[50%]'>
          <h1 className='text-7xl font-extrabold mb-10'>Easy Shopping Now!</h1>
          <p className='font-meduim text-md text-left justify-normal leading-snug'>
            Choose a product for You , New Collection With Modern Styls premium quality Product dolor, sit amet consectetur adipisicing elit. Et dolorum possimus voluptatibus ea vitae earum eos totam
            repudiandae illo quam nihil quasi, itaque consequuntur ducimus . Trend
          </p>
        </div>

        <div className='navProduct grid grid-rows-3 grid-cols-3 min-w-[50%] max-w-[50%] p-8 gap-2 '>
          <div className='items row-span-2 col-span-2 h-[300px] grid place-items-center bg-neutral-800 hover:bg-neutral-700 transition duration-200'>
            <Link to={'/store'}>
              <span>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-[80px] h-[80px]'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
              </span>
              <p className='w-[80px] text-center  mt-5 rounded-md font-medium text-xl'>STORE</p>
            </Link>
          </div>
          <div className='items grid place-items-center bg-neutral-800 hover:bg-neutral-700 transition duration-200'>
            <Link to={'/'}>
              <span>
                <svg viewBox='0 0 512 512' fill='currentColor' height='3em' width='5em'>
                  <path d='M192 32c0 17.7 14.3 32 32 32 123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32 70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192-17.7 0-32 14.3-32 32zm-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48V144z' />
                </svg>
              </span>
              <p className='w-[80px] text-center  mt-5 rounded-md font-medium text-xl'>BLOG</p>
            </Link>
          </div>
          <div className='items grid place-items-center bg-neutral-800 hover:bg-neutral-700 transition duration-200'>
            {' '}
            <Link to={'/'}>
              <span>
                <svg fill='currentColor' viewBox='0 0 16 16' height='4em' width='5em'>
                  <path d='M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z' />
                  <path d='M2 1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 011 6.586V2a1 1 0 011-1zm0 5.586l7 7L13.586 9l-7-7H2v4.586z' />
                </svg>
              </span>
              <p className='w-[80px] text-center  mt-5 rounded-md font-medium text-xl'>OFFERS</p>
            </Link>
          </div>
          <div className='items grid place-items-center bg-neutral-800 hover:bg-neutral-700 transition duration-200'>
            {' '}
            <Link to={'/'}>
              <span>
                <svg viewBox='0 0 24 24' fill='currentColor' height='4em' width='4em'>
                  <path d='M15.816 6.36v3.36h.228a4.847 4.847 0 014.764 4.764v3.036H24v-3.132c0-4.428-3.6-8.028-8.028-8.028H15.9zm-9.06.012v.6h1.008V9.72h.696V6.972h1.008v-.6zm2.964 0V9.72h.696v-1.5h1.308v1.5h.696V6.372h-.696v1.272h-1.308V6.372zm3 0V9.72h2.4v-.588h-1.752v-.876h1.548v-.588h-1.548V6.96h1.752v-.588zM4.644 10.14c-.444 0-1.608.192-1.608 1.752s1.164 1.752 1.608 1.752c.444 0 1.608-.192 1.608-1.752S5.088 10.14 4.644 10.14zM0 10.236v3.336h.648v-2.376H.66l1.368 2.376h.696v-3.336h-.648v2.316h-.012L.732 10.236zm6.54 0l.012 3.336h.684v-1.308h.72c.516 0 .54.18.54.636 0 .348.024.516.072.672h.768v-.084c-.144-.048-.144-.168-.144-.66 0-.624-.144-.732-.42-.852.324-.108.516-.42.516-.792 0-.288-.168-.948-1.056-.948zm2.916 0v.588h1.02v2.748h.696v-2.748h1.008v-.588zm2.976 0v3.336h.696v-1.5h1.296v1.5h.696v-3.336h-.696v1.26h-1.296v-1.26zm3.372 0v3.348h.156c1.08 0 1.944.876 1.944 1.944v1.992h2.388v-2.988c-.012-2.316-1.86-4.2-4.152-4.296h-.252zm-11.16.504c.372 0 .9.228.9 1.164 0 .936-.528 1.164-.9 1.164s-.912-.228-.912-1.164c0-.936.54-1.164.912-1.164zm2.58.072h.864c.408 0 .492.252.492.432 0 .324-.18.456-.54.456h-.816zm3.684 3.204c-.876 0-1.572.612-1.572 1.812 0 1.188.648 1.8 1.56 1.8.864 0 1.344-.516 1.488-1.26h-.72c-.084.42-.36.648-.756.648-.612 0-.852-.552-.852-1.164 0-.972.504-1.2.852-1.2.588 0 .696.384.756.588v-.012h.72c-.036-.504-.456-1.212-1.476-1.212zm-6.696.084v3.432h.708v-1.44h1.512v-.612H4.92v-.768h1.728V14.1zm3.228 0l-1.224 3.432h.756l.228-.708h1.284l.216.708h.78L8.268 14.1zm5.232 0v3.432h2.46v-.612h-1.8v-.888h1.596v-.6h-1.596v-.72h1.8V14.1zm3.144.012v3.432h1.596v-1.992c0-.792-.648-1.44-1.44-1.44zm-7.98.768h.012l.42 1.356h-.876zm-4.92.912a.927.927 0 00-.936.924c0 .528.432.924.936.924a.917.917 0 00.924-.924.917.917 0 00-.924-.924zm0 .144c.42 0 .756.336.756.78 0 .456-.324.792-.756.792s-.768-.348-.768-.792c0-.444.336-.78.768-.78zm-.36.24v1.092h.168V16.8h.18l.3.468h.18l-.312-.48c.168-.024.288-.108.288-.3 0-.216-.132-.312-.384-.312zm.168.132h.228c.12 0 .24.024.24.168 0 .168-.144.18-.288.18h-.18z' />
                </svg>
              </span>
              <p className='w-[80px] text-center  mt-5 rounded-md font-medium text-xl'>New !</p>
            </Link>
          </div>
          <div className='items grid place-items-center bg-neutral-800 hover:bg-neutral-700 transition duration-200'>
            {' '}
            <Link to={'/'}>
              <span>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24' height='4em' width='4em'>
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <path d='M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2M15 7a2 2 0 012 2M15 3a6 6 0 016 6' />
                </svg>
              </span>
              <p className='w-[80px] text-center  mt-5 rounded-md font-medium text-xl'>STORE</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
