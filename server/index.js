import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: ["http://localhost:5173", "http://127.0.0.1:5173"] }));
app.use(express.json());

const reviews = [
  {
    id: 1,
    room: "101",
    customer: "Nguyen Van A",
    rating: 5,
    status: "Tot",
    comment: "Phong rat sach se, nhan vien don phong can than.",
    date: "20/06/2026",
  },
  {
    id: 2,
    room: "203",
    customer: "Tran Thi B",
    rating: 4,
    status: "Can theo doi",
    comment: "Phong sach nhung bo sung khan hoi cham.",
    date: "21/06/2026",
  },
  {
    id: 3,
    room: "305",
    customer: "Le Minh C",
    rating: 5,
    status: "Tot",
    comment: "Rat hai long voi chat luong ve sinh.",
    date: "22/06/2026",
  },
];

const devices = [
  {
    id: 1,
    room: "101",
    device: "Dieu hoa",
    status: "Hoat dong",
    severity: "On dinh",
    lastCheck: "22/06/2026",
    note: "Thiet bi hoat dong binh thuong.",
  },
  {
    id: 2,
    room: "102",
    device: "Tivi",
    status: "Loi",
    severity: "Can xu ly",
    lastCheck: "21/06/2026",
    note: "Man hinh khong hien thi, can kiem tra nguon va cap tin hieu.",
  },
  {
    id: 3,
    room: "201",
    device: "Den ngu",
    status: "Hoat dong",
    severity: "On dinh",
    lastCheck: "22/06/2026",
    note: "Den hoat dong on dinh.",
  },
  {
    id: 4,
    room: "305",
    device: "Wifi",
    status: "Loi",
    severity: "Khan cap",
    lastCheck: "20/06/2026",
    note: "Mat ket noi Internet, can khoi dong lai modem.",
  },
];

let lastBackup = null;

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "luxury-hotel-api" });
});

app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

app.get("/api/devices", (req, res) => {
  res.json(devices);
});

app.get("/api/devices/:id", (req, res) => {
  const device = devices.find((item) => item.id === Number(req.params.id));

  if (!device) {
    res.status(404).json({ message: "Device not found" });
    return;
  }

  res.json(device);
});

app.get("/api/backups/latest", (req, res) => {
  res.json({ lastBackup });
});

app.post("/api/backups", (req, res) => {
  lastBackup = new Date().toISOString();
  res.status(201).json({
    message: "Backup completed",
    lastBackup,
  });
});

app.listen(PORT, () => {
  console.log(`Luxury Hotel API is running at http://localhost:${PORT}`);
});
