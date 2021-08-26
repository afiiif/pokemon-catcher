import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { usePokemonStorage } from '../wrapper/pokemon-storage-context';

export default function Header() {
  const { route } = useRouter();

  const { pokemonStorage } = usePokemonStorage();

  const MENU = [{
    href: '/',
    label: 'Pokémons',
    icon: 'book.png',
    isActive: route === '/' || route.startsWith('/pokemon'),
  }, {
    href: '/my-pokemons',
    label: 'My Bag',
    icon: 'bag.png',
    isActive: route === '/my-pokemons',
    badge: pokemonStorage.length > 99 ? '99+' : pokemonStorage.length,
  }, {
    href: '/about',
    label: 'About',
    icon: 'info.png',
    isActive: route === '/about',
  }];

  return (
    <div className="h-28">
      <header className="h-28 md:h-24 bg-white md:shadow-lg absolute z-50 md:fixed top-0 inset-x-0">
        <div className="h-full max-w-7xl mx-auto flex justify-center md:justify-between items-center">
          <Link href="/">
            <a className="block w-40 px-4 md:ml-2 text-center">
              <Image
                src="/images/pokemon-logo.png"
                width={320}
                height={118}
                quality={10}
                layout="responsive"
                alt="Pokemon Catcher"
              />
              <div className="-mt-0.5" />
              <div className="inline-block px-2.5 py-0.5 tracking-wider font-bold text-sm text-white bg-blue-500 rounded-full">
                CATCHER
              </div>
            </a>
          </Link>
          <nav className="fixed z-50 bottom-0 inset-x-0 bg-white shadow-lg-flipped md:relative md:bg-transparent md:shadow-none">
            <ul className="flex justify-around py-1 px-4 text-gray-500">
              {MENU.map(({ href, label, icon, isActive, badge }) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="relative block min-w-[106px] p-2 text-center">
                      {!!badge && (
                        <div className={clsx(
                          'absolute z-10 top-0.5 right-3 md:right-2 text-white text-xs font-bold rounded-full min-w-[24px] h-6 px-2 flex items-center justify-center',
                          isActive ? 'bg-blue-500' : 'bg-gray-500',
                        )}
                        >
                          {badge}
                        </div>
                      )}
                      <div className={clsx('w-7 md:w-9 mx-auto pb-1.5', !isActive && 'grayscale')}>
                        <Image
                          src={`/images/${icon}`}
                          width={36}
                          height={36}
                          layout="responsive"
                          alt={label}
                        />
                      </div>
                      <div className={clsx('text-xs md:text-sm', isActive && 'text-blue-500')}>{label}</div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
