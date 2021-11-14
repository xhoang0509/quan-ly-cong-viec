import TaskItem from "./TaskItem";
const TaskList = () => {
    return (
        <>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">STT</th>
                            <th class="text-center">Tên</th>
                            <th class="text-center">Trạng Thái</th>
                            <th class="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" class="form-control" />
                            </td>
                            <td>
                                <select
                                    class="form-control"
                                    style={{ height: "36px" }}
                                >
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TaskList;
