// 游戏主逻辑
class AssassinGame {
    constructor() {
        this.score = GameConfig.game.initialScore;
        this.gold = 0;
        this.level = 1;
        this.timeLeft = GameConfig.game.timeLimit;
        this.timer = null;
        this.currentScene = null;
        this.isActionLocked = false;
        this.hasSword = false;
        
        this.initElements();
        this.bindEvents();
    }

    initElements() {
        this.screens = {
            loading: document.getElementById('loading-screen'),
            start: document.getElementById('start-screen'),
            game: document.getElementById('game-screen'),
            end: document.getElementById('end-screen')
        };
        
        this.elements = {
            score: document.getElementById('score'),
            gold: document.getElementById('gold'),
            level: document.getElementById('level'),
            timerBar: document.getElementById('timer-bar'),
            backgroundLayer: document.getElementById('background-layer'),
            characterLayer: document.getElementById('character-layer'),
            itemLayer: document.getElementById('item-layer'),
            messageBox: document.getElementById('message-box'),
            targetList: document.getElementById('target-list'),
            skipBtn: document.getElementById('skip-btn'),
            loadingBar: document.getElementById('loading-bar'),
            loadingPercent: document.getElementById('loading-percent')
        };
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
        document.getElementById('skip-btn').addEventListener('click', () => this.skipScene());
    }

    // 预加载所有游戏图片
    preloadImages() {
        const images = [];
        
        // 添加背景图片
        GameConfig.backgrounds.forEach(bg => {
            images.push({ src: bg, type: 'background' });
        });
        
        // 添加角色图片 - 目标
        GameConfig.targets.forEach(char => {
            images.push({ src: char.image, type: 'target', id: char.id });
        });
        
        // 添加角色图片 - 守护者
        GameConfig.guardians.forEach(char => {
            images.push({ src: char.image, type: 'guardian', id: char.id });
        });
        
        // 添加角色图片 - 平民
        GameConfig.civilians.forEach(char => {
            images.push({ src: char.image, type: 'civilian', id: char.id });
        });
        
        // 添加特殊NPC图片
        GameConfig.specialNPC.forEach(char => {
            images.push({ src: char.image, type: 'special', id: char.id });
        });
        
        // 添加道具图片
        GameConfig.items.forEach(item => {
            images.push({ src: item.image, type: 'item', id: item.id });
        });
        
        // 添加刺客图片
        images.push({ src: GameConfig.assassin.image, type: 'assassin', id: 'assassin' });
        
        let loadedCount = 0;
        const totalCount = images.length;
        
        const updateProgress = () => {
            loadedCount++;
            const percent = Math.round((loadedCount / totalCount) * 100);
            this.elements.loadingBar.style.width = percent + '%';
            this.elements.loadingPercent.textContent = percent + '%';
            
            // 更新加载文本
            const loadingText = document.getElementById('loading-text');
            if (percent < 30) {
                loadingText.textContent = Lang.current === 'zh' ? '正在准备暗杀任务...' : 'Preparing assassination mission...';
            } else if (percent < 60) {
                loadingText.textContent = Lang.current === 'zh' ? '正在加载角色资源...' : 'Loading character assets...';
            } else if (percent < 90) {
                loadingText.textContent = Lang.current === 'zh' ? '正在加载场景背景...' : 'Loading scene backgrounds...';
            } else {
                loadingText.textContent = Lang.current === 'zh' ? '即将开始游戏...' : 'Starting game...';
            }
            
            // 全部加载完成
            if (loadedCount >= totalCount) {
                setTimeout(() => this.onPreloadComplete(), 300);
            }
        };
        
        // 逐个加载图片
        images.forEach(img => {
            const image = new Image();
            image.onload = updateProgress;
            image.onerror = updateProgress; // 即使加载失败也继续
            image.src = img.src;
        });
    }

    // 预加载完成，进入开始界面
    onPreloadComplete() {
        this.showScreen('start');
    }

    // 更新语言
    updateLanguage() {
        // 开始界面
        document.getElementById('game-title').textContent = Lang.get('title');
        document.getElementById('game-intro').textContent = Lang.get('intro');
        document.getElementById('start-btn').textContent = Lang.get('start');
        document.getElementById('restart-btn').textContent = Lang.get('restart');
        
        // 游戏界面
        document.getElementById('lbl-score').textContent = Lang.get('score');
        document.getElementById('lbl-level').textContent = Lang.get('level');
        document.getElementById('lbl-gold').textContent = Lang.get('gold');
        this.elements.skipBtn.textContent = Lang.get('skip');
        
        // 结束界面
        document.getElementById('lbl-final-score').textContent = Lang.get('finalScore');
        document.getElementById('lbl-total-gold').textContent = Lang.get('totalGold');
        document.getElementById('lbl-completed').textContent = Lang.get('completedLevel');
        
        // 重新生成选项按钮
        if (this.currentScene && !this.isActionLocked) {
            this.generateOptions();
        }
    }

    startGame() {
        this.score = GameConfig.game.initialScore;
        this.gold = 0;
        this.level = 1;
        this.isActionLocked = false;
        this.hasSword = false;
        
        // 隐藏语言切换
        document.getElementById('lang-switch').classList.add('hidden');
        
        this.showScreen('game');
        this.updateHUD();
        this.generateScene();
        this.startTimer();
    }

    restartGame() {
        this.startGame();
    }

    showScreen(name) {
        Object.values(this.screens).forEach(s => s.classList.remove('active'));
        this.screens[name].classList.add('active');
    }

    updateHUD() {
        this.elements.score.textContent = this.score;
        this.elements.gold.textContent = this.gold;
        this.elements.level.textContent = this.level;
    }

    updateTimerBar() {
        const percent = (this.timeLeft / GameConfig.game.timeLimit) * 100;
        this.elements.timerBar.style.width = percent + '%';
        this.elements.timerBar.textContent = this.timeLeft;
        
        this.elements.timerBar.classList.remove('warning', 'danger');
        if (this.timeLeft <= 10) {
            this.elements.timerBar.classList.add('danger');
        } else if (this.timeLeft <= 20) {
            this.elements.timerBar.classList.add('warning');
        }
    }

    startTimer() {
        this.timeLeft = GameConfig.game.timeLimit;
        this.updateTimerBar();
        
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerBar();
            
            if (this.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }

    handleTimeout() {
        clearInterval(this.timer);
        this.isActionLocked = true;
        
        this.showMessage(Lang.get('timeUp'), "error");
        this.score -= GameConfig.game.wrongPenalty;
        this.updateHUD();
        
        if (this.score <= 0) {
            this.score = 0;
            setTimeout(() => this.gameOver(), 1500);
        } else {
            setTimeout(() => this.nextLevel(), 2000);
        }
    }

    generateScene() {
        this.currentScene = this.createRandomScene();
        this.renderScene();
        this.showMessage(this.getSceneHint(), "info");
    }

    createRandomScene() {
        const scene = {
            background: GameConfig.backgrounds[Math.floor(Math.random() * GameConfig.backgrounds.length)],
            showAssassin: Math.random() > 0.25,
            targets: [],
            guardians: [],
            civilians: [],
            specialNPC: [],
            items: []
        };

        const sceneType = Math.random();
        
        if (sceneType < 0.15) {
            // 场景1: 目标被对应的守护者保护 (陷阱)
            const targetIndex = Math.floor(Math.random() * 3); // 0=king, 1=prince, 2=queen
            const target = GameConfig.targets[targetIndex];
            scene.targets.push({...target});
            
            // 选择能保护该目标的守护者
            const validGuardians = GameConfig.guardians.filter(g => 
                g.blocks && g.blocks.includes(target.id)
            );
            if (validGuardians.length > 0) {
                const guardian = validGuardians[Math.floor(Math.random() * validGuardians.length)];
                scene.guardians.push({...guardian});
            }
        } else if (sceneType < 0.28) {
            // 场景2: 只有无辜者 (陷阱)
            const civilianCount = Math.floor(Math.random() * 2) + 1;
            const shuffled = [...GameConfig.civilians].sort(() => Math.random() - 0.5);
            for (let i = 0; i < civilianCount; i++) {
                scene.civilians.push({...shuffled[i]});
            }
        } else if (sceneType < 0.42) {
            // 场景3: 特殊NPC场景
            const special = GameConfig.specialNPC[Math.floor(Math.random() * GameConfig.specialNPC.length)];
            scene.specialNPC.push({...special});
            if (Math.random() > 0.5) {
                scene.targets.push({...GameConfig.targets[Math.floor(Math.random() * 4)]});
            }
        } else if (sceneType < 0.6) {
            // 场景4: 混合场景 (目标可能被保护，也可能没有)
            scene.targets.push({...GameConfig.targets[Math.floor(Math.random() * 4)]});
            // 只有40%概率出现守护者，且可能不保护当前目标
            if (Math.random() > 0.6) {
                scene.guardians.push({...GameConfig.guardians[Math.floor(Math.random() * 3)]});
            }
            if (Math.random() > 0.5) {
                scene.civilians.push({...GameConfig.civilians[Math.floor(Math.random() * 4)]});
            }
        } else if (sceneType < 0.78) {
            // 场景5: 多目标，至少有一个可以刺杀
            const shuffled = [...GameConfig.targets].sort(() => Math.random() - 0.5);
            scene.targets.push({...shuffled[0]}); // 第一个目标
            if (Math.random() > 0.5) {
                scene.targets.push({...shuffled[1]}); // 第二个目标
            }
            // 可能添加一个守护者，但不保护所有目标
            if (Math.random() > 0.6) {
                scene.guardians.push({...GameConfig.guardians[Math.floor(Math.random() * 3)]});
            }
        } else {
            // 场景6: 纯刺杀场景 (肯定可以刺杀)
            scene.targets.push({...GameConfig.targets[Math.floor(Math.random() * 4)]});
        }

        if (Math.random() > 0.5) {
            const itemCount = Math.random() > 0.7 ? 2 : 1;
            const shuffledItems = [...GameConfig.items].sort(() => Math.random() - 0.5);
            for (let i = 0; i < itemCount; i++) {
                scene.items.push({...shuffledItems[i]});
            }
        }

        return scene;
    }

    getSceneHint() {
        const scene = this.currentScene;
        this.correctAction = this.determineCorrectAction();
        
        if (scene.specialNPC.length > 0) {
            return Lang.get('specialPerson');
        }
        if (scene.targets.length === 0 && scene.civilians.length > 0) {
            return Lang.get('observeScene');
        }
        return Lang.get('makeChoice');
    }

    renderScene() {
        this.elements.backgroundLayer.style.backgroundImage = `url('${this.currentScene.background}')`;
        
        this.elements.characterLayer.innerHTML = '';
        this.elements.itemLayer.innerHTML = '';
        this.elements.targetList.innerHTML = '';

        if (this.currentScene.showAssassin) {
            const assassin = this.createCharacterElement(GameConfig.assassin, 'assassin');
            this.elements.characterLayer.appendChild(assassin);
        }

        this.currentScene.targets.forEach(target => {
            const el = this.createCharacterElement(target, 'target');
            el.onclick = () => this.tryKill(target);
            this.elements.characterLayer.appendChild(el);
        });

        this.currentScene.guardians.forEach(guardian => {
            const el = this.createCharacterElement(guardian, 'guardian');
            el.onclick = () => this.tryKillGuardian(guardian);
            this.elements.characterLayer.appendChild(el);
        });

        this.currentScene.civilians.forEach(civilian => {
            const el = this.createCharacterElement(civilian, 'civilian');
            el.onclick = () => this.tryKillCivilian(civilian);
            this.elements.characterLayer.appendChild(el);
        });

        this.currentScene.specialNPC.forEach(npc => {
            const el = this.createCharacterElement(npc, 'special');
            el.onclick = () => this.tryKillSpecial(npc);
            this.elements.characterLayer.appendChild(el);
        });

        this.currentScene.items.forEach(item => {
            const el = this.createItemElement(item);
            el.onclick = () => this.collectItem(item);
            this.elements.itemLayer.appendChild(el);
        });

        this.generateOptions();
    }

    generateOptions() {
        this.elements.targetList.innerHTML = '';
        const options = [];
        
        this.currentScene.targets.forEach(target => {
            const translatedName = Lang.get(target.id) !== target.id ? Lang.get(target.id) : target.name;
            options.push({
                text: Lang.get('kill', {name: translatedName}),
                action: () => this.tryKill(target)
            });
        });
        
        this.currentScene.guardians.forEach(guardian => {
            const translatedName = Lang.get(guardian.id) !== guardian.id ? Lang.get(guardian.id) : guardian.name;
            options.push({
                text: Lang.get('kill', {name: translatedName}),
                action: () => this.tryKillGuardian(guardian)
            });
        });
        
        this.currentScene.civilians.forEach(civilian => {
            const translatedName = Lang.get(civilian.id) !== civilian.id ? Lang.get(civilian.id) : civilian.name;
            options.push({
                text: Lang.get('kill', {name: translatedName}),
                action: () => this.tryKillCivilian(civilian)
            });
        });
        
        this.currentScene.specialNPC.forEach(npc => {
            const translatedName = Lang.get(npc.id) !== npc.id ? Lang.get(npc.id) : npc.name;
            options.push({
                text: Lang.get('kill', {name: translatedName}),
                action: () => this.tryKillSpecial(npc)
            });
        });
        
        options.sort(() => Math.random() - 0.5);
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'action-btn';
            btn.textContent = `🗡️ ${opt.text}`;
            btn.onclick = opt.action;
            this.elements.targetList.appendChild(btn);
        });
    }

    createCharacterElement(data, type) {
        const div = document.createElement('div');
        div.className = `character ${type} fade-in`;
        // 翻译角色名称
        const translatedName = Lang.get(data.id) !== data.id ? Lang.get(data.id) : data.name;
        div.innerHTML = `
            <div class="identity-badge">${translatedName}</div>
            <div class="portrait">
                <img src="${data.image}" alt="${translatedName}">
            </div>
        `;
        return div;
    }

    createItemElement(item) {
        const div = document.createElement('div');
        div.className = 'item fade-in';
        // 翻译道具名称
        const translatedName = Lang.get(item.id) !== item.id ? Lang.get(item.id) : item.name;
        div.innerHTML = `
            <img src="${item.image}" alt="${translatedName}">
            <span class="name">${translatedName}</span>
        `;
        return div;
    }

    determineCorrectAction() {
        const scene = this.currentScene;
        
        const killableTargets = scene.targets.filter(t => {
            const isBlocked = scene.guardians.some(g => g.blocks && g.blocks.includes(t.id));
            return !isBlocked;
        });

        if (killableTargets.length > 0) {
            const best = killableTargets.sort((a, b) => b.gold - a.gold)[0];
            return { type: 'kill', target: best };
        }
        
        return { type: 'skip' };
    }

    getBlockingGuardian(target) {
        return this.currentScene.guardians.find(g => 
            g.blocks && g.blocks.includes(target.id)
        );
    }

    tryKill(target) {
        if (this.isActionLocked) return;
        this.isActionLocked = true;
        clearInterval(this.timer);

        const blocker = this.getBlockingGuardian(target);
        const targetName = Lang.get(target.id) !== target.id ? Lang.get(target.id) : target.name;
        
        if (blocker && blocker.id === 'knight' && this.hasSword) {
            this.showMessage(Lang.get('swordDefeatKnight', {target: targetName, gold: target.gold}), "success");
            this.gold += target.gold;
            this.hasSword = false;
            setTimeout(() => this.nextLevel(), 2000);
        } else if (blocker) {
            const blockerName = Lang.get(blocker.id) !== blocker.id ? Lang.get(blocker.id) : blocker.name;
            this.showMessage(Lang.get('guardianBlocked', {guardian: blockerName, target: targetName}), "error");
            this.score -= 50;
            this.applyPenalty();
        } else {
            this.showMessage(Lang.get('success', {gold: target.gold}), "success");
            this.gold += target.gold;
            setTimeout(() => this.nextLevel(), 2000);
        }
        this.updateHUD();
    }

    tryKillGuardian(guardian) {
        if (this.isActionLocked) return;
        this.isActionLocked = true;
        clearInterval(this.timer);

        const guardianName = Lang.get(guardian.id) !== guardian.id ? Lang.get(guardian.id) : guardian.name;

        if (guardian.id === 'knight' && this.hasSword) {
            this.showMessage(Lang.get('swordKillKnight'), "success");
            this.gold += 5;
            this.hasSword = false;
            setTimeout(() => this.nextLevel(), 2000);
        } else {
            let correct;
            if (this.correctAction.type === 'kill') {
                const correctName = Lang.get(this.correctAction.target.id) !== this.correctAction.target.id 
                    ? Lang.get(this.correctAction.target.id) : this.correctAction.target.name;
                correct = Lang.get('correctAnswerKill', {name: correctName});
            } else {
                correct = Lang.get('correctAnswerSkip');
            }
            
            this.showMessage(Lang.get('guardianTooStrong', {guardian: guardianName, correct: correct}), "error");
            this.score -= 30;
            this.applyPenalty();
        }
        this.updateHUD();
    }

    tryKillCivilian(civilian) {
        if (this.isActionLocked) return;
        this.isActionLocked = true;
        clearInterval(this.timer);

        const civilianName = Lang.get(civilian.id) !== civilian.id ? Lang.get(civilian.id) : civilian.name;
        
        let correct;
        if (this.correctAction.type === 'kill') {
            const correctName = Lang.get(this.correctAction.target.id) !== this.correctAction.target.id 
                ? Lang.get(this.correctAction.target.id) : this.correctAction.target.name;
            correct = Lang.get('correctAnswerKill', {name: correctName});
        } else {
            correct = Lang.get('correctAnswerSkip');
        }

        this.showMessage(Lang.get('civilianInnocent', {name: civilianName, correct: correct}), "error");
        this.score -= 50;
        this.updateHUD();
        this.applyPenalty();
    }

    tryKillSpecial(npc) {
        if (this.isActionLocked) return;
        this.isActionLocked = true;
        clearInterval(this.timer);

        switch(npc.id) {
            case 'witch':
                this.showMessage(Lang.get('witchPoison'), "error");
                this.score -= 40;
                this.applyPenalty();
                break;
                
            case 'ranger':
                if (Math.random() > 0.5) {
                    this.showMessage(Lang.get('rangerSuccess'), "success");
                    this.gold += 10;
                    setTimeout(() => this.nextLevel(), 2000);
                } else {
                    this.showMessage(Lang.get('rangerFail'), "error");
                    this.score -= 25;
                    this.applyPenalty();
                }
                break;
                
            case 'fortune':
                let hint;
                if (this.correctAction.type === 'kill') {
                    const correctName = Lang.get(this.correctAction.target.id) !== this.correctAction.target.id 
                        ? Lang.get(this.correctAction.target.id) : this.correctAction.target.name;
                    hint = Lang.get('correctAnswerKill', {name: correctName});
                } else {
                    hint = Lang.get('correctAnswerSkip');
                }
                this.showMessage(Lang.get('fortuneHint', {hint: hint}), "success");
                this.gold += 5;
                this.updateHUD();
                this.isActionLocked = false;
                this.startTimer();
                break;
        }
        this.updateHUD();
    }

    collectItem(item) {
        if (this.isActionLocked) return;
        
        switch(item.effect) {
            case 'gold':
                this.showMessage(Lang.get('getGold', {gold: item.bonus}), "success");
                this.gold += item.bonus;
                break;
                
            case 'time':
                this.showMessage(Lang.get('getTime', {time: item.bonus}), "success");
                this.timeLeft += item.bonus;
                this.updateTimerBar();
                break;
                
            case 'treasure':
                const treasureGold = Math.floor(Math.random() * 41) + 10;
                this.showMessage(Lang.get('getTreasure', {gold: treasureGold}), "success");
                this.gold += treasureGold;
                break;
                
            case 'power':
                this.showMessage(Lang.get('getSword'), "success");
                this.hasSword = true;
                break;
                
            default:
                this.showMessage(Lang.get('getItem', {name: Lang.get(item.id), gold: item.bonus}), "success");
                this.gold += item.bonus;
        }
        
        this.updateHUD();
        
        this.currentScene.items = this.currentScene.items.filter(i => i.id !== item.id);
        this.elements.itemLayer.innerHTML = '';
        this.currentScene.items.forEach(i => {
            const el = this.createItemElement(i);
            el.onclick = () => this.collectItem(i);
            this.elements.itemLayer.appendChild(el);
        });
    }

    skipScene() {
        if (this.isActionLocked) return;
        this.isActionLocked = true;
        clearInterval(this.timer);

        const scene = this.currentScene;
        
        const killableTargets = scene.targets.filter(t => {
            const isBlocked = scene.guardians.some(g => g.blocks && g.blocks.includes(t.id));
            return !isBlocked;
        });

        if (scene.targets.length === 0 && scene.civilians.length > 0) {
            this.showMessage(Lang.get('correctSkipInnocent'), "success");
            this.gold += 5;
            setTimeout(() => this.nextLevel(), 2000);
        } else if (killableTargets.length === 0) {
            this.showMessage(Lang.get('correctSkip'), "success");
            this.gold += 5;
            setTimeout(() => this.nextLevel(), 2000);
        } else {
            const targetName = Lang.get(killableTargets[0].id) !== killableTargets[0].id 
                ? Lang.get(killableTargets[0].id) : killableTargets[0].name;
            this.showMessage(Lang.get('wrongSkip', {target: targetName}), "error");
            this.score -= 20;
            this.applyPenalty();
        }
        this.updateHUD();
    }

    applyPenalty() {
        if (this.score <= 0) {
            this.score = 0;
            this.updateHUD();
            setTimeout(() => this.gameOver(), 1500);
        } else {
            setTimeout(() => this.nextLevel(), 2500);
        }
    }

    nextLevel() {
        this.level++;
        this.isActionLocked = false;
        
        if (this.level > GameConfig.game.totalLevels) {
            this.victory();
            return;
        }
        
        this.generateScene();
        this.startTimer();
    }

    victory() {
        clearInterval(this.timer);
        // 显示语言切换
        document.getElementById('lang-switch').classList.remove('hidden');
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-gold').textContent = this.gold;
        document.getElementById('final-level').textContent = Lang.get('victory');
        document.getElementById('end-title').textContent = Lang.get('victory');
        this.showScreen('end');
    }

    showMessage(msg, type = "info") {
        const box = this.elements.messageBox;
        box.textContent = msg;
        box.className = type + ' show';
        
        // 3秒后自动隐藏（info类型不自动隐藏）
        if (type !== 'info') {
            setTimeout(() => {
                box.classList.remove('show');
            }, 2500);
        }
    }

    gameOver() {
        clearInterval(this.timer);
        // 显示语言切换
        document.getElementById('lang-switch').classList.remove('hidden');
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-gold').textContent = this.gold;
        document.getElementById('final-level').textContent = this.level;
        document.getElementById('end-title').textContent = Lang.get('gameOver');
        this.showScreen('end');
    }
}

// 初始化游戏
let game;
window.onload = () => {
    game = new AssassinGame();
};
