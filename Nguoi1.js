// --- QUẢN LÝ GIAO DIỆN (UI NAVIGATION) ---
function showScreen(screenId) {
    // Ẩn tất cả các sections chính
    document.getElementById('reviewScreen').style.display = 'none';
    document.getElementById('uploadScreen').style.display = 'none';
    document.getElementById('boardScreen').style.display = 'none';
    
    // Hiển thị screen được yêu cầu
    document.getElementById(screenId).style.display = 'block';
}

// --- HỆ THỐNG THÔNG BÁO LỖI/THÀNH CÔNG (TOAST NOTIFICATION) ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Kích hoạt hiệu ứng hiển thị
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- XỬ LÝ NGHIỆP VỤ (CUSTOMER FLOW) ---

// Xử lý Gửi đánh giá dọn phòng
function submitCleaningReview(rating) {
    const currentHour = new Date().getHours();
    
    // Validate: Đánh giá dọn phòng chỉ được gửi sau 09:00[cite: 2]
    if (currentHour < 9) {
        showToast("Bạn chỉ có thể gửi đánh giá sau 09:00 sáng.", "error");
        return;
    }
    
    // Gọi API giả lập
    // POST /api/cleaning-reviews
    showToast(`Gửi đánh giá ${rating} sao thành công!`, "success");
}

// Xử lý Đăng ảnh & Caption
function handleImageUpload(event) {
    event.preventDefault();
    const fileInput = document.getElementById('imageInput');
    const caption = document.getElementById('captionInput').value;
    
    const files = fileInput.files;
    
    // Validation dựa trên quy ước:
    // - Mỗi ảnh tối đa 5MB, tổng không quá 5 ảnh, định dạng .jpg, .jpeg, .png[cite: 2]
    if (files.length === 0) {
        showToast("Vui lòng chọn ít nhất 1 ảnh.", "error");
        return;
    }
    
    if (files.length > 5) {
        showToast("Chỉ cho phép tải lên tối đa 5 ảnh.", "error");
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
        
        if (!validExtensions.includes(file.type)) {
            showToast("Lỗi định dạng: Chỉ chấp nhận ảnh .jpg, .jpeg, .png", "error");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            showToast("Dung lượng ảnh vượt quá 5MB.", "error");
            return;
        }
    }

    // POST /api/posts
    showToast("Đăng bài thành công! Bài đăng đang chờ quản lý phê duyệt.", "success");
    document.getElementById('uploadForm').reset();
}

// Xử lý Gửi Tương tác / Reaction
function submitReaction(postId) {
    // POST /api/reactions
    showToast("Đã thích bài viết!", "success");
}

// Xử lý Hiển thị form Bình luận
function openCommentModal(postId) {
    const comment = prompt("Nhập nội dung bình luận của bạn:");
    
    // Validation: Bình luận không được để trống[cite: 2]
    if (!comment || comment.trim() === "") {
        showToast("Bình luận không được để trống.", "error");
        return;
    }
    
    // POST /api/comments
    showToast("Gửi bình luận thành công! Đang chờ kiểm duyệt.", "success");
}