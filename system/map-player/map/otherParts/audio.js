export class Sound{
    break = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/break.wav')
    jump = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/jump.wav')

    breakSound() {
        this.break.play()
    }

    jumpSound() {
        this.jump.play()
    }

}