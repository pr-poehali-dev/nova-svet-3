import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <ASmejLogo />
        <span className="text-lg font-semibold text-white">
          aSmej<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Кошелёк
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Возможности <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Безопасность
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          О проекте
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-white text-white hover:bg-white hover:text-black bg-transparent transition-colors"
      >
        Создать кошелёк
      </Button>
    </header>
  )
}

function ASmejLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Inter, sans-serif">K</text>
    </svg>
  )
}
