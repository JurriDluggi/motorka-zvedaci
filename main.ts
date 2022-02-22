input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 30)
})
basic.forever(function () {
	
})
