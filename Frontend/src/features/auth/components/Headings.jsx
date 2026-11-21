import { Sprout } from 'lucide-react'

const Headings = ({ head, text }) => {
    return (
        <>
            <Sprout size={42} className='font-bold' />
            <div className='text-5xl font-bold'>{head}</div>
            <div className='text-sm pl-2'>{text}</div>
        </>
    )
}

export default Headings
