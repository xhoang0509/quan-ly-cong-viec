import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { genarateID } from "./helpers";

// css
import "./App.css"

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [isDisplayForm, setIsDisplayForm] = useState(false);

    useEffect(() => {
        if (localStorage && localStorage.getItem("tasks")) {
            const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
            setTasks([...tasksLocalStorage]);
        }
    }, []);

    const onSubmit = (data) => {
        const newTask = {
            id: genarateID(),
            ...data,
        };

        setTasks([...tasks, newTask]);
    };

    const onUpdateStatus = (id) => {
        const index = tasks.findIndex((tasks) => tasks.id === id);

        tasks[index].status = !tasks[index].status;

        setTasks([...tasks]);
    };

    // if tasks change, save into localstorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {isDisplayForm && <TaskForm onSubmit={onSubmit} />}
                </div>
                <div
                    className={
                        isDisplayForm
                            ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                            : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    }
                >
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setIsDisplayForm(!isDisplayForm)}
                    >
                        <span className="fa fa-plus mr-2"></span>
                        {!isDisplayForm
                            ? "Thêm Công Việc"
                            : "Ẩn Bảng Thêm Công Việc"}
                    </button>
                    <div className="row mt-15 mt-3">
                        <Control />
                    </div>
                    <div className="row mt-15 mt-3">
                        <TaskList
                            tasks={tasks}
                            onUpdateStatus={onUpdateStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
