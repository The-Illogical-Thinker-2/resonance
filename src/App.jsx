import { createContext, useState } from "react"
import { Reev2 } from "./Reev2"

export const MobileContext = createContext();

function App(){
  return <div>
    <MobileProvider>
      <Reev2/>
    </MobileProvider>
  </div>
}

function MobileProvider ({ children }){

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  return <MobileContext.Provider value={{isMobile, setIsMobile}}>
    {children}
  </MobileContext.Provider>
}

export default App