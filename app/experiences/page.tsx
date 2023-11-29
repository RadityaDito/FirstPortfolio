import Image from "next/image";
import Me from "@/public/IMG_1312.jpg";
import CareerCard from "../components/CareerCard";
import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";
import SkillList from "../components/SkillList";
// interface Data {
//   title: string;
//   overview: string;
//   link: string;
//   _id: string;
//   imageUrl: string;
// }

export const CAREERS = [
  {
    position: "Backend Developer",
    company: "Badan Riset dan Inovasi Nasional",
    logo: "https://res.cloudinary.com/dbnjhiqka/image/upload/c_scale,h_2000,w_2000/v1701272974/Personal%20Portfolio/qxokf6dv9udlajhehwqg.png",
    location_type: "On Site",
    type: "Seasonal",
    start_date: "2023-10",
    end_date: "2024-01",
    link: "https://brin.go.id/",
  },
  {
    position: "Labolatory Assistant",
    company: "Network Laboratory DTE FTUI ",
    logo: "https://res.cloudinary.com/dbnjhiqka/image/upload/c_scale,h_2000,w_2000/v1701277264/Personal%20Portfolio/ljrsziaqkiwmekc4b7y1.png",
    location: "Depok",
    location_type: "On Site",
    type: "Seasonal",
    start_date: "2023-07",
    link: "https://www.linkedin.com/in/netlab-dte-ftui-849307199/?trk=public_profile_browsemap&originalSubdomain=id",
  },
  {
    position: "Lead Software Engineer",
    company: "Exercise FTUI",
    location: "Depok",
    location_type: "On Site",
    type: "Seasonal",
    start_date: "2023-02",
    link: "https://www.exerciseftui.com/",
  },
  {
    position: "Software Engineer",
    company: "Exercise FTUI",
    location: "Depok",
    location_type: "On Site",
    type: "Seasonal",
    start_date: "2022-02",
    end_date: "2023-02",
    link: "https://www.exerciseftui.com/",
  },
];

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
