import type React from "react"
export const metadata = {
  title: "Admin Dashboard - Almond Vet Care",
  description: "Content management system for Almond Vet Care",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
