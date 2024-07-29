<template>
<section class="dashboard">
  <!-- Content wrapper -->
  <div class="grid grid-cols-10 content-wrapper">
    <!-- Side bar  -->
    <div class="side col-span-2 border-r h-lvh border-gray-300">
      <div class="flex justify-between items-center  border-b border-gray-100">
        <h1 class="text-md p-4 text-white">Saved Tokens</h1>
        <svg class="w-7 mr-3 cursor-pointer" onclick="my_modal_1.showModal()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

      </div>
     
      <div class="item p-3 border rounded m-2 text-white cursor-pointer">
        <h4 class=" hover:text-gray-500 transition ease-out duration-150 border-gray-400">Github Token</h4>
      </div>
      <div class="item p-3 border rounded m-2 text-white cursor-pointer">
        <h4 class=" hover:text-gray-500 transition ease-out duration-150 border-gray-400">Access Token Winwise</h4>
      </div>
    </div>
    <!-- end of sidebar -->

    <!-- content -->
     <main class="col-span-8">
        <header class="border-b border-gray-100 py-4">
          <h2 class="text-md ml-3 text-white">Github Token</h2>
        </header>

        <div class="item p-4 m-3 rounded border flex justify-between">
            <h3>Value: ghg34vfxe33jiomndhdhd9999</h3>
            <div class=" flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
            </svg>

            <svg onclick="my_modal_2.showModal()"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-3 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </div>
        </div>
        <!-- AddToken component modal -->
         <!-- Open the modal using ID.showModal() method -->
 
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box p-3">
          <h3 class="text-lg font-bold">Add New Token</h3>
         
            <form class="m-2" >
            <label class="input input-bordered flex items-center gap-2 mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" class="grow" placeholder="Title" />
            </label>
            <label class="input input-bordered flex items-center gap-2 mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd" />
              </svg>
              <input type="text" class="grow" placeholder="value" />
            </label>
              <!-- if there is a button in form, it will close the modal -->
               <div class="flex justify-between"> 
                <button class="btn"> Submit</button>
               </div>  
            </form>
          </div>
      </dialog>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box p-3">
          <h3 class="text-lg font-bold">Edit Token</h3>
         
            <form class="m-2" >
            <label class="input input-bordered flex items-center gap-2 mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" class="grow" placeholder="Title" />
            </label>
            <label class="input input-bordered flex items-center gap-2 mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd" />
              </svg>
              <input type="text" class="grow" placeholder="value" />
            </label>
              <!-- if there is a button in form, it will close the modal -->
               <div class="flex justify-between"> 
                <button class="btn"> Submit</button>
               </div>  
            </form>
          </div>
      </dialog>
      <!-- end  -->
     </main>
  </div>
  <!-- End content wrapper -->
</section>   
</template>
<script>
export default {

  setup() {
    
  },
}
</script>
  