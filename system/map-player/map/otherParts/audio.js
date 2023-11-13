export class Audio{
    break = new Audio('https://raw.githubusercontent.com/loglot/yet-another-2d-platformer/main/other/audio/break.wav')

    breakSound() {
        this.break.play()
    }

}