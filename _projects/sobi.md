---
title: "SoBi · 휴머노이드 이족보행 플랫폼"
title_en: "SoBi · Humanoid Bipedal Platform"
order: 1
tag: "TEAM · ONGOING"
summary: "SoftFoot 기반 12-DOF 이족보행 로봇과 ROS2 통합 휴머노이드 플랫폼을 개발하는 진행 중인 팀 프로젝트"
summary_en: "Ongoing team project building a SoftFoot-based 12-DOF bipedal robot and ROS2-integrated humanoid platform"
---

<div data-lang="ko" markdown="1">

## 1. 프로젝트 한 줄 요약

**휴머노이드 로봇의 하지 이족보행 플랫폼과 상지 조작 플랫폼을 개발하고, 최종적으로 ROS2 기반 통합 휴머노이드 플랫폼으로 확장하는 진행 중인 팀 프로젝트입니다.**

## 2. 프로젝트 개요

본 프로젝트는 대학생 수준에서 구현 가능한 휴머노이드 로봇 플랫폼을 목표로 진행 중인 팀 프로젝트입니다.

현재는 **하지 이족보행 플랫폼**을 중심으로, 12-DOF 이족보행 로봇 구조, SoftFoot 기반 발 구조, ROS2 기반 제어 구조, MuJoCo 또는 Isaac Lab 기반 시뮬레이션, 강화학습 기반 보행 policy 학습 과정을 준비하고 있습니다.

프로젝트의 세부적인 기술 구성, 하드웨어 계획, 추진 일정, 평가 지표는 별도로 첨부한 **「2026년 한이음 드림업 프로젝트 수행계획서」**에서 확인할 수 있도록 구성했습니다. 해당 수행계획서에는 SoBi 프로젝트가 12-DOF 이족보행 로봇, SoftFoot, ROS2 Humble, MuJoCo, 강화학습, CoT 및 GRF 비교 분석을 핵심 목표로 한다는 내용이 정리되어 있습니다.

## 3. 세부 프로젝트: SoBi

**SoBi는 SoftFoot-equipped Bipedal Robot의 약자로, 인간 발의 Windlass Mechanism을 모방한 SoftFoot을 이족보행 로봇에 적용하는 프로젝트입니다.**

기존의 평면형 rigid foot 기반 이족보행 로봇은 불규칙한 지형이나 외란이 있는 환경에서 보행 안정성을 유지하는 데 한계가 있습니다. SoBi는 이 문제를 해결하기 위해 지면 형상과 하중에 따라 강성이 변화하는 **가변 강성 SoftFoot**을 이족보행 로봇 플랫폼에 적용하는 것을 목표로 합니다.

이 프로젝트에서는 SoftFoot 구조를 단순한 하드웨어 요소로만 보지 않고, 시뮬레이션 기반 강화학습 보행 제어와 함께 연결하려고 합니다.

즉, 하드웨어 구조가 보행 안정성과 에너지 효율에 어떤 영향을 주는지 **CoT, GRF, 보행 거리, 넘어짐 여부**와 같은 지표로 비교하고자 합니다.

## 4. 프로젝트 전체 팀 구성

| 구분 | 인원 | 역할 |
| --- | --- | --- |
| Mechanical | 2명 | 하지 링크, 관절 구조, SoftFoot, CAD 설계, 3D 프린팅 및 조립 |
| Control / RL / System | 2명 | 보행 제어 구조, 강화학습 환경, 보상함수, 실험 지표 설계 |
| Software / Embedded | 1명 | ROS2 제어 구조, 액추에이터 통신, 센서 데이터 처리, 실물 제어 |

Mechanical 담당 2명은 프로젝트의 하드웨어 설계와 제작을 담당하고 있지만, 이번 OH! GYM 인턴십 지원에는 참여하지 않습니다.

이번 인턴십에는 프로젝트 내에서 **제어, 시스템 설계, 소프트웨어 개발을 담당하는 3명**이 지원합니다.

## 5. OH! GYM 지원자 3명의 역할

### 5.1 왕규원, 안상민 — Control & RL

저는 **강화학습 기반 보행 제어 파트**를 담당하고 있습니다.

주요 역할은 다음과 같습니다.

- 하지 플랫폼의 제어 구조 설계
- MuJoCo / Isaac Lab 기반 보행 학습 환경 조사
- PPO 기반 보행 policy 학습 과정 학습
- observation space / action space 구성 방식 정리
- SoftFoot 특성을 반영한 reward function 설계 방향 조사
- CoT / GRF 기반 보행 성능 평가 지표 정리
- Sim-to-Real 적용을 위한 ROS2 제어 구조 학습

### 5.2 권정예 — Software / Embedded Development

세 번째 지원자는 **소프트웨어 및 임베디드 개발 파트**를 담당하고 있습니다.

주요 역할은 다음과 같습니다.

- ROS2 기반 제어 코드 구조 학습
- 액추에이터 통신 구조 구현 준비
- Jetson Orin Nano 또는 Raspberry Pi 기반 제어 시스템 조사
- IMU / FSR 센서 데이터 취득 방식 정리
- 센서 데이터 로깅 구조 설계
- 시뮬레이션 policy를 실물 로봇 제어 명령으로 연결하는 구조 학습
- 실물 하드웨어 구동 테스트 준비

## 6. 현재 진행 상황

현재 프로젝트는 **진행 중인 초기 개발 단계**입니다.

완성된 실물 보행 결과물이 있는 단계는 아니지만, 프로젝트를 통해 다음 내용을 실제로 학습하고 정리하고 있습니다.

- 휴머노이드 하지 플랫폼의 자유도 구성
- 이족보행 로봇의 관절 구조
- SoftFoot 및 Windlass Mechanism 개념
- ROS2 기반 로봇 제어 구조
- MuJoCo / Isaac Lab 기반 시뮬레이션 환경
- PPO 기반 보행 policy 학습 과정
- 강화학습 reward function 설계
- CoT / GRF 기반 보행 성능 평가
- Sim-to-Real 적용 시 발생하는 문제
- 센서 데이터 취득 및 실험 로그 구조

## 7. OH! GYM과 연결되는 점

저희가 현재 진행 중인 프로젝트는 아직 완성 단계는 아니지만, 다음 점에서 OH! GYM과 직접적으로 연결된다고 보고 있습니다.

- 휴머노이드 하지 플랫폼 구조 이해
- 이족보행 로봇의 관절 구성과 제어 방식 학습
- 시뮬레이션 기반 보행 강화학습 환경 조사
- 보행 reward function 설계
- ROS2 기반 실물 로봇 제어 구조 학습
- 센서 데이터 취득 및 실험 로그 정리
- Sim-to-Real 과정 이해
- 실제 로봇 제어에 필요한 협업 구조 경험

따라서 저희는 완성된 결과물만을 제시하기보다는, **휴머노이드 강화학습과 실물 로봇 제어에 필요한 기반 지식을 팀 프로젝트를 통해 실제로 쌓고 있는 지원자들**이라는 점을 어필하고자 합니다.

## 8. 프로젝트를 통해 얻고 있는 역량

이 프로젝트를 통해 저희는 휴머노이드 로봇 개발이 단순히 하나의 알고리즘이나 하나의 하드웨어 제작으로 끝나는 일이 아니라는 것을 배우고 있습니다.

실제 로봇을 움직이기 위해서는 다음 요소가 함께 연결되어야 합니다.

- 기구 구조
- 관절 자유도
- 액추에이터 제어
- 센서 데이터 취득
- 물리 엔진 모델링
- 강화학습 환경 구성
- observation / action space 설계
- reward function 설계
- 실험 지표 설계
- ROS2 기반 제어 구조
- Sim-to-Real 적용

특히 이번 OH! GYM에 지원하는 3명은 프로젝트 내에서 **제어, 시스템 설계, 소프트웨어 개발**을 담당하고 있기 때문에, 휴머노이드 강화학습과 데이터 취득 중심의 인턴십 프로젝트에 빠르게 적응할 수 있다고 생각합니다.

## 9. 첨부 자료 안내

프로젝트의 세부 내용은 별도 첨부한 「2026년 한이음 드림업 프로젝트 수행계획서」에서 확인할 수 있도록 구성했습니다.

<a class="pdf-link" href="{{ '/assets/files/sobi-proposal.pdf' | relative_url }}" target="_blank" rel="noopener">
  <span class="pdf-link__icon" aria-hidden="true">📄</span>
  <span class="pdf-link__body">
    <span class="pdf-link__title">2026년 한이음 드림업 프로젝트 수행계획서</span>
    <span class="pdf-link__meta">PDF · 클릭하면 새 탭에서 열림</span>
  </span>
</a>

</div>

<div data-lang="en" markdown="1">

<p class="stub">English version coming soon &mdash; the Korean section contains the full SoBi project description (sections 1–9).</p>

</div>
