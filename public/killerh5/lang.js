// 多语言支持
const Lang = {
    current: 'zh',
    
    texts: {
        zh: {
            // 通用
            title: "暗杀",
            intro: "扮演刺客，完成各种暗杀目标",
            start: "开始游戏",
            restart: "重新开始",
            skip: "跳过场景",
            score: "分数",
            gold: "金币",
            level: "关卡",
            timeUp: "⏰ 时间到！扣50分",
            gameOver: "游戏结束",
            victory: "🎉 恭喜通关！",
            finalScore: "最终分数",
            totalGold: "总金币",
            completedLevel: "完成关卡",
            
            // 提示
            observeScene: "观察场上情况...",
            makeChoice: "做出你的选择...",
            specialPerson: "⚠️ 场上有特殊人物...",
            
            // 结果
            success: "✅ 刺杀成功！\n获得 {gold} 金币",
            knightBlocked: "❌ 骑士拦截了你！\n{target}被骑士保护\n正确答案：跳过场景",
            guardianBlocked: "❌ {guardian}拦截了你！\n{target}被保护\n正确答案：跳过场景",
            guardianTooStrong: "❌ {guardian}太强了！\n你被反杀！\n正确答案：{correct}",
            civilianInnocent: "❌ {name}是无辜的！\n正确答案：{correct}",
            correctSkip: "✅ 正确！没有可刺杀目标\n跳过正确！+5 金币",
            correctSkipInnocent: "✅ 正确！场上只有无辜者\n跳过正确！+5 金币",
            wrongSkip: "❌ 有可刺杀目标！\n{target}可以刺杀\n正确答案：刺杀{target}",
            swordDefeatKnight: "✅ 你用长剑击败了骑士！\n成功刺杀{target}！\n+{gold} 金币",
            swordKillKnight: "✅ 你用长剑击败了骑士！\n但他保护的目标也逃跑了\n+5 金币",
            
            // 特殊NPC
            witchPoison: "💀 你杀死了女巫，但被毒死！\n女巫会下毒反噬\n正确答案：跳过场景",
            rangerSuccess: "✅ 你成功刺杀了游侠！\n获得 10 金币",
            rangerFail: "❌ 游侠反击了！\n刺杀失败\n正确答案：跳过场景",
            fortuneHint: "🔮 占卜师告诉你：\n{hint}\n获得 5 金币",
            
            // 道具
            getGold: "💰 获得 {gold} 金币",
            getTime: "⏱️ 时间 +{time} 秒",
            getTreasure: "🎁 宝箱开出 {gold} 金币！",
            getSword: "⚔️ 获得长剑！可以击败骑士",
            getItem: "✨ 获得{name}！+{gold} 金币",
            
            // 角色 - ID必须和config.js一致
            assassin: "刺客",
            king: "国王",
            prince: "王子", 
            pope: "教皇",
            queen: "王后",
            knight: "骑士",
            musketeer: "火枪手",
            police: "警察",
            civilian_m: "平民",
            civilian_f: "平民女",
            princess: "公主",
            doctor: "医生",
            witch: "女巫",
            ranger: "游侠",
            fortune: "占卜师",
            
            // 道具名称 - ID必须和config.js一致
            axe: "斧子",
            gold_item: "金币",
            map: "地图",
            dagger: "匕首",
            treasure: "宝箱",
            sword: "长剑",
            
            // 按钮
            kill: "刺杀{name}",
            
            // 正确答案
            correctAnswerSkip: "跳过场景",
            correctAnswerKill: "刺杀{name}",
            
            // Loading
            loadingTitle: "加载中...",
            loadingPrepare: "正在准备暗杀任务...",
            loadingCharacters: "正在加载角色资源...",
            loadingBackgrounds: "正在加载场景背景...",
            loadingStart: "即将开始游戏...",
        },
        
        en: {
            // General
            title: "Assassin",
            intro: "Play as an assassin, complete various missions",
            start: "Start Game",
            restart: "Restart",
            skip: "Skip Scene",
            score: "Score",
            gold: "Gold",
            level: "Level",
            timeUp: "⏰ Time's up! -50 points",
            gameOver: "Game Over",
            victory: "🎉 Victory!",
            finalScore: "Final Score",
            totalGold: "Total Gold",
            completedLevel: "Levels Completed",
            
            // Hints
            observeScene: "Observe the scene...",
            makeChoice: "Make your choice...",
            specialPerson: "⚠️ Special characters present...",
            
            // Results
            success: "✅ Assassination successful!\n+{gold} gold",
            knightBlocked: "❌ Knight blocked you!\n{target} is protected\nCorrect: Skip scene",
            guardianBlocked: "❌ {guardian} blocked you!\n{target} is protected\nCorrect: Skip scene",
            guardianTooStrong: "❌ {guardian} is too strong!\nYou were killed!\nCorrect: {correct}",
            civilianInnocent: "❌ {name} is innocent!\nCorrect: {correct}",
            correctSkip: "✅ Correct! No valid targets\nSkip correct! +5 gold",
            correctSkipInnocent: "✅ Correct! Only innocents present\nSkip correct! +5 gold",
            wrongSkip: "❌ Valid target exists!\n{target} can be assassinated\nCorrect: Assassinate {target}",
            swordDefeatKnight: "✅ You defeated the knight!\n{target} assassinated!\n+{gold} gold",
            swordKillKnight: "✅ You defeated the knight!\nTarget escaped\n+5 gold",
            
            // Special NPCs
            witchPoison: "💀 You killed the witch but got poisoned!\nCorrect: Skip scene",
            rangerSuccess: "✅ You assassinated the Ranger!\n+10 gold",
            rangerFail: "❌ Ranger counterattacked!\nAssassination failed\nCorrect: Skip scene",
            fortuneHint: "🔮 Fortune teller reveals:\n{hint}\n+5 gold",
            
            // Items
            getGold: "💰 +{gold} gold",
            getTime: "⏱️ Time +{time} sec",
            getTreasure: "🎁 Treasure: {gold} gold!",
            getSword: "⚔️ Got Long Sword! Can defeat knights",
            getItem: "✨ Got {name}! +{gold} gold",
            
            // Characters - ID must match config.js
            assassin: "Assassin",
            king: "King",
            prince: "Prince",
            pope: "Pope",
            queen: "Queen",
            knight: "Knight",
            musketeer: "Musketeer",
            police: "Police",
            civilian_m: "Civilian",
            civilian_f: "Civilian Woman",
            princess: "Princess",
            doctor: "Doctor",
            witch: "Witch",
            ranger: "Ranger",
            fortune: "Fortune Teller",
            
            // Items - ID must match config.js
            axe: "Axe",
            gold_item: "Gold",
            map: "Map",
            dagger: "Dagger",
            treasure: "Treasure",
            sword: "Long Sword",
            
            // Buttons
            kill: "Assassinate {name}",
            
            // Correct answers
            correctAnswerSkip: "Skip scene",
            correctAnswerKill: "Assassinate {name}",
            
            // Loading
            loadingTitle: "Loading...",
            loadingPrepare: "Preparing assassination mission...",
            loadingCharacters: "Loading character assets...",
            loadingBackgrounds: "Loading scene backgrounds...",
            loadingStart: "Starting game...",
        }
    },
    
    get(key, params = {}) {
        let text = this.texts[this.current][key] || key;
        Object.keys(params).forEach(k => {
            text = text.replace(new RegExp(`{${k}}`, 'g'), params[k]);
        });
        return text;
    },
    
    setLanguage(lang) {
        this.current = lang;
        if (window.game) {
            window.game.updateLanguage();
        }
    }
};
