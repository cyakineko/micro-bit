let mob: game.LedSprite = null
let _1y = 0
let y = 0
let x = 0
let bool = 0
let _1x = 2
led.plot(_1x, 4)
while (!(x == _1x && y == 4)) {
    _1y = _1x
    if (input.buttonIsPressed(Button.A) && !(_1x == 0) && bool == 0) {
        _1x += -1
        bool = 1
    }
    if (input.buttonIsPressed(Button.B) && !(_1x == 4) && bool == 0) {
        _1x += 1
        bool = 1
    }
    led.unplot(_1y, 4)
    led.plot(_1x, 4)
    if (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        bool = 0
    }
}
basic.showString("Game over")
basic.forever(function () {
    mob = game.createSprite(randint(0, 4), 0)
    while (!(mob.get(LedSpriteProperty.Y) == 4)) {
        mob.change(LedSpriteProperty.Y, 1)
    }
    mob.delete()
})
