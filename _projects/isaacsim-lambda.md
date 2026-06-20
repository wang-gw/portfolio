---
title: "Isaac Sim × Lambda Cloud 파이프라인"
title_en: "Isaac Sim × Lambda Cloud Pipeline"
order: 4
tag: "SOLO · INFRA"
summary: "로컬 GPU 없이 Isaac Sim을 시각적으로 돌리기 위해 Lambda Cloud GPU로 자체 구축한 파이프라인"
summary_en: "Self-built pipeline for running Isaac Sim visually on Lambda Cloud GPUs without a local GPU"
---

<div data-lang="ko" markdown="1">

## 한 줄

NVIDIA GPU가 없는 환경에서도 Isaac Sim을 **시각적으로 확인하면서** 실험할 수 있도록, Lambda Cloud GPU를 빌려 시뮬레이션 화면을 받아오는 자체 파이프라인을 구축했습니다.

## 왜 이 작업이 필요했나

- 휴머노이드 RL은 GPU 가속 시뮬레이션이 사실상 필수
- 제 로컬 PC에는 NVIDIA GPU가 없음
- Isaac Sim은 단순히 헤드리스로 돌리는 것보다 **상태를 눈으로 보면서 디버깅**할 때 학습 속도가 훨씬 빠름

→ 클라우드 GPU를 쓰면서도 시각화 화면을 받아오는 파이프라인이 필요했습니다.

## 무엇을 만들었나

<p class="stub">📐 아키텍처 다이어그램 자리 — 사용자가 별도로 전달 예정</p>

대략적인 구조:

- **GPU 호스트**: Lambda Cloud 인스턴스 (NVIDIA GPU)
- **시뮬레이터**: Isaac Sim
- **시각화 채널**: 원격 디스플레이 / 스트리밍 경로
- **로컬**: 입력 / 모니터링 / 결과 회수

## 얻은 것

- "GPU가 없다"는 환경적 제약을 **운영 문제로 풀어내는 경험**
- 클라우드 비용·세션 관리·연결 안정성에 대한 감각
- 똑같은 막힘을 만난 동료가 있을 때 빠르게 해결책을 공유할 수 있는 토대

## 왜 OH! GYM과 연결되는가

휴머노이드 RL 팀에게는 **"실험을 빠르게 돌리고, 결과를 빠르게 보는 인프라"**가 곧 생산성입니다. 모델 한 줄을 더 짜는 것보다, 학습 환경 셋업 시간을 절반으로 줄이는 게 팀 전체 속도를 더 높이는 경우가 많습니다.

이 경험은 들어가자마자 **팀이 쓸 수 있는 도구**를 만드는 데 바로 쓰일 수 있다고 생각합니다.

</div>

<div data-lang="en" markdown="1">

## One line

Built a self-managed pipeline that lets me run Isaac Sim **with visual feedback** on rented Lambda Cloud GPUs, despite having no local NVIDIA GPU.

## Why I needed it

- Humanoid RL essentially requires GPU-accelerated simulation
- My local machine has no NVIDIA GPU
- Headless Isaac Sim is faster to launch but **debugging is way faster when you can see the scene**

→ I needed a cloud-GPU setup that still gave me a visual window.

## What I built

<p class="stub">📐 Architecture diagram placeholder — to be added once the user shares it</p>

Rough structure:

- **GPU host**: Lambda Cloud instance (NVIDIA GPU)
- **Simulator**: Isaac Sim
- **Visualization channel**: remote display / streaming path
- **Local**: inputs / monitoring / result retrieval

## What I got from it

- A way to turn a hard environmental constraint into an **operations problem I could solve**
- A feel for cloud cost, session management, and connection stability
- A foundation to share quickly with teammates hitting the same wall

## Why this matters for OH! GYM

For a humanoid RL team, **infrastructure that runs experiments fast and shows results fast** *is* productivity. Cutting environment setup time in half often beats writing one more line of model code.

This experience should plug straight in — building tools the team can actually use, from day one.

</div>
