import Image from "next/image";
import api from "@/api";
import Link from "next/link";
import type { Metadata } from "next";
import { ealibre } from "../layout";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { search: string };
}): Promise<Metadata> {
  const capitalized =
    searchParams.search.charAt(0).toUpperCase() + searchParams.search.slice(1);
  return {
    title: capitalized + ealibre,
  };
}

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);
  const sourceImg = "http://http2.mlstatic.com/";

  return (
    <section>
      <article className="grid gap-4 mt-8">
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
            className="flex gap-4 mx-4 p-2 sm:w-[80vw] sm:mx-auto lg:w-[70vw] xl:w-[65vw] hover:shadow-lg hover:shadow-red-600 transition-all hover:border-opacity-10 hover:border-red-600 hover:border-4 ease-in-out duration-1000 border-transparent hover:p-3 rounded-lg hover:bg-red-600 hover:bg-opacity-10 delay-75"
          >
            <div className="w-32 h-32 min-w-32 min-h-32 bg-white flex justify-center rounded-md">
              <Image
                src={`${sourceImg}D_NQ_NP_${item.thumbnail_id}-V.webp`}
                alt={item.title}
                width={128}
                height={128}
                placeholder="empty"
                className="max-h-32 max-w-32 w-auto h-auto m-auto"
              ></Image>
            </div>
            <div className="">
              <p className="font-bold text-xl mb-4">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className=" capitalize text-sm opacity-50 ml-auto">
              {item.condition}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
