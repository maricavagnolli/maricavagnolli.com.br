import * as React from "react";
import AboutMe from "./components/AboutMe";
import Welcome from "./components/Welcome";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <main>
      <Welcome />
      <AboutMe />
    </main>
  );
}

export default Home;
