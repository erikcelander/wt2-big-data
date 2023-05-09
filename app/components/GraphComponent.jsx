'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import usePlayers from '../hooks/usePlayers'

const DynamicScatterGraph = dynamic(() => import('./ScatterGraph'), { ssr: false })

export default function GraphComponent() {
  const { players, loading } = usePlayers()

  if (loading) {
    return <div>Loading...</div>
  }

  return <DynamicScatterGraph players={players} />
}
