import { useState, useRef } from "react";

const TaskForm = ({ onSubmit }) => {
    const [name, setName] = useState();
    const [status, setStatus] = useState(false);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            name,
            status: status === "true" ? true : false,
        });
        setName("");
        inputRef.current.focus();
    };
    const onClear = (e) => {
        e.preventDefault();
        setName("");
        setStatus(false);
    };
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ height: "36px" }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={inputRef}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        required="required"
                        style={{ height: "36px" }}
                        defaultValue={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            className="btn btn-warning"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Thêm
                        </button>
                        &nbsp;
                        <button
                            className="btn btn-danger"
                            onClick={(e) => onClear(e)}
                        >
                            Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
