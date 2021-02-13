input.onButtonPressed(Button.A, function () {
    num = num - 1
    showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
    showNumber(num)
})
function showNumber (num2: number) {
    column = num2 / 5
    row = num2 % 5
    led.plot(row, column)
}
let row = 0
let column = 0
let num = 0
num = -1
