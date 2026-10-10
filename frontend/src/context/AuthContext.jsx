import {createContext,useContext,useEffect,useState} from 'react'; import {api} from '../services/api';
const AuthContext=createContext(null); export const useAuth=()=>useContext(AuthContext);
export function AuthProvider({children}){const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')||'null')); const [loading,setLoading]=useState(false);
 const login=async(email,password)=>{setLoading(true); const {data}=await api.post('/api/auth/login',{email,password}); localStorage.setItem('token',data.token); localStorage.setItem('user',JSON.stringify(data.user)); setUser(data.user); setLoading(false);};
 const signup=async(payload)=>{setLoading(true); const {data}=await api.post('/api/auth/signup',payload); localStorage.setItem('token',data.token); localStorage.setItem('user',JSON.stringify(data.user)); setUser(data.user); setLoading(false);};
 const logout=()=>{localStorage.clear();setUser(null)}; useEffect(()=>{api.get('/api/auth/me').then(r=>setUser(r.data.user)).catch(()=>{});},[]);
 return <AuthContext.Provider value={{user,login,signup,logout,loading}}>{children}</AuthContext.Provider>}
