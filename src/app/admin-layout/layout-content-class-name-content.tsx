import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const LayoutContentClassNameContent = createContext<{
  className: string
  setClassName: React.Dispatch<React.SetStateAction<string>>
}>({ className: '', setClassName: () => {} })

export const useLayoutContentClassNameContent = () =>
  useContext(LayoutContentClassNameContent)

export const useSetLayoutContentClassName = (className: string) => {
  const { setClassName } = useLayoutContentClassNameContent()

  useEffect(() => {
    setClassName(className)
    return () => {
      setClassName('')
    }
  }, [className, setClassName])
}

export const useLayoutContentFlex = () => {
  useSetLayoutContentClassName('admin-layout_content-flex-screen')
}

export const LayoutContentClassNameContentProvider: React.FC<React.PropsWithChildren> =
  memo(({ children }) => {
    const [className, setClassName] = useState('')
    const value = useMemo(
      () => ({
        className,
        setClassName,
      }),
      [className],
    )

    return (
      <LayoutContentClassNameContent.Provider value={value}>
        {children}
      </LayoutContentClassNameContent.Provider>
    )
  })
