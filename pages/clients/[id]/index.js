import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const handleProjectLoad = () => {
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      <h1>Client Projects</h1>
      <button onClick={handleProjectLoad}>Load Project</button>
    </div>
  );
};

export default ClientProjectsPage;
