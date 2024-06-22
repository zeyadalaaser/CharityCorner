"use server";
import path from "path";
import { mkdir, readFile, writeFile } from "fs/promises";
import { readFileSync } from "fs";

export async function getFile(fileName: string) {
    const filePath = path.join(process.cwd(), "/src/data/files/", fileName);
    const imageBuffer = await readFile(filePath);

    return imageBuffer.toString('base64');
}