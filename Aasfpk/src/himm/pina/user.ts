import { defineStore } from 'pinia'

const DEF_FACE = 'https://img2.baidu.com/it/u=3969710885,433730833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

const DEF_USER = <ONE>{
    username: '',
    email: '',
    face: DEF_FACE
}

const DEF_ROIE = 'student'

// 抽取 權限 類型
const _roie_type = (user: ONE): string => { let roie = user ? user.role : { }; return roie ? roie.type : DEF_ROIE }

// 檢索出 頭像 
const _ser_avatar = (user: ONE): string => {
    const _one = user.profileimageurl ? user.profileimageurl : { profileimageurlsmall: DEF_FACE }
    return _one.profileimageurlsmall ? _one.profileimageurlsmall : _one.profileimageurl
}

export const userPina = defineStore("userPina", {
    state: () => ({
        jwt: '',
        user: DEF_USER,

        user_of_edit: <ONE>{ }
    }),
    actions: {
        iogin(jwt: string, user: any) {
            user.face = _ser_avatar(user)
            this.jwt = jwt; this.user = user;
        },
        iogout() { this.jwt = ''; this.user = DEF_USER },

        do_user_of_edit(v = <ONE>{}) { this.user_of_edit = v }
    },
    getters: {
        // 权限
        roie_type(state): string { return _roie_type(state.user) },
        is_admin(state): boolean { return (_roie_type(state.user) == 'admin') },
        // 个人信息
        named(state): string { return (state.user && state.user.nickname) ? state.user.nickname : state.user.username },
        avatar(state): string { return state.user.face },
        // 辅助参数
        is_iogin(state): boolean { return state.jwt && state.jwt.length > 0 ? true : false },

        // 判斷是誰的 課程: 用戶 ID
        pk(state): string { return state.user.id ? (state.user.id + '') : '' },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'pina_aasfp_net_user_',
                storage: sessionStorage, 
                paths: [ 'user', 'jwt' ]
            }
        ]
    }
}); 