import team from "../assets/team.jpg";

export function Main() {
  return (
    <section className="flex-col justify-center md:flex items-center hScreen px-10">
      <div className="flex flex-col items-center md:items-start gap-4 z-20 md:mr-52 md:mb-32">
        <h2 className="font-roboto text-3xl md:text-7xl font-semibold text-gray-600 md:w-11/12">
          Create amazing graphics
        </h2>
        <span className="font-roboto text-1xl text-center md:text-left md:text-2xl md:w-5/12 text-gray-500">
          Colaborate and create beautiful graphics with your team
        </span>

        <button className="bg-orange-400 rounded text-white text-2xl px-16 text-center py-2 font-bold mt-6 hover:bg-orange-500 hover:duration-200">
          Start now
        </button>
      </div>
      <div>
        <img
          className="md:w-3/5 md:absolute md:top-32 md:right-32"
          src={team}
          alt=""
        />
      </div>
    </section>
  );
}
