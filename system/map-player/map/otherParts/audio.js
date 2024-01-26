export class Sound{


    breakSound(v=1) {
        var hbreak = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/break.wav')
        hbreak.volume = v
        hbreak.play()
    }

    jumpSound(v=.5) {
        var jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/jump.wav')
        jump.volume = v
        jump.play()
    }

    hookSound(v=.5) {
        var hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hook.wav')
        hook.volume = v
        hook.play()
    }

    hookHitSound(v=1) {
        var hookHit = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hookHit.wav')
        hookHit.volume = v
        hookHit.play()
    }

    hurtSound(v=1) {
        var hurt = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hurt.wav')
        hurt.volume = v
        hurt.play();
    }

    menuSound(v=1) {
        var menu = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/menu.wav')
        menu.volume = v
        menu.play();
    }

    wallJumpSound(v=1) {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/wallJump.wav')
        wallJump.volume = v
        wallJump.play();
    }

    powerUpSound(v=1) {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/powerup.wav')
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
        
    async playSongLoop(){
        while(true){
            this.playSound()
            await this.sleep(68000)
        }
    }
        
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
}