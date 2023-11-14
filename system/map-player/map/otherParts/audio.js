export class Sound{
    break = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/break.wav')
    jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/jump.wav')
    hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hook.wav')
    hookHit = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hook-hit.wav')
    hurt = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hurt.wav')
    menu = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/menu.wav')
    wallJump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/wallJump.wav')

    breakSound() {
        this.break.play()
    }

    jumpSound() {
        this.jump.volume = .5
        this.jump.play()
    }

    hookSound() {
        this.hook.volume = .5
        this.hook.play()
    }

    hookHitSound() {
        this.hookHit.play
    }

    hurtSound() {
        this.hurt.play();
    }

    menuSound() {
        this.menu.play();
    }

    wallJumpSound() {
        this.wallJump.play();
    }
}