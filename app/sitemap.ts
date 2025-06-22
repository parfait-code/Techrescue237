import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://techrescue247.com' // Remplacez par votre domaine réel

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // {
        //   url: `${baseUrl}/services`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.9,
        // },
        {
            url: `${baseUrl}/services/network-infrastructure`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services/cloud-migration`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services/infrastructure-management`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services/application-development`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // {
        //   url: `${baseUrl}/services/monitoring-support`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.7,
        // },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        }
    ]
}