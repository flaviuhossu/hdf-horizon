import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className='border-b fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center px-4'>
        <div className='mr-4 hidden md:flex'>
          <Link href='/'>
            <Button variant='ghost' className='text-lg font-bold'>
              Your Name
            </Button>
          </Link>
        </div>
        <div className='flex gap-6 md:gap-10'>
          <Link href='/resume'>
            <Button variant='ghost'>Resume</Button>
          </Link>
          <Link href='/music'>
            <Button variant='ghost'>My Music</Button>
          </Link>
          <Link href='/about'>
            <Button variant='ghost'>Know Me Better</Button>
          </Link>
          <Link href='/blog'>
            <Button variant='ghost'>Blog</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
