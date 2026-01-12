import Image from "next/image"
import { withAssetPrefix } from "@/lib/assetPrefix"
import { SectionHeader } from "@/components/ui/section-header"

const teamMembers = [
  {
    name: "Founding Member 1",
    role: "Co-founder & Product Lead",
    bio: "BS in Data Science & Math from University of Michigan. MS in Data Science at Columbia University",
    expertise: ["Badminton", "Fencing", "Piano"],
    image: "/founder1.jpg",
  },
  {
    name: "Founding Member 2",
    role: "Co-founder & Technical Lead",
    bio: "BS in Computer Science & Math from NYU, MS in Computer Science at UC San Diego",
    expertise: ["Basketball", "Poetry", "Sleep"],
    image: "/founder2.jpeg",
  },
]

export default function Team() {
  return (
    <section id="team" className="px-6 py-20 md:py-32 section-alt">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge="VW.ai"
          title="Meet the Team"
          description="We innovate interfaces between people and information. We empower interfaces with Artificial Intelligence."
          align="center"
          className="mx-auto mb-16"
        />

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group glass-card-hover p-8"
            >
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-xl bg-gray-100 relative h-80">
                <Image
                  src={withAssetPrefix(member.image || "/placeholder.svg")}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={
                    index === 0
                      ? { objectPosition: "center 30%" }
                      : { objectPosition: "center top" }
                  }
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
