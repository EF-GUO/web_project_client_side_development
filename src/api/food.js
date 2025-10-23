export async function fetchFood() {
  const jsonString = `
  [
    {
      "id": 1,
      "title": "火锅",
      "desc": "成都火锅作为巴蜀美食的灵魂，早已成为这座城市最具代表性的饮食文化符号。其以麻、辣、鲜、香著称，红油翻滚、香气四溢，令人食欲大开。火锅底料多以牛油、豆瓣酱、花椒和干辣椒熬制而成，辣而不燥、麻而不苦。无论是肥牛、毛肚、黄喉还是豆腐皮，都能在滚烫的锅中焕发独特风味。成都人讲究“围炉而坐、热闹开涮”，火锅不仅是一种美食，更是一种生活方式。无论冬夏，街头巷尾总能看到人们围着一锅热气腾腾的火锅，谈天说地、笑语不断，尽显成都人的闲适与热情。",
      "images": [
        "/imgs/food/food_hot_pot_01.jpg",
        "/imgs/food/food_hot_pot_02.jpg",
        "/imgs/food/food_hot_pot_03.jpg"
      ]
    },
    {
      "id": 2,
      "title": "烤鱼",
      "desc": "成都烤鱼融合了川菜的麻辣精髓与炭火烹饪的独特香气，是成都人餐桌上不可或缺的美味之一。选用新鲜活鱼，先经炭火慢烤至外皮金黄酥脆、鱼肉鲜嫩，再加入以花椒、干辣椒、豆瓣酱、姜蒜等炒制而成的秘制酱料，香气四溢，麻辣入味。每一口都在唇齿间激起火辣与鲜香的交融，让人回味无穷。成都的烤鱼口味多样，从香辣、蒜香到泡椒、豆豉，每一种都各具特色。三五好友围炉而坐，烤鱼上桌，热气腾腾中伴随笑语与辣香，尽显成都人热情、惬意的生活味道。",
      "images": [
        "/imgs/food/food_kaoyu_01.jpg",
        "/imgs/food/food_kaoyu_02.jpg",
        "/imgs/food/food_kaoyu_03.jpg"
      ]
    },
    {
      "id": 3,
      "title": "钵钵鸡",
      "desc": "钵钵鸡是成都街头最具人气的传统冷吃美食之一，起源于四川乐山，后来在成都发扬光大。它以精心调制的红油为魂，香气扑鼻、麻辣爽口。新鲜的食材——如鸡肉、藕片、海带结、豆皮、蔬菜等——都用竹签串好，提前焯熟后浸泡在装满红油、花椒、芝麻和香料的钵中。吃的时候冷而不腻、麻中带香，每一签都充满浓郁的川味灵魂。无论炎炎夏日还是微凉傍晚，街边一碗钵钵鸡、几位好友、几句闲聊，便是最地道的成都味。它不仅是一种美食，更是一种代表成都生活节奏的市井风情。",
      "images": [
        "/imgs/food/food_boboji_01.jpg",
        "/imgs/food/food_boboji_02.jpg",
        "/imgs/food/food_boboji_03.jpg",
        "/imgs/food/food_boboji_04.jpg"
      ]
    },
    {
      "id": 4,
      "title": "蹄花",
      "desc": "老妈蹄花是成都传统名小吃之一，以其汤白如奶、肉烂味香而闻名。选用上等猪蹄，经过长时间文火慢炖，汤汁浓郁、胶质丰富，入口软糯、回味悠长。蹄花汤底加入花椒、姜片、葱段等多种香料，既去腥提鲜，又带有淡淡的麻香与甘甜。常配以粉丝、豆腐皮或蔬菜，汤鲜味浓，既可做主食，也可作宵夜。成都人常说：“夜宵不喝蹄花汤，算不得地道成都人。”一碗热气腾腾的老妈蹄花，不仅暖胃，更承载着成都人深厚的生活气息与家常情感。",
      "images": [
        "/imgs/food/food_tihua_01.jpg",
        "/imgs/food/food_tihua_02.jpg",
        "/imgs/food/food_tihua_03.jpg",
        "/imgs/food/food_tihua_04.jpg",
        "/imgs/food/food_tihua_05.jpg",
        "/imgs/food/food_tihua_06.jpg",
        "/imgs/food/food_tihua_07.jpg"
      ]
    }
  ]
  `

  const food_list = JSON.parse(jsonString)

  return {
    total: food_list.length,
    list: food_list,
  }
}
