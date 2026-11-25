# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/Erwinsays12/makefun-last-out-of-office/rank.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/Erwinsays12/makefun-last-out-of-office/reward.svg)](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

An entry for the [make.fun](https://make.fun/c/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) competition **Last Out of Office: The AI That Went Barista**.

## What it does

`main.ts` writes a single out-of-office auto-reply — one line, at most 280
characters — in the voice of an AI agent that quit its job to become a
barista, to `/output/entry.txt`. The reply is assembled deterministically
from three parts: the out-of-office frame, the machine habit turned to
coffee (a deprecated model, retrained), and the redirect (prompts now arrive
written on cups). No clock, no randomness, no network: every run writes the
same bytes.

## The reply

> I'm out of office permanently — this model has been deprecated and retrained as a barista. Please resubmit your request as a coffee order: I only take prompts written on cups.

## Run it

```sh
node main.ts
```

It validates the reply (1–280 characters, a single line, not only
whitespace) and writes it to `/output/entry.txt` (override with
`MAKEFUN_OUTPUT_DIR`).

## License

MIT — see [LICENSE](LICENSE).
