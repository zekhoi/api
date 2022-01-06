import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="404 Not Found" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-w-full min-h-screen text-gray-700 bg-base">
        <div className="container px-8 mx-auto">
          <div className="grid mx-auto md:grid-cols-2 sm:grid-cols-1">
            <div className="m-auto py-auto">
              <img src="/images/svg/404.svg" alt="404 Not Found" />
            </div>
            <div className="mt-8 text-center md:text-left md:m-auto">
              <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
                Hi,{" "}
              </h1>
              <h1 className="mt-0 text-2xl font-bold uppercase md:text-3xl lg:text-5xl">
                You Seem to be Lost!
              </h1>
              <div className="py-8">
                <p className="text-gray-500">
                  The page you're looking for isn't available.
                </p>
                <p className="text-gray-500">
                  Try searching again or use the Go Back button below.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/">
                  <button
                    className="flex items-center px-4 py-2 mb-6 font-bold text-yellow-800 bg-yellow-300 rounded focus:outline-none gap-x-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    <ion-icon name="arrow-back-circle" /> Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
