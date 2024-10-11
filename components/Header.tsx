import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Menu from '@/components/Menu';

const Header = () => {
  return (
    <header className='relative z-[51] px-6 py-4 flex items-center justify-between border-b-[1px] border-foreground/20'>
      <Link href='/' className=''>
        <h1 className='uppercase text-3xl tracking-tighter text-foreground'>The Planets</h1>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            asChild
            size='icon'
            className='relative w-auto h-auto z-[51] hover:bg-transparent group'
          >
            <div className='flex flex-col gap-1'>
              <span className='w-6 h-[3px] bg-foreground group-data-[state=open]:translate-y-2 group-data-[state=open]:rotate-45 group-data-[state=open]:transition-transform group-data-[state=closed]:transition-transform'></span>
              <span className='w-6 h-[3px] bg-foreground group-data-[state=open]:opacity-0 group-data-[state=closed]:transition-opacity'></span>
              <span className='w-6 h-[3px] bg-foreground group-data-[state=open]:-translate-y-[6px] group-data-[state=open]:-rotate-45 group-data-[state=open]:transition-transform group-data-[state=closed]:transition-transform'></span>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent className='w-full border-none top-[75px] h-[calc(100%-75px)] focus-visible:outline-none pt-11'>
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigation menu</SheetDescription>
          </VisuallyHidden>
          <Menu />
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
