import Navbar from "@/Components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  const handleEvent = () => {
    return router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Navbar />
      <h1>This is Error Page</h1>
      <a onClick={handleEvent}>Go back To Home Page</a>
    </>
  );
};

export default ErrorPage;
