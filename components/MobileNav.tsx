'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src='icons/hamburger.svg'
            alt='Menu'
            width={36}
            height={36}
            className='cursor-pointer sm:hidden'
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-dark-1'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/icons/logo.svg'
              alt='Yoom logo'
              width={32}
              height={32}
              className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
              Yoom
            </p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.routes ||
                    pathname.startsWith(`${item.routes}/`);

                  console.log('pathname', pathname, isActive);
                  return (
                    <SheetClose asChild key={item.routes}>
                      <Link
                        key={item.label}
                        href={item.routes}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p className='font-semibold'>{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
