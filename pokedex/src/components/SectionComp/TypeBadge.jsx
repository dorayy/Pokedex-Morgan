import React from "react";

// Tab color for badge

const tabCouleur = {
  normal: "bg-neutral-300",
  grass: "bg-green-600",
  fire: "bg-red-600",
  water: "bg-blue-600",
  fighting: "bg-brown-600",
  flying: "bg-blue-300",
  poison: "bg-purple-400",
  ground: "bg-amber-300",
  rock: "bg-orange-100",
  bug: "bg-lime-200",
  ghost: "bg-violet-400",
  electric: "bg-yellow-100",
  psychic: "bg-rose-500",
  ice: "bg-sky-200",
  dragon: "bg-purple-700",
  dark: "bg-orange-900",
  steel: "bg-neutral-100",
  fairy: "bg-pink-200",
};
function TypeBadge(data) {
  return (
    <p className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
      Type :{" "}
      {data.types?.map((types) => (
        <React.Fragment key={types.slot}>
          <br />
          <span
            className={`inline-flex items-center justify-center px-2
             py-1 mr-2 text-xs font-bold leading-none
              text-slate-100 rounded-full ${tabCouleur[types.type.name]}`}
          >
            {types.type.name}
          </span>
        </React.Fragment>
      ))}
    </p>
  );
}

export default TypeBadge;
