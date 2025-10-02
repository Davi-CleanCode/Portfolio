const icons: Record<string, JSX.Element> = {
    csharp: <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#239120" d="M64 0L7.7 32v64L64 128l56.3-32V32z" /><path fill="#fff" d="M64 116.6L15.4 89.3V38.7L64 11.4l48.6 27.3v50.6z" /><path fill="#239120" d="M64 23.1L25.1 45.1v37.8L64 104.9l38.9-22V45.1z" /><path fill="#fff" d="M64 97.2L32.8 79.1V48.9L64 30.8l31.2 18.1v30.2z" /><path fill="#239120" d="M64 34.7L40.5 48.1v31.8L64 93.3l23.5-13.4V48.1z" /><path fill="#fff" d="M64 89.4L48.2 80.5V47.5L64 38.6l15.8 8.9v33z" /></svg>,
    python: <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#3776AB" d="M63.9 12.2c-11.6.1-21.2 1.1-21.2 1.1s-9.6.9-9.6 10.2v10.2h19.2v2.6H32.7c-5.3 0-9.6 4.3-9.6 9.6v19.2c0 5.3 4.3 9.6 9.6 9.6h6.4v-8.5c0-5.3 4.3-9.6 9.6-9.6h19.2c5.3 0 9.6-4.3 9.6-9.6V23.5c0-9.3-9.6-10.2-9.6-10.2s-9.6-1-21.2-1.1zm-13.4 7.7a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6z" /><path fill="#FFD43B" d="M64.1 115.8c11.6-.1 21.2-1.1 21.2-1.1s9.6-.9 9.6-10.2v-10.2H75.7v-2.6h19.2c5.3 0 9.6-4.3 9.6-9.6V63.1c0-5.3-4.3-9.6-9.6-9.6h-6.4v8.5c0 5.3-4.3 9.6-9.6 9.6H49.7c-5.3 0-9.6 4.3-9.6 9.6v19.2c0 9.3 9.6 10.2 9.6 10.2s9.6 1 21.2 1.1zm13.4-7.7a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z" /></svg>,
    react: <svg width="40" height="40" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11" /><path d="M64 22c-13.3 0-25.6 2.7-34.7 7.2C19.2 33.7 16 39.2 16 45.2c0 6 3.2 11.5 13.3 16.1C38.4 65.3 50.7 68 64 68s25.6-2.7 34.7-7.2C108.8 56.7 112 51.2 112 45.2c0-6-3.2-11.5-13.3-16.1C89.6 24.7 77.3 22 64 22zm0 4c12.1 0 23.2 2.5 31.2 6.6C104.2 36.2 108 41.1 108 45.2c0 4.1-3.8 9-12.8 12.6C87.2 61.5 76.1 64 64 64s-23.2-2.5-31.2-6.6C23.8 54.2 20 49.3 20 45.2c0-4.1 3.8-9 12.8-12.6C40.8 28.5 51.9 26 64 26z" /></g></svg>,
    angular: <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#DD0031" d="M64 0L5.7 22.1l8.2 70.2L64 128l50.1-35.7 8.2-70.2z" /><path fill="#C3002F" d="M64 0v128l50.1-35.7 8.2-70.2z" /><path fill="#FFF" d="M64 23.6l-27.2 74.2h10.7l5.5-15.2h22l5.5 15.2h10.7zm0 18.2l8.7 24.1H55.3z" /></svg>,
    sql: <svg width="40" height="40" viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="56" ry="32" fill="#00758F" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#fff">SQL</text></svg>,
    aws: <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#FF9900" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 120c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z" /><path fill="#232F3E" d="M64 32l-24 64h48z" /></svg>,
    bigquery: <svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#4285F4" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff">BQ</text></svg>,
    javascript: <svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="24" fill="#F7DF1E" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#000">JS</text></svg>,
    django: <svg width="40" height="40" viewBox="0 0 128 128"><rect width="128" height="128" rx="24" fill="#092E20" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#fff">Django</text></svg>,
    dotnet: <svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#512BD4" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="#fff">.NET</text></svg>
};

const techs = [
    { name: 'C#', key: 'csharp' },
    { name: 'Python', key: 'python' },
    { name: 'React', key: 'react' },
    { name: 'Angular', key: 'angular' },
    { name: 'SQL', key: 'sql' },
    { name: 'AWS', key: 'aws' },
    { name: 'BigQuery', key: 'bigquery' },
    { name: 'JavaScript', key: 'javascript' },
    { name: 'Django', key: 'django' },
    { name: '.NET', key: 'dotnet' },
];

export default function TechStackSection() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Principais Ferramentas</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
                    {techs.map(tech => (
                        <div key={tech.key} className="flex flex-col items-center">
                            {icons[tech.key as keyof typeof icons]}
                            <span className="mt-2 text-lg font-medium text-gray-700">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
