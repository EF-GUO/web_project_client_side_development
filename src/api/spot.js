

export async function fetchSpot() {

    const list = [
        {
        id: 1,
        title: '成都IFS',
        desc: '成都IFS（成都国际金融中心）位于成都市锦江区春熙路核心商圈，是集高端购物中心、甲级写字楼、五星级酒店与公寓于一体的城市地标综合体。汇聚Louis Vuitton、Chanel、Dior等国际品牌，屋顶“爬墙熊猫”艺术装置已成成都地标与网红打卡点，展现城市的时尚与国际魅力。',
        address: '四川省成都市锦江区红星路三段1号（春熙路商圈核心位置）',
        images: ['/imgs/jingdian_01.jpg', '/imgs/jingdian_02.jpg','/imgs/jingdian_03.jpg','/imgs/jingdian_04.jpg'],
        tags: ['地标', '商业区'],
        },
        {
        id: 2,
        title: '宽窄巷子',
        desc: '融合传统与现代的历史街区，最能感受成都慢生活。',
        address: '青羊区长顺上街附近',
        images: ['/imgs/jingdian_03.jpg', '/imgs/jingdian_04.jpg'],
        tags: ['历史', '文化'],
        },
        {
        id: 3,
        title: '杜甫草堂',
        desc: '诗圣杜甫流寓成都的旧居，环境清幽，文化底蕴深厚。',
        address: '青羊区青华路37号',
        images: ['/imgs/jingdian_01.jpg', '/imgs/jingdian_02.jpg'],
        tags: ['文化', '名胜'],
        }
    ]
    return {
        total: list.length,
        list
    }
}