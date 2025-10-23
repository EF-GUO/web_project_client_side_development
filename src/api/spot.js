export async function fetchSpot() {
  const jsonString = `
  [
    {
      "id": 1,
      "title": "成都IFS",
      "desc": "成都IFS（成都国际金融中心）位于成都市锦江区春熙路核心商圈，是集高端购物中心、甲级写字楼、五星级酒店与公寓于一体的城市地标综合体。汇聚Louis Vuitton、Chanel、Dior等国际品牌，屋顶“爬墙熊猫”艺术装置已成成都地标与网红打卡点，展现城市的时尚与国际魅力。",
      "address": "四川省成都市锦江区红星路三段1号（春熙路商圈核心位置）",
      "images": [
        "/imgs/spots/IFS_01.jpg",
        "/imgs/spots/IFS_02.jpg",
        "/imgs/spots/IFS_04.jpg"
      ],
      "tags": ["地标", "商业区"]
    },
    {
      "id": 2,
      "title": "天府美术馆",
      "desc": "成都市天府美术馆位于四川省成都市金牛区的天府艺术公园内，是成都美术馆体系中的 A 区。该馆于 2021 年 11 月与成都当代艺术馆同时对外开放，作为成都双年展的主要展出场馆之一。天府美术馆总建筑面积约 4 万平方米，展陈面积约 1.3 万平方米，设有多个标准展厅、公教空间、学术报告厅、藏品库等功能区域。",
      "address": "四川省成都市金牛区华严路 181 号，天府艺术公园内",
      "images": [
        "/imgs/spots/tianfuART_01.jpg",
        "/imgs/spots/tianfuART_02.jpg",
        "/imgs/spots/tianfuART_04.jpg",
        "/imgs/spots/tianfuART_05.jpg",
        "/imgs/spots/tianfuART_06.jpg"
      ],
      "tags": ["历史", "文化"]
    },
    {
      "id": 3,
      "title": "熊猫基地",
      "desc": "成都大熊猫繁育研究基地（简称“成都熊猫基地”）成立于 1987 年，是中国乃至世界知名大熊猫的迁地保护、科研繁育和科普教育基地。基地模拟熊猫的野外生态环境，拥有竹林、溪流、山丘等景观，是让游客近距离观察大熊猫生活状态、了解大熊猫保护理念的理想场所。",
      "address": "四川省成都市成华区熊猫大道 1375 号",
      "images": [
        "/imgs/spots/XMJD_01.jpg",
        "/imgs/spots/XMJD_02.jpg",
        "/imgs/spots/XMJD_03.jpg",
        "/imgs/spots/XMJD_04.jpg"
      ],
      "tags": ["文化", "名胜"]
    }
  ]
  `

  // 将 JSON 字符串解析为 JS 对象
  const spot_list = JSON.parse(jsonString)

  return {
    total: spot_list.length,
    list: spot_list,
  }
}
