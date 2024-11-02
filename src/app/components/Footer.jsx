import React from 'react'

const footLinks = [
    { link: 'Home', url: '#home' },
    // { link: 'Contact Us', url: '/contact' },
    { link: 'Privacy Policy', url: '/privacy' },
    { link: 'Terms & Conditions', url: '/terms' },
    { link: 'Refund Policy', url: '/help' },
    { link: 'Shipping Policy', url: '/help' },
    { link: 'FAQs', url: '/social' }

]

const Footer = () => {
  return (
    <footer className='bg-[#f2efea] flex flex-col gap-4 divide-y px-[5%] text-[#4a6b92] bottom-0 inset-x-0'>
        <nav className='pt-4'>
            <ul className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                {footLinks.map(link => (
                    <li key={link.link} className='hover:text-[gray] duration-300'>
                        <a href={link.url}>{link.link}</a>
                    </li>
                ))}
            </ul>
        </nav>

        <div className='flex items-center justify-center py-4 text-center'>
            <p>&copy; {new Date().getFullYear()}. ARESMA PURE NATURALS - Desined by Pholoba</p>
        </div>
        
    </footer>
  )
}

export default Footer