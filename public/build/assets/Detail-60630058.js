import{q as c,a as e,j as t,y as p}from"./app-d8f1c9e8.js";import{B as b}from"./mode-toggle-3dea8779.js";import{D as h}from"./DashboardLayoutAdmin-3a6f81e1.js";import{a as x}from"./Combination-b784b8dc.js";import"./createLucideIcon-719c414c.js";import"./LoadingHeader-55dd4285.js";import"./menu-72884eaf.js";import"./logotasnim-66984677.js";import"./user-round-cog-3813191d.js";import"./chevron-up-10b6c2a7.js";const B=()=>{const{cardPayment:d,bulanList:o,flash:k,user:l}=c().props,s=d.price,i=Object.entries(o).filter(([r,a])=>a===!1).map(([r])=>r).join(", ");console.log(d);const n=()=>{const r={phone:l.profile.phone,unpaidMonths:i,cardPayment:d.name,user:l.name};p.post("/wa-gateway",r)};return e(h,{children:t("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-10",children:[t("div",{className:"border-b border-stroke py-4 px-7 dark:border-strokedark flex justify-between items-center",children:[e("h3",{className:"font-medium text-black dark:text-white",children:"Detail Pembayaran"}),e("div",{children:e(b,{onClick:()=>n(),children:"Kirim"})})]}),e("div",{className:"max-w-full overflow-x-auto",children:t("table",{className:"w-full table-auto",children:[e("thead",{className:"table-header-group",children:t("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Bulan"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Status"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Nominal"})]})}),e("tbody",{children:Object.entries(o).map(([r,a],m)=>t("tr",{className:"border-b border-stroke dark:border-strokedark",children:[e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:m+1}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:r}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:e("div",{className:` ${a?"bg-green-500":"bg-red-500"} w-[80px] px-2 py-1 text-center rounded-lg text-white`,children:a?"Paid":"Unpaid"})}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11",children:x(s)})]},r))})]})})]})})};export{B as default};
