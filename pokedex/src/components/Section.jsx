import Svg1 from "./SectionComp/Svg1";
import Svg2 from "./SectionComp/Svg2";
import Svg3 from "./SectionComp/Svg3";
import Svg4 from "./SectionComp/Svg4";
import TypeBadge from "./SectionComp/TypeBadge";
import General from "./SectionComp/General";
import Pouvoir from "./SectionComp/Pouvoir";
import Stats from "./SectionComp/Stats";

const noImgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

function Section(data) {
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="grid grid-cols-2  p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <Svg4></Svg4>
            <img
              src={data.sprites?.front_default}
              alt={noImgPoke}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
            <TypeBadge {...data}></TypeBadge>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <Svg1></Svg1>
            <General {...data}></General>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <Svg2></Svg2>
            <Pouvoir {...data}></Pouvoir>
          </div>

          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <Svg3></Svg3>
            <Stats {...data}></Stats>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
