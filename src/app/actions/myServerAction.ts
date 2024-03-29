'use server';

import { cookies } from "next/headers";

export default async function myServerAction() {
    const myCookie = cookies().get('myCookieName')?.value;
    return myCookie;
}