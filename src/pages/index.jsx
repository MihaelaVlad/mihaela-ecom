import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className="bg-slate-900 h-screen flex flex-col justify-center items-center gap-y-20">
        <h1 className="font-bold text-4xl text-center text-slate-100 hover:bg-sky-500 p-4 rounded-xl">
          Homepage
        </h1>

        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 hover:bg-slate-600 w-1/2">
          <Image
            className="w-24 h-24 object-cover rounded-full mx-auto"
            src="https://images.pexels.com/photos/13514939/pexels-photo-13514939.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile picture"
            height="24px"
            width="24px"
          ></Image>

          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-slate-100">
                “Tailwind CSS is the only framework that Ive seen scale on large
                teams. Its easy to customize, adapts to any design, and the
                build size is tiny.”
              </p>
            </blockquote>

            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-900 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </main>
    </>
  );
};

export default Home;
