import React from 'react'
import { Link } from 'react-router'

const AlternateLink = ({ text, link, head }) => {
    return (
        <div className='flex gap-2'>
            <div>{text}</div>
            <Link to={link} className='text-[#86C686]'>{head} now</Link>
        </div>
    )
}

export default AlternateLink
