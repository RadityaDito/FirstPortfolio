import Image from "next/image";
import Me from "@/public/IMG_1312.jpg";
import CareerCard from "../components/CareerCard";
import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";
import SkillList from "../components/SkillList";
import { CAREERS } from "@/constants";
// interface Data {
//   title: string;
//   overview: string;
//   link: string;
//   _id: string;
//   imageUrl: string;
// }

// async function getProjects() {
//   const query = `*[_type == "project"] {
//     title,
//       overview,
//       link,
//       _id,
//       "imageUrl": image.asset->url
//   }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export const revalidate = 60;

export default async function Projects() {
  // const data: Data[] = await getProjects();

  return (
    <div className="">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experiences
        </h1>
      </div>

      <div
        className={`flex items-center gap-2 pt-6 pb-2 text-xl font-medium text-gray-900 dark:text-gray-100 `}
      >
        <>
          <CareerIcon />
        </>
        <h2 className="capitalize">Careers</h2>
      </div>
      <p className="dark:text-gray-100">My professional career journey.</p>
      <div className="grid gap-y-8 sm:gap-6 pb-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-10 pt-6 border-b border-gray-200 dark:border-gray-700">
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
      <div
        className={`flex items-center gap-2 pt-6 pb-2 text-xl font-medium text-gray-900 dark:text-gray-100 `}
      >
        <>
          <CareerIcon />
        </>
        <h2 className="capitalize">Skills</h2>
      </div>
      <p className="dark:text-gray-100">My current skills.</p>
      <div className="pt-6">
        <SkillList />
      </div>
    </div>
  );
}
