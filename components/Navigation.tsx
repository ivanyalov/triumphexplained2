"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, MessageSquare, Zap } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/models", label: "Модели", icon: Brain },
    { href: "/prompts", label: "Промпты", icon: MessageSquare },
    { href: "/functions", label: "Функции", icon: Zap },
  ];

  return (
    <nav>
      <div>
        <div>
          <Link href="/">
            Triumph Explained
          </Link>
          
          <div>
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link key={link.href} href={link.href}>
                  <Icon />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

