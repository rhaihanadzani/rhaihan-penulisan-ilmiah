import{q as l,a as r,j as a,y as i}from"./app-d8f1c9e8.js";import{D as s}from"./DashboardLayoutAdmin-3a6f81e1.js";import"./LoadingHeader-55dd4285.js";import"./createLucideIcon-719c414c.js";import"./mode-toggle-3dea8779.js";import"./Combination-b784b8dc.js";import"./menu-72884eaf.js";import"./logotasnim-66984677.js";import"./user-round-cog-3813191d.js";import"./chevron-up-10b6c2a7.js";const N=()=>{const{users:d,holiday:o}=l().props;return r(s,{children:r("div",{className:"mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-background sm:px-7 xl:pb-1",children:r("div",{className:"max-w-full overflow-x-auto",children:a("table",{className:"w-full table-auto",children:[r("thead",{className:"table-header-group",children:a("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Nama Santri"}),r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Kelas"})]})}),r("thead",{children:d.map((e,t)=>a("tr",{className:"border-b border-stroke dark:border-strokedark cursor-pointer hover:bg-boxdark hover:text-white dark:hover:bg-white dark:hover:text-boxdark transition-all duration-150",onClick:()=>i.visit(`/admin-report-view/${o.uuid}/${e.uuid}`),children:[r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:t+1}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.name}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.kelas.nama})]},t))})]})})})})};export{N as default};