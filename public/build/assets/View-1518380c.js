import{q as o,j as a,a as r,y as s}from"./app-b8b7886a.js";import{D as i}from"./DashboardLayoutUser-ac2f3939.js";import"./logotasnim-146e1170.js";import"./createLucideIcon-41b961f0.js";import"./mode-toggle-2bb5a037.js";import"./Combination-29ae091c.js";import"./menu-c581b3d2.js";import"./chevron-up-d1d8c821.js";const N=()=>{const{auth:p,holidays:t}=o().props,d=e=>{s.visit(`/santri-view-report/${e}`)};return a(i,{children:[r("h1",{className:"text-3xl font-bold",children:"Lihat Laporan Liburan"}),a("div",{className:"mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1",children:[r("div",{className:"max-w-full overflow-x-auto",children:a("table",{className:"w-full table-auto",children:[r("thead",{className:"table-header-group",children:a("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[r("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),r("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Liburan"}),r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Selesai Liburan"})]})}),r("tbody",{children:t.map((e,l)=>a("tr",{onClick:()=>d(e.uuid),className:"border-b border-stroke dark:border-strokedark cursor-pointer",children:[r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:l+1}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.name}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.last_holiday})]},e.id))})]})}),r("p",{className:"text-red-700 mt-10",children:"* pilih liburan untuk melihat laporan"})]})]})};export{N as default};
