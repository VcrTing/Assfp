<template>
    
</template>
    
<script lang="ts" setup>
import { category } from '../../serv'
import { coursePina } from '../pina/course';
import { userPina } from '../store'

const user = userPina()

const funn = {
    init: () => new Promise(async rej => {
        const cates = coursePina().categories
        if (cates && cates.length > 0) {
            
        } else {
            await funn.category()
        }
        
        rej(0)
    }),
    category: async () => {
        const res = await category.many({})
        if (res && res.data) { coursePina().do_categories( res.data ) }
    }
}

if (user.is_admin) { funn.init() }
</script>