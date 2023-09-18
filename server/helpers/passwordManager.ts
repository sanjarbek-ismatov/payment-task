import bcrypt from "bcrypt";
import util from "util";

export async function passwordChecker(
    password: string,
    originalPassword: string,
) {
    return await util.promisify(bcrypt.compare)(password, originalPassword);
}

export async function passwordGenerator(password: string) {
    const salt = await util.promisify(bcrypt.genSalt)();
    return await util.promisify(bcrypt.hash)(password, +salt);
}