export class Sound{
    songLength = [
        101000,
        178000,
        145000,
        80000,
        135000
    ]

    breakSound(v=.2) {
        var hbreak = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/break.wav')
        hbreak.volume = v
        hbreak.play()
    }

    jumpSound(v=.1) {
        var jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/jump.wav')
        jump.volume = v
        jump.play()
    }

    hookSound(v=.15) {
        var hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hook.wav')
        hook.volume = v
        hook.play()
    }

    hookHitSound(v=.15) {
        var hookHit = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hookHit.wav')
        hookHit.volume = v
        hookHit.play()
    }

    hurtSound(v=.2) {
        var hurt = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/hurt.wav')
        hurt.volume = v
        hurt.play();
    }

    menuSound(v=.2) {
        var menu = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/menu.wav')
        menu.volume = v
        menu.play();
    }

    wallJumpSound(v=.2) {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/wallJump.wav')
        wallJump.volume = v
        wallJump.play();
    }

    powerUpSound(v=.05) {
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
        
    async playSongLoop(v = .2){

        while(true){
            var songNum = Math.floor(Math.random() * 5)
            var song = new Audio(`https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/assets/audio/music/song${songNum}.WAV`)
            song.volume = v
            await this.sleep(2000)
            song.play()
            
            await this.sleep(this.songLength[songNum])
        }
    }
        
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
}