import { defineStore } from 'pinia'

const DEF_FACE = 'https://img2.baidu.com/it/u=3969710885,433730833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

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
        named(state): string { return state.user.username },
        avatar(state): string { return state.user.face },
        is_iogin(state): boolean { return state.jwt ? true : false },
    },
}); 