"use client"
import {   useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Calendar,
  Star,
  Users,
  Award,
  ChevronRight
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  bio: string
  location: string
  joinedDate: string
  skills: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
  stats: {
    projects: number
    contributions: number
    rating: number
  }
}

interface TeamSectionProps {
  title?: string
  subtitle?: string
  members?: TeamMember[]
  className?: string
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack developer with 8+ years of experience in React and Node.js. Passionate about clean code and user experience.',
    location: 'San Francisco, CA',
    joinedDate: '2021-03-15',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    stats: {
      projects: 24,
      contributions: 1250,
      rating: 4.9
    }
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Creative designer focused on creating intuitive and beautiful user interfaces. Expert in design systems and prototyping.',
    location: 'New York, NY',
    joinedDate: '2021-07-22',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    stats: {
      projects: 18,
      contributions: 890,
      rating: 4.8
    }
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Backend Engineer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Backend specialist with expertise in microservices architecture and cloud infrastructure. Loves solving complex problems.',
    location: 'Austin, TX',
    joinedDate: '2022-01-10',
    skills: ['Python', 'AWS', 'Docker', 'Kubernetes'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    stats: {
      projects: 16,
      contributions: 1100,
      rating: 4.9
    }
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'DevOps engineer passionate about automation and infrastructure as code. Ensures smooth deployments and system reliability.',
    location: 'Seattle, WA',
    joinedDate: '2021-11-05',
    skills: ['Terraform', 'Jenkins', 'Monitoring', 'CI/CD'],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    stats: {
      projects: 22,
      contributions: 980,
      rating: 4.7
    }
  },
  {
    id: '5',
    name: 'Priya Patel',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bio: 'Strategic product manager with a data-driven approach. Bridges the gap between business needs and technical implementation.',
    location: 'Boston, MA',
    joinedDate: '2020-09-18',
    skills: ['Product Strategy', 'Analytics', 'Agile', 'User Stories'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    stats: {
      projects: 30,
      contributions: 750,
      rating: 4.8
    }
  },
  {
    id: '6',
    name: 'Alex Thompson',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Frontend developer specializing in modern web technologies and performance optimization. Advocate for accessibility.',
    location: 'Portland, OR',
    joinedDate: '2022-05-12',
    skills: ['Vue.js', 'CSS', 'Performance', 'Accessibility'],
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    },
    stats: {
      projects: 14,
      contributions: 820,
      rating: 4.6
    }
  }
]

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card content */}
        <div className="relative p-6">
          {/* Avatar and basic info */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{member.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{member.stats.rating}</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {member.bio}
          </p>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {member.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                >
                  {skill}
                </span>
              ))}
              {member.skills.length > 3 && (
                <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                  +{member.skills.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{member.stats.projects}</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{member.stats.contributions}</div>
              <div className="text-xs text-muted-foreground">Commits</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">
                {new Date(member.joinedDate).getFullYear()}
              </div>
              <div className="text-xs text-muted-foreground">Joined</div>
            </div>
          </div>

          {/* Social links and action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {member.social.github && (
                <a
                  href={member.social.github}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>

            <motion.button
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              whileHover={{ x: 4 }}
            >
              View Profile
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Hover effect border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

function TeamSection({
  title = "Meet Our Team",
  subtitle = "The talented individuals behind our success",
  members = defaultMembers,
  className
}: TeamSectionProps) {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Team stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{members.length}</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <Award className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {members.reduce((sum, member) => sum + member.stats.projects, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <Star className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {(members.reduce((sum, member) => sum + member.stats.rating, 0) / members.length).toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-muted/50">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Want to join our amazing team?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View Open Positions
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default function TeamSectionDemo() {
  return (
    <div className="min-h-screen bg-background">
      <TeamSection />
    </div>
  )
}
