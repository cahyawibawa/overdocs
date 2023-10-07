import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { StarIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import CountingNumbers from '@/components/counting-numbers';

export async function CustomButton() {
  const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/dillionverma/llm.report',
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }),
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch(() => ({ stargazers_count: 300 }));
  return (
    <Link
      className={cn(
        buttonVariants(),
        'gap-2 whitespace-pre flex md:flex',
        'group relative justify-center items-center gap-2 w-[200px] transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-sm'
      )}
      href={siteConfig.links.github}
    >
      <span className='absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40' />
      {/* <Icons.gitHub className='h-6 w-6' /> */}
      Star on GitHub
      <div className='flex md:flex items-center gap-1 text-sm text-gray-500'>
        <StarIcon className='h-4 w-4 group-hover:text-yellow-300 transition-all duration-300' />
        <CountingNumbers
          value={stars}
          className='font-display font-medium text-white'
        />
      </div>
    </Link>
  );
}
