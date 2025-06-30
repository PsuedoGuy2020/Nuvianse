"use client"

import { useEmailPopup } from '@/hooks/use-email-popup'
import { EmailPopup } from '@/components/ui/email-popup'

interface PopupTriggerProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function PopupTrigger({ 
  children, 
  title, 
  description, 
  className 
}: PopupTriggerProps) {
  const { isOpen, openPopup, closePopup } = useEmailPopup()

  return (
    <>
      <div onClick={openPopup} className={className}>
        {children}
      </div>
      <EmailPopup 
        isOpen={isOpen} 
        onClose={closePopup}
        title={title}
        description={description}
      />
    </>
  )
}