import React, {useEffect, useMemo, useState} from 'react'

const ExampleChangeLanguage = () => {
  const [thai, setThai] = useState(true)
  const langs = useMemo(
    () => ({
      lang: thai ? 'ไทย' : 'English',
      flag: thai ? '🇹🇭' : '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    }),
    [thai]
  )

  const [theme, setTheme] = useState({backgroundColor: 'red'})
  useEffect(() => {
    setTheme({backgroundColor: !thai ? 'green' : 'red'})
  }, [langs])

  return (
    <>
      <div style={theme}>Language: {`${langs.flag} ${langs.lang}`}</div>
      <button onClick={() => setThai(!thai)}>Change Language</button>
    </>
  )
}

export default ExampleChangeLanguage
