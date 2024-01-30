import api from "@/api";
import Link from "next/link";
import type { Metadata } from "next";
import { ealibre } from "../layout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Todas las Categorias" + ealibre,
  };
}

export default async function CategoriesPage() {
  const { categories } = await api.item.home();
  return (
    <section>
      <p className="text-center text-2xl lg:text-4xl my-8 font-bold text-red-600 hover:text-white transition-colors duration-500 ease-in-out">
        Categorias:
      </p>
      <article className="grid lg:grid-cols-4 mx-auto text-center border-2 p-2 border-red-600 lg:text-left sm:mx-auto max-w-md md:max-w-lg lg:max-w-none rounded-xl ">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/categories/${item.id}`}
            className="hover:text-red-600 border-2 border-dotted my-1 mx-6 lg:m-2 p-2 border-gray-400 hover:border-gray-600 hover:scale-110 transition-all duration-500 ease-in-out rounded-md"
          >
            <p>{item.name}</p>
          </Link>
        ))}
      </article>
    </section>
  );
}
