"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
  LayoutDashboard,
  Users,
  FileText,
  UserPlus,
  TrendingUp,
  Eye,
  Calendar,
  Edit,
  Save,
  Menu,
  X,
  LogOut,
  Trash2,
  Shield,
  AlertTriangle,
} from "lucide-react"

const initialTeam = [
  {
    id: 1,
    name: "Katie Jones",
    role: "Co-Founder & Veterinarian",
    bio: "Katie brings over 10 years of veterinary experience, specialising in small animal medicine and surgery.",
    image: "/images/katie.jpg",
    isFounder: true, // Protected - cannot be deleted
  },
  {
    id: 2,
    name: "Lisa Elgie",
    role: "Co-Founder & Veterinarian",
    bio: "Lisa has extensive experience in emergency and critical care, with a passion for feline medicine.",
    image: "/images/lisa.jpg",
    isFounder: true, // Protected - cannot be deleted
  },
]

// Mock data
const mockPreRegistrations = [
  {
    id: 1,
    name: "Sarah McKenzie",
    petType: "Dog",
    petName: "Max",
    email: "sarah@email.com",
    phone: "01738 123456",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "James Robertson",
    petType: "Cat",
    petName: "Whiskers",
    email: "james@email.com",
    phone: "01738 234567",
    date: "2024-01-16",
  },
  {
    id: 3,
    name: "Emma Watson",
    petType: "Rabbit",
    petName: "Fluffy",
    email: "emma@email.com",
    phone: "01738 345678",
    date: "2024-01-17",
  },
]

const mockPages = [
  { id: 1, name: "Home", slug: "home" },
  { id: 2, name: "Our Services", slug: "services" },
  { id: 3, name: "Emergency Info", slug: "emergency" },
]

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [editingPage, setEditingPage] = useState<string | null>(null)
  const [pageContent, setPageContent] = useState({
    title: "",
    body: "",
  })

  const [team, setTeam] = useState(initialTeam)
  const [editingMember, setEditingMember] = useState<number | null>(null)
  const [memberForm, setMemberForm] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
  })
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null)
  const [addingNewMember, setAddingNewMember] = useState(false)

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        e.returnValue = ""
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [hasUnsavedChanges])

  // Calculate days until Spring 2026 (March 20, 2026)
  const openingDate = new Date("2026-03-20")
  const today = new Date()
  const daysUntilOpening = Math.ceil((openingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  const handleEditPage = (slug: string) => {
    setEditingPage(slug)
    // Load mock content
    if (slug === "home") {
      setPageContent({
        title: "Welcome to Almond Vet Care",
        body: "Independent veterinary clinic in Perth, Scotland putting animal welfare first...",
      })
    } else if (slug === "services") {
      setPageContent({
        title: "Our Services",
        body: "We offer comprehensive veterinary care including consultations, vaccinations...",
      })
    } else {
      setPageContent({
        title: "Emergency Care",
        body: "For out-of-hours emergencies, please contact our emergency partners...",
      })
    }
    setActiveView("editor")
  }

  const handleEditMember = (member: (typeof initialTeam)[0]) => {
    setEditingMember(member.id)
    setMemberForm({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image,
    })
    setHasUnsavedChanges(false)
    setSaveSuccess(false)
  }

  const handleSaveMember = () => {
    if (editingMember) {
      setTeam(team.map((m) => (m.id === editingMember ? { ...m, ...memberForm } : m)))
      setSaveSuccess(true)
      setHasUnsavedChanges(false)
      setTimeout(() => {
        setSaveSuccess(false)
        setEditingMember(null)
      }, 1500)
    }
  }

  const handleAddMember = () => {
    setAddingNewMember(true)
    setMemberForm({
      name: "",
      role: "",
      bio: "",
      image: "/team-member-portrait.png",
    })
    setHasUnsavedChanges(false)
  }

  const handleSaveNewMember = () => {
    if (memberForm.name && memberForm.role) {
      const newMember = {
        id: Math.max(...team.map((m) => m.id)) + 1,
        name: memberForm.name,
        role: memberForm.role,
        bio: memberForm.bio,
        image: memberForm.image || "/team-member-portrait.png",
        isFounder: false,
      }
      setTeam([...team, newMember])
      setSaveSuccess(true)
      setHasUnsavedChanges(false)
      setTimeout(() => {
        setSaveSuccess(false)
        setAddingNewMember(false)
      }, 1500)
    }
  }

  const handleDeleteMember = (id: number) => {
    const member = team.find((m) => m.id === id)
    if (member?.isFounder) return // Extra protection
    setTeam(team.filter((m) => m.id !== id))
    setShowDeleteConfirm(null)
  }

  const handleFormChange = (field: string, value: string) => {
    setMemberForm({ ...memberForm, [field]: value })
    setHasUnsavedChanges(true)
  }

  const handleCancelEdit = () => {
    if (hasUnsavedChanges) {
      if (confirm("You have unsaved changes. Are you sure you want to cancel?")) {
        setEditingMember(null)
        setAddingNewMember(false)
        setHasUnsavedChanges(false)
      }
    } else {
      setEditingMember(null)
      setAddingNewMember(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 0 }}
        className="fixed left-0 top-0 h-full bg-[#1e3a5f] shadow-lg overflow-hidden z-50"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1">
                <Image
                  src="/images/almond-vet-care-logo.png"
                  alt="Almond Vet Care"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">Almond Vet Care</h2>
                <p className="text-xs text-[#7fbf7f]">Admin Panel</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-[#2d4a6f]"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveView("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "overview"
                  ? "bg-[#7fbf7f] text-white"
                  : "text-gray-300 hover:bg-[#2d4a6f] hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveView("registrations")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "registrations"
                  ? "bg-[#7fbf7f] text-white"
                  : "text-gray-300 hover:bg-[#2d4a6f] hover:text-white"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Pre-Registrations</span>
            </button>

            {/* Resetting edit states when switching to team view */}
            <button
              onClick={() => {
                setActiveView("team")
                setEditingMember(null)
                setAddingNewMember(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "team" ? "bg-[#7fbf7f] text-white" : "text-gray-300 hover:bg-[#2d4a6f] hover:text-white"
              }`}
            >
              <UserPlus className="w-5 h-5" />
              <span>Team Management</span>
            </button>

            <button
              onClick={() => setActiveView("content")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === "content"
                  ? "bg-[#7fbf7f] text-white"
                  : "text-gray-300 hover:bg-[#2d4a6f] hover:text-white"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Content Pages</span>
            </button>
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <a
              href="/admin"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#2d4a6f] hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-[280px]" : "ml-0"}`}>
        <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              {!sidebarOpen && (
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="text-[#1e3a5f]">
                  <Menu className="w-5 h-5" />
                </Button>
              )}
              <h1 className="text-xl font-semibold text-[#1e3a5f]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Welcome, Katie</span>
              <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">KJ</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* Overview */}
            {activeView === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-white border-l-4 border-[#1e3a5f]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Pre-Registrations</h3>
                      <TrendingUp className="w-5 h-5 text-[#7fbf7f]" />
                    </div>
                    <p className="text-4xl font-bold text-[#1e3a5f]">142</p>
                    <p className="text-sm text-[#7fbf7f] mt-2">+12 this week</p>
                  </Card>

                  <Card className="p-6 bg-white border-l-4 border-[#4fb8d9]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Site Visits</h3>
                      <Eye className="w-5 h-5 text-[#4fb8d9]" />
                    </div>
                    <p className="text-4xl font-bold text-[#1e3a5f]">1,204</p>
                    <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
                  </Card>

                  <Card className="p-6 bg-white border-l-4 border-[#7fbf7f]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Days Until Opening</h3>
                      <Calendar className="w-5 h-5 text-[#7fbf7f]" />
                    </div>
                    <p className="text-4xl font-bold text-[#1e3a5f]">{daysUntilOpening}</p>
                    <p className="text-sm text-gray-500 mt-2">Spring 2026</p>
                  </Card>
                </div>

                <Card className="p-6 bg-white">
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      onClick={() => setActiveView("content")}
                      className="bg-[#7fbf7f] hover:bg-[#6faf6f] text-white h-12"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Edit Content
                    </Button>
                    <Button
                      onClick={() => setActiveView("registrations")}
                      className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white h-12"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      View Registrations
                    </Button>
                    <Button
                      onClick={() => setActiveView("team")}
                      variant="outline"
                      className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white h-12"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Edit Team
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Pre-Registrations */}
            {activeView === "registrations" && (
              <motion.div
                key="registrations"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 bg-white">
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-6">Pre-Registrations</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 bg-[#f8f6f3]">
                          <th className="text-left py-3 px-4 font-medium text-[#1e3a5f] text-sm">Name</th>
                          <th className="text-left py-3 px-4 font-medium text-[#1e3a5f] text-sm">Pet Type</th>
                          <th className="text-left py-3 px-4 font-medium text-[#1e3a5f] text-sm">Pet Name</th>
                          <th className="text-left py-3 px-4 font-medium text-[#1e3a5f] text-sm">Contact</th>
                          <th className="text-left py-3 px-4 font-medium text-[#1e3a5f] text-sm">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockPreRegistrations.map((reg) => (
                          <tr key={reg.id} className="border-b border-gray-100 hover:bg-[#f8f6f3]">
                            <td className="py-3 px-4 text-gray-800">{reg.name}</td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1e3a5f] text-white">
                                {reg.petType}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-800">{reg.petName}</td>
                            <td className="py-3 px-4">
                              <div className="text-sm">
                                <div className="text-gray-800">{reg.email}</div>
                                <div className="text-gray-500">{reg.phone}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{reg.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeView === "team" && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Team List View */}
                {!editingMember && !addingNewMember && (
                  <Card className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-[#1e3a5f]">Team Management</h2>
                      <Button onClick={handleAddMember} className="bg-[#7fbf7f] hover:bg-[#6faf6f] text-white">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Team Member
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {team.map((member) => (
                        <Card key={member.id} className="p-6 bg-[#f8f6f3] border-0 relative">
                          {/* Founder Badge */}
                          {member.isFounder && (
                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#1e3a5f] text-white px-2 py-1 rounded-full text-xs">
                              <Shield className="w-3 h-3" />
                              <span>Founder</span>
                            </div>
                          )}

                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center overflow-hidden">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-[#1e3a5f]">{member.name}</h3>
                              <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                          </div>

                          {member.bio && <p className="text-sm text-gray-600 mb-4 line-clamp-2">{member.bio}</p>}

                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleEditMember(member)}
                              variant="outline"
                              className="flex-1 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Profile
                            </Button>

                            {/* Delete button - disabled for founders */}
                            {!member.isFounder ? (
                              <Button
                                onClick={() => setShowDeleteConfirm(member.id)}
                                variant="outline"
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            ) : (
                              <Button
                                disabled
                                variant="outline"
                                className="border-gray-300 text-gray-300 cursor-not-allowed bg-transparent"
                                title="Founder profiles cannot be deleted"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          {/* Delete Confirmation Modal */}
                          {showDeleteConfirm === member.id && (
                            <div className="absolute inset-0 bg-white/95 rounded-lg flex flex-col items-center justify-center p-4">
                              <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
                              <p className="text-center text-gray-800 mb-4">
                                Are you sure you want to delete <strong>{member.name}</strong>?
                              </p>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => setShowDeleteConfirm(null)}
                                  variant="outline"
                                  className="border-gray-300"
                                >
                                  Cancel
                                </Button>
                                <Button
                                  onClick={() => handleDeleteMember(member.id)}
                                  className="bg-red-500 hover:bg-red-600 text-white"
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Edit Member Form */}
                {editingMember && (
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-4 mb-6">
                      <Button
                        variant="outline"
                        onClick={handleCancelEdit}
                        className="border-[#1e3a5f] text-[#1e3a5f] bg-transparent"
                      >
                        Back to Team
                      </Button>
                      <h2 className="text-xl font-semibold text-[#1e3a5f]">
                        Edit Team Member
                        {team.find((m) => m.id === editingMember)?.isFounder && (
                          <span className="ml-2 inline-flex items-center gap-1 bg-[#1e3a5f] text-white px-2 py-1 rounded-full text-xs">
                            <Shield className="w-3 h-3" />
                            Founder
                          </span>
                        )}
                      </h2>
                    </div>

                    {hasUnsavedChanges && (
                      <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2 text-amber-700">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm">You have unsaved changes</span>
                      </div>
                    )}

                    {saveSuccess && (
                      <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                        <Save className="w-4 h-4" />
                        <span className="text-sm">Changes saved successfully!</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <Input
                            value={memberForm.name}
                            onChange={(e) => handleFormChange("name", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="Enter full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Role / Title *</label>
                          <Input
                            value={memberForm.role}
                            onChange={(e) => handleFormChange("role", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="e.g. Veterinary Nurse"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Bio / Description</label>
                          <Textarea
                            value={memberForm.bio}
                            onChange={(e) => handleFormChange("bio", e.target.value)}
                            rows={5}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="Brief biography or description..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
                          <Input
                            value={memberForm.image}
                            onChange={(e) => handleFormChange("image", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="/images/team-member.jpg"
                          />
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            onClick={handleSaveMember}
                            disabled={!memberForm.name || !memberForm.role}
                            className="flex-1 bg-[#7fbf7f] hover:bg-[#6faf6f] text-white h-12 disabled:opacity-50"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button
                            onClick={handleCancelEdit}
                            variant="outline"
                            className="border-gray-300 text-gray-600 h-12 bg-transparent"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>

                      {/* Preview */}
                      <div className="bg-[#f8f6f3] rounded-lg p-6">
                        <h3 className="font-medium text-[#1e3a5f] mb-4">Preview</h3>
                        <div className="text-center">
                          <div className="w-24 h-24 rounded-full bg-[#1e3a5f] mx-auto mb-4 overflow-hidden">
                            <img
                              src={memberForm.image || "/placeholder.svg"}
                              alt={memberForm.name || "Team member"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-semibold text-[#1e3a5f] text-lg">{memberForm.name || "Name"}</h4>
                          <p className="text-[#7fbf7f] font-medium">{memberForm.role || "Role"}</p>
                          {memberForm.bio && <p className="text-gray-600 text-sm mt-3">{memberForm.bio}</p>}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Add New Member Form */}
                {addingNewMember && (
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-4 mb-6">
                      <Button
                        variant="outline"
                        onClick={handleCancelEdit}
                        className="border-[#1e3a5f] text-[#1e3a5f] bg-transparent"
                      >
                        Back to Team
                      </Button>
                      <h2 className="text-xl font-semibold text-[#1e3a5f]">Add New Team Member</h2>
                    </div>

                    {saveSuccess && (
                      <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                        <Save className="w-4 h-4" />
                        <span className="text-sm">Team member added successfully!</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <Input
                            value={memberForm.name}
                            onChange={(e) => handleFormChange("name", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="Enter full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Role / Title *</label>
                          <Input
                            value={memberForm.role}
                            onChange={(e) => handleFormChange("role", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="e.g. Veterinary Nurse"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Bio / Description</label>
                          <Textarea
                            value={memberForm.bio}
                            onChange={(e) => handleFormChange("bio", e.target.value)}
                            rows={5}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="Brief biography or description..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
                          <Input
                            value={memberForm.image}
                            onChange={(e) => handleFormChange("image", e.target.value)}
                            className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                            placeholder="/images/team-member.jpg"
                          />
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            onClick={handleSaveNewMember}
                            disabled={!memberForm.name || !memberForm.role}
                            className="flex-1 bg-[#7fbf7f] hover:bg-[#6faf6f] text-white h-12 disabled:opacity-50"
                          >
                            <UserPlus className="w-4 h-4 mr-2" />
                            Add Team Member
                          </Button>
                          <Button
                            onClick={handleCancelEdit}
                            variant="outline"
                            className="border-gray-300 text-gray-600 h-12 bg-transparent"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>

                      {/* Preview */}
                      <div className="bg-[#f8f6f3] rounded-lg p-6">
                        <h3 className="font-medium text-[#1e3a5f] mb-4">Preview</h3>
                        <div className="text-center">
                          <div className="w-24 h-24 rounded-full bg-[#1e3a5f] mx-auto mb-4 overflow-hidden">
                            <img
                              src={memberForm.image || "/placeholder.svg"}
                              alt={memberForm.name || "Team member"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-semibold text-[#1e3a5f] text-lg">{memberForm.name || "Name"}</h4>
                          <p className="text-[#7fbf7f] font-medium">{memberForm.role || "Role"}</p>
                          {memberForm.bio && <p className="text-gray-600 text-sm mt-3">{memberForm.bio}</p>}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            )}

            {/* Content Pages */}
            {activeView === "content" && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 bg-white">
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-6">Content Pages</h2>
                  <div className="space-y-3">
                    {mockPages.map((page) => (
                      <div key={page.id} className="flex items-center justify-between p-4 bg-[#f8f6f3] rounded-lg">
                        <div>
                          <h3 className="font-medium text-[#1e3a5f]">{page.name}</h3>
                          <p className="text-sm text-gray-500">/{page.slug}</p>
                        </div>
                        <Button
                          onClick={() => handleEditPage(page.slug)}
                          className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Editor */}
            {activeView === "editor" && editingPage && (
              <motion.div
                key="editor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => setActiveView("content")}
                    className="border-[#1e3a5f] text-[#1e3a5f]"
                  >
                    Back to Pages
                  </Button>
                  <h2 className="text-xl font-semibold text-[#1e3a5f]">
                    Editing: <span className="capitalize">{editingPage}</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Editor */}
                  <Card className="p-6 bg-white">
                    <h3 className="font-medium text-[#1e3a5f] mb-4">Content Editor</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <Input
                          value={pageContent.title}
                          onChange={(e) =>
                            setPageContent({
                              ...pageContent,
                              title: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Body Content</label>
                        <Textarea
                          value={pageContent.body}
                          onChange={(e) =>
                            setPageContent({
                              ...pageContent,
                              body: e.target.value,
                            })
                          }
                          rows={15}
                          className="w-full font-mono text-sm border-gray-300 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                        />
                      </div>
                      <Button className="w-full bg-[#7fbf7f] hover:bg-[#6faf6f] text-white h-12">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </Card>

                  {/* Preview */}
                  <Card className="p-6 bg-[#f8f6f3] border-0">
                    <h3 className="font-medium text-[#1e3a5f] mb-4">Live Preview</h3>
                    {/* Added Prose for richer text rendering in preview */}
                    <div className="prose prose-sm max-w-none">
                      <h1 className="text-2xl font-bold text-[#1e3a5f]">{pageContent.title}</h1>
                      <p className="text-gray-700 whitespace-pre-wrap">{pageContent.body}</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
