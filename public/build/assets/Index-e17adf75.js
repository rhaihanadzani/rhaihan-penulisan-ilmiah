import{q as l,a as e,j as r,y as s}from"./app-d02d4b94.js";import{D as o}from"./DashboardLayoutUser-7834eac3.js";import"./LoadingHeader-375e568a.js";import"./createLucideIcon-60771fa7.js";import"./logotasnim-8e3af0cd.js";import"./Combination-7d7da3cb.js";import"./menu-97f64f14.js";import"./chevron-up-9b3fd95e.js";const k=()=>{const{cardPayments:d}=l().props;return e(o,{children:e("div",{children:r("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background pb-2.5",children:[e("div",{className:"border-b border-stroke py-4 px-7 dark:border-strokedark",children:e("h3",{className:"font-medium text-black dark:text-white",children:"List Pembayaran"})}),e("div",{className:"max-w-full overflow-x-auto",children:r("table",{className:"w-full table-auto",children:[e("thead",{className:"table-header-group",children:r("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),e("th",{className:"min-w-[280px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Pembayaran"}),e("th",{className:"min-w-[100px] py-4  font-medium text-black dark:text-white ",children:"Status"})]})}),e("tbody",{children:d.map((t,a)=>r("tr",{onClick:()=>{s.visit(`/santri-payment-view/${t.uuid}`)},className:"border-b border-stroke dark:border-strokedark cursor-pointer",children:[e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:a+1}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:t.name}),e("td",{children:t.all_paid?e("div",{className:"bg-green-500 w-[120px] px-2 py-1 text-center rounded-lg text-white text-sm",children:"Lunas"}):e("div",{className:"bg-red-500 w-[120px] px-2 py-1 text-center rounded-lg text-white text-sm",children:"Belum Lunas"})})]},a))})]})})]})})})};export{k as default};
