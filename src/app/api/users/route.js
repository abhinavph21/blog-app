import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

let users = [
    {
        username: "abhinav",
        email: "ap.abhinav16@gmail.com",
        password: "$2a$10$fEk4x2ThIVEcaB7zvv15H.B.bJlJ7Ye9lxlDpbjwO9iVL3KCxkwO",
        isAdmin: true,
        createdAt: "2024-01-10T10:51:14.131Z"
    },
    {
        username: "amber",
        email: "ap.amber16@gmail.com",
        password: "$2a$10$uykX3RQ3YveZEwnWZhSw6ulYlpf5j1Onm4Ce232LvP.7t9i8vGANG",
        isAdmin: false,
        createdAt: "2024-01-14T15:30:34.698Z"
    },
    {
        username: "anjali",
        email: "ap.anjali16@gmail.com",
        password: "$2a$10$MN6AGwJCyi5sYVRyQTG1F.bPSXcz36g4osC6ZceE9eJfrA9ODGGa6",
        isAdmin: false,
        createdAt: "2024-01-14T15:31:31.126Z"
    },
    {
        username: "tara",
        email: "tp.tara16@gmail.com",
        password: "$2a$10$tmSU5dCwzSiK7vN1U6aVUOgnPgXk6U2Wo9dVjBE92rKgxZEy81nHS",
        isAdmin: false,
        createdAt: "2024-01-14T15:35:11.976Z"
    },
    {
        username: "kalam",
        email: "kp.kalam16@gmail.com",
        password: "$2a$10$bxeOdVi4HfVXIdmvtm6gw.ES.ete3J6tGgs18zNxP37YwrPYAjA56",
        isAdmin: false,
        createdAt: "2024-01-14T15:35:38.539Z"
    },
];

export const POST = async (request) => {
    try {
        console.log("adding users");
        await connectToDb();
        const usersAdded = await User.insertMany(users);
        return NextResponse.json(usersAdded);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to add users!");
    }
}