import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const onGenarateData = () => {
        const tasks = [
            {
                id: genarateID(),
                name: "Học lập trình",
                status: true,
            },
            {
                id: genarateID(),
                name: "Đi làm",
                status: false,
            },
            {
                id: genarateID(),
                name: "Coder",
                status: true,
            },
            {
                id: genarateID(),
                name: "Home work",
                status: true,
            },
            {
                id: genarateID(),
                name: "Rửa bát",
                status: false,
            },
        ];
        setTasks(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    useEffect(() => {
        if (localStorage && localStorage.getItem("tasks")) {
            const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
            setTasks([...tasksLocalStorage]);
        }
    }, []);
    const s4 = () => {
        return Math.floor(1 + Math.random() * 0x10000)
            .toString(16)
            .substring(1);
    };

    const genarateID = () => {
        return (
            s4() +
            s4() +
            "-" +
            s4() +
            s4() +
            s4() +
            "-" +
            s4() +
            s4() +
            "-" +
            s4() +
            s4()
        );
    };
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {isDisplayForm && <TaskForm />}
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
                    <button
                        type="button"
                        className="btn btn-danger ml-5"
                        onClick={onGenarateData}
                    >
                        Genarate Data
                    </button>
                    <div className="row mt-15 mt-3">
                        <Control />
                    </div>
                    <div className="row mt-15 mt-3">
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
