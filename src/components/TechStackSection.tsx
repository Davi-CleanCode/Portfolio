const icons: Record<string, JSX.Element> = {
  nodejs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      width={48}
      height={48}
    />
  ),
  expressjs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      alt="Express.js"
      width={48}
      height={48}
      style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "4px" }}
    />
  ),
  nextjs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      alt="Next.js"
      width={48}
      height={48}
    />
  ),
  csharp: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
      alt="C#"
      width={48}
      height={48}
    />
  ),
  dotnet: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
      alt=".NET"
      width={48}
      height={48}
    />
  ),
  python: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      alt="Python"
      width={48}
      height={48}
    />
  ),
  django: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
      alt="Django"
      width={48}
      height={48}
      style={{ backgroundColor: "#fff", borderRadius: "8px" }}
    />
  ),
  typescript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      width={48}
      height={48}
    />
  ),
  javascript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      width={48}
      height={48}
    />
  ),
  react: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      width={48}
      height={48}
    />
  ),
  angular: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
      alt="Angular"
      width={48}
      height={48}
    />
  ),
  postgresql: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL"
      width={48}
      height={48}
    />
  ),
  bigquery: (
    <img
      src="https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-icon.svg"
      alt="BigQuery"
      width={48}
      height={48}
    />
  ),
  Azure: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
      alt="azure"
      width={48}
      height={48}
    />
  ),
};

const techs = [
  { name: "Node.js", key: "nodejs" },
  { name: "Express.js", key: "expressjs" },
  { name: "Next.js", key: "nextjs" },
  { name: "C#", key: "csharp" },
  { name: ".NET", key: "dotnet" },
  { name: "Python", key: "python" },
  { name: "Django", key: "django" },
  { name: "TypeScript", key: "typescript" },
  { name: "JavaScript", key: "javascript" },
  { name: "React", key: "react" },
  { name: "Angular", key: "angular" },
  { name: "PostgreSQL", key: "postgresql" },
  { name: "BigQuery", key: "bigquery" },
  { name: "AWS", key: "aws" },
];

export default function TechStackSection() {
    return (
        <section className="py-12 bg-dark-950">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Principais Ferramentas</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {techs.map(tech => (
                        <div key={tech.key} className="flex flex-col items-center">
                            {icons[tech.key as keyof typeof icons]}
                            <span className="mt-2 text-lg font-medium text-white">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
