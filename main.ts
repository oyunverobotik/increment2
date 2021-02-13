input.onButtonPressed(Button.A, function () {
    num = num - 1
    showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
    showNumber(num)
})
function showNumber (num: number) {
    basic.showArrow(ArrowNames.North)
    led.plot(0, 0)
}
let num = 0
num = 0
