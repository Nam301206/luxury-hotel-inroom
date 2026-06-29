const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getDevices() {
  const response = await fetch(`${API_URL}/devices`);

  if (!response.ok) {
    throw new Error("Khong the tai danh sach thiet bi");
  }

  return response.json();
}

export async function getDevice(id) {
  const response = await fetch(`${API_URL}/devices/${id}`);

  if (!response.ok) {
    throw new Error("Khong tim thay thiet bi");
  }

  return response.json();
}
