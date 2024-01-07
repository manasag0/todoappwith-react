    import { useState } from "react";
    import ListComponent from "./ListComponet";

    const AddItem = () => {
        const [tasks, setTasks] = useState([]);
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

        const handleTitleChange = (e) => {
            setTitle(e.target.value);
        };

        const handleDescChange = (e) => {
            setDesc(e.target.value);
        };

        const handleDelete = (index) => {
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
        };

        const handleToggleCompleted = (index) => {
            const updatedTasks = [...tasks];
            updatedTasks[index].completed = !updatedTasks[index].completed;
            setTasks(updatedTasks);
        };

        const handleEdit = (index, editedTitle, editedDesc) => {
            const updatedTasks = [...tasks];
            updatedTasks[index].title = editedTitle;
            updatedTasks[index].description = editedDesc;
            setTasks(updatedTasks);
        };

        const handleDeleteCompleted = () => {
            const updatedTasks = tasks.filter((task) => !task.completed);
            setTasks(updatedTasks);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (title.trim() !== "") {
                const newTask = {
                    title: title,
                    description: desc,
                    date: new Date().toLocaleDateString(),
                    completed: false,
                };
                setTasks([...tasks, newTask]);
                setTitle("");
                setDesc("");
            } else {
                // Show an error message or handle empty task title
                alert("Task title cannot be empty!");
            }
        };

        return (
            <div className="sm:flex flex-col md:flex-row">
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="p-3 w-[100%] border shadow-md my-2 rounded-md bg-transparent"
                            type="text"
                            name="title"
                            title="fill the title"
                            id="title"
                            placeholder="Title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <textarea
                            className=" p-3 w-[100%] bg-transparent shadow-md rounded-md"
                            name="textarea"
                            id="textarea"
                            placeholder="Enter todo list"
                            cols="30"
                            rows="10"
                            value={desc}
                            onChange={handleDescChange}
                        ></textarea>
                        <button className="w-full p-3 text-[18px] font-bold bg-blue-800 bg-opacity-10 shadow-lg rounded-md lg:p-5" type="submit">
                            Add the Task
                        </button>
                    </form>


                </div>

                <div className=" w-[100%] overflow-auto">
                    <div className="flex flex-row justify-between font-bold my-2">
                        <div className="">Title</div>
                        <div>Description</div>
                        <div>Date</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        {tasks.map((task, index) => (
                            <ListComponent
                                key={index}
                                id={index}
                                title={task.title}
                                description={task.description}
                                date={task.date}
                                onDelete={() => handleDelete(index)}
                                onToggleCompleted={() => handleToggleCompleted(index)}
                                completed={task.completed}
                                onEdit={handleEdit}
                            />
                        ))}
                    </div>

                    <button onClick={handleDeleteCompleted} className="w-[100%] p-4 text-[18px] font-bold bg-red-600/30 rounded-md">
                        Delete all completed
                    </button>
                </div>

            </div>
        );
    };

    export default AddItem;
