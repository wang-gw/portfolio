---
title: "MuJoCo Walker2d RL 학습"
title_en: "MuJoCo Walker2d RL Training"
order: 3
tag: "SOLO · TWO ROUNDS"
summary: "PPO로 보행 정책을 학습시키고, 도메인 랜덤화로 그 정책이 환경 변형에 얼마나 강건한지 측정한 두 라운드 실험"
summary_en: "Two rounds — training a Walker2d walking policy with PPO, then measuring its robustness to environment variation via domain randomization"
---

<div data-lang="ko" markdown="1">

## 한 줄

1라운드에서 PPO로 보행 정책 학습을 끝까지 돌려보고, 2라운드에서 그 정책이 환경 변형에 얼마나 약한지를 측정한 뒤 **도메인 랜덤화**로 같은 문제를 다시 풀어본 작업입니다.

## 라운드 1 — Walker2d PPO 베이스라인

| 항목 | 값 |
|---|---|
| 환경 | MuJoCo Walker2d-v5 (Gymnasium) |
| 알고리즘 | Stable-Baselines3 PPO |
| 총 학습 스텝 | 500,000 |
| 최고 평가 보상 | **2,509.9** |
| 최종 평가 (5 에피소드 평균) | **2,205.6 ± 394.6** |
| 만점 길이(1000) 달성 | 5번 중 3번 |

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r1-curve.png' | relative_url }}" alt="Walker2d PPO 학습 곡선">
  <figcaption class="figure__caption">500k 스텝 PPO 학습 곡선.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r1-demo.gif' | relative_url }}" alt="Walker2d 보행 데모">
  <figcaption class="figure__caption">학습된 정책으로 자립 보행하는 모습.</figcaption>
</figure>

**한 줄 회고**: 환경 셋업 → PPO 학습 → 평가 → 영상 렌더까지 RL 루프 전체를 한 번에 끝까지 돌려본 것이 가장 큰 수확이었습니다.

## 라운드 2 — Domain Randomization으로 reality gap 측정

### 실험 설계

| 정책 | 학습 환경 |
|---|---|
| Baseline | 표준 Walker2d-v5 (고정 물리값) |
| Domain Randomized | 매 에피소드마다 질량 ±30%, 마찰 0.5~2x, 모터 ±25%, 댐핑 0.5~2x 무작위 |

두 정책을 **7가지 변형 테스트 환경**(default · heavy · light · slippery · sticky · weak_motor · strong_motor)에서 교차 평가했습니다.

### 결과

| 지표 | Baseline | Domain Randomized | 우위 |
|---|---:|---:|---|
| Default 환경 | **2,448** | 724 | Baseline 3.4× |
| 7 조건 평균 | 1,253 | 525 | Baseline 2.4× |
| **Worst-case** | 315 | **399** | **DR +27%** |
| 조건간 표준편차 | 864.8 | **97.5** | **DR 9배 일관** |

 **핵심 발견**: DR 정책은 default에서는 약하지만 어떤 변형에도 무너지지 않았습니다.

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-robustness.png' | relative_url }}" alt="7개 환경 강건성 비교">
  <figcaption class="figure__caption">7개 변형 환경에서의 Baseline vs DR 보상 비교.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-metrics.png' | relative_url }}" alt="Sim-to-Real 지표">
  <figcaption class="figure__caption">정량 지표 요약 — average · worst-case · 조건간 표준편차.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-comparison.gif' | relative_url }}" alt="미끄러운 바닥에서 두 정책 비교">
  <figcaption class="figure__caption">미끄러운 바닥(slippery) 환경에서 두 정책의 보행 차이 (좌: baseline, 우: DR).</figcaption>
</figure>

## 두 라운드에서 얻은 것

- **average-case와 worst-case는 다른 문제**라는 시각. 학습 곡선의 평균값만 보면 baseline이 압도하지만, 실로봇 입장에서 중요한 건 "어디서 무너지지 않는가"였습니다.
- **표준 sim-to-real 기법(Tobin et al., 2017)**을 논문만 읽는 게 아니라 직접 구현해서 측정한 경험.
- 학습 결과를 검증할 때 **"어떤 정책이 살아남는가"**를 먼저 보는 습관.

</div>

<div data-lang="en" markdown="1">

## One line

In round 1 I trained a Walker2d walking policy end-to-end with PPO; in round 2 I measured how fragile that policy was under environment shifts and tried the same problem again with **Domain Randomization**.

## Round 1 — Walker2d PPO baseline

| Item | Value |
|---|---|
| Environment | MuJoCo Walker2d-v5 (Gymnasium) |
| Algorithm | Stable-Baselines3 PPO |
| Total steps | 500,000 |
| Wall-clock | 9.9 min (single CPU) |
| Best eval reward | **2,509.9** |
| Final eval (5-ep mean) | **2,205.6 ± 394.6** |
| Episodes reaching max length (1000) | 3 of 5 |

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r1-curve.png' | relative_url }}" alt="Walker2d PPO learning curve">
  <figcaption class="figure__caption">PPO learning curve over 500k steps.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r1-demo.gif' | relative_url }}" alt="Walker2d walking demo">
  <figcaption class="figure__caption">The learned policy walks on its own.</figcaption>
</figure>

**Takeaway**: Closing the loop once — env setup → PPO training → evaluation → video rendering — was the most valuable part.

## Round 2 — measuring the reality gap with Domain Randomization

### Setup

| Policy | Training environment |
|---|---|
| Baseline | Standard Walker2d-v5 (fixed physics) |
| Domain Randomized | Each episode: mass ±30%, friction 0.5–2×, motor ±25%, damping 0.5–2× |

Both policies were cross-evaluated on **7 test variants**: default · heavy · light · slippery · sticky · weak_motor · strong_motor.

### Results

| Metric | Baseline | Domain Randomized | Winner |
|---|---:|---:|---|
| Default env | **2,448** | 724 | Baseline 3.4× |
| 7-condition mean | 1,253 | 525 | Baseline 2.4× |
| **Worst-case** | 315 | **399** | **DR +27%** |
| Std across conditions | 864.8 | **97.5** | **DR 9× more consistent** |

> **Key finding**: the DR policy is weaker on the default env but never collapses under any variation. For real-robot deployment, that consistency matters more than the average.

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-robustness.png' | relative_url }}" alt="Robustness across 7 environments">
  <figcaption class="figure__caption">Baseline vs DR reward across 7 environment variants.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-metrics.png' | relative_url }}" alt="Sim-to-real metrics">
  <figcaption class="figure__caption">Quantitative summary — average, worst-case, and cross-condition standard deviation.</figcaption>
</figure>

<figure class="figure" markdown="0">
  <img class="figure__img" src="{{ '/assets/files/walker2d-r2-comparison.gif' | relative_url }}" alt="Side-by-side comparison on slippery ground">
  <figcaption class="figure__caption">Same slippery-floor environment, side by side (left: baseline, right: DR).</figcaption>
</figure>

## What I got from the two rounds

- The view that **average-case and worst-case are different problems**. The learning curves favor baseline; but for a real robot, what matters is "where it doesn't fall over."
- Hands-on with a **standard sim-to-real technique (Tobin et al., 2017)** — not just reading the paper but implementing and measuring it.
- A habit of asking **"which policy survives?"** before celebrating training rewards.

</div>
