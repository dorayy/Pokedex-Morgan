function Button(props) {
  const imgPoke =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    props.id +
    ".png";

  const saveItem = () => {
    let pokeArray = JSON.parse(localStorage.getItem("favoris"));

    if (pokeArray !== null) {
      let isAdd = false;
      pokeArray.forEach((pokemon) => {
        if (pokemon.id === props.id) {
          isAdd = true;
        }
      });
      if (!isAdd) {
        let newPoke = {
          id: props.id,
          name: props.pokemonName,
          imgUrl: imgPoke,
        };
        pokeArray.push(newPoke);
        localStorage.setItem("favoris", JSON.stringify(pokeArray));
        let elm = document.getElementById(`${props.id}`);

        if (
          elm.className ===
          "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
        ) {
          elm.className =
            "bg-red-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
        } else {
          elm.className =
            "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
        }
      }
      if (isAdd) {
        const newPoke = pokeArray.filter((pokemon) => pokemon.id !== props.id);
        localStorage.setItem("favoris", JSON.stringify(newPoke));

        let elm = document.getElementById(`${props.id}`);

        if (
          elm.className ===
          "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
        ) {
          elm.className =
            "bg-red-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
        } else {
          elm.className =
            "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
        }
      }
    } else {
      let pokemons = [
        { id: props.id, name: props.pokemonName, imgUrl: imgPoke },
      ];
      localStorage.setItem("favoris", JSON.stringify(pokemons));

      let elm = document.getElementById(`${props.id}`);

      if (
        elm.className ===
        "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
      ) {
        elm.className =
          "bg-red-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
      } else {
        elm.className =
          "bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full";
      }
    }
  };
  return (
    <button
      onClick={saveItem}
      className={`bg-blue-500  hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full`}
      id={props.id}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart w-3 mr-1"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
}

export default Button;
