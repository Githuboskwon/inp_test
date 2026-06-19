# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 시작 (Turbopack, http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
npx tsc --noEmit # 타입 검사 (빌드 없이)
```

shadcn 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

**Next.js 16 App Router** 기반. 모든 소스는 `src/` 아래에 있다.

### UI 레이어: shadcn + @base-ui/react

이 프로젝트의 shadcn은 Radix UI가 아닌 **`@base-ui/react`** 위에 빌드되어 있다. 중요한 차이점:

- `Button`, `Popover` 등의 primitive가 `@base-ui/react/*`에서 import됨
- **`asChild` prop을 지원하지 않는다** — 트리거 컴포넌트에 children을 직접 넣어 스타일링
- `Calendar`는 `react-day-picker v10` 기반이며 **`initialFocus` prop이 없다**
- `PopoverTrigger`는 내부적으로 `<button>`으로 렌더링되므로 별도의 `<Button>` 중첩 불필요

### 상태관리: Zustand

스토어는 `src/store/`에 위치. `create<State>()` 패턴 사용.

### 폼: React Hook Form + Zod

Zod 스키마 → `zodResolver` → `useForm` 패턴. 에러 메시지는 `errors.<field>.message`로 표시.

### 스타일

Tailwind CSS v4 + `tw-animate-css`. 디자인 토큰은 `src/app/globals.css`의 CSS 변수(`oklch` 색상 공간)로 정의. `shadcn/tailwind.css`를 통해 shadcn 토큰이 주입된다.

`cn()` 유틸(`src/lib/utils.ts`)로 클래스 병합.

### 경로 별칭

`@/*` → `src/*`
