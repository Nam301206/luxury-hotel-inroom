import utils.DatabaseHelper;
import java.sql.Connection;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
        System.out.println("Đang tiến hành kết nối đến SQL Server...");
        
        // Gọi hàm getConnection từ class DatabaseHelper
        Connection conn = DatabaseHelper.getConnection();
        
        // Kiểm tra kết quả
        if (conn != null) {
            System.out.println("✅ KET NOI CO SO DU LIEU THANH CONG!");
            
            try {
                // Đóng kết nối sau khi test xong để giải phóng tài nguyên
                conn.close();
                System.out.println("Đã đóng kết nối an toàn.");
            } catch (SQLException e) {
                System.out.println("Lỗi khi đóng kết nối: " + e.getMessage());
            }
        } else {
            System.out.println("❌ KẾT NỐI THẤT BẠI!");
            System.out.println("Vui lòng kiểm tra lại: Tên Server, Tên Database, hoặc file thư viện .dll đã để đúng chỗ chưa.");
        }
    }
}