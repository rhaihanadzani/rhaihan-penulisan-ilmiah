import{q as s,a as e,j as t,y as o}from"./app-d02d4b94.js";import{D as i}from"./DashboardLayoutUser-7834eac3.js";import{f as p}from"./Combination-7d7da3cb.js";import"./LoadingHeader-375e568a.js";import"./createLucideIcon-60771fa7.js";import"./logotasnim-8e3af0cd.js";import"./menu-97f64f14.js";import"./chevron-up-9b3fd95e.js";const w=()=>{const{reports:a}=s().props,d=r=>{o.visit(`/santri-detail-report/${r}`)};return e(i,{children:e("div",{className:"mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:pb-1",children:e("div",{className:"max-w-full overflow-x-auto",children:t("table",{className:"w-full table-auto",children:[e("thead",{className:"table-header-group",children:t("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"No"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Judul"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Status"}),e("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Tanggal Pembuatan"})]})}),e("tbody",{children:a.map((r,l)=>t("tr",{onClick:()=>d(r.uuid),className:"border-b border-stroke dark:border-strokedark cursor-pointer",children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:l+1}),e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:r.title}),e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:e("div",{className:`text-[14px] px-4 py-1 rounded-lg w-fit ${r.status==="Disetujui"?"bg-green-700 text-white":"bg-yellow-500 text-white"}`,children:r.status})}),e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:p(r.created_at)})]},r.id))})]})})})})};export{w as default};
