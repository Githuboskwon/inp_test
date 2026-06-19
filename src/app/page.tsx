"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCounterStore } from "@/store/counterStore";
import TestCard from "@/components/TestCard";

// Zod 폼 스키마 예제
const formSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일 형식을 입력해주세요."),
  content: z.string().min(1, "내용을 입력해주세요."),
});

type FormValues = z.infer<typeof formSchema>;

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { count, increment, decrement, reset } = useCounterStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormValues) => {
    alert(`제출 완료!\n이름: ${data.name}\n이메일: ${data.email}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* 소개 섹션 */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Next.js Starter Kit</h1>
        <p className="text-muted-foreground text-lg">
          Next.js 15 · Tailwind CSS · shadcn/ui · Zustand · React Hook Form + Zod
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Zustand 카운터 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>Zustand 상태관리</CardTitle>
            <CardDescription>전역 상태 카운터 예제입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-5xl font-bold text-center">{count}</p>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={decrement}>-</Button>
              <Button variant="outline" onClick={reset}>초기화</Button>
              <Button variant="outline" onClick={increment}>+</Button>
            </div>
          </CardContent>
        </Card>

        {/* React Hook Form + Zod 폼 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>React Hook Form + Zod</CardTitle>
            <CardDescription>폼 유효성 검사 예제입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <Label>날짜</Label>
                <Popover>
                  <PopoverTrigger className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm text-left hover:bg-muted transition-colors">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className={date ? "text-foreground" : "text-muted-foreground"}>
                      {date ? format(date, "PPP", { locale: ko }) : "날짜를 선택해주세요."}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" {...register("name")} />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" placeholder="example@email.com" {...register("email")} />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="content">내용</Label>
                <textarea
                  id="content"
                  placeholder="내용을 입력해주세요."
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  {...register("content")}
                />
                {errors.content && (
                  <p className="text-destructive text-sm">{errors.content.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">제출</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* TestCard 컴포넌트 */}
      <section>
        <TestCard />
      </section>

      {/* 기술 스택 뱃지 */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>기술 스택</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "Zustand", "React Hook Form", "Zod"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
