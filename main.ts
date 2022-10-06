input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    disparo = game.createSprite(nave.get(LedSpriteProperty.X), nave.get(LedSpriteProperty.Y))
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 5; index++) {
        disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let sprite = 0
let disparo: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 4)
let marciano = game.createSprite(2, 0)
disparo = game.createSprite(2, 0)
disparo.delete()
marciano.delete()
game.setScore(0)
basic.forever(function () {
    if (disparo.get(LedSpriteProperty.Y) == 0) {
        disparo.delete()
        sprite = 0
    }
})
basic.forever(function () {
    basic.pause(randint(3000, 1000))
    if (marciano.isDeleted()) {
        marciano = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (!(marciano.isDeleted())) {
        marciano.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (disparo.isTouching(marciano)) {
        marciano.delete()
        disparo.delete()
        game.addScore(1)
    } else if (marciano.isTouching(nave)) {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        2269,
        40,
        255,
        195,
        600,
        SoundExpressionEffect.Tremolo,
        InterpolationCurve.Logarithmic
        ), SoundExpressionPlayMode.UntilDone)
        game.gameOver()
    } else if (marciano.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
