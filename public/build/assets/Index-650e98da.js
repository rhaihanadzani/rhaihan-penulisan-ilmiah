import{q as l,a as r,j as a,y as s}from"./app-b8b7886a.js";import{D as i}from"./DashboardLayoutAdmin-9f49c603.js";import"./logotasnim-146e1170.js";import"./createLucideIcon-41b961f0.js";import"./mode-toggle-2bb5a037.js";import"./Combination-29ae091c.js";import"./menu-c581b3d2.js";import"./user-round-cog-1b9c012e.js";import"./chevron-up-d1d8c821.js";const w=()=>{const{users:d,holiday:o}=l().props;return r(i,{children:r("div",{className:"mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1",children:r("div",{className:"max-w-full overflow-x-auto",children:a("table",{className:"w-full table-auto",children:[r("thead",{className:"table-header-group",children:a("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Nama Santri"}),r("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Kelas"})]})}),r("thead",{children:d.map((e,t)=>a("tr",{className:"border-b border-stroke dark:border-strokedark cursor-pointer hover:bg-boxdark hover:text-white dark:hover:bg-white dark:hover:text-boxdark transition-all duration-150",onClick:()=>s.visit(`/admin-report-view/${o.uuid}/${e.uuid}`),children:[r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:t+1}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.name}),r("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e.kelas.nama})]},t))})]})})})})};export{w as default};