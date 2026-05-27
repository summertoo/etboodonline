// 游戏配置表
const GameConfig = {
    // 游戏基础设置
    game: {
        initialScore: 100,
        wrongPenalty: 50,
        timeLimit: 30,
        totalLevels: 30
    },

    // 刺客
    assassin: {
        id: "assassin",
        name: "刺客",
        image: "./images/characters/assassin.png"
    },

    // 可刺杀目标 (击杀获得金币)
    targets: [
        { id: "king", name: "国王", image: "./images/characters/king.png", gold: 15, protected: true },
        { id: "prince", name: "王子", image: "./images/characters/prince.png", gold: 12, protected: true },
        { id: "pope", name: "教皇", image: "./images/characters/pope.png", gold: 20, protected: false },
        { id: "queen", name: "王后", image: "./images/characters/queen.png", gold: 18, protected: true }
    ],

    // 守护者 (会拦截刺杀)
    guardians: [
        { id: "knight", name: "骑士", image: "./images/characters/knight.png", blocks: ["king", "prince", "queen"] },
        { id: "musketeer", name: "火枪手", image: "./images/characters/musketeer.png", blocks: ["king", "queen"] },
        { id: "police", name: "警察", image: "./images/characters/police.png", blocks: ["prince"] }
    ],

    // 无辜平民 (刺杀会扣分)
    civilians: [
        { id: "civilian_m", name: "平民", image: "./images/characters/civilian_m.png" },
        { id: "civilian_f", name: "平民女", image: "./images/characters/civilian_f.png" },
        { id: "princess", name: "公主", image: "./images/characters/princess.png" },
        { id: "doctor", name: "医生", image: "./images/characters/doctor.png" }
    ],

    // 特殊NPC (有独特效果)
    specialNPC: [
        { id: "witch", name: "女巫", image: "./images/characters/witch.png", effect: "poison", desc: "女巫会下毒，刺杀她也会被毒死" },
        { id: "ranger", name: "游侠", image: "./images/characters/ranger.png", effect: "counter", desc: "游侠会反击，刺杀可能失败" },
        { id: "fortune", name: "占卜师", image: "./images/characters/fortune.png", effect: "hint", desc: "占卜师可以揭示正确答案" }
    ],

    // 道具
    items: [
        { id: "axe", name: "斧子", image: "./images/characters/axe.png", effect: "damage", bonus: 5, desc: "增加刺杀成功率" },
        { id: "gold_item", name: "金币", image: "./images/characters/gold.png", effect: "gold", bonus: 20, desc: "直接获得金币" },
        { id: "map", name: "地图", image: "./images/characters/map.png", effect: "time", bonus: 10, desc: "增加10秒时间" },
        { id: "dagger", name: "匕首", image: "./images/characters/dagger.png", effect: "dagger", bonus: 8, desc: "快速刺杀武器" },
        { id: "treasure", name: "宝箱", image: "./images/characters/treasure.png", effect: "treasure", bonus: 30, desc: "随机奖励10-50金币" },
        { id: "sword", name: "长剑", image: "./images/characters/sword.png", effect: "power", bonus: 0, desc: "可以击败骑士" }
    ],

    // 场景背景
    backgrounds: [
        "./images/backgrounds/bg_01.png",
        "./images/backgrounds/bg_02.png",
        "./images/backgrounds/bg_03.png",
        "./images/backgrounds/bg_04.png",
        "./images/backgrounds/bg_05.png",
        "./images/backgrounds/bg_06.png",
        "./images/backgrounds/bg_07.png",
        "./images/backgrounds/bg_08.png",
        "./images/backgrounds/bg_09.png",
        "./images/backgrounds/bg_10.png",
        "./images/backgrounds/bg_11.png",
        "./images/backgrounds/bg_12.png"
    ]
};
