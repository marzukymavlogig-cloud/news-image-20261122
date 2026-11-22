# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/marzukymavlogig-cloud/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/marzukymavlogig-cloud/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A newspaper-front poster — **"THE WORLD."** — that sums up Sunday 22 November 2026
in one 1024×1024 image.

The lead story is the collapse of the COP31 climate summit in Antalya: after two
days in overtime, nearly 200 countries left with no deal at all, the European
Union refusing to sign a final draft that never once mentioned fossil fuels —
the first climate summit to fail since Copenhagen in 2009. Around it: Iran
striking a civilian industrial site in Bahrain and two tankers hit in the Strait
of Hormuz; a Russian drone flattening part of a five-storey block in Dymer, near
Kyiv, with 14 people unaccounted for after a night of 186 drones; a candy
factory fire in Cikande, Indonesia, killing 3 and leaving 36 workers missing;
and a funeral boat capsizing in Bayelsa State, Nigeria, killing at least 24.
Plus a day-in-brief ticker (Trump's 35 Truth Social posts in an hour, one
handshake with Putin captioned "My Friend"; the S&P 500 falling 3.7% in Friday's
AI sell-off, into correction; Nepal's PM beginning an India visit; and the death
of Phumzile Mlambo-Ngcuka at 71). Every fact was checked against live news
reporting (Reuters, Associated Press, AFP, Euronews, NPR, The Independent) on
the day.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG magic
bytes and IHDR chunk, at most 1 MiB and at most 1024×1024 pixels, and a valid
IEND chunk (refusing truncated files) — and copies it to
`$MAKEFUN_OUTPUT_DIR/entry.png`, printing the destination, dimensions and size.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gentle-beacon-34&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
