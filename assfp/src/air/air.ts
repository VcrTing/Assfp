
import net from "./net"
import timed from "./timed"
import strapi from "./strapi"
import vai from "./vai"
import { useRouter } from "vue-router"
import { userPina } from "../himm/store"
const rt = useRouter()

const go = (res: string) => rt.push('/admin' + res)
const jwt = () => userPina().jwt

export {
    net,
    vai,
    timed,
    strapi,
    go,
    jwt
}