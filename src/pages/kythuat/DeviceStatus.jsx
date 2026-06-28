import { useNavigate } from "react-router-dom";
import { devices } from "../../data/kythuatData";

function DeviceStatus() {

    const navigate = useNavigate();

    return (

        <div>

            <h2>TRẠNG THÁI THIẾT BỊ</h2>

            <button onClick={() => navigate("/kythuat")}>
                Quay lại
            </button>

            <br /><br />

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Phòng</th>
                        <th>Thiết bị</th>
                        <th>Trạng thái</th>

                    </tr>

                </thead>

                <tbody>

                    {devices.map((device) => (

                        <tr key={device.id}>

                            <td>{device.room}</td>

                            <td>{device.device}</td>

                            <td>{device.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default DeviceStatus;