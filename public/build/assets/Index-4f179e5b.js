import{q as u,r as o,a as e,j as a,y as x}from"./app-d02d4b94.js";import{I as m}from"./InputLabel-b6367408.js";import{D as h}from"./DashboardLayoutAdmin-f3e68157.js";import k from"./TableCardPayment-ef039283.js";import"./LoadingHeader-375e568a.js";import"./createLucideIcon-60771fa7.js";import"./logotasnim-8e3af0cd.js";import"./Combination-7d7da3cb.js";import"./menu-97f64f14.js";import"./user-round-cog-95345b0d.js";import"./chevron-up-9b3fd95e.js";const A=()=>{const{errors:t,cardPayments:d}=u().props,[n,l]=o.useState(""),[i,p]=o.useState(""),[c,s]=o.useState(!1);return console.log(d),e(h,{children:a("div",{children:[a("form",{onSubmit:r=>{r.preventDefault(),s(!0);const b={name:n,price:i};x.post("/card-payment-store",b,{onSuccess:()=>{l(""),p(""),s(!1)},onError:()=>{s(!1)}})},className:"rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-[95%] mx-auto",children:[e("div",{className:"border-b border-stroke py-3 px-5 dark:border-strokedark",children:e("h3",{className:"font-medium text-xl text-black dark:text-white",children:"Buat Pembayaran Santri"})}),a("div",{className:"p-6 flex items-center gap-5",children:[a("div",{className:"space-y-2 w-[70%]",children:[e(m,{value:"Nama Pembayaran"}),e("input",{onChange:r=>l(r.target.value),type:"text",value:n,placeholder:"Nama Pembayaran",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"}),t.name&&e("span",{className:"text-red-500",children:t.name})]}),a("div",{className:"space-y-2 w-[30%]",children:[e(m,{value:"Harga"}),a("div",{className:"relative",children:[e("input",{onChange:r=>p(r.target.value),type:"number",value:i,placeholder:"Harga",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white pl-10",style:{WebkitAppearance:"none",MozAppearance:"textfield"}}),e("span",{className:"absolute left-4 top-[12px]",children:"Rp."})]}),t.price&&e("span",{className:"text-red-500",children:t.price})]})]}),e("div",{className:"flex items-center pt-[22px]",children:e("button",{disabled:c,className:"rounded bg-primary text-white px-4 py-2",children:c?"Loading...":"Submit"})})]}),e("div",{children:e(k,{cardPayments:d})})]})})};export{A as default};
