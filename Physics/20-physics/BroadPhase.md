Broadphase  
When testing the collisions between objects, a naive approach is testing every Body against every other Body. While this is easy to do, it's costly in terms of performance.

That is where broadphase comes up. The broadphase is doing a rough sorting of the Bodies before testing them. Imagine having two piles of boxes far from each other. Why would you test the boxes from one pile against the boxes in the other pile? They are too far to be colliding.

There are 3 broadphase algorithms available in Cannon.js:

NaiveBroadphase: Tests every Bodies against every other Bodies
GridBroadphase: Quadrilles the world and only tests Bodies against other Bodies in the same grid box or the neighbors' grid boxes.
SAPBroadphase (Sweep and prune broadphase): Tests Bodies on arbitrary axes during multiples steps.
The default broadphase is NaiveBroadphase, and I recommend you to switch to SAPBroadphase. Using this broadphase can eventually generate bugs where a collision doesn't occur, but it's rare, and it involves doing things like moving Bodies very fast.

To switch to SAPBroadphase, simply instantiate it in the world.broadphase property and also use this same world as parameter