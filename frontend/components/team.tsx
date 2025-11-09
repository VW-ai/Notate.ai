import Image from "next/image"

const teamMembers = [
  {
    name: "Founding Member 1",
    role: "Co-founder",
    bio: "BS in Data Science & Math from University of Michigan. MS in Data Science at Columbia University",
    expertise: ["Badminton", "Fencing", "Piano"],
    image: "founder1.jpg",
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
    <section id="team" className="px-6 py-20 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Meet the Team: VW.ai</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We innovate interfaces between people the information. 
            We empower interfaces with Artifical Intelligence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group paper-card p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 relative h-80">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={index === 0 ? { objectPosition: 'center 30%' } : { objectPosition: 'center top' }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
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
