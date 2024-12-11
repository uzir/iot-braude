ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
while (ESP8266_IoT.wifiState(false)) {
    ESP8266_IoT.connectWifi("D-Mech-IOT", "R0b0l@b!")
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    ESP8266_IoT.setData(
    "HMZSHRVUTGAQYDEB",
    input.temperature()
    )
    ESP8266_IoT.uploadData()
    basic.pause(1000)
})
