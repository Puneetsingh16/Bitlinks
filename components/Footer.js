import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-800 dark:text-gray-200 py-6 md:py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8'>
          <p className='text-sm md:text-base font-semibold'>
            &copy; 2026 BitLinks. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <Link href="/" className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-sm md:text-base font-semibold transition'>
              Privacy Policy
            </Link>
            <Link href="/" className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-sm md:text-base font-semibold transition'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
