const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, 
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ Đã kết nối thành công tới SQL Server (LuxuryHotel_InRoom_V2)');
        return pool;
    })
    .catch(err => {
        console.error('❌ Kết nối Database thất bại: ', err);
        process.exit(1);
    });

module.exports = { sql, poolPromise };
