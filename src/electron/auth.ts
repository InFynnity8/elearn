import fs from 'fs-extra';
import path from 'path';
import { app } from 'electron';
import bcrypt from 'bcryptjs';

// Get safe storage path
const userDataPath = app.getPath('userData');
const userFilePath = path.join(userDataPath, 'userDetails.json');

// Ensure user store file exists
async function ensureUserStore() {
    if (!(await fs.pathExists(userFilePath))) {
        const hashedPassword = await bcrypt.hash('admin', 10);
        const defaultUser = { username: 'admin', password: hashedPassword };
        await fs.writeJson(userFilePath, defaultUser, { spaces: 2 });
    }
}

// Load stored credentials
async function loadUserCredentials() {
    try {
        await ensureUserStore();
        return await fs.readJson(userFilePath);
    } catch (error) {
        console.error('Error loading user file:', error);
        return null;
    }
}

// Authenticate user
export async function authenticateUser(username: string, password: string) {
    const user = await loadUserCredentials();
    if (!user) return { success: false, message: 'User data missing' };
console.log(user)
    if (username !== user.username) return { success: false, message: 'Invalid username' };

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        return { success: true, message: 'Login successful' };
    } else {
        return { success: false, message: 'Incorrect password' };
    }
}

