export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 rounded-xl bg-white p-6 text-secondary-wenge-brown">
      <img
        className="rounded-lg"
        src="/image-omelette.jpeg"
        alt="picture of an omelette"
      />
      <h1 className="font-young-serif text-3xl text-secondary-dark-charcoal">
        Simple Omelette Recipe
      </h1>
      <p className="">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="rounded-xl bg-secondary-rose-white p-4">
        <h2 className="text-lg font-bold text-primary-dark-raspberry">
          Preparation time
        </h2>
        <ul className="space-y-2 p-2 ">
          {[
            ["Total:", "Approximately 10 minutes"],
            ["Preparation:", "5 minutes"],
            ["Cooking:", "5 minutes"],
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className="mr-2 h-1 w-1 shrink-0 bg-primary-nutmeg" />
              <p>
                <b>{item[0]}</b> {item[1]}{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <h2 className="py-2 font-young-serif text-2xl">Ingredients</h2>
        <ul className="space-y-2 p-2 ">
          {[
            "2-3 large eggs",
            "Salt, to taste",
            "Pepper, to taste",
            "1 tablespoon of butter or oil",
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 ">
              <div className="mr-2 h-1 w-1 shrink-0 bg-primary-nutmeg" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-2 border-b border-secondary-light-grey" />

      <div className="">
        <h2 className="py-2 font-young-serif text-2xl">Instructions</h2>
        <ul className=" list-outside list-decimal space-y-2 p-4 marker:font-bold marker:text-primary-nutmeg">
          <li className="px-2">
            <p className="">
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </p>
          </li>
          <li className="px-2">
            <p>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
              and add butter or oil.
            </p>
          </li>
          <li className="px-2">
            <p>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            </p>
            surface.
          </li>

          <li className="px-2">
            <p>
              <b>Add fillings (optional):</b> When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
            </p>
            chosen fillings over one half of the omelette.
          </li>

          <li className="px-2">
            <p>
              <b>Fold and serve:</b> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another
            </p>
            minute, then slide it onto a plate.
          </li>

          <li className="px-2">
            <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
          </li>
        </ul>
      </div>

      <div className="mx-2 border-b border-secondary-light-grey" />

      <div className="">
        <h2 className="py-2 font-young-serif text-2xl">Nutrition</h2>
        <p className="">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <ul className="flex flex-col p-4">
          <li className="flex w-full justify-between border-b p-4">
            <p className="w-[50%]">Calories</p>
            <p className="w-[50%] font-bold text-primary-nutmeg">277kcal</p>
          </li>
          <li className="flex w-full justify-between border-b p-4">
            <p className="w-[50%]">Carbs</p>
            <p className="w-[50%] font-bold text-primary-nutmeg">0g</p>
          </li>
          <li className="flex w-full justify-between border-b p-4">
            <p className="w-[50%]">Protein</p>
            <p className="w-[50%] font-bold text-primary-nutmeg">20g</p>
          </li>
          <li className="flex w-full justify-between p-4">
            <p className="w-[50%]">Fat</p>
            <p className="w-[50%] font-bold text-primary-nutmeg">22g</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
