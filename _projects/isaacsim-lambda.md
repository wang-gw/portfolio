---
title: "Isaac Sim × Lambda Cloud — 셋업 디버깅 맵"
title_en: "Isaac Sim × Lambda Cloud — Setup Debugging Map"
order: 4
tag: "SOLO · INFRA"
summary: "GPU 없는 환경에서 Isaac Sim의 원격 GUI를 띄우면서 부딪힌 막힘들을 다이어그램으로 정리한 작업"
summary_en: "A debugging map drawn from getting Isaac Sim's remote GUI running on Lambda Cloud — so my teammates don't get stuck in the same places"
---

<div data-lang="ko" markdown="1">

## 한 줄

NVIDIA GPU가 없는 제 로컬 환경에서 Isaac Sim의 원격 GUI를 띄우기 위해 Lambda Cloud GPU를 빌렸습니다. 처음부터 깔끔하게 설계한 게 아니라, **부딪히면서 풀어낸 시행착오의 흔적**을 다이어그램으로 남긴 작업입니다.

## 시행착오 다이어그램

<figure class="figure" markdown="0">
  <img class="figure__img figure__img--tall" src="{{ '/assets/files/isaacsim-pipeline.webp' | relative_url }}" alt="Lambda Cloud × Isaac Sim 셋업 디버깅 맵">
  <figcaption class="figure__caption">
    Isaac Sim launch failure부터 Remote GUI success까지, 막힌 지점과 풀어간 경로를 정리한 디버깅 맵.
    <br>
    <a class="figure__expand" href="{{ '/assets/files/isaacsim-pipeline.webp' | relative_url }}" target="_blank" rel="noopener">원본 크기로 보기 ↗</a>
  </figcaption>
</figure>

## 다이어그램이 말하는 것

다이어그램의 막힘과 풀이를 간단히 풀면 다음과 같습니다.

- **`nvidia-smi`는 통과하지만 `vulkaninfo`가 NVIDIA A10을 못 잡음.** → `libnvidia-gl-580-server`, `nvidia-driver-580-server` 설치로 해결.
- **Isaac Sim은 뜨는데 WebRTC GUI는 `NVST_CCE_DISCONNECTED` 오류.** → TCP signaling은 살아있고 UDP 미디어 경로까지 들어오는 게 확인되어, 네트워크 문제가 아니라 클라이언트 / 미디어 협상 쪽 문제로 좁힘.
- **WebRTC를 포기하고 Omniverse Streaming Client 103.1.1로 다운그레이드.** → `runoldstreaming.sh`로 띄우자 원격 GUI 성공.

## 이게 왜 가치 있는가

저는 클라우드 GPU나 WebRTC를 처음부터 잘 알고 시작한 게 아니었습니다. 결과적으로 만들어진 것은 화려한 아키텍처가 아니라, **이 환경에 들어올 다음 사람이 참고하면 좋을 한 장의 지도**입니다.

이 작업에서 제가 키운 건 "Isaac Sim을 클라우드에 띄울 줄 안다"가 아니라, **막힐 때마다 노드를 하나씩 더해서 팀이 따라올 수 있는 흔적을 남기는 습관**이라고 생각합니다.

## OH! GYM과 연결되는 점

휴머노이드 RL 팀에서 누구나 한 번씩 환경 셋업에서 막힙니다. 막힘을 줄이는 사람이 팀 전체 속도를 올린다고 생각합니다.

- 인프라 셋업·디버깅 과정에서의 막힘을 **다이어그램·문서로 남기는 습관**
- "이건 내가 안다"가 아니라 "**다음 팀원이 다시 헤매지 않게 하는 흔적을 남기는 것**"을 가치 있게 보는 자세

들어가서 한 일이 작더라도, 이런 흔적이 쌓이면 팀이 더 빨라진다고 믿습니다.

</div>

<div data-lang="en" markdown="1">

## One line

My local machine has no NVIDIA GPU, so I rented Lambda Cloud GPUs to get Isaac Sim's remote GUI running. What I produced isn't a designed architecture — it's a **trail of trial and error**, drawn up as a diagram so the next person on this stack doesn't have to retrace it.

## The debugging map

<figure class="figure" markdown="0">
  <img class="figure__img figure__img--tall" src="{{ '/assets/files/isaacsim-pipeline.webp' | relative_url }}" alt="Lambda Cloud × Isaac Sim setup debugging map">
  <figcaption class="figure__caption">
    From "Isaac Sim launch failed" all the way to "Remote GUI success" — the walls I hit and the paths around them.
    <br>
    <a class="figure__expand" href="{{ '/assets/files/isaacsim-pipeline.webp' | relative_url }}" target="_blank" rel="noopener">View full size ↗</a>
  </figcaption>
</figure>

## What the diagram shows

- **`nvidia-smi` passes but `vulkaninfo` doesn't see the NVIDIA A10.** → Fixed by installing `libnvidia-gl-580-server` and `nvidia-driver-580-server`.
- **Isaac Sim starts, but WebRTC GUI returns `NVST_CCE_DISCONNECTED`.** → TCP signaling is alive and UDP media is incoming, narrowing the issue to client / media negotiation rather than the network.
- **Drop WebRTC, downgrade to Omniverse Streaming Client 103.1.1.** → `runoldstreaming.sh` brings the remote GUI up successfully.

## Why this is actually valuable

I didn't know cloud GPUs or WebRTC well before starting. What I produced isn't a clean architecture — it's **a one-page map that the next person on this stack can use as a reference**.

What I built up here is less "I know how to run Isaac Sim on the cloud" and more **the habit of adding a node every time I hit a wall, so my team can follow the trail**.

## Connection to OH! GYM

In any humanoid RL team, everyone gets stuck on environment setup at some point. The person who reduces that friction speeds the whole team up.

- A habit of **leaving walls as diagrams or notes** during infra setup and debugging
- A bias toward "**leave a trail so the next teammate doesn't get stuck**" over "I personally know this"

Even small contributions in the first week — if they're left as a trail — compound into a faster team.

</div>
