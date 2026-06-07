// db.js
const sql = require('mssql/msnodesqlv8'); // Thay đổi ở đây để dùng driver Windows
require('dotenv').config();

const config = {
    // Sử dụng chuỗi Connection String để chạy quyền Windows Authentication
    connectionString: `Driver={SQL Server};Server=${process.env.DB_SERVER};Database=${process.env.DB_DATABASE};Trusted_Connection=yes;`
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ Đã kết nối thành công tới SQL Server Local (Windows Authentication)!');
        return pool;
    })
    .catch(err => {
        console.error('❌ Kết nối Database thất bại: ', err);
        process.exit(1);
    });

module.exports = { sql, poolPromise };
