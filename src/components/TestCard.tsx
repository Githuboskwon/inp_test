import Link from "next/link"

interface TestCardProps {
  title?: string
  description?: string
  href?: string
}

export default function TestCard({
  title = "TestCard 컴포넌트",
  description = "/add-component 커맨드로 자동 생성된 컴포넌트입니다. 클릭하면 이동합니다.",
  href = "/",
}: TestCardProps) {
  return (
    <Link href={href}>
      <div className="group border rounded-xl p-6 bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary transition-all duration-200 cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
