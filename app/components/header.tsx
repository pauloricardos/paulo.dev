import { Github, Linkedin, MapPin, Sun } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white h-2/3 pl-24 pr-24">
      <nav className="h-14 flex items-center">
        <h1 className="text-3xl font-bold w-full">paulo.dev</h1>
        <div className="w-1/2 flex justify-around">
          <h4 className="w-fit h-fit text-gray-light-scale-600">About</h4>
          <h4 className="w-fit h-fit text-gray-light-scale-600">Work</h4>
          <h4 className="w-fit h-fit text-gray-light-scale-600">Skills</h4>
          <h4 className="w-fit h-fit text-gray-light-scale-600">Contact</h4>
          <Sun size={20} className="w-fit h-fit" />
          <button type="button">Download CV</button>
        </div>
      </nav>
      <section className="h-5/6 w-full flex justify-center flex-col">
        <h1 className="w-fit text-3xl font-semibold mb-4">
          Hi, I'm Paulo
          <span className="inline-block animate-waving-hand ml-2">👋</span>
        </h1>
        <div className="flex">
          <div className="w-4/5">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="h-3/6 flex items-center">
              <MapPin className="mr-2" size={20} />
              <span className="">Sao Paulo, Brazil</span>
            </div>
            <div className="flex">
              <Github className="mr-2" size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          <div className="ml-4 w-1/5 flex justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="w-40 h-auto"
            />
          </div>
        </div>
      </section>
    </header>
  );
};
