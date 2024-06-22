"use server";

import path from "path";
import { readFile, writeFile } from "fs/promises";

// Login

export async function getUserByString(name: string) {
    const jsonPath = path.join(process.cwd(), "/src/data/users.json");

    let user: any;

    try {
        const usersFile = await readFile(jsonPath, "utf-8");
        const users = JSON.parse(usersFile);
        user = users.find((u: any) => u.orgName === name);
    }
    catch {
    }

    return user;
}

export async function getUser(email: string, password: string) {
    const jsonPath = path.join(process.cwd(), "/src/data/users.json");

    let user: any;

    try {
        const usersFile = await readFile(jsonPath, "utf-8");
        const users = JSON.parse(usersFile);
        user = users.find((u: any) => u.email === email && u.password === password);
    }
    catch {
    }

    return user;
}

// Register

function toObject(formData: FormData) {
    const dataObject = {} as Record<string, string | string[]>;

    formData.forEach((value, key) => {
        dataObject[key] = value.toString();
    });

    if (formData.get("userType") === "org") {
        dataObject["myPosts"] = ["0", "1", "2"];
    }
    return dataObject;
}

async function writePdf(formData: FormData) {
    const file = formData.get("file") as File;
    formData.delete("file");

    if (formData.get("userType") != "regular" && file !== null) {
        const filePath = path.join(process.cwd(), "/src/data/files/", file.name);

        formData.append("file", file.name);

        //await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    }
}

async function writeNewUser(formData: FormData) {
    let users: any = [];
    const userObject = toObject(formData);
    const usersPath = path.join(process.cwd(), "/src/data/users.json");

    try {
        const usersFile = await readFile(usersPath, 'utf8');
        users = JSON.parse(usersFile);
    }
    catch {

    }

    users.push(userObject);

    //await writeFile(usersPath, JSON.stringify(users, null, 4));

    return userObject;
}

export async function createUser(formData: FormData) {
    await writePdf(formData);
    const newUser = await writeNewUser(formData);

    return newUser;
}