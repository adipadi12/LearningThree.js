Sleep  
Even if we use an improved broadphase algorithm, all the Body are tested, even those not moving anymore. We can use a feature called sleep.

When the Body speed gets incredibly slow (at a point where you can't see it moving), the Body can fall asleep and won't be tested unless a sufficient force is applied to it by code or if another Body hits it.

To activate this feature, simply set the allowSleep property to true on the World:

world.allowSleep = true
You can also control how likely it is for the Body to fall asleep with the sleepSpeedLimit and sleepTimeLimit properties but we won't change those