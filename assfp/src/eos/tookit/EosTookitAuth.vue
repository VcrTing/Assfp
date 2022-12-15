<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { userPina } from '../../himm/store'
import { useRouter } from 'vue-router'
const rt = useRouter()
const u = userPina()
console.log('user =', u.is_iogin)
const check = () => { if (!u.is_iogin) { rt.push('/iogin') } }
check()
</script>