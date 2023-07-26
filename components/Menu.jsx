export function Menu({setTasks, tasksCopy, currentFilter ,setCurrentFilter}) {    

    function filterActive() {
        setCurrentFilter("active")

        setTasks(tasksCopy)

        setTasks((prevTasks) => prevTasks.filter((task) => task.completed === false))
    }

    function filterCompleted() {
        setCurrentFilter("completed")

        setTasks(tasksCopy)

        setTasks((prevTasks) => prevTasks.filter((task) => task.completed === true))
    }

    function filterAll() {
        setCurrentFilter("all")

        setTasks(tasksCopy)
    }

    return(
        <nav className="pt-[58px] xs:flex xs:justify-center px-4" >
            <ul className="flex justify-around xs:w-[608px] relative after:content-[''] after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-[1px] after:bg-[#BDBDBD]">
                <li>
                    <button className={`font-semibold text-sm w-[81px] text-center text-[#333333] hover:font-bold ${currentFilter === "all" && "relative after:content-[''] after:absolute after:bottom-[-19px] after:left-0 after:w-full after:h-[4px] after:bg-[#2F80ED] after:rounded-t-[4px]"}`} onClick={filterAll}>All</button>
                </li>

                <li>
                    <button className={`font-semibold text-sm w-[81px] text-center text-[#333333] hover:font-bold ${currentFilter === "active" && "relative after:content-[''] after:absolute after:bottom-[-19px] after:left-0 after:w-full after:h-[4px] after:bg-[#2F80ED] after:rounded-t-[4px]"}`} onClick={filterActive}>Active</button>
                </li>

                <li>
                    <button className={`font-semibold text-sm w-[81px] text-center text-[#333333] hover:font-bold ${currentFilter === "completed" && "relative after:content-[''] after:absolute after:bottom-[-19px] after:left-0 after:w-full after:h-[4px] after:bg-[#2F80ED] after:rounded-t-[4px]"}`} onClick={filterCompleted}>Completed</button>
                </li>
            </ul>
        </nav>
    )
}