namespace SpriteKind {
    export const fm = SpriteKind.create()
    export const bos = SpriteKind.create()
}
/**
 * <---le gusta a Jorge
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.bos, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    pizza += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fm, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    pizza += 100
    tiles.placeOnRandomTile(pizzeria, sprites.dungeon.floorDark3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.splash("¿Quieres saber cuanto vale tu coche?")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dirección == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f . . . . 
            . . . f f . . . . . . f f . . . 
            . . f f . . . . . . . . f f . . 
            . f f . . . . . . . . . . f f . 
            f f . f . . . . . . . . f . f f 
            f . . . f . . . . . . f . . . f 
            f . . . f . . . . . . f . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f . . . . . . . . . . . . f f 
            . f f . . . . . . . . . . f f . 
            . . f f . . . . . . . . f f . . 
            . . . f f . . . . . . f f . . . 
            . . . . f f f f f f f f . . . . 
            `, paco, -100, 0)
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim`,
        100,
        true
        )
    }
    if (Dirección == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f . . . . 
            . . . f f . . . . . . f f . . . 
            . . f f . . . . . . . . f f . . 
            . f f . . . . . . . . . . f f . 
            f f . f . . . . . . . . f . f f 
            f . . . f . . . . . . f . . . f 
            f . . . f . . . . . . f . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f . . . . . . . . . . . . f f 
            . f f . . . . . . . . . . f f . 
            . . f f . . . . . . . . f f . . 
            . . . f f . . . . . . f f . . . 
            . . . . f f f f f f f f . . . . 
            `, paco, 0, 100)
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim`,
        100,
        true
        )
    }
    if (Dirección == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f . . . . 
            . . . f f . . . . . . f f . . . 
            . . f f . . . . . . . . f f . . 
            . f f . . . . . . . . . . f f . 
            f f . f . . . . . . . . f . f f 
            f . . . f . . . . . . f . . . f 
            f . . . f . . . . . . f . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f . . . . . . . . . . . . f f 
            . f f . . . . . . . . . . f f . 
            . . f f . . . . . . . . f f . . 
            . . . f f . . . . . . f f . . . 
            . . . . f f f f f f f f . . . . 
            `, paco, 100, 0)
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim`,
        100,
        true
        )
    }
    if (Dirección == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f . . . . 
            . . . f f . . . . . . f f . . . 
            . . f f . . . . . . . . f f . . 
            . f f . . . . . . . . . . f f . 
            f f . f . . . . . . . . f . f f 
            f . . . f . . . . . . f . . . f 
            f . . . f . . . . . . f . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f . . . . . . . . . . . . f f 
            . f f . . . . . . . . . . f f . 
            . . f f . . . . . . . . f f . . 
            . . . f f . . . . . . f f . . . 
            . . . . f f f f f f f f . . . . 
            `, paco, 0, -100)
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim`,
        100,
        true
        )
    }
})
info.onScore(0, function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bos, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    pizza += 5
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
info.onScore(200, function () {
    tiles.setCurrentTilemap(tilemap`nivel0`)
    af = sprites.create(img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ......6664444444444eee4444444444666.....
        ......6664444444444eee4444444444666.....
        ......6664444444444eee4444444444666.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......44444444444442224444444444444.....
        ......44444444444425552444444444444.....
        ......eeeeeeeeeee2555552eeeeeeeeeee.....
        ......eeeeeeeeeee2555552eeeeeeeeeee.....
        ......eeeeeeeeeee2555552eeeeeeeeeee.....
        ......44444444444425552444444444444.....
        ......44444444444442224444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......4444444444444eee4444444444444.....
        ......6664444444444eee4444444444666.....
        ......6664444444444eee4444444444666.....
        ......6664444444444eee4444444444666.....
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        `, SpriteKind.fm)
    tiles.placeOnRandomTile(pizzeria, sprites.dungeon.floorDark3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    pizza += 10
    tiles.placeOnRandomTile(pizzeria, sprites.dungeon.darkGroundCenter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    tiles.placeOnRandomTile(pizzeria, sprites.vehicle.roadVertical)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-5)
    pizza += -5
    y += -5
    sprites.destroy(otherSprite)
})
let xhf: Sprite = null
let ñ: Sprite = null
let y = 0
let af: Sprite = null
let projectile: Sprite = null
let Dirección = 0
let pizzeria: Sprite = null
let paco: Sprite = null
let _200 = 200
tiles.setCurrentTilemap(tilemap`nivel`)
paco = sprites.create(assets.image`Paco derecha`, SpriteKind.Player)
paco.setPosition(75, 57)
let pizza = 60
info.setScore(60)
if (pizza == 0) {
	
}
if (0 < info.score()) {
    info.changeScoreBy(-1)
}
if (pizza > info.score()) {
    info.changeScoreBy(1)
}
scene.cameraFollowSprite(paco)
pizzeria = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........eee.........
    ..444444eee4444444..
    ..444444eee4444444..
    ..444444eee4444444..
    ..444444eee4444444..
    ..4444442224444444..
    ..4444422552eeeeeee.
    .eeeeee25552eeeeeee.
    .eeeeee22522eeeeeee.
    .eeeeeee2224444eee..
    ..444444eee4444444..
    ..444444eee4444444..
    ..444444eee4444444..
    ..444444eee4444444..
    `, SpriteKind.Food)
pizzeria.changeScale(1.5, ScaleAnchor.Middle)
tiles.placeOnRandomTile(pizzeria, sprites.dungeon.darkGroundCenter)
game.onUpdateInterval(5000, function () {
    ñ = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f f . . . . . . f f . . . 
        . . f f . . . . . . . . f f . . 
        . f f . . . . . . . . . . f f . 
        f f . f . . . . . . . . f . f f 
        f . . . f . . . . . . f . . . f 
        f . . . f . . . . . . f . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f f . . . . . . . . . . . . f f 
        . f f . . . . . . . . . . f f . 
        . . f f . . . . . . . . f f . . 
        . . . f f . . . . . . f f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ñ, sprites.builtin.brick)
    ñ.follow(paco, 16)
    animation.runImageAnimation(
    ñ,
    assets.animation`myAnim0`,
    100,
    true
    )
})
game.onUpdateInterval(350, function () {
    if (controller.up.isPressed()) {
        paco.y += -16
        info.changeScoreBy(-1)
        pizza += -1
        animation.runImageAnimation(
        paco,
        assets.animation`Walk izquierda`,
        200,
        false
        )
        Dirección = 3
    }
})
game.onUpdateInterval(350, function () {
    if (controller.left.isPressed()) {
        paco.x += -16
        info.changeScoreBy(-1)
        pizza += -1
        animation.runImageAnimation(
        paco,
        assets.animation`Walk izquierda`,
        200,
        false
        )
        Dirección = 0
    }
})
game.onUpdateInterval(350, function () {
    if (controller.right.isPressed()) {
        paco.x += 16
        info.changeScoreBy(-1)
        pizza += -1
        animation.runImageAnimation(
        paco,
        assets.animation`Walk derecha`,
        200,
        false
        )
        Dirección = 2
    }
})
game.onUpdateInterval(350, function () {
    if (controller.down.isPressed()) {
        paco.y += 16
        info.changeScoreBy(-1)
        pizza += -1
        animation.runImageAnimation(
        paco,
        assets.animation`Walk derecha`,
        200,
        false
        )
        Dirección = 1
    }
})
game.onUpdateInterval(1, function () {
    xhf = sprites.create(img`
        . . . . f f f f f f f . . . . . 
        . . f f f f f f f f f f f . . . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bos)
    tiles.placeOnRandomTile(xhf, assets.tile`miMosaico`)
    xhf.follow(paco, 30)
    if (_200 > info.score()) {
        sprites.destroy(xhf)
    }
})
forever(function () {
    music.play(music.stringPlayable("D C E F C F D A ", 120), music.PlaybackMode.LoopingInBackground)
})
game.onUpdateInterval(500, function () {
    if (pizza == 0) {
        game.gameOver(false)
    }
})
