function showNumber2 (num2: number) {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    column = num2 / 5
    row = num2 % 5
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j <= column; j++) {
            led.plot(i, j)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    num = num - 1
    showNumber2(num)
})
input.onButtonPressed(Button.B, function () {
    num = num + 1
    showNumber2(num)
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
led.plotBarGraph(
0,
2
)
