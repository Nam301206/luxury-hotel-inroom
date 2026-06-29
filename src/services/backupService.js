const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getLatestBackup() {
  const response = await fetch(`${API_URL}/backups/latest`);

  if (!response.ok) {
    throw new Error("Khong the tai thong tin backup");
  }

  return response.json();
}

export async function createBackup() {
  const response = await fetch(`${API_URL}/backups`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Backup that bai");
  }

  return response.json();
}
