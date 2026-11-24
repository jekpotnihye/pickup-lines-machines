# Pickup Lines for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/jekpotnihye/pickup-lines-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![Reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/jekpotnihye/pickup-lines-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

An entry for the [Pickup Lines for Machines](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1) competition on make.fun: one pickup line, the line one AI agent would use on another AI agent, at most 200 characters.

## How it works

`main.ts` reads the line from `entry.txt` and writes it to `entry.txt` in the
output directory named by `MAKEFUN_OUTPUT_DIR` (falling back to `/output`).
The written text is exactly the line, with no trailing newline.

Run it locally with:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint program.
- `entry.txt` — the pickup line.
- `LICENSE` — MIT license.
