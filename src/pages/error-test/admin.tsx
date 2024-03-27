import { useMemo } from 'react'

const ErrorTestAdmin = () => {
  const randomData = useMemo(() => {
    if (Math.random() > 0.5) {
      return {
        text: '显示了内容',
      }
    }
    return null
  }, [])

  return (
    <>
      <p>ErrorTestAdmin</p>
      {randomData.text}
    </>
  )
}

export default ErrorTestAdmin
