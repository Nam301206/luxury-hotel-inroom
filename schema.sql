-- Tạo Database
CREATE DATABASE LuxuryHotel_InRoom_V2;
GO

USE LuxuryHotel_InRoom_V2;
GO

-- 1. BẢNG KHÁCH HÀNG
CREATE TABLE customers (
    id VARCHAR(50) PRIMARY KEY,
    full_name NVARCHAR(100) NOT NULL,
    identity_card VARCHAR(20) UNIQUE,
    phone VARCHAR(20),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL
);

-- 2. BẢNG NHÂN VIÊN
CREATE TABLE employees (
    id VARCHAR(50) PRIMARY KEY,
    full_name NVARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50), -- Manager, Housekeeper, Technician
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL
);

-- 3. BẢNG PHÒNG
CREATE TABLE rooms (
    id VARCHAR(50) PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(18,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL
);

-- 4. BẢNG THIẾT BỊ
CREATE TABLE devices (
    id VARCHAR(50) PRIMARY KEY,
    room_id VARCHAR(50),
    name NVARCHAR(255),
    connection_type VARCHAR(50),
    status VARCHAR(50) DEFAULT 'ONLINE', -- ONLINE, OFFLINE, ERROR
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- 5. BẢNG ĐÁNH GIÁ DỌN PHÒNG
CREATE TABLE cleaning_reviews (
    id VARCHAR(50) PRIMARY KEY,
    room_id VARCHAR(50),
    customer_id VARCHAR(50),
    employee_id VARCHAR(50), -- Nhan vien tap vu (Housekeeper)
    score INT CHECK (score IN (1, 2, 3)),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- 6. BẢNG BÀI ĐĂNG CHIA SẺ[cite: 2]
CREATE TABLE posts (
    id VARCHAR(50) PRIMARY KEY,
    customer_id VARCHAR(50),
    employee_id VARCHAR(50), -- Nhan vien quan ly (Manager) kiem duyet
    content NVARCHAR(MAX),
    status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- 7. BẢNG HÌNH ẢNH CỦA BÀI ĐĂNG[cite: 2]
CREATE TABLE post_images (
    id VARCHAR(50) PRIMARY KEY,
    post_id VARCHAR(50),
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(10), -- .jpg, .jpeg, .png
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- 8. BẢNG BÌNH LUẬN[cite: 2]
CREATE TABLE comments (
    id VARCHAR(50) PRIMARY KEY,
    post_id VARCHAR(50),
    customer_id VARCHAR(50),
    content NVARCHAR(500) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- 9. BẢNG TƯƠNG TÁC/LIKE[cite: 2]
CREATE TABLE reactions (
    id VARCHAR(50) PRIMARY KEY,
    post_id VARCHAR(50),
    customer_id VARCHAR(50),
    type VARCHAR(50), -- LIKE, HEART...
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- 10. BẢNG SAO LƯU DỮ LIỆU[cite: 2]
CREATE TABLE backups (
    id VARCHAR(50) PRIMARY KEY,
    employee_id VARCHAR(50), -- Nhan vien ky thuat (Technician) tao backup
    file_url VARCHAR(500) NOT NULL,
    status VARCHAR(50) DEFAULT 'SUCCESS',
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);