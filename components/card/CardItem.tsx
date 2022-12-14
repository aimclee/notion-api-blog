import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useCallback, useState } from "react";
import { CardData } from "types/types";
import IconRenderer from "./IconRenderer";
import TagList from "./tags/TagList";

interface CardItemsProps {
  data: CardData;
}

const CardItem = ({ data }: CardItemsProps) => {
  const { id, cover, title, description, published, icon, tags, expiryTime } =
    data;

  const [coverSrc, setCoverSrc] = useState(cover);
  const [iconSrc, setIconSrc] = useState(icon);

  const getImageSrc = useCallback(async () => {
    const res = await fetch(`api/getImageSrc?id=${id}`);
    const { coverSrc, iconSrc } = (await res.json()) as {
      coverSrc: CardData["cover"];
      iconSrc: CardData["icon"];
    };

    setCoverSrc(coverSrc);
    setIconSrc(iconSrc);
  }, [id]);

  useEffect(() => {
    const isExpired = new Date(expiryTime) < new Date();

    if (isExpired) getImageSrc();
  }, [expiryTime, getImageSrc]);

  return (

      <article className="group">
        <Link href={`/blog/${id}`}>
          <a>
            <div className="relative pt-[64%] rounded-lg overflow-hidden mb-4">
              <Image
                src={coverSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-all duration-300"
                onError={getImageSrc}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold group-hover:text-blue-500">
                <IconRenderer icon={iconSrc} />
                {title}
              </h2>
              {description ? (
                <p className="text-gray-700">{description}</p>
              ) : null}
              <time className="text-gray-500 font-light text-sm">
                {published}
              </time>
            </div>
          </a>
        </Link>
        <div className="mt-4">
          <TagList tags={tags} />
        </div>
      </article>
  );
};

export default CardItem;