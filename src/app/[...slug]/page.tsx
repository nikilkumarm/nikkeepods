import CatchAll from '@/components/CatchAll';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string[];
    };
}

export default async function CatchAllPage({ params }: PageProps) {
    const { slug } = await params;
    const fullPath = `/${slug.join('/')}`;

    // Map specific paths to friendly titles and descriptions
    const contentMap: Record<string, {
        title: string;
        description: string;
        breadcrumb: string;
        details?: { icon: string; title: string; text: string }[];
    }> = {
        '/store': {
            title: 'Nikkee Store',
            description: 'The best way to buy the products you love.',
            breadcrumb: 'Store',
            details: [
                { icon: 'ShoppingBag', title: 'Personalized Shopping', text: 'Work 1 on 1 with a Specialist to find the right products for you.' },
                { icon: 'Truck', title: 'Fast Delivery', text: 'Order today and get your Nikkee products delivered to your door in no time.' },
                { icon: 'CreditCard', title: 'Flexible Financing', text: 'Pay over time with low-interest monthly installments.' }
            ]
        },
        '/mac': {
            title: 'Mac',
            description: 'Powerful, portable, and ready for anything.',
            breadcrumb: 'Mac',
            details: [
                { icon: 'Zap', title: 'N-Series Performance', text: 'Unprecedented speed and efficiency with our custom Nikkee silicon.' },
                { icon: 'Smartphone', title: 'Continuity', text: 'Work seamlessly across your Mac, iPhone, and iPad.' },
                { icon: 'ShieldCheck', title: 'Built to Last', text: 'Durable aluminum enclosures and industry-leading security features.' }
            ]
        },
        '/ipad': {
            title: 'iPad',
            description: 'Versatile, capable, and easy to use.',
            breadcrumb: 'iPad',
            details: [
                { icon: 'Palette', title: 'Creative Freedom', text: 'Sketch, write, and design with precision using Nikkee Pencil Pro.' },
                { icon: 'Cpu', title: 'Pro Performance', text: 'Handle heavy tasks from 4K video editing to intensive gaming.' },
                { icon: 'Leaf', title: 'All-Day Battery', text: 'Engineered for maximum efficiency to keep you going everywhere.' }
            ]
        },
        '/iphone': {
            title: 'iPhone',
            description: 'The ultimate personal device.',
            breadcrumb: 'iPhone',
            details: [
                { icon: 'Camera', title: 'Pro Camera System', text: 'Capture stunning photos and Cinematic mode video in 4K.' },
                { icon: 'Sparkles', title: 'Dynamic Island', text: 'A magical new way to interact with your iPhone.' },
                { icon: 'Lock', title: 'Privacy Built-in', text: 'Face ID is the most secure facial authentication in a smartphone.' }
            ]
        },
        '/watch': {
            title: 'Nikkee Watch',
            description: 'The ultimate device for a healthy life.',
            breadcrumb: 'Watch',
            details: [
                { icon: 'Activity', title: 'Health Sensors', text: 'Monitor your heart rate, blood oxygen, and sleep quality.' },
                { icon: 'Bell', title: 'Workout App', text: 'Track every way you move with advanced fitness metrics.' },
                { icon: 'ShieldCheck', title: 'Safety Features', text: 'Crash Detection and Fall Detection can get you help when needed.' }
            ]
        },
        '/tv-home': {
            title: 'TV & Home',
            description: 'Seamlessly connect your home.',
            breadcrumb: 'TV & Home',
            details: [
                { icon: 'Radio', title: 'Nikkee TV 4K', text: 'The cinematic experience reimagined with 4K HDR and Dolby Atmos.' },
                { icon: 'Music', title: 'Immersive Sound', text: 'HomePod delivers high-fidelity audio that fills the whole room.' },
                { icon: 'Shield', title: 'HomeKit Security', text: 'Control your home devices with privacy and end-to-end encryption.' }
            ]
        },
        '/nikkeetag': {
            title: 'NikkeeTag',
            description: 'Lose your knack for losing things.',
            breadcrumb: 'NikkeeTag',
            details: [
                { icon: 'Search', title: 'Precision Finding', text: 'See the distance and direction to your lost items with Ultra Wideband.' },
                { icon: 'Bell', title: 'Built-in Speaker', text: 'Play a sound to find your keys, wallet, or backpack.' },
                { icon: 'Lock', title: 'Privacy Protected', text: 'Only you can see where your NikkeeTag is, and your data is encrypted.' }
            ]
        },
        '/services/music': {
            title: 'Nikkee Music',
            description: 'Over 100 million songs. All ad-free.',
            breadcrumb: 'Services',
            details: [
                { icon: 'Music', title: 'Spatial Audio', text: 'Experience sound all around you with Dolby Atmos on NikkeePods.' },
                { icon: 'Download', title: 'Offline Listening', text: 'Download your favorite tracks and listen anywhere, anytime.' },
                { icon: 'Radio', title: 'Nikkee Radio', text: 'Live global streams and exclusive shows from your favorite artists.' }
            ]
        },
        '/services/tv': {
            title: 'Nikkee TV+',
            description: 'Original stories from the most creative minds.',
            breadcrumb: 'Services',
            details: [
                { icon: 'FileText', title: 'Exclusive Originals', text: 'Award-winning series, compelling dramas, and hit movies.' },
                { icon: 'Users', title: 'Family Sharing', text: 'Share your subscription with up to five family members.' },
                { icon: 'Smartphone', title: 'Nikkee Originals', text: 'Watch on all your favorite devices with the Nikkee TV app.' }
            ]
        },
        '/services/fitness': {
            title: 'Nikkee Fitness+',
            description: 'Fitness for everyone, everywhere.',
            breadcrumb: 'Services',
            details: [
                { icon: 'Activity', title: 'Real-time Metrics', text: 'See your heart rate and calories burned on the screen.' },
                { icon: 'Zap', title: '12 Workout Types', text: 'From HIIT and Yoga to Strength and Meditations.' },
                { icon: 'Music', title: 'Curated Playlists', text: 'Stay motivated with music from world-class artists.' }
            ]
        },
        '/services/news': {
            title: 'Nikkee News+',
            description: 'Hundreds of magazines and leading newspapers.',
            breadcrumb: 'Services',
            details: [
                { icon: 'FileText', title: 'Premium Content', text: 'Full access to top publications with one subscription.' },
                { icon: 'Radio', title: 'Audio Stories', text: 'Listen to professionally narrated articles while on the go.' },
                { icon: 'Shield', title: 'Offline Access', text: 'Download your favorite magazines to read without an internet link.' }
            ]
        },
        '/services/arcade': {
            title: 'Nikkee Arcade',
            description: '200+ incredibly fun games. No ads. No in-app purchases.',
            breadcrumb: 'Services',
            details: [
                { icon: 'Zap', title: 'Unlimited Access', text: 'Play all games across your iPhone, iPad, Mac, and Nikkee TV.' },
                { icon: 'Download', title: 'Offline Play', text: 'Download any game and play it anywhere, even without Wi-Fi.' },
                { icon: 'Users', title: 'Family Sharing', text: 'A single subscription includes access for up to six people.' }
            ]
        },
        '/services/icloud': {
            title: 'iCloud',
            description: 'The best place for all your photos, files, and more.',
            breadcrumb: 'Services',
            details: [
                { icon: 'Lock', title: 'Secure Backup', text: 'Your device data is automatically backed up and protected.' },
                { icon: 'Smartphone', title: 'Automatic Syncing', text: 'Access your photos and notes from any of your Nikkee devices.' },
                { icon: 'Shield', title: 'iCloud+ Privacy', text: 'Includes Private Relay, Hide My Email, and HomeKit Secure Video.' }
            ]
        },
        '/services/one': {
            title: 'Nikkee One',
            description: 'Bundle up to six Nikkee services. One simple subscription.',
            breadcrumb: 'Services',
            details: [
                { icon: 'Sparkles', title: 'Unbeatable Value', text: 'Save more by bundling your favorite services together.' },
                { icon: 'Users', title: 'Perfect for Families', text: 'Share every service with everyone in your family group.' },
                { icon: 'ShieldCheck', title: 'Simple Management', text: 'One monthly invoice covers all your Nikkee entertainment.' }
            ]
        },
        '/retail': {
            title: 'Nikkee Store',
            description: 'Find a store and experience the magic.',
            breadcrumb: 'Retail',
            details: [
                { icon: 'ShoppingBag', title: 'Personalized Support', text: 'Our team is here to help you choose the right devices.' },
                { icon: 'Zap', title: 'Instant Pickup', text: 'Order online and pick up at your local store today.' },
                { icon: 'Handshake', title: 'In-Store Demos', text: 'Try out the latest Nikkee products before you buy.' }
            ]
        },
        '/retail/genius-bar': {
            title: 'Genius Bar',
            description: 'Expert support for the products you love.',
            breadcrumb: 'Retail',
            details: [
                { icon: 'ShieldCheck', title: 'Hardware Repair', text: 'Certified repairs using genuine Nikkee parts.' },
                { icon: 'Handshake', title: 'Troubleshooting', text: 'Get help with software, setups, and more from our experts.' },
                { icon: 'Users', title: 'One-on-One', text: 'Book an appointment for personalized technical support.' }
            ]
        },
        '/values/privacy': {
            title: 'Privacy',
            description: 'Safety on your terms. Built into everything we make.',
            breadcrumb: 'Nikkee Values',
            details: [
                { icon: 'Lock', title: 'On-Device Processing', text: 'We process your data locally whenever possible to keep it off our servers.' },
                { icon: 'Shield', title: 'Tracking Control', text: 'App Tracking Transparency gives you the choice to be tracked or not.' },
                { icon: 'Eye', title: 'End-to-End Encryption', text: 'Your messages and sensitive health data are only for your eyes.' }
            ]
        },
        '/values/environment': {
            title: 'Environment',
            description: 'A plan as innovative as our products.',
            breadcrumb: 'Nikkee Values',
            details: [
                { icon: 'Leaf', title: 'Carbon Neutral by 2030', text: 'We are committed to making every Nikkee product carbon neutral by the end of the decade.' },
                { icon: 'Recycle', title: 'Recycled Materials', text: 'Using 100% recycled gold, tin, and rare earth elements in our hardware.' },
                { icon: 'Sun', title: 'Clean Energy', text: 'Powering our global operations and supply chain with 100% renewable electricity.' }
            ]
        },
        '/values/accessibility': {
            title: 'Accessibility',
            description: 'Technology is most powerful when it empowers everyone.',
            breadcrumb: 'Nikkee Values',
            details: [
                { icon: 'Eye', title: 'Vision Support', text: 'VoiceOver, Zoom, and Magnifier for people who are blind or low vision.' },
                { icon: 'Radio', title: 'Hearing Tools', text: 'Live Listen and Sound Recognition to help you stay aware.' },
                { icon: 'Users', title: 'Mobility Features', text: 'Voice Control and AssistiveTouch to use your devices your way.' }
            ]
        },
        '/about/leadership': {
            title: 'Nikkee Leadership',
            description: 'The people behind our innovations.',
            breadcrumb: 'About Nikkee',
            details: [
                { icon: 'Users', title: 'Visionary Strategy', text: 'Our leaders guide the intersection of technology and humanity.' },
                { icon: 'Palette', title: 'Design Excellence', text: 'Meet the team that obsesses over every pixel and curve.' },
                { icon: 'Scale', title: 'Ethics & Integrity', text: 'Built on a foundation of doing the right thing for our customers.' }
            ]
        },
        '/about/careers': {
            title: 'Careers at Nikkee',
            description: 'Be part of something big. Join us.',
            breadcrumb: 'About Nikkee',
            details: [
                { icon: 'Zap', title: 'Innovation Culture', text: 'Work on products that change how the world communicates.' },
                { icon: 'Handshake', title: 'Global Impact', text: 'Collaborate with teams across the globe on meaningful projects.' },
                { icon: 'Users', title: 'Inclusion & Belonging', text: 'We believe diversity of thought leads to the best innovations.' }
            ]
        },
        '/legal/privacy': {
            title: 'Privacy Policy',
            description: 'Transparency and control for your data.',
            breadcrumb: 'Legal',
            details: [
                { icon: 'FileText', title: 'Data Rights', text: 'Understand how you can access, delete, and control your personal info.' },
                { icon: 'Handshake', title: 'Our Commitment', text: 'We never sell your data to advertisers or third parties.' },
                { icon: 'Bell', title: 'Safety Updates', text: 'Regularly updated policies to reflect our evolving security standards.' }
            ]
        }
    };

    // Fallback for any other slug defined in the footer
    const content = contentMap[fullPath] || {
        title: slug[slug.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        description: 'Explore our latest innovations and discover how we are changing the world.',
        breadcrumb: slug[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    };

    return <CatchAll title={content.title} description={content.description} breadcrumb={content.breadcrumb} details={content.details} />;
}

// Pre-generate some common paths for better performance
export function generateStaticParams() {
    return [
        { slug: ['store'] },
        { slug: ['mac'] },
        { slug: ['ipad'] },
        { slug: ['iphone'] },
        { slug: ['watch'] },
        { slug: ['services', 'music'] },
        { slug: ['services', 'tv'] },
        { slug: ['values', 'privacy'] },
        { slug: ['values', 'environment'] },
        { slug: ['about', 'careers'] }
    ];
}
