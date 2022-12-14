<template>
    <div class="row_x2 body-notice mt">
        <div v-for="(v, i) in items" :key="i">
            <cp-notice-card :i="i" :one="v"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CpNoticeCard from '../../../../compnt/notice/CpNoticeCard.vue'

const items = [
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每经AI快讯，国务院新闻办公室7日发布《携手构建网络空间命运共同体》白皮书。白皮书介绍了新时代中国互联网发展和治理理念与实践，分享中国推动构建网络空间命运共同体的积极成果，展望网络空间国际合作前景。白皮书指出，随着新一轮科技革命和产业变革加速推进，互联网让世界变成了“地球村”，国际社会越来越成为你中有我、我中有你的命运共同体。发展好、运用好、治理好互联网，让互联网更好造福人类，是国际社会的共同责任。'
        ,desc_sub: '如有任何问题，可致电2578 9986于本学院查询',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每经AI快讯，国务院新闻办公室7日发布《携手构建网络空间命运共同体》白皮书。白皮书介绍了新时代中国互联网发展和治理理念与实践，分享中国推动构建网络空间命运共同体的积极成果，展望网络空间国际合作前景。白皮书指出，随着新一轮科技革命和产业变革加速推进，互联网让世界变成了“地球村”，国际社会越来越成为你中有我、我中有你的命运共同体。发展好、运用好、治理好互联网，让互联网更好造福人类，是国际社会的共同责任。'
        ,desc_sub: '如有任何问题，可致电2578 9986于本学院查询',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每经AI快讯，国务院新闻办公室7日发布《携手构建网络空间命运共同体》白皮书。白皮书介绍了新时代中国互联网发展和治理理念与实践，分享中国推动构建网络空间命运共同体的积极成果，展望网络空间国际合作前景。白皮书指出，随着新一轮科技革命和产业变革加速推进，互联网让世界变成了“地球村”，国际社会越来越成为你中有我、我中有你的命运共同体。发展好、运用好、治理好互联网，让互联网更好造福人类，是国际社会的共同责任。'
        ,desc_sub: '如有任何问题，可致电2578 9986于本学院查询',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每经AI快讯，国务院新闻办公室7日发布《携手构建网络空间命运共同体》白皮书。白皮书介绍了新时代中国互联网发展和治理理念与实践，分享中国推动构建网络空间命运共同体的积极成果，展望网络空间国际合作前景。白皮书指出，随着新一轮科技革命和产业变革加速推进，互联网让世界变成了“地球村”，国际社会越来越成为你中有我、我中有你的命运共同体。发展好、运用好、治理好互联网，让互联网更好造福人类，是国际社会的共同责任。'
        ,desc_sub: '如有任何问题，可致电2578 9986于本学院查询',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每经AI快讯，国务院新闻办公室7日发布《携手构建网络空间命运共同体》白皮书。白皮书介绍了新时代中国互联网发展和治理理念与实践，分享中国推动构建网络空间命运共同体的积极成果，展望网络空间国际合作前景。白皮书指出，随着新一轮科技革命和产业变革加速推进，互联网让世界变成了“地球村”，国际社会越来越成为你中有我、我中有你的命运共同体。发展好、运用好、治理好互联网，让互联网更好造福人类，是国际社会的共同责任。'
        ,desc_sub: '如有任何问题，可致电2578 9986于本学院查询',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    }
]
</script>