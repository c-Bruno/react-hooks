import { useState, useTransition } from "react";
import { TabButton } from "../components/TabButton";
import { About } from "../components/About";
import PostTab from "../components/PostTab";
import { Contact } from "../components/Contact";

type Tab = "about" | "posts" | "contact";

/*
  ----- UseTransition -----
  UseTransition is a hook that it’s used to manage the loading state of a component in react components.

  We can use this hook to say for react that some updates in the UI are non priority. They can be 
  interrupted to give priority for another thing. The only thing taht we need to do it is wrap 
  our function(witch change s the state) in a useTransition and react do all the things for us automatically
*/
export const UseTransitionComponent = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<Tab>("about");

  const selectedTab = (tab: Tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div>
      <div>
        <TabButton tittle="About" onClick={() => selectedTab("about")} />
        <TabButton tittle="Posts" onClick={() => selectedTab("posts")} />
        <TabButton tittle="Contact" onClick={() => selectedTab("contact")} />
      </div>

      {isPending && <div>Loading...</div>}
      {tab === "about" && <About />}
      {tab === "posts" && <PostTab />}
      {tab === "contact" && <Contact />}
    </div>
  );
};
