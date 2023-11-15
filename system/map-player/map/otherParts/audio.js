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
    one = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_one.ogg')        ;   one2 = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_one.ogg')
    two = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_two.ogg')        ;   two2 = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_two.ogg')
    three = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_three.ogg')    ;   three2 = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_three.ogg')
    four = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_four.ogg')      ;   four2 = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_four.ogg')
    five = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_five.ogg')      ;   five2 = new Audio('https://raw.githubusercontent.com/loglot/fez_music/main/layers/layer_five.ogg')

    playSound(){
        if (!this.key){
            this.one.play()
            this.two.play()
            this.three.play()
            this.four.play()
            this.five.play()
        } else {
            this.one2.play()
            this.two2.play()
            this.three2.play()
            this.four2.play()
            this.five2.play() 
        }
    }
        
    async playSongLoop(){
        while(true){
            this.playSound()
            this.key = !this.key
            await this.sleep(68000)
        }
    }
        
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
}