import React from 'react'
import Link from 'next/link'

type PanelItemProps = {
    data: {
        icon: string,
        label: string,
        link: string
    }
}

const PanelItem: React.FC<PanelItemProps> = ({ data }) => {
    return (
        <div className='text-center p-2'>
            <Link href={data.link}>
            <span className='text-5xl'>{data.icon}</span>
            <p />
            {data.label}
            </Link>
        </div>
    )
}

export default PanelItem