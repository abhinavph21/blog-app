import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { authConfig } from "./auth.config";


const login = async (credentials) => {
    try {
        console.log(process.env.MONGO_URI);
        await connectToDb();
        console.log(credentials);

        const { username } = credentials
        console.log(username);

        const user = await User.findOne({ username });

        if (!user) {
            console.log("user not found");
            throw new Error("Wrong credentials!");
        }

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordCorrect) {
            console.log("wrong password");
            throw new Error("Wrong credentials!");
        }
        console.log("user in db", user);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null
                }
            },
        }),
    ],
})