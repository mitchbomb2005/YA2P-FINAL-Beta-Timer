export class Sound{


    breakSound(v=.2) {
        var hbreak = new Audio('../../../../../../assets/audio/break.wav')
        hbreak.volume = v
        hbreak.play()
    }

    jumpSound(v=.1) {
        var jump = new Audio('../../../../../../assets/audio/jump.wav')
        jump.volume = v
        jump.play()
    }

    hookSound(v=.1) {
        var hook = new Audio('../../../../../../assets/audio/hook.wav')
        hook.volume = v
        hook.play()
    }

    hookHitSound(v=.2) {
        var hookHit = new Audio('../../../../../../assets/audio/hookHit.wav')
        hookHit.volume = v
        hookHit.play()
    }

    hurtSound(v=.2) {
        var hurt = new Audio('../../../../../../assets/audio/hurt.wav')
        hurt.volume = v
        hurt.play();
    }

    menuSound(v=.2) {
        var menu = new Audio('../../../../../../assets/audio/menu.wav')
        menu.volume = v
        menu.play();
    }

    wallJumpSound(v=.2) {
        var wallJump = new Audio('../../../../../../assets/audio/wallJump.wav')
        wallJump.volume = v
        wallJump.play();
    }

    powerUpSound(v=.2) {
        var wallJump = new Audio('../../../../../../assets/audio/powerup.wav')
        wallJump.volume = v
        wallJump.play();
    }
    key = false

    playSound(){
        this.breakSound(0)
        this.jumpSound(0)
        this.hookSound(0)
        this.hookHitSound(0)
        this.hurtSound(0)
        this.menuSound(0)
        this.wallJumpSound(0) 
    }
        
    async playSongLoop(v = .2){
        var song = new Audio(`../../../../../../assets/audio/music/song${Math.floor(Math.random() * 3)}.wav`)
        song.volume = v
        while(true){
            song.play()
            await this.sleep(68000)
        }
    }
        
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
}