import DefaultLayout from '../components/layout/default-layout';

export default function AboutPage() {
  return (
    <DefaultLayout title="About">

      <h1 className="text-3xl md:text-6xl font-bold text-gray-900 text-center md:text-left md:pt-4">
        About
      </h1>
      <div className="md:text-xl max-w-3xl pt-8 text-gray-700">
        <p className="pb-5">
          Pokémon Catcher is a try-your-luck game
          where you will always have 50% chance to catch any pokémon.
          You can catch as much as you want.
          Have fun!
        </p>
        <p>
          Your pokémon will be saved in your browser's local storage.
          If you clear the local storage, you will lose your data.
        </p>
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 pt-8">
        Tech-Stack
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <ul className="list-disc pl-8">
          <li><a className="link" href="https://nextjs.org/">Next.js</a> <span className="text-gray-400">&nbsp;&mdash; Using ISR strategy</span></li>
          <li><a className="link" href="https://react-query.tanstack.com/">React Query</a></li>
          <li><a className="link" href="https://react-hook-form.com/">React Hook Form</a></li>
          <li><a className="link" href="https://tailwindcss.com/">Tailwind CSS</a></li>
        </ul>
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 pt-8">
        Github
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <a className="link" href="https://github.com/afiiif/pokemon-catcher">https://github.com/afiiif/pokemon-catcher</a>
      </div>

      <h2 className="text-xl md:text-3xl font-bold text-gray-900 pt-8">
        Author
      </h2>
      <div className="md:text-xl max-w-3xl pt-2 md:pt-4 text-gray-700">
        <a className="link" href="https://www.linkedin.com/in/m-afifudin/">Muhammad Afifudin</a>
      </div>

    </DefaultLayout>
  );
}
