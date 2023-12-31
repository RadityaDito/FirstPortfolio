"use client";
import { FC } from "react";
import Image from "./common/Image";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  overview: string;
  link: string;
  _id?: string;
  imageUrl: StaticImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageUrl,
  link,
  overview,
}) => {
  return (
    <article className="overflow-hidden  dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
      <div className="h-56 w-full relative">
        <Image
          fill
          src={imageUrl}
          alt="Image of the project"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-6">
        <a href={""} target="_blank">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </a>

        <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {overview}
        </p>

        <a
          //   href={""}
          //   target="_blank"
          onClick={() => alert("Coming soon!")}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
        >
          Learn More!
          <span className="block transition-all group-hover:ms-0.5">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
