# codenames-duet-generator

A JS library to generate a random two-sided key card for Codenames Duet

## Rules

1. 25 tiles, 5 rows by 5 columns
2. Each side has 9 green tiles, 3 black tiles and 13 white tiles
3. Both sides have 3 green tiles in common
4. Both sides have 1 black tile that is black on the other
5. Both sides have 1 black tile that is green on the other
6. Both sides have 1 black tile that is white on the other

## Example Output

```
Side A: g-g-g-ggg-g---g---x--xx-g
Side B: gg-g--g--g----gg-gxx-g--x

Side A: xg---g-g-gg--gg-x-----ggx
Side B: gg---x--gg-g--g-x-gggx---

Side A: g---x-g------gggg--x-gxgg
Side B: -g-ggx-g------x-gggx-g-g-
```
