import{r as d,a as e,j as a,y as p}from"./app-d02d4b94.js";import{B as k}from"./logotasnim-8e3af0cd.js";import{D as x}from"./DashboardLayoutUser-7834eac3.js";import{f}from"./Combination-7d7da3cb.js";import"./createLucideIcon-60771fa7.js";import"./LoadingHeader-375e568a.js";import"./menu-97f64f14.js";import"./chevron-up-9b3fd95e.js";const S=t=>{const[l,n]=d.useState(""),[i,s]=d.useState(""),[o,c]=d.useState(""),[m,h]=d.useState(!1),u=r=>{if(r.preventDefault(),l===""||i===""||o===""){h(!0);return}p.visit(`/santri-detail-absensi/${l}/${i}/${o}`)};return e(x,{children:a("div",{className:"space-y-10",children:[a("h1",{className:"text-2xl font-bold text-primary",children:["Absensi - ",t.auth.user.name]}),a("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background pb-2.5",children:[e("div",{className:"border-b border-stroke py-4 px-7 dark:border-strokedark",children:e("h3",{className:"font-medium text-black dark:text-white",children:"Lihat Absensi"})}),a("form",{onSubmit:u,className:"px-7 py-5",children:[a("div",{className:"flex gap-5",children:[a("div",{children:[e("label",{htmlFor:"pelajaran",className:"mb-3 block text-black dark:text-white",children:"Mata Pelajaran"}),e("div",{className:"bg-white dark:bg-form-input shadow-lg",children:a("select",{id:"pelajaran",value:l,onChange:r=>n(r.target.value),className:"w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",disabled:!0,children:"Pilih Mata Pelajaran"}),t.pelajarans.map(r=>e("option",{value:r.uuid,children:r.nama},r.uuid))]})})]}),a("div",{children:[e("label",{htmlFor:"bulan",className:"mb-3 block text-black dark:text-white",children:"Bulan"}),e("div",{className:"bg-white dark:bg-form-input shadow-lg",children:a("select",{id:"bulan",value:i,onChange:r=>s(r.target.value),className:"w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",disabled:!0,children:"Pilih Bulan"}),t.bulans.map(r=>e("option",{value:r.uuid,children:r.nama},r.uuid))]})})]}),a("div",{children:[e("label",{htmlFor:"tahun",className:"mb-3 block text-black dark:text-white",children:"Tahun"}),e("div",{className:"bg-white dark:bg-form-input shadow-lg",children:a("select",{id:"tahun",value:o,onChange:r=>c(r.target.value),className:"w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[e("option",{value:"",disabled:!0,children:"Pilih Tahun"}),t.tahuns.map(r=>e("option",{value:r.uuid,children:r.nama},r.uuid))]})})]})]}),e("div",{className:"w-full mt-5",children:e(k,{className:"inline-flex items-center justify-center rounded-md  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",type:"submit",children:"Lihat Absen"})}),m&&e("p",{className:"text-red-500",children:"Isi semua Kolom"})]})]}),e("div",{children:a("div",{className:"rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background pb-2.5",children:[e("div",{className:"border-b border-stroke py-4 px-7 dark:border-strokedark",children:e("h3",{className:"font-medium text-black dark:text-white",children:"List Kehadiran Terbaru"})}),e("div",{className:"max-w-full overflow-x-auto",children:a("table",{className:"w-full table-auto",children:[e("thead",{className:"table-header-group ",children:a("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Tanggal"}),e("th",{className:"min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11",children:"Pelajaran"}),e("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Status Keterangan"}),e("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Dari Surah - Ayat"}),e("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Ke Surah - Ayat"}),e("th",{className:"min-w-[200px] py-4 px-4 font-medium text-black dark:text-white",children:"Juz"})]})}),e("tbody",{children:t.absen_user.data.map((r,b)=>a("tr",{className:"border-b border-stroke dark:border-strokedark",children:[e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:f(r.created_at)}),e("td",{className:"border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11",children:r.pelajaran.nama}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e("div",{className:`${r.keterangan==="hadir"?"bg-green-500":r.keterangan==="izin"?"bg-yellow-500":"bg-red-500"} text-white px-2 rounded-sm w-[70px] h-[30px] flex items-center justify-center`,children:e("h2",{className:"capitalize",children:r.keterangan})})}),e("td",{className:"border-b border-[#eee] py-5 px-4  dark:border-strokedark ",children:r.from_surah&&r.from_ayat?r.from_surah+" - "+r.from_ayat:"-"}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark ",children:r.from_surah&&r.from_ayat?r.to_surah+" - "+r.to_ayat:"-"}),e("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark ",children:r.juz&&r.juz?" Juz "+r.juz:"-"})]},b))})]})})]})})]})})};export{S as default};