"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.toLowerCase() === "katie" || username.toLowerCase() === "lisa") {
      window.location.href = "/admin/dashboard"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f6f3] via-[#f0f4f0] to-white p-4">
      <Card className="w-full max-w-md p-8 shadow-xl border-t-4 border-[#1e3a5f]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4">
            <Image
              src="/images/almond-vet-care-logo.png"
              alt="Almond Vet Care"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] text-center mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 text-center text-sm">Sign in to manage your practice</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1e3a5f] mb-2">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e3a5f] mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white h-12 font-medium">
            Sign In
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            Use username <span className="font-medium text-[#1e3a5f]">katie</span> or{" "}
            <span className="font-medium text-[#1e3a5f]">lisa</span> to access
          </p>
        </div>
      </Card>
    </div>
  )
}
