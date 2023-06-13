import Navbar from "@/Components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((currElem) => {
        return (
          <div key={currElem.id} className="ssr-styles">
            <h3>{currElem.id}</h3>
            <Link href={`/blog/${currElem.id}`}>
            <h2>{currElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
