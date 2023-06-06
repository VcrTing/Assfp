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
        ], desc: '每經AI快訊，國務院新聞辦公室7日發布《攜手構建網絡空間命運共同體》白皮書。白皮書介紹了新時代中國互聯網發展和治理理念與實踐，分享中國推動構建網絡空間命運共同體的積極成果，展望網絡空間國際合作前景。白皮書指出，隨著新壹輪科技革命和產業變革加速推進，互聯網讓世界變成了“地球村”，國際社會越來越成為妳中有我、我中有妳的命運共同體。發展好、運用好、治理好互聯網，讓互聯網更好造福人類，是國際社會的共同責任。'
        ,desc_sub: '如有任何問題，可致電2578 9986於本學院查詢',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每經AI快訊，國務院新聞辦公室7日發布《攜手構建網絡空間命運共同體》白皮書。白皮書介紹了新時代中國互聯網發展和治理理念與實踐，分享中國推動構建網絡空間命運共同體的積極成果，展望網絡空間國際合作前景。白皮書指出，隨著新壹輪科技革命和產業變革加速推進，互聯網讓世界變成了“地球村”，國際社會越來越成為妳中有我、我中有妳的命運共同體。發展好、運用好、治理好互聯網，讓互聯網更好造福人類，是國際社會的共同責任。'
        ,desc_sub: '如有任何問題，可致電2578 9986於本學院查詢',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每經AI快訊，國務院新聞辦公室7日發布《攜手構建網絡空間命運共同體》白皮書。白皮書介紹了新時代中國互聯網發展和治理理念與實踐，分享中國推動構建網絡空間命運共同體的積極成果，展望網絡空間國際合作前景。白皮書指出，隨著新壹輪科技革命和產業變革加速推進，互聯網讓世界變成了“地球村”，國際社會越來越成為妳中有我、我中有妳的命運共同體。發展好、運用好、治理好互聯網，讓互聯網更好造福人類，是國際社會的共同責任。'
        ,desc_sub: '如有任何問題，可致電2578 9986於本學院查詢',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每經AI快訊，國務院新聞辦公室7日發布《攜手構建網絡空間命運共同體》白皮書。白皮書介紹了新時代中國互聯網發展和治理理念與實踐，分享中國推動構建網絡空間命運共同體的積極成果，展望網絡空間國際合作前景。白皮書指出，隨著新壹輪科技革命和產業變革加速推進，互聯網讓世界變成了“地球村”，國際社會越來越成為妳中有我、我中有妳的命運共同體。發展好、運用好、治理好互聯網，讓互聯網更好造福人類，是國際社會的共同責任。'
        ,desc_sub: '如有任何問題，可致電2578 9986於本學院查詢',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    },
    { author: 'AASFP', typed: '通知', 
        imgs: [
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1593947945104947.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=ca9c572e701629fca48650fcdda12640' },
            { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zhux2.com%2Feditor1560868652172602.jpg&refer=http%3A%2F%2Fimg.zhux2.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670402139&t=81369052087e2f8a94231dba804b204c' }
        ], desc: '每經AI快訊，國務院新聞辦公室7日發布《攜手構建網絡空間命運共同體》白皮書。白皮書介紹了新時代中國互聯網發展和治理理念與實踐，分享中國推動構建網絡空間命運共同體的積極成果，展望網絡空間國際合作前景。白皮書指出，隨著新壹輪科技革命和產業變革加速推進，互聯網讓世界變成了“地球村”，國際社會越來越成為妳中有我、我中有妳的命運共同體。發展好、運用好、治理好互聯網，讓互聯網更好造福人類，是國際社會的共同責任。'
        ,desc_sub: '如有任何問題，可致電2578 9986於本學院查詢',
        send: { is_send: true, time_expect: '2022-12-12 12:12:12', time: '2022-12-13 13:12:12' }
    }
]
</script>