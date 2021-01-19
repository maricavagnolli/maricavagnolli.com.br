import * as React from "react";
import AboutMe from "./components/AboutMe";
import Articles from "./components/Articles";
import Newsletter from "./components/Newsletter";
import Welcome from "./components/Welcome";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <main>
      <Welcome />
      <AboutMe />
      <Articles />
      <Newsletter />
    </main>
  );
}

export default Home;
