const TaskItem = ({ tasks, onUpdateStatus }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <tr key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span
                            className={
                                task.status
                                    ? "label label-success btn-status"
                                    : "label label-danger btn-status"
                            }
                            onClick={() => onUpdateStatus(task.id)}
                        >
                            {task.status ? "Kích Hoạt" : "Ẩn"}
                        </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5"></span>
                            Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5"></span>
                            Xóa
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TaskItem;
