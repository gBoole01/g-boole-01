import { createContext, ReactNode, useContext, useState } from 'react'

type ContactModalProviderProps = {
  children: ReactNode
}

type ContactModalContextProps = {
  contactModalVisible: boolean
  contactModalShowHandler: () => void
  contactModalCloseHandler: () => void
}

const ContactModalContext = createContext<ContactModalContextProps>(
  {} as ContactModalContextProps,
)

export function useContactModal() {
  return useContext(ContactModalContext)
}

export function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [contactModalVisible, setContactModalVisible] = useState(false)

  const contactModalShowHandler = () => setContactModalVisible(true)
  const contactModalCloseHandler = () => {
    setContactModalVisible(false)
  }

  return (
    <ContactModalContext.Provider
      value={{
        contactModalVisible,
        contactModalCloseHandler,
        contactModalShowHandler,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  )
}
