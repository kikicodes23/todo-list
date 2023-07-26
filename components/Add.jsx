"use client"

import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export function Add({ setTasks, setTasksCopy, currentFilter }) {
    const [task, setTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if(task === "") return

        const newTask = {
            id: uuidv4(),
            title: task,
            completed: false
        }
        
        setTasks(prev => [
            ...prev,
            newTask
        ])

        setTasksCopy(prev => [
            ...prev,
            newTask
        ])

        setTask("")
    }

    return (
        currentFilter !== "completed" && (
            <form onSubmit={handleSubmit} className="flex justify-center gap-4 sx:gap-[25px] px-4 pt-[50px]">
                <input value={task} onChange={e => setTask(e.target.value)} className="border-[1px] rounded-xl h-[58px] w-full xs:w-[476px] focus:outline-[#2F80ED] pl-3 focus:placeholder:text-[#333333]" placeholder="add details" />
                <button className="h-[56px] w-[109px] bg-[#2F80ED] text-white rounded-xl">Add</button>
            </form>
        )
    )
}