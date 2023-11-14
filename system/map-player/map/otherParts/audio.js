export class Sound{
    break = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/break.wav')
    jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/jump.wav')
    hook = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/hook.wav')

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
}