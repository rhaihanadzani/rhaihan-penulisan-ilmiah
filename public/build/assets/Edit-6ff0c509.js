import{q as k,r as o,a as e,j as r,y as g}from"./app-d8f1c9e8.js";import{I as s}from"./InputLabel-bafff375.js";import{B as x}from"./mode-toggle-3dea8779.js";import{D as C}from"./DashboardLayoutUser-cd3590b4.js";import{w as v,S as y}from"./sweetalert2-react-content.es-800c6d9e.js";import"./Combination-b784b8dc.js";import"./createLucideIcon-719c414c.js";import"./LoadingHeader-55dd4285.js";import"./menu-72884eaf.js";import"./logotasnim-66984677.js";import"./chevron-up-10b6c2a7.js";const B=()=>{const{report:i}=k().props,[n,u]=o.useState(i.title),[p,m]=o.useState(i.description),[l,h]=o.useState(i.murajaah),[d,b]=o.useState(null),c=v(y),f=async a=>{a.preventDefault();const t=new FormData;t.append("title",n),t.append("description",p),t.append("is_checked",l),d&&t.append("image",d),t.append("_method","PATCH"),g.post(`/santri-change-report/${i.uuid}`,t,{onSuccess:()=>{c.fire({title:"Berhasil",text:"Laporan berhasil diubah.",icon:"success"})},onError:()=>{c.fire({title:"Gagal",text:"Terjadi kesalahan saat memperbarui laporan.",icon:"error"})}})};return e(C,{children:r("div",{children:[r("h1",{className:"text-3xl font-bold",children:["Edit Report - ",i.title]}),e("form",{onSubmit:f,className:"rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-[95%] md:max-w-[70%] mx-auto mt-5",children:r("div",{className:"p-6 space-y-5",children:[r("div",{className:"space-y-2",children:[e(s,{value:"Judul"}),e("input",{onChange:a=>u(a.target.value),type:"text",value:n,placeholder:"Judul Laporan",className:"w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"})]}),r("div",{className:"space-y-2",children:[e(s,{value:"Deskripsi"}),e("textarea",{onChange:a=>m(a.target.value),type:"text",value:p,placeholder:"Ceritakan Liburan Hari Ini (Minimum 50 kata) - (Maksimum 255 kata)",className:"w-full h-[150px] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white "})]}),r("div",{className:"space-y-2",children:[e(s,{value:"Upload Bukti Laporan"}),r("div",{id:"FileUpload",className:"relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5",children:[e("input",{defaultValue:d,onChange:a=>b(a.target.files[0]),type:"file",accept:"image/*",className:"absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"}),r("div",{className:"flex flex-col items-center justify-center space-y-3",children:[e("span",{className:"flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark",children:r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z",fill:"#16A349"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z",fill:"#16A349"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z",fill:"#16A349"})]})}),r("p",{children:[e("span",{className:"text-primary",children:"Click to upload"})," ","or drag and drop"]}),e("p",{className:"mt-1.5",children:"SVG, PNG, JPG or GIF"}),e("p",{children:"(max, 800 X 800px)"})]})]})]}),e("div",{children:r("label",{htmlFor:"isMurajaah",className:"flex cursor-pointer select-none items-center",children:[r("div",{className:"relative",children:[e("input",{type:"checkbox",id:"isMurajaah",className:"sr-only",onChange:()=>{h(!l)}}),e("div",{className:`mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke ${l&&"border-primary bg-gray dark:bg-transparent"}`,children:e("span",{className:`opacity-0 ${l&&"!opacity-100"}`,children:e("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z",fill:"#16A349",stroke:"#16A349",strokeWidth:"0.4"})})})})]}),"Apakah Hari Ini Murajaah?"]})}),e("div",{children:e(x,{type:"submit",className:"flex w-full justify-center rounded  p-3 font-medium text-gray hover:bg-opacity-90",children:"Edit Laporan"})})]})})]})})};export{B as default};
