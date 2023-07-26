"use client"

import { Menu } from "@/components/Menu.jsx";
import { Add } from "@/components/Add.jsx";
import { Task } from "@/components/Task.jsx";
import React, { useState } from "react";

export function Body() {
    const [tasks, setTasks] = useState([])

    const [tasksCopy, setTasksCopy] = useState([])

    const [currentFilter, setCurrentFilter] = useState("all")

    return (
        <article>
            <Menu setTasks={setTasks} tasksCopy={tasksCopy} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>

            <Add setTasksCopy={setTasksCopy} setTasks={setTasks} currentFilter={currentFilter}/>

            {tasks.map((task) => (
                <Task key={task.id} title={task.title} completed={task.completed} id={task.id} setTasks={setTasks} setTasksCopy={setTasksCopy} currentFilter={currentFilter}/>
            ))}

        </article>
    )
}