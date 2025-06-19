export interface Service {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: string;
    iconColor: string;
    bgColor: string;
    features: string[];
    benefits: string[];
    process: {
        title: string;
        description: string;
    }[];
    technologies: string[];
    pricing: {
        starter: {
            name: string;
            price: string;
            description: string;
            features: string[];
        };
        professional: {
            name: string;
            price: string;
            description: string;
            features: string[];
        };
        enterprise: {
            name: string;
            price: string;
            description: string;
            features: string[];
        };
    };
    faq: {
        question: string;
        answer: string;
    }[];
    testimonials: {
        name: string;
        company: string;
        position: string;
        content: string;
        rating: number;
    }[];
}

export const services: Service[] = [
    {
        id: "network-infrastructure",
        title: "Network Infrastructure",
        description: "Design and secure your local networks for optimal and protected connectivity. We analyze your needs, design the appropriate network architecture and implement robust and scalable solutions.",
        shortDescription: "Design and secure your local networks for optimal and protected connectivity.",
        icon: "Network",
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
        features: [
            "LAN/WAN Architecture",
            "Advanced Security",
            "Continuous Monitoring",
            "24/7 Support"
        ],
        benefits: [
            "Network performance improvement up to 80%",
            "Downtime reduction by 95%",
            "Enhanced security against cyberattacks",
            "Guaranteed scalability for future growth",
            "Expert technical support available 24/7"
        ],
        process: [
            {
                title: "Initial Audit",
                description: "Complete evaluation of your current network infrastructure and identification of improvement points."
            },
            {
                title: "Design",
                description: "Creation of a custom network architecture adapted to your specific needs and growth."
            },
            {
                title: "Deployment",
                description: "Installation and configuration of equipment with progressive migration to avoid interruptions."
            },
            {
                title: "Optimization",
                description: "Performance testing, fine adjustments and implementation of continuous monitoring."
            }
        ],
        technologies: [
            "Cisco", "Juniper", "Fortinet", "Palo Alto", "Aruba", "Ubiquiti",
            "VLAN", "VPN", "Firewall", "Load Balancing", "QoS", "SD-WAN"
        ],
        pricing: {
            starter: {
                name: "Starter",
                price: "$2,500",
                description: "Perfect for small businesses",
                features: [
                    "Complete network audit",
                    "Configuration up to 20 workstations",
                    "Basic firewall",
                    "8am-6pm support",
                    "Technical documentation"
                ]
            },
            professional: {
                name: "Professional",
                price: "$8,500",
                description: "Ideal for medium businesses",
                features: [
                    "Advanced network architecture",
                    "Configuration up to 100 workstations",
                    "Enterprise firewall + VPN",
                    "24/7 monitoring",
                    "Priority support",
                    "Team training"
                ]
            },
            enterprise: {
                name: "Enterprise",
                price: "Custom quote",
                description: "Custom solutions for large enterprises",
                features: [
                    "Complex multi-site architecture",
                    "Unlimited workstations",
                    "Advanced security + SOC",
                    "Guaranteed SLA",
                    "Dedicated 24/7 support",
                    "Preventive maintenance"
                ]
            }
        },
        faq: [
            {
                question: "How long does it take to install a new network infrastructure?",
                answer: "The timeline varies according to complexity: 1-2 weeks for a simple network, 4-8 weeks for an advanced architecture. We plan the installation to minimize impact on your business."
            },
            {
                question: "Can I keep my current equipment?",
                answer: "We evaluate your existing equipment during the audit. Those that are compatible and in good condition can be integrated into the new architecture to optimize your investment."
            },
            {
                question: "How do you guarantee the security of our network?",
                answer: "We implement next-generation firewalls, network segmentation, data encryption, and 24/7 monitoring with intrusion detection."
            }
        ],
        testimonials: [
            {
                name: "Marie Dubois",
                company: "TechStart SAS",
                position: "IT Director",
                content: "The team transformed our aging network infrastructure into a modern and secure system. Performance has been multiplied by 3.",
                rating: 5
            },
            {
                name: "Pierre Martin",
                company: "Industry Plus",
                position: "CIO",
                content: "Impeccable installation without interrupting our production. The 24/7 support has already saved us several times.",
                rating: 5
            }
        ]
    },
    {
        id: "cloud-migration",
        title: "Cloud Migration",
        description: "Complete support to migrate your systems to the cloud without service interruption. We develop a personalized migration strategy, manage the transition and optimize your cloud costs.",
        shortDescription: "Complete support to migrate your systems to the cloud without service interruption.",
        icon: "Cloud",
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
        features: [
            "Preliminary audit",
            "Migration strategy",
            "AWS/Azure/GCP",
            "Team training"
        ],
        benefits: [
            "IT cost reduction up to 40%",
            "Improved flexibility and scalability",
            "Access to latest cloud technologies",
            "Enhanced data security",
            "Optimized remote work capabilities"
        ],
        process: [
            {
                title: "Assessment",
                description: "In-depth analysis of your current infrastructure and cloud compatibility evaluation."
            },
            {
                title: "Strategy",
                description: "Definition of migration roadmap with application prioritization and cloud provider selection."
            },
            {
                title: "Migration",
                description: "Phased migration execution with rigorous testing and validation at each step."
            },
            {
                title: "Optimization",
                description: "Resource adjustment, cost optimization and implementation of cloud best practices."
            }
        ],
        technologies: [
            "AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes",
            "Terraform", "Ansible", "Jenkins", "GitLab CI/CD", "Monitoring"
        ],
        pricing: {
            starter: {
                name: "Cloud Starter",
                price: "$5,000",
                description: "Simple cloud migration",
                features: [
                    "Cloud readiness audit",
                    "Migration up to 5 applications",
                    "Basic training",
                    "30-day support",
                    "Documentation"
                ]
            },
            professional: {
                name: "Cloud Pro",
                price: "$15,000",
                description: "Complete migration with optimization",
                features: [
                    "Complete migration strategy",
                    "Migration up to 20 applications",
                    "Cost optimization",
                    "Advanced training",
                    "90-day support",
                    "Monitoring setup"
                ]
            },
            enterprise: {
                name: "Cloud Enterprise",
                price: "Custom quote",
                description: "Complete cloud transformation",
                features: [
                    "Complex multi-cloud migration",
                    "Unlimited applications",
                    "DevOps & CI/CD",
                    "Cloud governance",
                    "1-year support",
                    "Continuous optimization"
                ]
            }
        },
        faq: [
            {
                question: "What is the typical duration of a cloud migration?",
                answer: "It depends on complexity: 1-3 months for a simple migration, 6-12 months for a complete transformation. We proceed in phases to maintain service continuity."
            },
            {
                question: "How do you choose the right cloud provider?",
                answer: "We analyze your technical needs, budget, regulatory constraints and preferences. AWS, Azure and GCP each have their advantages depending on the context."
            },
            {
                question: "What happens if the migration fails?",
                answer: "We have a rollback plan for each phase. Our migrations are tested in staging environment before production, minimizing risks."
            }
        ],
        testimonials: [
            {
                name: "Sophie Rousseau",
                company: "FinanceCorps",
                position: "CTO",
                content: "Perfectly orchestrated AWS migration. Our teams quickly adopted the new cloud tools. ROI achieved in 8 months.",
                rating: 5
            },
            {
                name: "Thomas Leroy",
                company: "MediaGroup",
                position: "Infrastructure Manager",
                content: "The team's multi-cloud expertise allowed us to choose the best hybrid solution for our needs.",
                rating: 5
            }
        ]
    },
    {
        id: "infrastructure-management",
        title: "Infrastructure Management",
        description: "Optimization and supervision of your infrastructures for maximum performance and controlled costs. Proactive monitoring, preventive maintenance and expert support to guarantee system availability.",
        shortDescription: "Optimization and supervision of your infrastructures for maximum performance and controlled costs.",
        icon: "Server",
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
        features: [
            "Advanced monitoring",
            "Cost optimization",
            "Automation",
            "Backup & recovery"
        ],
        benefits: [
            "System availability guaranteed at 99.9%",
            "Operational cost reduction by 30%",
            "Proactive problem detection",
            "Automation of repetitive tasks",
            "Robust business continuity plan"
        ],
        process: [
            {
                title: "Assessment",
                description: "Complete audit of your current infrastructure and optimization point identification."
            },
            {
                title: "Implementation",
                description: "Installation of monitoring, automation and backup tools adapted to your environment."
            },
            {
                title: "Supervision",
                description: "24/7 monitoring with proactive alerts and rapid intervention in case of incident."
            },
            {
                title: "Improvement",
                description: "Continuous optimization based on metrics and feedback."
            }
        ],
        technologies: [
            "Prometheus", "Grafana", "Nagios", "Zabbix", "ELK Stack",
            "Terraform", "Ansible", "Puppet", "Docker", "VMware"
        ],
        pricing: {
            starter: {
                name: "Monitoring Basic",
                price: "$800/month",
                description: "Essential monitoring",
                features: [
                    "Monitoring up to 20 servers",
                    "Email alerts",
                    "Monthly reports",
                    "8am-6pm support",
                    "Daily backup"
                ]
            },
            professional: {
                name: "Infrastructure Pro",
                price: "$2,000/month",
                description: "Complete management",
                features: [
                    "Monitoring up to 100 servers",
                    "Multi-channel alerts",
                    "Real-time dashboard",
                    "24/7 support",
                    "Backup + recovery testing",
                    "Level 1 automation"
                ]
            },
            enterprise: {
                name: "Managed IT",
                price: "Custom quote",
                description: "Complete managed services",
                features: [
                    "Unlimited servers",
                    "AI for failure prediction",
                    "Custom SLAs",
                    "Dedicated team",
                    "Continuity plan",
                    "Continuous optimization"
                ]
            }
        },
        faq: [
            {
                question: "What does 24/7 monitoring include?",
                answer: "Continuous surveillance of servers, applications, network and databases with immediate alerts and on-call intervention if necessary."
            },
            {
                question: "How do you manage backups?",
                answer: "Automated daily backups with configurable retention, secure storage and regular restoration tests to guarantee data recovery."
            },
            {
                question: "Can I keep my internal IT team?",
                answer: "Absolutely. We work in collaboration with your teams, bringing our complementary expertise and training them in best practices."
            }
        ],
        testimonials: [
            {
                name: "Laurent Petit",
                company: "RetailChain",
                position: "CIO",
                content: "Since implementing proactive monitoring, we haven't had any major interruptions. The team intervenes before we even detect a problem.",
                rating: 5
            },
            {
                name: "Catherine Moreau",
                company: "HealthTech",
                position: "IT Manager",
                content: "Managing our infrastructure saves us 2 FTE. We can focus on strategic projects.",
                rating: 5
            }
        ]
    },
    {
        id: "application-development",
        title: "Application Development",
        description: "Creation of custom business applications adapted to your company's specific needs. From needs analysis to deployment, we develop high-performance and scalable solutions.",
        shortDescription: "Creation of custom business applications adapted to your company's specific needs.",
        icon: "Code",
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100",
        features: [
            "Web applications",
            "Mobile solutions",
            "APIs & integrations",
            "Evolutionary maintenance"
        ],
        benefits: [
            "Business process automation",
            "Team productivity improvement",
            "Intuitive user interface",
            "Integration with existing systems",
            "Scalability and facilitated maintenance"
        ],
        process: [
            {
                title: "Analysis",
                description: "In-depth study of your business needs and definition of functional specifications."
            },
            {
                title: "Design",
                description: "UX/UI design and technical architecture adapted to your constraints and objectives."
            },
            {
                title: "Development",
                description: "Agile development with iterative deliveries and continuous validation with your teams."
            },
            {
                title: "Deployment",
                description: "Secure production deployment with user training and startup support."
            }
        ],
        technologies: [
            "React", "Node.js", "Python", "PHP", "Java", ".NET",
            "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "REST API"
        ],
        pricing: {
            starter: {
                name: "Simple App",
                price: "$15,000",
                description: "Basic web application",
                features: [
                    "Responsive web interface",
                    "Simple database",
                    "User authentication",
                    "1-day training",
                    "3-month warranty"
                ]
            },
            professional: {
                name: "Business App",
                price: "$45,000",
                description: "Complete custom solution",
                features: [
                    "Web + mobile application",
                    "API integrations",
                    "Complex workflows",
                    "Complete training",
                    "1-year maintenance",
                    "Minor evolutions"
                ]
            },
            enterprise: {
                name: "Platform",
                price: "Custom quote",
                description: "Complete enterprise platform",
                features: [
                    "Micro-services architecture",
                    "Multi-tenant",
                    "High availability",
                    "24/7 support",
                    "Major evolutions",
                    "Dedicated team"
                ]
            }
        },
        faq: [
            {
                question: "How long does application development take?",
                answer: "It varies according to complexity: 2-3 months for a simple app, 6-12 months for a complete solution. We deliver iteratively to validate regularly."
            },
            {
                question: "Can you integrate our application with our existing tools?",
                answer: "Yes, we develop APIs and connectors to integrate your new application with your existing ERP, CRM or other business tools."
            },
            {
                question: "What does evolutionary maintenance include?",
                answer: "Bug fixes, security updates, small functional evolutions and continuous technical support according to the chosen service level."
            }
        ],
        testimonials: [
            {
                name: "Nicolas Blanc",
                company: "LogisticPro",
                position: "Operations Director",
                content: "The custom inventory management application saves us 4 hours per day. Perfect interface for our field teams.",
                rating: 5
            },
            {
                name: "Julie Roux",
                company: "ServicePlus",
                position: "Digital Manager",
                content: "Client mobile app delivered on time with all our specifications. Our clients love the new experience.",
                rating: 5
            }
        ]
    },
];

export const getServiceById = (id: string): Service | undefined => {
    return services.find(service => service.id === id);
};

export const getAllServices = (): Service[] => {
    return services;
};