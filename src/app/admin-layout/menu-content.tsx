import React, {
  createContext,
  memo,
  useContext,
  useMemo,
  useState,
} from 'react'

export interface MenuContentState {
  openKeys: string[]
  selectedKeys: string[]
  setMenuSelect: React.Dispatch<
    React.SetStateAction<Pick<MenuContentState, 'openKeys' | 'selectedKeys'>>
  >
}

export const MenuContent = createContext<MenuContentState>({
  openKeys: [],
  selectedKeys: [],
  setMenuSelect: () => {},
})

export const useMenuContent = () => useContext(MenuContent)

export const MenuContentProvider: React.FC<React.PropsWithChildren> = memo(
  ({ children }) => {
    const [menuSelect, setMenuSelect] = useState<
      Pick<MenuContentState, 'openKeys' | 'selectedKeys'>
    >({
      openKeys: [],
      selectedKeys: [],
    })

    const value = useMemo<MenuContentState>(() => {
      return {
        ...menuSelect,
        setMenuSelect,
      }
    }, [menuSelect])

    return <MenuContent.Provider value={value}>{children}</MenuContent.Provider>
  },
)
