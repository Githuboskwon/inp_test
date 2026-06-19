---
description: React 함수형 컴포넌트를 src/components/ 폴더에 생성합니다
argument-hint: <ComponentName>
allowed-tools: Write
---

`$ARGUMENTS` 라는 이름의 React 함수형 컴포넌트를 생성해주세요:

1. 파일 경로: `src/components/$ARGUMENTS.tsx`
2. 다음 조건으로 파일을 작성하세요:
   - TypeScript 함수형 컴포넌트
   - Props 인터페이스 정의 (빈 상태로 시작)
   - Tailwind CSS className 사용
   - export default

템플릿:
```tsx
interface $ARGUMENTSProps {}

export default function $ARGUMENTS({}: $ARGUMENTSProps) {
  return (
    <div className="">
      $ARGUMENTS
    </div>
  )
}
```
