# Toy Shop
---

## Description
Write a function which calculates how much money a person is going to win after an order

|    Toys    | Price  |
| ---------- | :----: |
|   Puzzle   |  2.60  |
|    Doll    |  3.00  |
|    Bear    |  4.10  |
|   Minion   |  8.20  |
|   Truck    |  2.00  |

If the number of ordered toys is 50 or greater, the shop gives 25% discount.
Then 10% of the money fo for rent.
The function calculates if the money are going to be enough for a trip

## Input
1. Price for trip - real num [0 - 10000]
2. Number of puzzles - whole num [0 - 1000]
3. Number of dolls - whole num [0 - 1000]
4. Number of bears - whole num [0 - 1000]
5. Number of minions - whole num [0 - 1000]
6. Number of trucks - whole num [0 - 1000]

## Output
1. If the money are enough - **"Yes! {money} lv left."**
2. If the money are not enough - **"Not enough money! {money} lv needed."**

## Input & Output examples

|             Input            |                Output               |
| ---------------------------- | :---------------------------------: |
| [ 40.8, 20, 25, 30, 50, 10 ] |        Yes! 418.20 lv left.         |
|    [ 320, 8, 2, 5, 5, 1 ]    | Not enough money! 238.73 lv needed. |