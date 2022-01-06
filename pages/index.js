import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="NextJS Starter"
        description="Starting template with tailwindcss"
      />
      <div className="flex items-center justify-center w-screen min-h-screen text-gray-700 bg-base md:w-full">
        <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
          <div className="grid items-center grid-cols-1 gap-y-5">
            <div className="flex flex-col text-center gap-y-4">
              <h1 className="text-3xl font-bold md:text-5xl 2xl:text-7xl">
                NextJS Starter
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
