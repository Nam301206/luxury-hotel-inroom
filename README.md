# Luxury Hotel

Project duoc chia lai theo chuc nang de de tim va tiep tuc phat trien.

## Cau truc thu muc

- `src/`: ung dung React/Vite chinh.
- `src/pages/housekeeping/`: man hinh nhan vien tap vu.
- `src/pages/technician/`: man hinh nhan vien ky thuat.
- `src/layouts/`: layout dung chung cho giao dien nhan vien.
- `src/components/`: component React dung chung.
- `src/data/`: du lieu mock cho giao dien React.
- `src/services/`: lop service du kien noi API.
- `src/styles/`: CSS dung cho React app.
- `static/customer-dashboard/`: giao dien HTML tinh cho khach hang trong phong.
- `static/manager-dashboard/`: giao dien HTML tinh cho quan ly.
- `database/`: script SQL tao database.
- `modules/dat/`: phan frontend/backend Java rieng cua Dat.
- `public/`: asset public cho Vite.
- `dist/`: build output da sinh ra, khong nen sua truc tiep.

## File chinh

- React entry: `src/main.jsx`
- React router: `src/App.jsx`
- Backend API: `server/index.js`
- Customer static page: `static/customer-dashboard/index.html`
- Manager static page: `static/manager-dashboard/index.html`
- Database schema: `database/schema.sql`

## Chay project

Mo 2 terminal tai thu muc project.

Terminal 1 chay backend API:

```powershell
npm run server
```

Backend se chay tai:

```text
http://localhost:3000
```

Terminal 2 chay frontend React:

```powershell
npm run dev
```

Frontend se chay tai:

```text
http://localhost:5173
```

## API hien co

- `GET /api/health`
- `GET /api/reviews`
- `GET /api/devices`
- `GET /api/devices/:id`
- `GET /api/backups/latest`
- `POST /api/backups`

Luu y: backend hien dang dung du lieu mock trong `server/index.js`, chua ghi/doc truc tiep tu SQL Server.
