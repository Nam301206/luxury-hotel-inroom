package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseHelper {
    // Tên server có chứa Instance Name, sử dụng 2 dấu \\ để escape ký tự trong Java
    private static final String SERVER_NAME = "DESKTOP-QQOBAA1\\MSSQLSERVER01";
    private static final String DATABASE_NAME = "LuxuryHotel_InRoom_V2";

    public static Connection getConnection() {
        Connection conn = null;
        try {
            // Chuỗi kết nối dành riêng cho Windows Authentication theo hình ảnh của bạn
            String dbURL = "jdbc:sqlserver://" + SERVER_NAME 
                         + ";databaseName=" + DATABASE_NAME 
                         + ";integratedSecurity=true"       // Bật Windows Authentication
                         + ";encrypt=true"                  // Tương ứng với Encrypt: Mandatory
                         + ";trustServerCertificate=true";   // Tương ứng với tích chọn Trust Server Certificate
            
            // Không cần truyền username và password
            conn = DriverManager.getConnection(dbURL);
            
        } catch (SQLException e) {
            System.out.println("Lỗi: Không thể kết nối tới cơ sở dữ liệu!");
            e.printStackTrace();
        }
        return conn;
    }
}