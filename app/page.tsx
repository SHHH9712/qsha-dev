import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const projects = [
    {
      name: "cwall",
      description: "cwall content publisher",
      url: "/cwall",
    },
    {
      name: "ai-companion",
      description: "ai companion",
      url: "/ai-companion",
    },
    {
      name: "resume",
      description: "resume",
      url: "/resume",
    },
  ];

  return (
    <div className="flex flex-col m-auto justify-left items-start gap-5">
      <h1 className="text-3xl">qsha directory:</h1>
      {projects.map((project) => (
        <div className="flex gap-5 text-xl" key={project.name}>
          <Button>
            <Link href={project.url}>{project.name}</Link>
          </Button>
          {project.description}
        </div>
      ))}
    </div>
  );
}
