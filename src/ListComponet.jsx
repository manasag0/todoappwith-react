import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const ListComponent = ({ id, title, description, date, onDelete, onToggleCompleted, completed, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            onEdit(id, editedTitle, editedDescription);
        }
    };

    return (
        <div className={`bg-blue-200/50 rounded-md flex justify-between items-center p-4 my-2 ${completed ? 'line-through' : ''}`}>
            {!isEditing ? (
                <>
                    <h1 onClick={onToggleCompleted} className={`cursor-pointer font-semibold text-lg ${completed ? 'completed-task' : ''}`}>{title}</h1>
                    <div className="description-wrapper w-48 break-words text-sm">{description}</div>
                    <h1 className="text-sm">{date}</h1>
                </>
            ) : (
                < >
                    <input
                        className="p-2 border rounded"
                        type="text"
                        value={editedTitle}
                        maxLength={15} // Limiting title to 15 characters
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        rows={Math.ceil(description.length / 30)} // Set rows based on characters (30 chars per row)
                        className="w-48 p-2 mt-2 border rounded"
                    ></textarea>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2" onClick={handleEdit}>Save</button>
                </>
            )}
            <button onClick={onDelete} className="flex items-center">
                <MdOutlineDelete />
            </button>
            {!completed && <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={handleEdit}>Edit</button>}
        </div>
    );
};

export default ListComponent;
