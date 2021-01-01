import { useContext, createContext,FC } from "react";

interface IContextProps  { 
  isAuthenticated: boolean,
  isAuthenticating: boolean,
  //userHasAuthenticated:React.Dispatch<React.SetStateAction<boolean>>
  //userHasAuthenticated: ({userHasAuthenticated}:{userHasAuthenticated:boolean}) => void;
 userHasAuthenticated:any 
};
export const AppContext = createContext<Partial<IContextProps>>({})

export function useAppContext() {
  return useContext(AppContext);
}