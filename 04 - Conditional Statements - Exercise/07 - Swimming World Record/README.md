# Swimming World Record
---

## Description
Ivan decides to improve the world record in swimming for long distances.  
Write a function which calculates if Ivan has beaten it **if** the resistance of the water slows him down 12.5 seconds every 15 metres.  
Calculate for how much time Ivan is going to swim the given distance

## Input
1. WR in seconds - real num [1 - 10000]
2. Length in metres - real num [1 - 10000]
3. Time in seconds per 1 metre - real num [1 - 1000]

## Output
1. If the WR is beaten
**" Yes, he succeeded! The new world record is {totalTime} seconds. "**

2. If the WR is not beaten
**" No, he failed! He was {time} seconds slower. "**

## Input & Output examples

|           Input          |                               Output                          |
| ------------------------ | :-----------------------------------------------------------: |
|   [ 10464, 1500, 20 ]    | No, he failed! He was 20786.00 seconds slower.                |
| [ 55555.67, 3017, 5.03 ] | Yes, he succeeded! The new world record is 17688.01 seconds.  |