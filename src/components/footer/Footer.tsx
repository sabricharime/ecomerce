
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex h-[40px] max-h-[40px] items-center justify-around border-t border-neutral-600  '>
      <span className=' flex gap-5'>
        <Link to={'/'}> terms & conditions </Link>
        <Link to={'/'}>Privacy Policies </Link>
        <Link to={'/'}> Disclaimers</Link>
      </span>
      <span>
        <p>Allright reserved @ 2023 </p>
      </span>
      <span></span>
    </div>
  )
}

export default Footer
