import DefaultLayout from '../components/layout/default-layout';

export default function AboutPage() {
  return (
    <DefaultLayout title="About">

      <h1 className="h1">
        About
      </h1>
      <div className="md:text-xl max-w-3xl pt-8 text-gray-700">
        <p className="pb-5">
          Pokémon Catcher is a simple pokemon catching game
          where you will always have 50% chance to catch any pokémon.
          You can catch as much as you want. Enjoy!
        </p>
        <p>
          Note: Your pokémon will be saved in your browser's local storage.
          If you clear the local storage, you will lose your data.
        </p>
      </div>

      <h2 className="h2 pt-8 md:pt-12">
        Tech-Stack
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <ul className="list-disc pl-8">
          <li><a className="link" href="https://nextjs.org/">Next.js</a> <span className="text-gray-400">&mdash; Using SSG strategy</span></li>
          <li><a className="link" href="https://react-query.tanstack.com/">React Query</a></li>
          <li><a className="link" href="https://react-hook-form.com/">React Hook Form</a></li>
          <li><a className="link" href="https://tailwindcss.com/">Tailwind CSS</a></li>
        </ul>
      </div>

      <h2 className="h2 pt-8 md:pt-12">
        Github
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <a className="link" href="https://github.com/afiiif/pokemon-catcher">https://github.com/afiiif/pokemon-catcher</a>
      </div>

      <h2 className="h2 pt-8 md:pt-12">
        Author
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <a className="link" href="https://www.linkedin.com/in/m-afifudin/">Muhammad Afifudin</a>
      </div>

      <h2 className="h2 pt-8 md:pt-12">
        Credit
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        Some icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        {' '}from <a className="link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>

    </DefaultLayout>
  );
}
