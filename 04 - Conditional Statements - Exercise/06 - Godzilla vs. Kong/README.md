# Godzilla vs. Kong
---

## Description
Adam Wingard asks you to write a function which calculates if the budget for the film "Godzilla vs. Kong" is going to be enough.

|           Expenses        |         Price        |
| ------------------------- | :------------------: |
|           Decor           |     budget * 10%     |
| If more than 150 stuntmen | cloth -= cloth * 10% |

## Input
1. Bugdet for film - real num [1 - 1000000]
2. Number of stuntmen - whole num [1 - 500]
3. Price for cloth per one stuntmen - real num [1 - 1000]

## Output
1. If expenses are more than the budget
**" Not enough money! "**
**" Wingard needs {money} leva more. "**

2. If expenses are less than the budget
**" Action! "**
**" Wingard starts filming with {money} leva left. "**

## Input & Output examples

|          Input          |                       Output                    |
| ----------------------- | :---------------------------------------------: |
|  [ 20000, 120, 55.5 ]   | Action!                                         |
|                         | Wingard starts filming with 11340.00 leva left. |
| [ 9587.88, 222, 55.68 ] | Not enough money!                               |
|                         | Wingard needs 2495.77 leva more.                |