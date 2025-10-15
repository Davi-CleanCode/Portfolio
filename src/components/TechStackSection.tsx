const icons: Record<string, JSX.Element> = {
    node.js
    typescript
    csharp: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={48} height={48} />,
    python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={48} height={48} />,
    react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={48} height={48} />,
    angular: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width={48} height={48} />,
    sql: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={48} height={48} />,
    aws: <img src="https://www.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" alt="AWS" width={48} height={48} />,
    bigquery: <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmesadeayuda.servinformacion.com%2Fpt-br%2Fknowledge%2Fbig-query-no-gcp&psig=AOvVaw2Gu-95XO2jnmI-yUlrD4Qk&ust=1759457122326000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCAptq2hJADFQAAAAAdAAAAABAE" alt="BigQuery" width={48} height={48} />,
    javascript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={48} height={48} />,
    django: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" width={48} height={48} style={{ background: '#fff', borderRadius: '8px' }} />,
    dotnet: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" width={48} height={48} />,
};

const techs = [
    { name: 'node.js#', key: 'csharp' },
    { name: 'typescript', key: 'csharp' },
    { name: 'C#', key: 'csharp' },
    { name: '.NET', key: 'dotnet' },
    { name: 'Python', key: 'python' },
    { name: 'Django', key: 'django' },
    { name: 'JavaScript', key: 'javascript' },
    { name: 'React', key: 'react' },
    { name: 'Angular', key: 'angular' },
    { name: 'SQL', key: 'sql' },
    { name: 'AWS', key: 'aws' },
    { name: 'BigQuery', key: 'bigquery' },
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
