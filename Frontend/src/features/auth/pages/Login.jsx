import React from 'react'
import { Link } from 'react-router'
import { Sprout } from 'lucide-react'
import Headings from '../components/Headings'
import Hero from '../components/Hero'
import AlternateLink from '../components/AlternateLink'
import Button from '../components/Button'

const Login = () => {
    return (
        <div className='h-screen w-full px-2 py-2 flex items-center justify-center gap-2 overflow-hidden bg-[#F0F8F0]'>
            <div className='h-screen w-4/10 flex flex-col items-center gap-7 px-30 py-[8vh] bg-white'>
                <Headings head={'Welcome Back!'} text={'Sign in to access your past resume scans, track your ATS improvements, and keep optimizing for your dream job.'} />

                <form className='flex flex-col gap-3 mt-7'>
                    <input type="text" placeholder='Username' className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />
                    <input type="text" placeholder='Password' className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />

                    <Button text={'Login'} />
                </form>

                <AlternateLink text={'Not a member?'} link={'/register'} head={'Regiter'} />

            </div>

            <Hero />

        </div>
    )
}

export default Login
