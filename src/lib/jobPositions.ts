export interface JobPosition {
    id: string;
    title: string;
    slug: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
}

export const openPositions: JobPosition[] = [
    {
        id: 'a7f3b8c2-4e1d-4f5a-9b6c-8d3e1f2a4b5c',
        title: 'Senior Full-Stack Developer',
        slug: 'senior-full-stack-developer',
        department: 'Engineering',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
        requirements: [
            '5+ years full-stack development',
            'React/Next.js expertise',
            'Node.js and TypeScript',
            'Cloud platform experience',
        ],
    },
    {
        id: 'b2e4c9d1-5f3a-6b8e-2c7d-9a1b3e5f7c9d',
        title: 'UI/UX Designer',
        slug: 'ui-ux-designer',
        department: 'Design',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Create beautiful, user-centered designs for web and mobile applications.',
        requirements: [
            '3+ years UI/UX design',
            'Figma proficiency',
            'User research experience',
            'Portfolio required',
        ],
    },
    {
        id: 'c1d5e8f2-6a4b-7c9e-3d8f-1b2c4e6a8c1d',
        title: 'AI/ML Engineer',
        slug: 'ai-ml-engineer',
        department: 'Engineering',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Develop AI-powered solutions including chatbots and machine learning models.',
        requirements: [
            '4+ years ML experience',
            'Python expertise',
            'TensorFlow/PyTorch',
            'NLP knowledge',
        ],
    },
    {
        id: 'd4e7f9a3-7b5c-8d1e-4f9a-2c3d5e7f9a4d',
        title: 'Project Manager',
        slug: 'project-manager',
        department: 'Operations',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Lead cross-functional teams to deliver projects on time and within budget.',
        requirements: [
            '3+ years PM experience',
            'Agile/Scrum certification',
            'Client management skills',
            'Technical background',
        ],
    },
    {
        id: 'e5f8a1b4-8c6d-9e2f-5a1b-3d4e6f8a1b5e',
        title: 'Marketing Specialist',
        slug: 'marketing-specialist',
        department: 'Marketing',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Drive growth through digital marketing campaigns and content strategy.',
        requirements: [
            '2+ years marketing experience',
            'SEO/SEM knowledge',
            'Content creation',
            'Analytics tools',
        ],
    },
    {
        id: 'f6a9b2c5-9d7e-1f3a-6b2c-4e5f7a9b2c6f',
        title: 'DevOps Engineer',
        slug: 'devops-engineer',
        department: 'Engineering',
        location: 'Remote / Tampa Bay',
        type: 'Full-time',
        description:
            'Manage infrastructure and deployment pipelines for scalable applications.',
        requirements: [
            '3+ years DevOps experience',
            'AWS/Azure expertise',
            'Docker/Kubernetes',
            'CI/CD pipelines',
        ],
    },
];

export function getJobBySlug(slug: string): JobPosition | undefined {
    return openPositions.find((job) => job.slug === slug);
}

export function getJobByUuid(uuid: string): JobPosition | undefined {
    return openPositions.find((job) => job.id === uuid);
}
