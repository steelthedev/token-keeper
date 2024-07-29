import { ref } from "vue";

const useUtils = () =>{
    const isEdit = ref(false)
    const isAdd = ref(false)


    return{
        isAdd,
        isEdit
    }
};

export default useUtils;