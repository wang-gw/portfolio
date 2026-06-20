---
title: "SoBi 안에서의 내 역할"
title_en: "My Role in SoBi"
order: 2
tag: "ROLE · LEAD / RL"
summary: "Project Lead 겸 강화학습 담당으로서 무엇을 어떻게 하고 있는지"
summary_en: "What I do as Project Lead and RL Engineer, in detail"
---

<div data-lang="ko" markdown="1">

## 한 줄

저는 SoBi 팀의 **Project Lead 겸 강화학습 담당**입니다. 기술 로드맵을 정리하고, 보행 policy 학습 환경과 보상함수 설계 방향을 직접 조사하면서, 팀이 같은 그림을 공유하도록 만드는 역할을 합니다.

## 구체적으로 하는 일

- 프로젝트 기획 / 기술 로드맵 정리
- 하지 플랫폼의 제어 구조 설계
- MuJoCo / Isaac Lab 기반 보행 학습 환경 조사
- PPO 기반 보행 policy 학습 과정 학습
- observation / action space 구성 방식 정리
- SoftFoot 특성을 반영한 reward function 설계 방향 조사
- CoT / GRF 기반 보행 성능 평가 지표 정리
- Sim-to-Real 적용을 위한 ROS2 제어 구조 학습

## 왜 Lead와 RL을 같이 하는가

제품 기획·창업 경험에서 배운 게 있다면, "기술이 좋아도 팀이 같은 그림을 못 보면 끝까지 못 간다"는 점입니다. RL은 결과물이 늦게 나오는 분야라 더더욱 **방향 정렬과 평가 지표 합의**가 중요하다고 생각합니다.

그래서 저는 알고리즘 자체보다 **"이 로봇에 적용 가능한 보행 policy를 만들기 위해 어떤 관측값·행동·보상·지표가 필요한가"**를 중심으로 공부 중입니다.

## OH! GYM에서 기여할 수 있는 부분

- 강화학습 학습 루프 구축 + 실험 로그 자동화
- 학습 결과를 팀이 다시 쓸 수 있는 형태로 시각화 / 문서화
- 시뮬레이션 - 실물 연결 시 인터페이스 설계 회의에 기여

<p class="note">이 페이지는 SoBi 팀 문서의 5.1절을 확장한 내용입니다. 추후 보강 예정.</p>

</div>

<div data-lang="en" markdown="1">

## One line

I'm the **Project Lead and RL Engineer** for the SoBi team. I organize the technical roadmap, research the walking-policy training environment and reward design directions, and keep the team aligned on the same picture.

## What I actually do

- Project planning and tech roadmap
- Control architecture design for the lower-body platform
- Survey of MuJoCo / Isaac Lab walking-RL environments
- PPO-based walking policy training pipeline
- Observation / action space design
- Reward function direction informed by SoftFoot characteristics
- CoT / GRF as locomotion evaluation metrics
- ROS2 control architecture for Sim-to-Real

## Why I take both Lead and RL

From product and startup work, I learned that even strong tech fails if a team can't see the same picture. RL is especially slow to show results, so **direction alignment and metric agreement** matter even more.

I therefore study less the algorithm itself and more the question: *what observations, actions, rewards, and metrics do we need to produce a walking policy usable on this robot?*

## How I'd contribute at OH! GYM

- Build the RL loop and automate experiment logging
- Turn results into reusable visualizations / documentation
- Contribute to interface-design discussions between simulation and the real robot

<p class="note">This page expands section 5.1 of the SoBi team document. More to come.</p>

</div>
