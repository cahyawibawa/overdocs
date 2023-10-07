'use client';

import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '../ui/button';

import { cn } from '@/lib/utils';
import { SiteLogo } from './site-logo';
import { SiteMenu } from './site-menu';
import { siteConfig } from '@/config/site';
interface Props {
  className?: string;
}

export function SiteHeader({ className }: Props) {
  //   const { isSignedIn } = useUser();

  return (
    <header
      className={cn('grid w-full grid-cols-2 gap-2 md:grid-cols-5', className)}
    >
      <div className='flex items-center md:col-span-1'>
        <SiteLogo />
      </div>
      <div className='hidden items-center justify-center md:col-span-3 md:flex md:gap-3'>
        <Button variant='link' asChild className='md:mr-3'>
          <Link href='/blog'>Blog</Link>
        </Button>
        {/* <Button variant='link' asChild className='md:mr-3'>
          <Link href='/changelog'>Changelog</Link>
        </Button> */}
        <Button variant='link' asChild className='md:mr-3'>
          <Link href={siteConfig.links.docs}>
            Docs
            <ArrowUpRight className='ml-1 h-4 w-4 flex-shrink-0' />
          </Link>
        </Button>
      </div>
      <div className='flex items-center justify-end gap-3 md:col-span-1'>
        <div className='block md:hidden'>
          <SiteMenu />
        </div>
        {/* <Button asChild className=' rounded-full'>
          <Link href={siteConfig.links.docs}>Get Started</Link>
        </Button> */}
      </div>
    </header>
  );
}
