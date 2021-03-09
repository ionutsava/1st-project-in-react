const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Get subwoofer from service',
            day: 'March 10th at 11:30am',
            reminder: true,
        },
        {
            id: 2,
            text: 'Pay the bills',
            day: 'March 11th at 4:00pm',
            reminder: false,
        },
    {
        id: 3,
        text: 'Food shopping',
        day: 'March 13th at 10:00am',
        reminder: true,
    },
    ])
    return (
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
