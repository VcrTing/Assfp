
import net from '../assfp/src/air/net'
import vai from '../assfp/src/air/vai'
import timed from '../assfp/src/air/timed'
import strapi from '../assfp/src/air/strapi'

import * as conf from '../assfp/src/conf'
import serv from '../assfp/src/serv'

import { userPina } from '../assfp/src/himm/pina/user'

export default {
    install(app: any) {
        const pps = app.config.globalProperties

        //
        pps.strapi = strapi
        pps.timed = timed
        pps.conf = conf
        pps.vai = vai
        pps.net = net

        pps.serv = serv

        pps.go = function (ink: string): void { 
            console.log('去往 INK =', ink) // this.$router.push(ink) 
        }
        pps.jwt = function (): string { return userPina().jwt }
    }
}