import { CgMouse } from 'react-icons/cg'

const Hero = () => {
  return (
    <section className='mx-auto container px-24 min-h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center'>
      <div className='flex-grow flex items-center justify-center'>
        <div>
          <p className='font-subtitle text-xl mb-8'>Benício Oliveira is a</p>
          <h1 className='font-title text-8xl'>
            Designer &{' '}
            <span className='font-subtitle text-xl text-gray-400 mt-8'>
              (in progress, self-taught)
            </span>{' '}
            <br />
            Frontend Developer
          </h1>

          <p className='font-subtitle text-xl w-3/5'>
            He’s a curious person, self-driven, passionate about knowledge and
            human interactions. Big time cat lover and amateur cooker.
          </p>
        </div>
      </div>
      <div className='text-[2rem] flex-col flex-grow-0 pb-6 flex items-center justify-center'>
        <CgMouse />
        <span className='font-subtitle text-xs mt-4'>scroll for more</span>
      </div>
    </section>
  )
}

export default Hero
