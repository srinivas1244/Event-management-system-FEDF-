export type LocalUser = {
  id: string;
  email: string;
  password: string;
  full_name?: string;
  department?: string;
  student_id?: string;
  role?: "student" | "faculty" | "admin";
};

export type LocalSession = {
  id: string;
  email: string;
  full_name?: string;
  student_id?: string;
  role?: "student" | "faculty" | "admin";
  department?: string;
};

const USERS_KEY = "cc_users";
const SESSION_KEY = "cc_session";

function loadUsers(): Record<string, LocalUser> {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? (JSON.parse(raw) as Record<string, LocalUser>) : {};
}

function saveUsers(users: Record<string, LocalUser>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function saveSession(session: LocalSession | null) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event("cc-auth-change"));
}

export function getSession(): LocalSession | null {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? (JSON.parse(raw) as LocalSession) : null;
}

export function register(params: {
  email: string;
  password: string;
  full_name?: string;
  department?: string;
  student_id?: string;
  role?: "student" | "faculty" | "admin";
}): { error?: string; user?: LocalUser } {
  const users = loadUsers();
  const email = params.email.toLowerCase().trim();
  if (users[email]) return { error: "User already exists" };
  const user: LocalUser = {
    id: crypto.randomUUID(),
    email,
    password: params.password,
    full_name: params.full_name,
    department: params.department,
    student_id: params.student_id,
    role: params.role || "student",
  };
  users[email] = user;
  saveUsers(users);
  saveSession({ id: user.id, email: user.email, full_name: user.full_name, student_id: user.student_id, role: user.role, department: user.department });
  return { user };
}

export function login(params: { email: string; password: string }): { error?: string; user?: LocalUser } {
  const users = loadUsers();
  const email = params.email.toLowerCase().trim();
  const user = users[email];
  if (!user || user.password !== params.password) return { error: "Invalid credentials" };
  saveSession({ id: user.id, email: user.email, full_name: user.full_name, student_id: user.student_id, role: user.role, department: user.department });
  return { user };
}

export function logout() {
  saveSession(null);
}

export function mockGoogleSignup(): { error?: string; user?: LocalUser } {
  const email = `user${Math.floor(Math.random() * 10000)}@gmail.com`;
  const users = loadUsers();
  if (users[email]) return { error: "Mock Google user already exists" };
  const user: LocalUser = {
    id: crypto.randomUUID(),
    email,
    password: crypto.randomUUID(),
    full_name: "Google User",
    role: "student",
  };
  users[email] = user;
  saveUsers(users);
  saveSession({ id: user.id, email: user.email, full_name: user.full_name, student_id: user.student_id, role: user.role, department: user.department });
  return { user };
}

export function loginWithStudentId(params: { student_id: string; password: string }): { error?: string; user?: LocalUser } {
  const users = loadUsers();
  const user = Object.values(users).find(u => (u.student_id || "").toLowerCase() === params.student_id.toLowerCase());
  if (!user || user.password !== params.password) return { error: "Invalid credentials" };
  saveSession({ id: user.id, email: user.email, full_name: user.full_name, student_id: user.student_id, role: user.role, department: user.department });
  return { user };
}

export function getUserByEmail(email: string): LocalUser | undefined {
  const users = loadUsers();
  return users[email.toLowerCase().trim()];
}

// Clear all users from local storage
export function clearAllUsers(): void {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event("cc-auth-change"));
}

// Get all users (for debugging)
export function getAllUsers(): Record<string, LocalUser> {
  return loadUsers();
}
