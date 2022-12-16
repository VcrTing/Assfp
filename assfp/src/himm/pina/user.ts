import { defineStore } from 'pinia'

const DEF_FACE = 'https://img2.baidu.com/it/u=3969710885,433730833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

const DEF_USER = <ONE>{
    username: '',
    email: '',
    face: DEF_FACE
}

const names = [ 'student', '' ]

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        user: DEF_USER
    }),
    actions: {
        iogin(jwt: string, user: any) {
            user.face = user.profileimageurl ? user.profileimageurl.profileimageurl : DEF_FACE
            this.jwt = jwt; this.user = user;
            sessionStorage.setItem('dan_assfp_jwt', jwt)
            sessionStorage.setItem('dan_assfp_user', JSON.stringify( user ))
        },
    },
    getters: {
        is_admin(state): boolean {
            const roie = state.user ? state.user.role : { }; let typed = roie ? roie.type : ''
            return typed && (typed == 'admin')
        },
        pk(state): string { return state.user.id ? (state.user.id + '') : '' },
        named(state): string { return (state.user && state.user.nickname) ? state.user.nickname : state.user.username },
        avatar(state): string { return state.user.face },
        is_iogin(state): boolean { return state.jwt ? true : false },
    },

}); 