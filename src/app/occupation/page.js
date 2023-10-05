import Image from 'next/image'
import Link from 'next/link'

function UsageOptions() {
    const options = [
        {
            title: 'School',
            description: 'Use the quiz app to enhance your learning',
            image: 'school.png'
        },
        {
            title: 'Work',
            description: 'Create interactive quizzes and knowledge check in your team',
            image: 'work.png'
        },
        {
            title: 'Personal Use',
            description: 'Test your knowledge in different areas',
            image: 'personal.png'
        }
    ]

    return (
        <div className="flex flex-col space-y-4">
            {options.map((option, index) => (
                <Link href={`/${option.title.toLowerCase()}`} key={index}>
                    <a className="flex items-center space-x-3">
                        <Image
                            src={`/${option.image}`}
                            alt={option.title}
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{option.title}</h2>
                            <p className="text-gray-500">{option.description}</p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default UsageOptions;

