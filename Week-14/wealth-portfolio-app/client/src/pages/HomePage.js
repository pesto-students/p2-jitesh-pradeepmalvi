import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function HomePage() {
  const [userAccess, setUserAccess] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("wealth_user")) {
      setUserAccess(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      {userAccess ? (
        <Section />
      ) : (
        <div className="bg-gray-200 px-10 py-10 flex justify-center min-h-[100vh]">
          <h5 class="text-2xl mb-2 font-bold tracking-tight text-gray-900">
            Welcome to Wealth App
          </h5>
        </div>
      )}

      <Footer />
    </>
  );
}
