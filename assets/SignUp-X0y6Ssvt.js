import{u as b,a as C,j as e,L as P,Q as U}from"./index-vrnzen9p.js";import{z as t,u as A,I as i,B as L,t as k,L as R}from"./logo-QtqiQmPR.js";import{u as g,E as j,a as w}from"./useShowPassword-068zlSLN.js";import{v as F}from"./v4-yQnnJER4.js";const T=t.object({name:t.string().min(1,"Campo obrigatório"),email:t.string().email("E-mail inválido").min(1,"Campo obrigatório"),password:t.string().min(8,"A senha deve ter pelo menos 8 caracteres").regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),"A senha deve conter pelo menos 1 caractere especial").regex(new RegExp(".*\\d.*"),"A senha deve conter pelo menos 1 caractere numérico").regex(new RegExp(".*[a-zA-Z0-9].*"),"A senha deve conter pelo menos 1 caractere alfanumérico"),confirmPassword:t.string().min(8,"A senha deve ter pelo menos 8 caracteres")}).refine(({password:r,confirmPassword:o})=>r===o,{message:"As senhas não coincidem",path:["confirmPassword"]}),z=r=>{const[o,n]=b("users",[]),c=({name:a,password:m,email:s})=>{const d={id:F(),name:a,email:s,password:m};if(o.find(l=>l.email===s))throw new Error("O Usuário já existe");n(l=>[...l,d])};return{data:r?o.find(a=>a.id===r):o,createUser:c}},B={name:"",email:"",password:"",confirmPassword:""},I=()=>{var p,f,h,u;const[r,o]=g(!1),[n,c]=g(!1),{register:a,handleSubmit:m,formState:{errors:s}}=A({resolver:k(T),criteriaMode:"all",mode:"all",defaultValues:B}),{createUser:d}=z(),x=C(),l=async({email:N,password:v,name:y})=>{try{await d({email:N,name:y,password:v}),x("/login")}catch(E){const{message:S}=E;U.error(S)}};return e.jsxs("form",{onSubmit:m(l),className:"flex flex-col justify-start gap-16",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("label",{className:"text-primary",children:"Seu Nome completo: *"}),e.jsx(i,{...a("name"),className:"w-full",type:"text",error:!!s.name,helperText:(p=s==null?void 0:s.name)==null?void 0:p.message,placeholder:"Ex: Rodrigo Limões da Silva"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("label",{className:"text-primary",children:"E-mail: *"}),e.jsx(i,{...a("email"),className:"w-full",type:"email",error:!!s.email,helperText:(f=s==null?void 0:s.email)==null?void 0:f.message,placeholder:"Ex: rodrigo@gmail.com"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("label",{className:"text-primary",children:"Senha: *"}),e.jsx(i,{...a("password"),className:"w-full",type:r?"text":"password",error:!!s.password,helperText:(h=s==null?void 0:s.password)==null?void 0:h.message,endAdornment:e.jsx("div",{className:"cursor-pointer text-secondary",onClick:o,children:r?e.jsx(j,{}):e.jsx(w,{})}),placeholder:"Ex: ********"})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("label",{className:"text-primary",children:"Confirme sua senha: *"}),e.jsx(i,{...a("confirmPassword"),className:"w-full",type:n?"text":"password",error:!!s.confirmPassword,helperText:(u=s==null?void 0:s.confirmPassword)==null?void 0:u.message,placeholder:"Ex: ********",endAdornment:e.jsx("div",{className:"cursor-pointer text-secondary",onClick:c,children:n?e.jsx(j,{}):e.jsx(w,{})})})]}),e.jsx("div",{children:e.jsxs("span",{className:"float-right text-sm",children:["Já possui conta?"," ",e.jsx(P,{to:"/login",className:"text-primary text-sm",children:"Fazer o Login"})]})}),e.jsx("div",{className:"flex justify-center m-t-12",children:e.jsx(L,{type:"submit",variant:"contained",color:"success",children:"Criar conta"})})]})},Q=()=>e.jsx("main",{className:"w-screen h-screen flex justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-32 w-384 p-16",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{className:"w-240",src:R,alt:"JusCash Logo"})}),e.jsx(I,{})]})});export{Q as default};