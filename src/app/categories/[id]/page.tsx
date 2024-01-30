import api from "@/api";
import type { Metadata } from "next";
import { ealibre } from "@/app/layout";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const item = await api.item.categories(id);
  return {
    title: item.name + ealibre,
  };
}

export default async function CategoriesPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await api.item.categories(id);
  const { children_categories } = await api.item.categories(id);

  return (
    <section className=" min-h-[75vh] grid place-content-center">
      <article className="">
        <div className=" text-center m-8 lg:mb-10">
          <p className="md:text-5xl text-3xl text-red-600 hover:text-white transition-colors duration-500 ease-in-out">
            {item.name}{" "}
            <span className="opacity-50 self-center ml-2 text-lg text-white align-middle">
              {item.total_items_in_this_category}
            </span>
          </p>
        </div>
        <div className="grid lg:grid-cols-4 mx-auto text-center border-2 p-2 border-red-600 lg:text-left sm:mx-auto max-w-md md:max-w-lg lg:max-w-none lg:mx-8 rounded-xl">
          {children_categories.map((item) => (
            <div
              key={item.id}
              className="hover:text-red-600 border-2 border-dotted my-1 mx-6 lg:m-2 p-2 px-10 border-gray-400 hover:border-gray-600 hover:scale-110 transition-all duration-500 ease-in-out rounded-md"
            >
              <p>
                {item.name}:{" "}
                <span className="text-xs opacity-50 text-white ">
                  {item.total_items_in_this_category}
                </span>
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
