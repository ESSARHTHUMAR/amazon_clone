import React from "react";
import { footerItems } from "../data/footerItems";
import FooterList from "./FooterList";

function Footer() {
  return (
    <div className="w-full bg-[#232F3E] text-white">
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:place-items-center md:items-start">
            {footerItems.map((item) => {
              return (
                <FooterList
                  key={item.id}
                  title={item.title}
                  listItem={item.listItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex item-center justify-center gap-6 py-6">
        <div>
          <img
            className="w-20 pt-3"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt=""
          />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-yellow-500 cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-yellow-500 cursor-pointer duration-200 px-2 py-1">
          <img
            className="w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAsVBMVEX/mTMSiAf/////mjH//fv6+/cAgwAAAIgAAIUAAIMAAIAAAH4AAHvu7vfe3u7Hx+AAAHb5+f20tNb39/1LS6Ghocrk5PGSksSDg7utrdEAAHLMzOS+vtxSUqRERJzX1+oQEI1ERKMvL5Z/f7d5ebaYmManp88bG5JkZK/JyeEiIpFoaKqMjL9ycrSzs9uVlctYWKI3N5tgYKw6OpoeHo8YGJEsLJYAAJAbG5lYWKkmJpLm9FjFAAAEl0lEQVR4nO3ba3PiNhiGYaoeJB9kg0/YsbEg5rQkaUtINk3+/w/rK0OyDS/tTL9YmeG5Zgin/SDuNZYRZjQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiffoZzo1/g3EjAOTTh0IRDEw5NuK/QpGjKu8XT5mlxVzaF68GIL9CkuJ8HvqeUknTx/GB+H7kekuMmdRZ4Utogvu/bLFJ6QVu7HZTTJsXMtxHU9iHMClNk4cNW2UR+5vQt5LLJym4Znj8VqWi0MEI3dGtKbySqsnI4LndNJjOfXnuXt1rE9v7v9k8sdJt31MqfTZyNzFkTvfOkak3/ytf2zx8ftyamVdLbaVdDc9VEz+llB/lxE4ntVLOkS3S8K3La86q5qyiOmkx2lCQvtUgruqen9GdLl6nNUKVClzlFeXP09nHUZOZJP+lv5XaKWdDlz9N1kfePN770Zm4G56bJil7wWjT97Ve6bCnMgXJsT/cpiVhTNjezj5MmEc04QXnarea0XaxWIt2k9kqs+82EnikDmn2cHNM6aZIp1dpdx2Rr9xiSjk1uhaarWyNSKU6P62mrVOZieC6axP77BpDuqUy1EGmotad1mIoFzcZ6n/bP0ubkxw7G56IJ/f+XadxPKoWkOCoRm1yHOt+IRFEKeTyyj9OSticH43PQxNAOlmbgvD8+i/xaJMGka4tx0XYiqETtG/uE3a9UtJs1ww/QQZOOXqmddKOZrfItTIS8a4IojILmTooktG+XambfXAuqVw4/QAdNnqS3Oh6i5nPaXpJxHo8jr36pvWgcr8d02JI8HydhvfLk0/ADHL4J7Tnn7weoOntJRH7TLMsymSVluWxucpHM2/elgsncxXQ8fJO1p7aTOGmOm0rlb+IkjPZ1VVb1PgqTbzu/6p/RcRJPHtXp3pCGb0KTid1HmOnrY04fiyfbcWduTdfu2858N914m9IH4/X29d78+MfDGr5JpmR4POqIVptgv4yjbm/afj02M/ulibuDP58e3zFxKB0ctg3f5E2p2ccqQJEfQlWapSctb2nuVXi7+lh51DOl3gYf4fBNaNpJP+6kuqhNnR9U30QdVrGpC/2P511MPMM3eZYqMk01ffz+EtzcjMnLw14eHcoX+wA9LP/Kujw2kZKbwUeI7YTD/oT7IvNOdt3zzr8fn5RXe3xS4TiWweedC/C5mPu8fhJj/UScrbMZrLP16ANfd7Ye+3xxPba7mvXY/1y3b/t1++PuhvbGwbWs2+P7nQs+fw+4xveAFr4vvgDnFXCTN5x/wuA8pQtwPtsFx/MelxfOe1xe63mPAufHXoTzqC/B+faXFPfPn36X8Xz1v8vo9b/f2W12+P3O14UmHJpwaMKhCTf6Fc6NfoNzo5/gHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCfc3xgk4+urIdocAAAAASUVORK5CYII="
            alt=""
          />
          <p>India</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
