import Image from "next/image";
import {
  FaBarsStaggered,
  FaRegCirclePlay,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="bg-linear-to-r/shorter from-emerald-100 to-white min-h-screen ">
        <header className="px-8 py-6 flex item-center justify-between md:px-10 lg:px-25 lg:py-8 ">
          <div className="text-emerald-400 font-semibold text-2xl">BICCAS</div>
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-gray-400 lg:gap-14 lg:text-base">
              <li className="text-black">Home</li>
              <li>Product</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </nav>
          <div className="md:hidden block text-2xl text-emerald-400">
            <FaBarsStaggered />
          </div>
        </header>
        <main className="px-8 md:flex w-full md:px-10 lg:px-25 ">
          <section className="text-center w-full md:mt-6 md:w-6/12">
            <h1 className=" font-bold text-gray-800 text-4xl px-3.5 lg:px-20 my-4 leading-12 md:leading-15 tracking-wide  lg:text-6xl">
              We’re here to Increase your Productivity
            </h1>
            <Image
              src="/line.svg"
              alt="Line"
              width={340}
              height={34}
              className="mx-auto"
            />
            <p className="my-8 text-md px-4 md:text-left lg:px-30 lg:text-sm leading-6">
              Let`s make your work more organized and easier using the Taskio
              Dashboard with many of the latest features in managing work every
              day.
            </p>
            <div className="flex gap-6 justify-center mx-auto md:ml-30 md:justify-start my-8">
              <button className="bg-emerald-400 text-white text-sm px-4 py-2 rounded-4xl">
                Try free trial
              </button>
              <button className="flex items-center gap-2">
                <span className="text-lg">
                  <FaRegCirclePlay />
                </span>
                View demo
              </button>
            </div>
          </section>
          <section className="w-full md:w-6/12 my-16 md:my-0 md:mt-6 ">
            <Image src="/test.svg" alt="Test Image" width={600} height={500} />
          </section>
        </main>

        <div>
          <div className="font-bold text-stone-900 text-2xl text-center my-12 lg:text-3xl">
            <p>More than 25,000 teams use Collabs</p>
          </div>
          <div className="pb-12">
            <Image
              src="/brands.svg"
              alt="Brands"
              width={700}
              height={100}
              className="mx-auto text-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
