import { Project } from '@/models/projectModel';
import Image from 'next/image';
import { promises as fs } from 'fs';
import logo from '../../public/logo.jpg';

export const SectionProject = async () => {
    const file = await fs.readFile(process.cwd() + '/app/project/data.json', 'utf8');
    const data: { data: Project[] } = JSON.parse(file);
    //push project on github path /portfolio default
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.data.map((project, index) => (
                        <div key={index} className="p-4 rounded shadow">
                            <Image src={project.img || logo} width={200} height={300} alt={`Screenshot of ${project.title}`} className="mb-4 rounded" />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            {project.link && <a href={`/portfolio/project/${index}`} className="text-blue-500 hover:underline">View Project</a>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
