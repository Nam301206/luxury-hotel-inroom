const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getReviews() {
  const response = await fetch(`${API_URL}/reviews`);

  if (!response.ok) {
    throw new Error("Khong the tai danh sach nhan xet");
  }

  return response.json();
}
