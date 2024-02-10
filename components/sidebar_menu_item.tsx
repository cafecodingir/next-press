import type { ReactElement } from 'react'
export default function SidbarMenuItem(props: { title: string }) {
  return (
    <li>
      <a className="bg-gray-50 flex h-12 items-center">{props.title}</a>
    </li>
  )
}
