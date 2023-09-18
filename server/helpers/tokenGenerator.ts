import jwt from "jsonwebtoken";

export function tokenGenerator(email: string, type = "email", login?: string) {
    return jwt.sign(
        type === "email" ? { email } : { login },
        process.env.KEY || "",
    );
}

export function tokenParser(token: string) {
    try {
        return jwt.verify(token, process.env.KEY || "") as any;
    } catch (e) {
        return { email: false };
    }
}