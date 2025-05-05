import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

export const Analytics = () => {
  const [okCookie, setOkCookie] = useState<boolean | null | string>(false);
  const [closeModule, setCloseModule] = useState<boolean>(false);

  useEffect(() => {
    const storageCookie = localStorage.getItem("okCookie");
    if (storageCookie === "true") {
      setOkCookie(true);
      setCloseModule(true);
    } else if (storageCookie === "false") {
      setOkCookie(false);
      setCloseModule(false);
    }
  }, []);

  const handleAccept = () => {
    setOkCookie(true);
    localStorage.setItem("okCookie", "true");
    setCloseModule(true);
  };

  const handleDecline = () => {
    localStorage.setItem("okCookie", "false");
    setCloseModule(true);
  };

  useEffect(() => {
    if (okCookie) {
      ReactGA.initialize("G-85RPEZ0RX5");
    }
  }, [okCookie]);

  return (
    <>
      {!closeModule && (
        <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
          <h2 className="font-semibold text-gray-800 dark:text-white">
            🍪 Cookie Notice
          </h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            We use cookies to ensure that we give you the best experience on our
            website.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Read cookies policies
            </a>
            .
          </p>

          <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
              Manage your preferences
            </button>

            <div className="flex gap-6">
              <button
                onClick={handleDecline}
                className="hover:cursor-pointer text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              >
                No
              </button>

              <button
                onClick={handleAccept}
                className="hover:cursor-pointer text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              >
                Accept
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
