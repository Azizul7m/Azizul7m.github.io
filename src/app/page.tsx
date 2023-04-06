import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <LargeHeading>
                Next 13
            </LargeHeading>
            <Paragraph>
                Nisl, condimentum id venenatis a, condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis!
            </Paragraph>
        </main>
    )
}
