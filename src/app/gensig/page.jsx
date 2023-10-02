"use client";

import Image from 'next/image'
import SignatureGenerator from '@/components/SignatureGenerator'

export default function GenSig() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <SignatureGenerator />
      </div>
    </main>
  )
}
