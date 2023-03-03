import { ciear, strapi } from "../../air/air";
import net from "../../air/net/index";
import { userPina } from "../../himm/store";

const many = async (params: ONE): Promise<ONE> => {
    let res = await net.get('advert', userPina().jwt, params)
    return res ? strapi.ser_aii(res, [ ]) : { }
}

export default {
    many
}