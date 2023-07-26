import { MdOutlineDeleteOutline } from "react-icons/md";

export function Task({ title, completed, id, setTasks, setTasksCopy, currentFilter}) {

    function handleUpdate(e){
        setTasks((prevTasks) => prevTasks.map((task) => {
            if(task.id === id) {
                return { ...task, completed: e.target.checked}
            } 

            return task
        }))

        setTasksCopy((prevTasks) => prevTasks.map((task) => {
            if(task.id === id) {
                return { ...task, completed: e.target.checked}
            } 

            return task
        }))
    }

    function handleDelete(){
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))

        setTasksCopy((prevTasks) => prevTasks.filter((task) => task.id !== id))
    } 

    return(
        <section className="flex xs:justify-around px-4 pt-[26px]">

            <section className="flex justify-between items-center w-full xs:w-[600px]">
                <div className="flex items-center gap-2">
                    <input id={id} onChange={handleUpdate} checked={completed} type="checkbox" className="w-6 h-6 border-[#828282] accent-[#2F80ED] rounded-[4px]"/>
                    <label htmlFor={id} className={`font-medium text-lg text-black ${completed && "line-through"}`}>{title}</label>
                </div>

                {currentFilter === "completed" && (
                    <button className="w-5 h-5" onClick={handleDelete}>
                        <MdOutlineDeleteOutline className="w-full h-full object-cover fill-[#BDBDBD]"/>
                    </button>
                )}
                
            </section>
        
        </section>
    )
}