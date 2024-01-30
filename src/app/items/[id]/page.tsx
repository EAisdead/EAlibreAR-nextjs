import api from "@/api";
import Image from "next/image";
import type { Metadata } from "next";

const ealibre = " | EAlibre AR.";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const item = await api.item.fetch(id);
  return {
    title: item.title + ealibre,
  };
}

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await api.item.fetch(id);
  const sourceImg = "http://http2.mlstatic.com/";
  return (
    <section>
      <article>
        <div className="lg:flex gap-4 lg:flex-1 mt-8 grid grid-cols-1 min-h-full h-[85vh]">
          <div className="m-auto w-[80vw] h-[50vh] bg-white flex justify-center lg:h-96 lg:w-96 lg:max-w-96 lg:max-h-96 rounded-lg">
            <Image
              src={`${sourceImg}D_NQ_NP_${item.thumbnail_id}-V.webp`}
              alt={item.title}
              width={512}
              height={512}
              placeholder="empty"
              className=" max-h-[50vh] max-w-[80vw] w-auto h-auto m-auto lg:max-h-96 lg:max-w-96"
            ></Image>
          </div>
          <div className="lg:my-auto lg:ml-auto lg:text-end text-center my-8 ">
            <p className="font-bold text-xl mx-2 hover:text-2xl md:text-2xl md:hover:text-3xl lg:text-3xl lg:hover:text-4xl hover:text-red-600 transition-all">
              {Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: item.currency_id,
              })}
            </p>
            <hr className="lg:my-2 mx-8 lg:mx-2 my-8 bg-red-600 h-[2px] border-0" />
            <p className="mx-2 my-8 text-lg lg:text-xl">{item.title}</p>
            <hr className="lg:my-8 my-4 bg-red-600 h-[2px] border-0" />
          </div>
        </div>
        <hr className="hidden lg:block bg-red-600 h-[2px] border-0 w-full" />
        <p className=" text-center text-xl my-8 font-bold text-red-600">
          Descripción:
        </p>
        <p className="mx-8 text-sm text-justify py-4">{item.description}</p>
      </article>
    </section>
  );
}
