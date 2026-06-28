import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Backup() {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    const handleBackup = () => {

        setMessage("Đang sao lưu dữ liệu...");

        setTimeout(() => {

            setMessage("Sao lưu dữ liệu thành công!");

        },3000);

    }

    return (

        <div>

            <h2>SAO LƯU DỮ LIỆU</h2>

            <button onClick={() => navigate("/kythuat")}>

                Quay lại

            </button>

            <br /><br />

            <button onClick={handleBackup}>

                Backup

            </button>

            <br /><br />

            <p>{message}</p>

        </div>

    )

}

export default Backup;