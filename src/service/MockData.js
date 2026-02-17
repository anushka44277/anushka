

let profileData = {
    personalInfo: {
        name: 'Anushka',
        title: 'Human',
        email: 'anu@gmail.com',
        phone: '5551122',
        location: 'Teku, Nepal',
        bio: 'idgaf about anything. I am just here to have fun and enjoy life. I am not interested in anything else. ',
        profilePicture:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    education: [
        {
            id: 1,
            degree: '+2',
            institution: 'United College, Nepal',
            year: '2018 - 2020',
            description: 'pass bhayoooo'
        },
        {
            id: 2,
            degree: 'Bachelor in BCA',
            institution: 'Tribhuvan University, Nepal',
            year: '2022 - present',
            description: 'gardai chu hai'
        }
    ],
    workExperience: [
       
    ],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
            technologies: ['React', 'Spring', 'PSQL', 'Stripe API'],
            link: 'https://github.com/example/ecommerce',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            name: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            technologies: ['Thymeleaf', 'SpringBoot', 'Material-Mysql'],
            link: 'https://github.com/example/taskmanager',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            name: 'Weather Dashboard',
            description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
            technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
            link: 'https://github.com/example/weather',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop'
        }
    ],

    hobbies: [
        {
            id: 1,
            name: 'Photography',
            description: 'Passionate about landscape and street photography. Love capturing moments and telling stories through images.',
            icon: '📷'
        },
        {
            id: 2,
            name: 'Reading',
            description: 'Avid reader of technology books, science fiction, and biographies. Always learning something new.',
            icon: '📚'
        },
        {
            id: 3,
            name: 'Hiking',
            description: 'Enjoy exploring nature trails and mountains. Great way to stay active and clear the mind.',
            icon: '⛰️'
        },
        {
            id: 4,
            name: 'Open Source',
            description: 'Contributing to open source projects and building tools that help the developer community.',
            icon: '💻'
        }
    ]
}

export const mockAPI = {
    getProfile() {
        return { ...profileData };
    }
}