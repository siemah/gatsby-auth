/**
 * Implement Gatsby's Browser APIs in this file.
 * @author siemah
 * @version 1.0.0
 * @see: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react');
const { Splash } = require('./src/components/Splash');
const { Provider, authState } = require('./src/store/context/auth');
const { useState, } = React;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(authState);

  return (
    <Provider value={{
      ...auth,
      setAuth,
    }}>
      <Splash>{ children }</Splash>
    </Provider>
  )
}

// wrape a whole page by a Splash screen
/*exports.wrapPageElement = ({ element, props }) => {
  return <Splash {...props}>{element}</Splash>
}*/
// wrap a whole app by a provider to use global state
// in this case we use React context api rather than redux/mobx ..
exports.wrapRootElement = ({element}) => {
  // const [auth, setAuth] = useState(authState);
  return <AuthProvider>{ element }</AuthProvider>
}
