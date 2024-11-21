import{q as S,r as t,a,j as r,y as m}from"./app-d8f1c9e8.js";import{D as K}from"./Dashboard-37479b02.js";import{D as A}from"./DashboardLayoutAdmin-3a6f81e1.js";import"./LoadingHeader-55dd4285.js";import"./createLucideIcon-719c414c.js";import"./mode-toggle-3dea8779.js";import"./Combination-b784b8dc.js";import"./logotasnim-66984677.js";import"./menu-72884eaf.js";import"./user-round-cog-3813191d.js";import"./chevron-up-10b6c2a7.js";const M=i=>{const{auth:u}=S().props,[l,b]=t.useState(""),[d,h]=t.useState(""),[p,k]=t.useState(!1),[n,v]=t.useState(""),[s,f]=t.useState(""),[o,g]=t.useState(""),[c,x]=t.useState(""),[w,y]=t.useState(!1),N=e=>{if(e.preventDefault(),d===""||l===""){k(!0);return}m.visit(`/absen-tasnim/${d}/${l}`)},j=e=>{if(e.preventDefault(),s===""||n===""||o===""||c===""){y(!0);return}m.visit(`/detail-absensi/${s}/${n}/${o}/${c}`)},P=u.user.type==="Admin"?A:K;return a(P,{children:r("div",{className:"flex flex-col md:flex-row items-start gap-5",children:[r("div",{className:"rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background w-[95%] md:max-w-[40%] mx-auto p-5 space-y-5",children:[a("div",{className:"border-b border-stroke py-2 dark:border-strokedark",children:a("h3",{className:"font-medium text-black dark:text-white",children:"Buat Absensi"})}),r("form",{onSubmit:N,children:[r("div",{className:"flex gap-5",children:[r("div",{children:[a("label",{htmlFor:"pelajaran",className:"mb-3 block text-black dark:text-white",children:"Pelajaran"}),a("div",{className:"bg-white dark:bg-form-input ",children:r("select",{id:"pelajaran",value:d,onChange:e=>h(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2   outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Mata Pelajaran"}),i.pelajarans.map(e=>a("option",{value:e.uuid,className:"text-body dark:text-bodydark",children:e.nama},e.uuid))]})})]}),r("div",{children:[a("label",{htmlFor:"kelas",className:"mb-3 block text-black dark:text-white",children:"Kelas"}),a("div",{className:"bg-white dark:bg-form-input",children:r("select",{id:"kelas",value:l,onChange:e=>b(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Kelas"}),i.kelas.map(e=>a("option",{value:e.uuid,className:"text-body dark:text-bodydark",children:e.nama},e.uuid))]})})]})]}),a("div",{className:"w-full mt-5",children:a("button",{className:"inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6",type:"submit",children:"Buat Absen"})}),p&&a("p",{className:"text-red-500 mt-5 capitalize",children:"* Isi semua data"})]})]}),r("div",{className:"rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background w-[95%] md:max-w-[60%] mx-auto p-5 :space-y-5",children:[a("div",{className:"border-b border-stroke py-2 dark:border-strokedark",children:a("h3",{className:"font-medium  text-black dark:text-white",children:"Lihat Absensi"})}),r("form",{onSubmit:j,className:"space-y-5 mt-5",children:[r("div",{className:"flex gap-5",children:[r("div",{className:"w-1/2",children:[a("label",{htmlFor:"pelajaran",className:"mb-3 block text-black dark:text-white",children:"Pelajaran"}),a("div",{className:"bg-white dark:bg-form-input",children:r("select",{id:"pelajaran",value:s,onChange:e=>f(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Mata Pelajaran"}),i.pelajarans.map(e=>a("option",{value:e.uuid,children:e.nama},e.uuid))]})})]}),r("div",{className:"w-1/2",children:[a("label",{htmlFor:"kelas",className:"mb-3 block text-black dark:text-white",children:"Kelas"}),a("div",{className:"bg-white dark:bg-form-input",children:r("select",{id:"kelas",value:n,onChange:e=>v(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Kelas"}),i.kelas.map(e=>a("option",{value:e.uuid,children:e.nama},e.uuid))]})})]})]}),r("div",{className:"flex gap-5",children:[r("div",{className:"w-1/2",children:[a("label",{htmlFor:"kelas",className:"mb-3 block text-black dark:text-white",children:"Bulan"}),a("div",{className:"bg-white dark:bg-form-input",children:r("select",{id:"kelas",value:o,onChange:e=>g(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Bulan"}),i.bulan.map(e=>a("option",{value:e.uuid,children:e.nama},e.uuid))]})})]}),r("div",{className:"w-1/2",children:[a("label",{htmlFor:"kelas",className:"mb-3 block text-black dark:text-white",children:"Tahun"}),a("div",{className:"bg-white dark:bg-form-input",children:r("select",{id:"kelas",value:c,onChange:e=>x(e.target.value),className:" w-full appearance-none rounded border border-stroke bg-transparent py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",children:[a("option",{value:"",disabled:!0,children:"Pilih Tahun"}),i.tahun.map(e=>a("option",{value:e.uuid,children:e.nama},e.uuid))]})})]})]}),a("div",{className:"w-full",children:a("button",{className:"inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-5 xl:px-6",type:"submit",children:"Lihat Absen"})}),w&&a("p",{className:"text-red-500 mt-5 capitalize",children:"* Isi semua Kolom"})]})]})]})})};export{M as default};
