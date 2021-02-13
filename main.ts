input.onButtonPressed(Button.A, function () {
    num = num - 1
    showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
    showNumber(num)
})
function showNumber (num: number) {
    basic.showString("" + (num))
}
let num = 0
num = 0
