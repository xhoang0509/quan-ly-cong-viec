import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

const App = () => {
    return (
        <div class="container">
            <div class="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <TaskForm />
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <button type="button" class="btn btn-primary">
                        <span class="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    <div class="row mt-15 mt-3">
                        <Control />
                    </div>
                    <div class="row mt-15 mt-3">
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
