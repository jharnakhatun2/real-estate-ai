import { useEffect, useState } from "react";
import AgentsCard from "./AgentsCard";
const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("/public/agentsData.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);
  return (
    <section>
      <div className="">
        <AgentsCard></AgentsCard>
      </div>
    </section>
  );
};

export default Agents;
