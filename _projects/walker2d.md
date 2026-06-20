---
title: "MuJoCo Walker2d · 보행 RL 첫 트랙"
title_en: "MuJoCo Walker2d · First Locomotion RL Track"
order: 3
tag: "SOLO · DONE"
summary: "Walker2d 환경에서 보행 policy를 학습시키고 영상으로 결과를 확인한 개인 작업"
summary_en: "Personal work — trained a Walker2d locomotion policy and verified the result on video"
---

<div data-lang="ko" markdown="1">

## 한 줄

MuJoCo Walker2d 환경에서 강화학습으로 보행 policy를 학습시키고, 학습된 policy가 실제로 걷는 모습을 영상으로 확인했습니다.

## 왜 이 프로젝트인가

휴머노이드 RL로 가기 전에 **"학습-검증-시각화 한 사이클을 직접 끝내본다"**는 게 목표였습니다. Walker2d는 2D · 6-DOF 정도의 가장 단순한 보행 벤치마크라, 강화학습 루프 자체를 정확히 이해하기에 좋은 출발점이라고 판단했습니다.

## 무엇을 했나

- MuJoCo `Walker2d-v4` 환경 셋업
- PPO 기반 보행 policy 학습 (스크립트 + 하이퍼파라미터 정리)
- 학습 곡선 모니터링
- 학습된 policy로 보행 영상 렌더링

<p class="stub">📁 작업 폴더와 영상은 사용자가 별도로 전달 예정 — 도착하면 채울 자리</p>

## 배운 점

- observation, action, reward의 작은 변화가 학습에 큰 영향
- 보상 shaping 없이 sparse reward만으로는 의미 있는 보행이 잘 나오지 않음
- 학습 곡선이 평탄해 보여도 영상으로 보면 의외로 잘 걷는 경우가 있음 → **숫자만 믿지 말 것**

## 다음 단계

- MuJoCo Humanoid-v4 (17-DOF) 학습으로 확장
- 보상함수 설계 회고 문서 작성
- SoftFoot 모델과의 비교 실험 (SoBi 본 프로젝트로 합류)

</div>

<div data-lang="en" markdown="1">

## One line

Trained a walking policy in the MuJoCo Walker2d environment with RL and verified that the learned policy actually walks on video.

## Why this project

Before moving to humanoid RL, my goal was to **complete one full train–verify–visualize cycle**. Walker2d, a 2D / 6-DOF benchmark, was the right starting point to really understand the RL loop.

## What I did

- Set up the MuJoCo `Walker2d-v4` environment
- Trained a PPO-based walking policy (scripts + hyperparameter notes)
- Monitored training curves
- Rendered walking videos from the trained policy

<p class="stub">📁 The working folder and video will be added once the user shares them.</p>

## What I learned

- Tiny changes in observation, action, and reward can drastically change learning
- Sparse reward alone rarely produces meaningful walking — shaping matters
- Even a flat-looking training curve can sometimes hide a surprisingly good policy. **Don't trust the numbers alone — watch the video.**

## Next

- Extend to MuJoCo Humanoid-v4 (17-DOF)
- Write a reward-shaping retrospective
- Move to SoftFoot comparison experiments inside the SoBi main project

</div>
