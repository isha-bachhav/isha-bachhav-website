import { Calendar, Users } from "lucide-react";

const Workshops = () => {
  const events = [
    {
      title: "Advanced Web Security Workshop",
      date: "March 2024",
      attendees: "150+",
      description: "Hands-on workshop covering OWASP Top 10 and secure coding practices",
    },
    {
      title: "Cybersecurity Conference Speaker",
      date: "January 2024",
      attendees: "500+",
      description: "Keynote on emerging threats in cloud security",
    },
    {
      title: "Corporate Security Training",
      date: "December 2023",
      attendees: "200+",
      description: "Enterprise security awareness and best practices training",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          Workshops & Events
        </h1>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
              <div className="flex gap-6 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {event.attendees} attendees
                </span>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
