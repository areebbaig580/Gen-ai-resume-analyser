import Headings from '../components/Headings.jsx'
import Hero from '../components/Hero.jsx'
import AlternateLink from '../components/AlternateLink.jsx'
import Button from '../components/Button.jsx'
import { useAuth } from '../hooks/useAuth.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, handleLogin } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await handleLogin({ username, password })

            navigate('/');

        } catch (err) {
            console.log(err)
        }
    }
    if (loading) {
        return <main>Loading...</main>
    }

    return (
        <div className='h-screen w-full px-2 py-2 flex items-center justify-center gap-2 overflow-hidden bg-[#F0F8F0]'>
            <div className='h-screen w-4/10 flex flex-col items-center gap-7 px-30 py-[8vh] bg-white'>
                <Headings head={'Welcome Back!'} text={'Sign in to access your past resume scans, track your ATS improvements, and keep optimizing for your dream job.'} />

                <form className='flex flex-col gap-3 mt-7' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className='px-6 py-2 outline-none border rounded-2xl w-[25vw]'
                    />
                    <input
                        type="text"
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='px-6 py-2 outline-none border rounded-2xl w-[25vw]' />

                    <Button text={'Login'} />
                </form>

                <AlternateLink text={'Not a member?'} link={'/register'} head={'Regiter'} />

            </div>

            <Hero />

        </div>
    )
}

export default Login
