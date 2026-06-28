import { useNavigate } from "react-router-dom";
import { roomDetails } from "../../data/kythuatData";

function RoomDetail() {

    const navigate = useNavigate();

    return (

        <div>

            <h2>CHI TIẾT PHÒNG</h2>

            <button onClick={() => navigate("/kythuat")}>

                Quay lại

            </button>

            <br /><br />

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Phòng</th>

                        <th>Loại phòng</th>

                        <th>Tầng</th>

                    </tr>

                </thead>

                <tbody>

                    {roomDetails.map((room) => (

                        <tr key={room.room}>

                            <td>{room.room}</td>

                            <td>{room.type}</td>

                            <td>{room.floor}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RoomDetail;