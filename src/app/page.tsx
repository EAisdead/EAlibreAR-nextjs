import api from "@/api";
import Link from "next/link";

export default async function Home() {
  const { categories } = await api.item.home();

  return (
    <div>
      <section className="lg:flex my-8  min-h-[73vh]">
        <article className="flex-1 text-center m-auto">
          <h1 className=" text-4xl lg:text-6xl">
            Welcome to{" "}
            <span className="hover:text-red-600 lg:text-6xl transition-all ease-in-out duration-1000 delay-75 lg:hover:text-7xl">
              EAlibre AR
            </span>
          </h1>
          <div className="mt-8 p-2">
            <p>
              A test project on React using Next.js, Tailwind CSS and
              TypeScript.
            </p>
            <p className="mt-4">Uses MLA API to work.</p>
          </div>
        </article>

        <article className=" border-2 p-2 text-xs opacity-90 mt-8 pb-4 rounded-2xl w-[80vw] sm:w-[70vw] m-auto sm:mt-8 lg:m-2 lg:w-56 lg:mt-0 border-red-600 max-h-[530px]">
          <p className="text-center text-sm pb-2 lg:text-lg text-red-600 font-bold">
            Categorias:
          </p>
          {/* Mobile Version */}
          <ul className="grid grid-cols-2 lg:hidden">
            {categories.slice(0, 17).map((item) => (
              <li
                key={item.id}
                className="delay-[50ms] rounded-xl hover:underline py-2 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-sm hover:py-1"
              >
                <Link
                  href={`/categories/${item.id}`}
                  className="block text-center"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className=" delay-[50ms] rounded-xl hover:underline py-2 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-sm hover:py-1">
              <Link href={`/categories`} className="block text-center">
                Ver mas...
              </Link>
            </li>
          </ul>
          {/* Mobile Version */}
          {/* Desktop Version */}
          <ul className="lg:grid grid-cols-2 lg:grid-cols-1 hidden">
            {categories.slice(0, 13).map((item) => (
              <li
                key={item.id}
                className="delay-[50ms] rounded-xl hover:underline  hover:text-base py-2 transition-all ease-linear duration-500 hover:bg-red-600"
              >
                <Link
                  href={`/categories/${item.id}`}
                  className="block text-center"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className=" delay-[50ms] rounded-xl hover:underline hover:text-base py-2 transition-all ease-linear duration-500 hover:bg-red-600">
              <Link href={`/categories`} className="block text-center">
                Ver mas...
              </Link>
            </li>
          </ul>
          {/* Desktop Version */}
        </article>
      </section>
      <section>
        <article></article>
      </section>
    </div>
  );
}
