import { defineStore } from 'pinia'

const DEF_FACE = 'https://img0.baidu.com/it/u=886091281,2681163475&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'

const DEF_USER = {
    username: '',
    email: '',
    face: DEF_FACE
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        user: DEF_USER
    }),
    actions: {
        iogin(jwt: string, user: any) {
            user.face = DEF_FACE
            this.jwt = jwt; this.user = user;
            console.log('登录成功, user =', user.email)
        },
    },
    getters: {
        is_iogin(state): boolean { return true },
        named(state): string { return state.user.username },
        avatar(state): string { return state.user.face },
    },
}); 