input.onButtonPressed(Button.A, function () {
    me.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    me.change(LedSpriteProperty.X, 1)
})
let mob4: game.LedSprite = null
let mob3: game.LedSprite = null
let mob2: game.LedSprite = null
let mob: game.LedSprite = null
let nom = 0
let 配列: number[] = []
let me: game.LedSprite = null
let a = 400
me = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    配列 = [
    0,
    1,
    2,
    3,
    4
    ]
    nom = randint(1, 配列.length)
    mob = game.createSprite(配列[nom], 0)
    配列.removeAt(nom)
    nom = randint(1, 配列.length)
    mob2 = game.createSprite(配列[nom], 0)
    配列.removeAt(nom)
    nom = randint(1, 配列.length)
    mob3 = game.createSprite(配列[nom], 0)
    配列.removeAt(nom)
    nom = randint(1, 配列.length)
    mob4 = game.createSprite(配列[nom], 0)
    配列.removeAt(nom)
    while (mob.get(LedSpriteProperty.Y) != 4) {
        basic.pause(a)
        mob.change(LedSpriteProperty.Y, 1)
        mob3.change(LedSpriteProperty.Y, 1)
        mob2.change(LedSpriteProperty.Y, 1)
        mob4.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(a)
    mob.change(LedSpriteProperty.Y, 1)
    mob3.change(LedSpriteProperty.Y, 1)
    mob2.change(LedSpriteProperty.Y, 1)
    mob4.change(LedSpriteProperty.Y, 1)
    if (mob.isTouching(me) || mob4.isTouching(me) || (mob2.isTouching(me) || mob3.isTouching(me))) {
        game.gameOver()
        basic.showNumber(game.score())
    }
    mob.delete()
    mob2.delete()
    mob3.delete()
    mob4.delete()
    game.addScore(1)
    a = 500 - Math.floor(game.score() / 10) * 100
})
