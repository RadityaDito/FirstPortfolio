import Image from "next/image";
import Me from "@/public/IMG_1312.jpg";
import WebImage from "@/public/web.png";
import WebImageV1 from "@/public/images/projects/webv1.png";
import DefaultImage from "@/public/projectdefault.jpg";
import UiConNext from "@/public/images/projects/UIConNext.png";
import Nextchat from "@/public/images/projects/nextchat.png";
import Nextthreads from "@/public/images/projects/nextthreads.png";
import Remindapp from "@/public/images/projects/remindapp.png";
import { useTheme } from "next-themes";
import next from "next";
import CareerCard from "../components/CareerCard";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Personal Website V1",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus magnam cumque rem voluptatem eum beatae provident placeat officiis corporis.",
    link: "https://google.com",
    _id: "4",
    imageUrl: WebImageV1,
  },
  {
    title: "Nextchat",
    overview:
      "Nextchat is a chat application built using Next.js, Tailwind CSS, and TypeScript. It uses Socket.io for real-time communication.",
    link: "https://nextchat.vercel.app/",
    _id: "2",
    imageUrl: Nextchat,
  },
  {
    title: "Next threads",
    overview:
      "Next threads is a chat application built using Next.js, Tailwind CSS, and TypeScript. It uses Socket.io for real-time communication.",
    link: "https://nextchat.vercel.app/",
    _id: "3",
    imageUrl: Nextthreads,
  },

  {
    title: "Remind App",
    overview:
      "Remind App is a website that provides UI components for Next.js. It is built using Next.js, Tailwind CSS, and TypeScript.",
    link: "https://uicon-next.vercel.app/",
    _id: "1",
    imageUrl: Remindapp,
  },
];

export default async function Projects() {
  // const data: Data[] = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
      </div>

      <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map((project, index) => (
          // <article className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
          //   <div className="h-56 w-full relative">
          //     <Image
          //       fill
          //       src={project.imageUrl}
          //       alt="Image of the project"
          //       className="w-full h-full object-cover"
          //     />
          //   </div>

          //   <div className="p-4 sm:p-6">
          //     <a href={""} target="_blank">
          //       <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          //         {project.title}
          //       </h3>
          //     </a>

          //     <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          //       {project.overview}
          //     </p>

          //     <a
          //       href={"#"}
          //       onClick={() => alert("Coming soon!")}
          //       // target="_blank"
          //       className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
          //     >
          //       Learn More!
          //       <span className="block transition-all group-hover:ms-0.5">
          //         &rarr;
          //       </span>
          //     </a>
          //   </div>
          // </article>
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
