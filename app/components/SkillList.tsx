import { HiCode } from "react-icons/hi";

import {
  SiChakraui,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";

import SkillCard from "./SkillCard";
import MarqueeElement from "./common/MarqueeElement";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  ChakraUI: <SiChakraui size={iconSize} className="text-teal-500" />,
  "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  Expo: <SiExpo size={iconSize} />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  Gulp: <SiGulp size={iconSize} className="text-red-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  "Framer Motion": <SiFramer size={iconSize} />,
  "Nuxt.js": <SiNuxtdotjs size={iconSize} className="text-green-600" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
  Jest: <SiJest size={iconSize} className="text-orange-600" />,
  "Express.js": <SiExpress size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  "React Query": <SiReactquery size={iconSize} className="text-red-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
  Storybook: <SiStorybook size={iconSize} className="text-pink-500" />,
  "React Router": <SiReactrouter size={iconSize} className="text-pink-500" />,
  "React Hook Form": (
    <SiReacthookform size={iconSize} className="text-pink-500" />
  ),
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
};

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);
  return (
    <div className="flex flex-col space-y-1 overflow-x-hidden">
      {Array.from({ length: 2 }, (_, index) => {
        const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
        return (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {slider.map(([name, icon], index) => (
              <SkillCard key={index} name={name} icon={icon} />
            ))}
          </MarqueeElement>
        );
      })}
    </div>
  );
}
