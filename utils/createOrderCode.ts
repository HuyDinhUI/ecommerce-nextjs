import getRandomString from "./randomString";

export default function createOrderCode() {
    return getRandomString(5) + new Date().toISOString()
}