# Bonus Score
---

## Description
You're given a number. Bonus points are being added to it.  
Write a function which calculates the **bonus** points and **all points**

|   Number   |   Bonus   |  More bonus  |
| ---------- | :-------: | :----------: |
| num <= 100 |     +1    |              |
| num > 100  | num * 20% |              |
| num > 1000 | num * 10% |              |
|  If even   |           |      +1      |
| If num / 5 |           |      +2      |

## Input
1. Number - whole num [0 - 10000]

## Output
1. Bonus points
2. Number + bonus

## Input & Output examples

|    Input   |         Output         |
| ---------- | :--------------------: |
|   [ 20 ]   |     1. 6  /  2. 26     |
|  [ 2703 ]  | 1. 270.3  /  2. 2973.3 |