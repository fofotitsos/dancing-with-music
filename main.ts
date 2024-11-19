basic.forever(function () {
    music.play(music.stringPlayable("A G E D F F A B ", 211), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # # .
        . . # . .
        . # . # .
        `)
})
