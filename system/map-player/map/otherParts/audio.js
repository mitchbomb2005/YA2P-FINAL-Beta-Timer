export class Sound{


    breakSound() {
        var hbreak = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/break.wav')
        hbreak.play()
    }

    jumpSound() {
        var jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/jump.wav')
        jump.volume = .5
        jump.play()
    }

    hookSound() {
        var hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hook.wav')
        hook.volume = .5
        hook.play()
    }

    hookHitSound() {
        var hookHit = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hookHit.wav')
        hookHit.play()
    }

    hurtSound() {
        var hurt = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hurt.wav')
        hurt.play();
    }

    menuSound() {
        var menu = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/menu.wav')
        menu.play();
    }

    wallJumpSound() {
        var wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/wallJump.wav')
        wallJump.play();
    }
    key = false

    playSound(){

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