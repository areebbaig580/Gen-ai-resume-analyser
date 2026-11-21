import Headings from '../components/Headings'
import Button from '../components/Button'
import AlternateLink from '../components/AlternateLink'
import Hero from '../components/Hero'

const Register = () => {
  return (
    <div className='h-screen w-full px-2 py-2 flex items-center justify-center gap-2 overflow-hidden bg-[#F0F8F0]'>
      <div className='h-screen w-4/10 flex flex-col items-center gap-7 px-24 py-[8vh] bg-white'>
        <Headings head={'Upgrade your resume'} text={' Create a free account to get instant, AI-powered feedback, keyword suggestions, and tailored fixes.'} />

        <form className='flex flex-col gap-3 mt-7'>
          <input type="text" placeholder='Username' className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />
          <input type='email' placeholder='Email' className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />
          <input type="text" placeholder='Password' className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />

          <Button text={'Register'} />
        </form>

        <AlternateLink text={'Already registered?'} link={'/login'} head={'Login'} />

      </div>

      <Hero />

    </div>
  )
}

export default Register
