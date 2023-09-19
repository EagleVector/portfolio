import React from 'react'

type SctionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({
  children
} : SctionHeadingProps) {
  return <h2 className='text-3xl font-medium capitalize mb-8'>{children}</h2>
}
